import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://niteshsaini.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nitesh Saini — AI/ML Engineer",
    template: "%s · Nitesh Saini",
  },
  description:
    "Nitesh Saini — AI/ML engineer building production computer-vision and RAG systems. IIT Delhi '23. Published in Nature Scientific Data.",
  keywords: [
    "Nitesh Saini",
    "AI engineer",
    "ML engineer",
    "computer vision engineer",
    "YOLOv8",
    "Grounding DINO",
    "SAM2",
    "IIT Delhi",
  ],
  authors: [{ name: "Nitesh Saini", url: siteUrl }],
  creator: "Nitesh Saini",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nitesh Saini — AI/ML Engineer",
    description:
      "AI/ML engineer building production computer-vision and RAG systems. IIT Delhi '23. Published in Nature Scientific Data.",
    siteName: "Nitesh Saini",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh Saini — AI/ML Engineer",
    description:
      "AI/ML engineer building production computer-vision and RAG systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jbmono.variable}`}>
      <body className="font-sans bg-bg text-ink antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
