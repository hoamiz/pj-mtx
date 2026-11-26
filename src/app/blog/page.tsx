import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import {
  blogCategories,
  getPostsByCategory,
  postPath,
  postsHref,
} from "@/content/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog thông cống và hút hầm cầu Biên Hòa",
  description:
    "Bài viết của Môi Trường Xanh (MTX) về dấu hiệu nghẹt cống, hầm đầy, khi nào hút hầm và yếu tố ảnh hưởng chi phí tại Biên Hòa, Đồng Nai.",
  path: postsHref,
});

export default function BlogIndexPage() {
  return (
    <section className="bg-paper">
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { href: "/", label: "Trang chủ" },
            { href: postsHref, label: "Blog" },
          ]}
        />
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Blog thông cống và hút hầm cầu
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Môi Trường Xanh (MTX) chia sẻ hướng dẫn nhận biết sự cố, hạn chế tái
          nghẹt và cách liên hệ để được tư vấn tại Biên Hòa, Đồng Nai. Không phải
          bảng giá số và không phải trang theo phường.
        </p>
        <div className="mt-10 space-y-12">
          {blogCategories.map((category) => {
            const categoryPosts = getPostsByCategory(category.id);

            if (categoryPosts.length === 0) {
              return null;
            }

            return (
              <section key={category.id} aria-labelledby={`blog-${category.id}`}>
                <h2
                  id={`blog-${category.id}`}
                  className="text-xl font-semibold tracking-tight text-ink"
                >
                  {category.label}
                </h2>
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {categoryPosts.map((post) => (
                    <li
                      key={post.slug}
                      className="rounded-lg border border-brand/15 bg-surface p-5"
                    >
                      <p className="text-sm font-semibold text-ink">
                        <span className="rounded-md bg-accent px-2 py-0.5">
                          {post.categoryLabel}
                        </span>
                      </p>
                      <Link
                        href={postPath(post.slug)}
                        className="mt-2 block text-lg font-semibold text-ink"
                      >
                        {post.title}
                      </Link>
                      <p className="mt-2 leading-relaxed text-muted">
                        {post.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
