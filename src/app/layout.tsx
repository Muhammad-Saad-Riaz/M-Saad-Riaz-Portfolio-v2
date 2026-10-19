import type { Metadata } from "next";

import { Inter, Noto_Sans, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

import { personalInfo, aboutContent } from "@/data/portfolio-data";
import { socialLinks } from "@/constants/social-links";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display", // ← Fixed: Distinct variable name to prevent circular compilation loops
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Google Search Console ownership verification
  verification: {
    google: "UIQgYb7_ZWqmkY5jEwWY6AZG0SteRIdftlAOI7s9qIY",
  },

  title: {
    default: "Muhammad Saad Riaz | Frontend Developer & E-commerce Developer",
    template: "%s | Muhammad Saad Riaz",
  },

  description: SITE_DESCRIPTION,

  applicationName: `${SITE_NAME} Portfolio`,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  // Establish the canonical URL for the homepage.
  alternates: {
    canonical: "/",
  },

  // Explicitly allow indexing and following links.
  // This does not override deployment-level password protection or blocking.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Metadata for link previews on platforms that use Open Graph.
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Muhammad Saad Riaz | Frontend Developer & E-commerce Developer",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Saad Riaz — Frontend Developer specializing in web development and e-commerce",
      },
    ],
  },

  // Twitter/X sharing metadata.
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Saad Riaz | Frontend Developer & E-commerce Developer",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        alt: "Muhammad Saad Riaz — Frontend Developer",
      },
    ],
  },
};

// ─── Person & Website Structured Data ───────────────────────────────────────

// Describe the real person and connect his public profiles.
// These properties must reflect genuine information and public profiles;
// structured data is not a mechanism for inserting arbitrary search keywords.

const personJsonLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: personalInfo.fullName,

  // Keep only alternate names you genuinely use or are publicly known by.
  alternateName: ["Muhammad Saad", "M Saad Riaz", "M Saad"],

  url: SITE_URL,
  image: new URL(aboutContent.photo, SITE_URL).toString(),

  jobTitle: "Frontend Developer",
  description: SITE_DESCRIPTION,
  email: personalInfo.email,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },

  sameAs: [
    socialLinks.linkedin,
    socialLinks.github,
    socialLinks.fiverr,
    socialLinks.facebook,
  ],

  knowsAbout: [
    "Frontend Development",
    "Next.js",
    "React",
    "TypeScript",
    "E-commerce Development",
    "Headless Shopify",
    "Shopify Storefront API",
    "Responsive Web Design",
    "Meta Ads Conversion Tracking",
  ],
};

// Add a WebSite entity and associate it with the Person entity.
// A shared @id establishes the relationship between your portfolio and you.

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    personJsonLd,

    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "Muhammad Saad Riaz Portfolio",
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, clashDisplay.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
