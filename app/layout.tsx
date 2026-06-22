import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://airalabel.com'),
  title: {
    template: '%s | Airalabel - Girls Fashion & Clothing',
    default: 'Airalabel - Trendy Girls Clothing & Fashion',
  },
  description: "Airalabel - Shop stylish girls clothing, dresses, tops, and fashion essentials. Discover trendy outfits for every occasion. Fast shipping and quality styles.",
  icons: {
    icon: "/logo-square.png",
    shortcut: "/logo-square.png",
    apple: "/logo-square.png",
  },
  openGraph: {
    title: "Airalabel - Trendy Girls Clothing & Fashion",
    description: "Shop stylish girls clothing, dresses, tops, and fashion essentials at Airalabel. Discover trendy outfits for every occasion with fast shipping.",
    url: "https://airalabel.com",
    siteName: "Airalabel",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Airalabel Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airalabel - Girls Fashion & Clothing",
    description: "Shop trendy girls clothing and fashion essentials at Airalabel. Quality styles for every occasion.",
    images: ["/logo.png"],
  },
};

import BackToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreen />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
