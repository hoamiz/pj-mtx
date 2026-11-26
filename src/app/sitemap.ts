import type { MetadataRoute } from "next";
import { navItems, privacyHref } from "@/config/site";
import { postPath, posts, postsHref } from "@/content/blog";
import { absoluteUrl, getSiteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

const paths = [
  "/",
  ...navItems.map((item) => item.href),
  privacyHref,
  postsHref,
  ...posts.map((post) => postPath(post.slug)),
].filter((path, index, list) => list.indexOf(path) === index);

export default function sitemap(): MetadataRoute.Sitemap {
  if (!getSiteUrl()) {
    return [];
  }

  return paths.map((path) => ({
    url: absoluteUrl(path) ?? path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
