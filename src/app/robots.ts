import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = getSiteUrl() ? `${getSiteUrl()}/sitemap.xml` : undefined;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrl,
  };
}
