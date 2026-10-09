import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://momatstudio.co.za"),
  title: { default: "MOMATSTUDIO IT SOLUTIONS", template: "%s | MOMATSTUDIO IT SOLUTIONS" },
  description: "Founder-led website, application, business system and e-learning platform development in South Africa.",
  keywords: ["custom business systems", "website development", "LMS development", "mobile applications", "South Africa IT solutions"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: "MOMATSTUDIO IT SOLUTIONS",
    title: "MOMATSTUDIO IT SOLUTIONS",
    description: "Websites, applications and systems that make organisations work better.",
    images: [{ url: "/hero-technology.webp", width: 1920, height: 864, alt: "Connected digital systems by MOMATSTUDIO IT SOLUTIONS" }],
  },
  twitter: { card: "summary_large_image", title: "MOMATSTUDIO IT SOLUTIONS", description: "Websites, applications and systems that make organisations work better.", images: ["/hero-technology.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
