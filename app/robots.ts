import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// /thanks is not blocked here: it carries a noindex tag, and crawlers must be
// allowed to fetch it to see that tag.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
