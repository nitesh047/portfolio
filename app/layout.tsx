import type { Metadata } from "next";
import { Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { person } from "@/content/data";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
    default: "Nitesh Saini | Technology & AI Lead, IIT Delhi '23",
    template: "%s · Nitesh Saini",
  },
  description:
    "Nitesh Saini — Technology & AI Lead at ISB's Bharti Institute. I build end-to-end pipelines that collect, structure, and analyze data from the physical world, turning raw sensor and image data into production-grade AI systems across computer vision, geospatial intelligence, and data infrastructure. IIT Delhi '23. Published in Nature Scientific Data.",
  keywords: [
    "Nitesh Saini",
    "Nitesh Saini IIT Delhi",
    "Nitesh Saini ISB",
    "Nitesh Saini BIPP",
    "BIPP team",
    "Bharti Institute of Public Policy",
    "computer vision engineer",
    "geospatial intelligence",
    "data infrastructure engineer",
    "AI systems engineer",
    "IIT Delhi",
  ],
  authors: [{ name: "Nitesh Saini", url: siteUrl }],
  creator: "Nitesh Saini",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nitesh Saini | Technology & AI Lead, IIT Delhi '23",
    description:
      "I build AI systems for computer vision, geospatial intelligence, and data infrastructure. IIT Delhi '23. Published in Nature Scientific Data.",
    siteName: "Nitesh Saini",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh Saini | Technology & AI Lead, IIT Delhi '23",
    description:
      "I build AI systems for computer vision, geospatial intelligence, and data infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: person.url,
  email: `mailto:${person.email}`,
  jobTitle: person.jobTitle,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: person.alumniOf,
  },
  worksFor: {
    "@type": "Organization",
    name: person.worksFor.name,
    alternateName: person.worksFor.shortName,
  },
  sameAs: [person.github, person.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${publicSans.variable} ${jbmono.variable}`}>
      <body className="font-sans bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
