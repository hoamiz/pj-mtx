import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function getSiteUrl(): string {
  return siteConfig.siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path: string): string | undefined {
  const base = getSiteUrl();
  if (!base) {
    return undefined;
  }
  if (path === "/") {
    return base;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
  openGraphType?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogTitle = absoluteTitle ?? title;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: ogTitle,
      description,
      locale: "vi_VN",
      type: openGraphType,
      url: canonical,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
