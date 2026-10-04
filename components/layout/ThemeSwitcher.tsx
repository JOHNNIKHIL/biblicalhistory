"use client";

import { Monitor, Moon, Sun, BookOpen } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const options = [
    { id: "light" as const, label: "Light", icon: Sun },
    { id: "dark" as const, label: "Dark", icon: Moon },
    { id: "sepia" as const, label: "Sepia", icon: BookOpen },
  ];
  return (
    <div className="sans flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1" aria-label="Theme">
      {options.map(({ id, label, icon: Icon }) => (
        <button key={id} onClick={() => setTheme(id)} title={label} aria-label={label}
          className={`rounded-lg p-2 transition ${theme === id ? "bg-[var(--surface-3)] text-[var(--accent)]" : "text-[var(--muted)] hover:bg-[var(--surface-2)]"}`}>
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
}
