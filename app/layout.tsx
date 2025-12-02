import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pemilihan SSD Terbaik dengan Metode SAW and WP (Logika Fuzzy)",
  description: "Memilih SSD terbaik dengan Metode SAW (Simple Additive Weighting) dan WP (Weighted Product) (Logika Fuzzy)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-white h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
