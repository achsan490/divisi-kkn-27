import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KKN Tematik 2026 - Kelompok 27 Desa Klitih (UNWAHA)",
  description: "Website Profile Cinematic Interaktif KKN Tematik 2026 Kelompok 27 Desa Klitih, Kecamatan Plandaan, Kabupaten Jombang - Universitas KH. A. Wahab Hasbullah (UNWAHA).",
  keywords: ["KKN Tematik 2026", "Desa Klitih", "Plandaan Jombang", "UNWAHA", "Kelompok 27", "Company Profile Cinematic"],
  authors: [{ name: "Divisi PDD KKN Kelompok 27 Desa Klitih 2026" }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-navy-950 text-white font-sans overflow-hidden antialiased select-none">
        {children}
      </body>
    </html>
  );
}
