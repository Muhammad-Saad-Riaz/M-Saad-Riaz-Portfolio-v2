import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Generate /sitemap.xml using Next.js's native metadata convention.
//
// This is a single-page portfolio, so the homepage is the only
// canonical page we need to list. Sections such as #work, #about,
// and #experience are anchors on this page, not separate URLs.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
    },
  ];
}