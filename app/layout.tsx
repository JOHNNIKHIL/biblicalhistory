import "./globals.css";
import { ThemeProvider } from "../components/layout/ThemeProvider";

export const metadata = {
  title: "Biblical History — Encyclopedia, Atlas & Timeline",
  description: "A long-form Biblical History encyclopedia, atlas, timeline and study guide."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider></body></html>;
}
