import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// Konfigurasi Plus Jakarta Sans untuk teks isi (body)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// Konfigurasi Inter untuk judul (heading)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PRD pro",
  description: "PRD Generator bertenaga AI untuk Website & Aplikasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Memasukkan variabel font ke tag body agar bisa diakses oleh Tailwind */}
      <body
        className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
