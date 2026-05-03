import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Toast from "@/components/ui/toast";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Curated Excellence`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
    creator: '@luxe',
  },
};

import FloatingActions from "@/components/layout/floating-actions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --accent-primary: ${siteConfig.theme.accent};
            --radius-main: ${siteConfig.theme.radius};
          }
        `}} />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <FloatingActions />
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
