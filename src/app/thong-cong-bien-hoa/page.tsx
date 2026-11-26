import type { Metadata } from "next";
import Link from "next/link";
import { ServiceViewTracker } from "@/components/analytics/service-view-tracker";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactBanner } from "@/components/sections/contact-banner";
import { RelatedPosts } from "@/components/sections/related-posts";
import { FAQList } from "@/components/sections/faq-list";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContentImage } from "@/components/ui/content-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { drainFaqs } from "@/content/faq";
import { drainCleaningContent as content } from "@/content/drain-cleaning";
import { getPostsBySlugs } from "@/content/blog";
import { contactHref } from "@/config/site";
import { media } from "@/content/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Dịch Vụ Thông Cống Biên Hòa",
  description: content.metaDescription,
  path: "/thong-cong-bien-hoa",
});

export default function DrainCleaningPage() {
  return (
    <>
      <ServiceViewTracker serviceType="drain_cleaning" />
      <section className="bg-paper">
        <Container className="py-10 md:py-14">
          <Breadcrumbs
            items={[
              { href: "/", label: "Trang chủ" },
              { href: "/thong-cong-bien-hoa", label: "Thông cống" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {content.description}
          </p>
          <ContentImage
            className="mt-8 max-w-3xl"
            src={media.drain.src}
            alt={media.drain.alt}
            width={media.drain.width}
            height={media.drain.height}
          />
          <ButtonLink href={contactHref} className="mt-8">
            Liên hệ tư vấn
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.intro.title} />
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed">
            {content.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.needs.title} />
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5">
            {content.needs.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            {content.needs.note}
          </p>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.equipment.title} />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            {content.equipment.body}
          </p>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.process.title} />
          <ol className="mt-8 max-w-3xl space-y-4">
            {content.process.steps.map((step, index) => (
              <li key={step} className="rounded-lg border border-brand/15 bg-surface p-5">
                <p className="text-sm font-semibold text-brand">Bước {index + 1}</p>
                <p className="mt-2 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.cost.title} />
          <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 leading-relaxed">
            {content.cost.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl leading-relaxed">
            <Link href="/bang-gia" className="font-semibold text-brand">
              Xem cách MTX tư vấn chi phí
            </Link>
          </p>
        </Container>
      </section>

      <FAQList items={drainFaqs} />
      <RelatedPosts
        posts={getPostsBySlugs([
          "dau-hieu-cong-thoat-nuoc-bi-nghet",
          "nguyen-nhan-cong-thoat-nuoc-bi-nghet",
        ])}
      />
      <ContactBanner title={content.closing.title} body={content.closing.body} />
    </>
  );
}
