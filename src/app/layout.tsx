import type { Metadata } from "next";
import { Geist, Geist_Mono, Lilita_One, Oswald, Boogaloo } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll"; // 1. استيراد المكون هنا
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const boogaloo = Boogaloo({
  variable: "--font-boogaloo",
  subsets: ["latin"],
  weight: "400",
});

const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hana Nemsi",
  description: "Hana Nemsi - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${lilita.variable}
          ${oswald.variable}
          ${boogaloo.variable}
          antialiased
        `}
      >
        {/* 2. تغليف الـ children بالمكون ليعمل السكرول على الموقع بالكامل */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}