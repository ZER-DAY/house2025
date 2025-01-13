import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
// استيراد خط Inter مع وزن خفيف
const inter = Inter({
  subsets: ["latin", "cyrillic"], // دعم السيريلية
  weight: ["300", "400"], // أوزان خفيفة
});

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="relative">
      {" "}
      {/* تحديد اللغة الروسية */}
      <body className={twMerge(inter.className, "antialiased bg-[#EAEEFE]")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
