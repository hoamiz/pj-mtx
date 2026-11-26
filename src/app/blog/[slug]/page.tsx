import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FAQList } from "@/components/sections/faq-list";
import { ContactCTAGroup } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import {
  getPostBySlug,
  getPostsBySlugs,
  postPath,
  posts,
  postsHref,
} from "@/content/blog";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: postPath(post.slug),
    openGraphType: "article",
  });
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = absoluteUrl(postPath(post.slug));
  const ogImage = absoluteUrl("/opengraph-image");
  const h2Sections = post.sections.filter((section) => section.level === 2);
  const relatedPosts = getPostsBySlugs(post.relatedSlugs);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.datePublished,
    inLanguage: "vi",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
    ...(ogImage ? { image: ogImage } : {}),
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <article className="bg-paper">
        <Container className="py-10 md:py-14">
          <Breadcrumbs
            items={[
              { href: "/", label: "Trang chủ" },
              { href: postsHref, label: "Blog" },
              { href: postPath(post.slug), label: post.title },
            ]}
          />
          <p className="mt-6">
            <span className="rounded-md bg-accent px-2 py-0.5 text-sm font-semibold text-ink">
              {post.categoryLabel}
            </span>
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ContactCTAGroup className="mt-8" placement="blog" />
          {h2Sections.length >= 4 ? (
            <nav
              aria-label="Mục lục"
              className="mt-10 max-w-3xl rounded-lg border border-brand/15 bg-surface p-5"
            >
              <p className="font-semibold text-ink">Mục lục</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                {h2Sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="font-medium text-brand">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          <div className="mt-10 max-w-3xl space-y-10">
            {post.sections.map((section) => {
              const Heading = section.level === 3 ? "h3" : "h2";

              return (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <Heading
                    className={
                      section.level === 3
                        ? "text-xl font-semibold tracking-tight text-ink"
                        : "text-2xl font-semibold tracking-tight text-ink"
                    }
                  >
                    {section.heading}
                  </Heading>
                  <div className="mt-4 space-y-4 text-lg leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              );
            })}
          </div>
          {post.serviceLinks.length > 0 || relatedPosts.length > 0 ? (
            <nav aria-label="Liên kết trong bài" className="mt-10 max-w-3xl">
              <p className="text-sm font-semibold text-brand">Xem thêm</p>
              <ul className="mt-2 space-y-2">
                {post.serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-semibold text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {relatedPosts.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={postPath(related.slug)}
                      className="font-semibold text-brand"
                    >
                      {related.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <div className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {post.closing.title}
            </h2>
            <p className="mt-3 text-lg leading-relaxed">{post.closing.body}</p>
            <ContactCTAGroup className="mt-6" placement="blog" />
          </div>
        </Container>
      </article>
      <FAQList items={post.faqs} showContact={false} />
    </>
  );
}
