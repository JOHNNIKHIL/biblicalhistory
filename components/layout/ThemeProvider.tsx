"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "sepia";
type ThemeContextValue = { theme: Theme; setTheme: (theme: Theme) => void; };

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("biblical-history-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const next = saved === "light" || saved === "dark" || saved === "sepia" ? saved : preferred;
    setThemeState(next);
    document.documentElement.dataset.theme = next;
  }, []);

  function setTheme(next: Theme) {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("biblical-history-theme", next);
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}
