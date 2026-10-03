import "./globals.css";

export const metadata = {
  title: "The Biblical World — Historical Master Timeline",
  description: "A source-critical historical timeline of the Biblical world."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
