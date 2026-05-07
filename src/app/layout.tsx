import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./heliox.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heliox — Intelligens-lag til CRM",
  description: "Heliox samler din hårde data og de bløde signaler i ét værktøj og gør dem til konkrete handlinger direkte i jeres CRM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`h-full antialiased ${inter.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
