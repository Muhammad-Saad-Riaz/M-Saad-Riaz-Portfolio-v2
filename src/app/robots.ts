import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Generate /robots.txt using Next.js's native metadata convention.
//
// Allow search-engine crawlers to access the public portfolio.
// Explicitly provide the sitemap location so crawlers can discover it.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}