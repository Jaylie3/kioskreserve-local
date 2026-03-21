import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "KioskReserve Local",
  description: "Offline-first bookings and queueing for clinics and government offices.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "KioskReserve Local",
    description: "Offline-first bookings and queueing for clinics and government offices.",
    siteName: "KioskReserve Local",
    url: "https://kioskreserve-local.vercel.app",
    images: [
      {
        url: "https://kioskreserve-local.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "KioskReserve Local – Offline-first bookings and queueing for clinics and government offices.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KioskReserve Local",
    description: "Offline-first bookings and queueing for clinics and government offices.",
    images: ["https://kioskreserve-local.vercel.app/og-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
