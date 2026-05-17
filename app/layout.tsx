import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DataProvider } from "@/app/lib/DataContext";
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
  title: "AsetTrack • KoTa 302 — PT Padepokan Tujuh Sembilan (landing page success)",
  description:
    "Sistem Manajemen Inventori Perangkat Elektronik Berbasis Web — Tugas Akhir KoTa 302 PT Padepokan Tujuh Sembilan. Mengelola inventori, carbon emission tracking, dan Decision Support System.",
  keywords: ["asettrack", "tugas akhir", "kota302", "manajemen aset", "inventori", "carbon emission", "DSS", "PT Padepokan Tujuh Sembilan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
