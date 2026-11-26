import { dauHieuCongThoatNuocBiNghet } from "@/content/blog/dau-hieu-cong-thoat-nuoc-bi-nghet";
import { dauHieuHamCauDay } from "@/content/blog/dau-hieu-ham-cau-day";
import { giaThongCongHutHamCau } from "@/content/blog/gia-thong-cong-hut-ham-cau";
import { khiNaoCanHutHamCau } from "@/content/blog/khi-nao-can-hut-ham-cau";
import { nguyenNhanCongThoatNuocBiNghet } from "@/content/blog/nguyen-nhan-cong-thoat-nuoc-bi-nghet";
import type { BlogCategory, BlogPost } from "@/content/blog/types";

export type { BlogCategory, BlogPost } from "@/content/blog/types";

export const postsHref = "/blog";

export const posts: BlogPost[] = [
  dauHieuCongThoatNuocBiNghet,
  nguyenNhanCongThoatNuocBiNghet,
  dauHieuHamCauDay,
  khiNaoCanHutHamCau,
  giaThongCongHutHamCau,
];

export const blogCategories: { id: BlogCategory; label: string }[] = [
  { id: "drain", label: "Thông cống" },
  { id: "septic", label: "Hút hầm cầu" },
  { id: "pricing", label: "Chi phí" },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsBySlugs(slugs: string[]): BlogPost[] {
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => Boolean(post));
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return posts.filter((post) => post.category === category);
}

export function postPath(slug: string): string {
  return `${postsHref}/${slug}`;
}
