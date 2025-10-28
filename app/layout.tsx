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
  title: "vinod patidar - software engineer & entrepreneur",
  description:
    "portfolio of vinod patidar, a passionate software engineer and entrepreneur sharing his journey through code and innovation. specializing in full-stack development, AI integration, and startup building.",
  keywords: [
    "vinod patidar",
    "software engineer",
    "entrepreneur",
    "full-stack developer",
    "react",
    "next.js",
    "typescript",
    "ai",
    "startup",
    "portfolio",
  ],
  authors: [{ name: "Vinod Patidar" }],
  creator: "Vinod Patidar",
  openGraph: {
    title: "vinod patidar - software engineer & entrepreneur",
    description:
      "passionate software engineer and entrepreneur sharing his journey through code and innovation",
    url: "https://vinodpatidar.com",
    siteName: "Vinod Patidar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "vinod patidar - software engineer & entrepreneur",
    description:
      "passionate software engineer and entrepreneur sharing his journey through code and innovation",
    creator: "@thevinodpatidar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
        {children}
      </body>
    </html>
  );
}
