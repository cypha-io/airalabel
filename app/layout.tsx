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
    template: '%s | Airalabel',
    default: 'Airalabel',
  },
  description: "Airalabel - Your premium label solution for excellence and innovation.",
  icons: {
    icon: "/logo-square.png",
    shortcut: "/logo-square.png",
    apple: "/logo-square.png",
  },
  openGraph: {
    title: "Airalabel",
    description: "Airalabel - Your premium label solution for excellence and innovation.",
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
    title: "Airalabel",
    description: "Airalabel - Your premium label solution for excellence and innovation.",
    images: ["/logo.png"],
  },
};

import BackToTop from "@/components/BackToTop";
import SupportChatbot from "@/components/SupportChatbot";

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
        <SupportChatbot />
      </body>
    </html>
  );
}
