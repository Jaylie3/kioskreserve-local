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
  title: "Kioskreserve Local",
  description: "Offline-first bookings and queueing for clinics and government offices.",
  openGraph: {
    title: "Kioskreserve Local",
    description: "Offline-first bookings and queueing for clinics and government offices.",
    siteName: "Kioskreserve Local",
    url: "https://kioskreserve-local.vercel.app",
    images: [
      {
        url: "https://kioskreserve-local.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kioskreserve Local – Offline-first bookings and queueing for clinics and government offices.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kioskreserve Local",
    description: "Offline-first bookings and queueing for clinics and government offices.",
    images: ["https://kioskreserve-local.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
