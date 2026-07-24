import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getContent } from "@/content";
import { allowIndexing, getSiteUrl } from "@/lib/site";

// Self-hosted at build time by next/font — no runtime request to Google.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const content = getContent();
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    // Placeholder canonical: resolves to the preview host until a real domain
    // is set through NEXT_PUBLIC_SITE_URL.
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: "Tycho Coaching Camps",
    title: content.meta.title,
    description: content.meta.description,
    images: [
      {
        url: "/images/hero-coast.jpg",
        width: 2000,
        height: 1333,
        alt: content.meta.ogAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: ["/images/hero-coast.jpg"],
  },
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={content.locale} className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
