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

export const metadata: Metadata = {
  title: {
    default: "LUXE E-Commerce | Curated Excellence",
    template: "%s | LUXE E-Commerce",
  },
  description: "A curated collection of high-end essentials and artisanal designs, carefully selected to elevate your everyday environment.",
};

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Toast from "@/components/ui/toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
