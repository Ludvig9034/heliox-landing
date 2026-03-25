import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[Company Name] — AI Solutions",
  description: "Plug-and-play AI solutions for businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
