import { StructuredData } from "@/components/structured-data";
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
  title: {
    default: "Vinod Patidar - Software Engineer & Entrepreneur",
    template: "%s | Vinod Patidar",
  },
  description:
    "Portfolio of Vinod Patidar, a passionate software engineer and entrepreneur sharing his journey through code and innovation. Specializing in full-stack development, AI integration, and startup building.",
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
    "startuplist.ing",
    "joyform.in",
    "graftek.in",
    "vaanix.ai",
    "founder",
    "web development",
    "software development",
    "tech entrepreneur",
  ],
  authors: [{ name: "Vinod Patidar" }],
  creator: "Vinod Patidar",
  publisher: "Vinod Patidar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_NEXT_APP_URL as string),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vinod Patidar - Software Engineer & Entrepreneur",
    description:
      "Passionate software engineer and entrepreneur sharing his journey through code and innovation. Specializing in full-stack development, AI integration, and startup building.",
    url: process.env.NEXT_PUBLIC_NEXT_APP_URL,
    siteName: "Vinod Patidar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vinod Patidar - Software Engineer & Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinod Patidar - Software Engineer & Entrepreneur",
    description:
      "Passionate software engineer and entrepreneur sharing his journey through code and innovation. Specializing in full-stack development, AI integration, and startup building.",
    creator: "@thevinodpatidar",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "portfolio",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          async
          src="https://umami.mailgenai.com/script.js"
          data-website-id="d6174fe1-794f-4817-9287-d6e883c137ce"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
