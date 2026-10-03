import "./globals.css";

export const metadata = {
  title: "Biblical History — The Story",
  description: "A long-form Biblical History encyclopedia and atlas."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}