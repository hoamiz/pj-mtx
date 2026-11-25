import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactBanner } from "@/components/sections/contact-banner";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactHref } from "@/config/site";
import { pricingContent as content } from "@/content/pricing";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Tư Vấn Giá Thông Cống & Hút Hầm Cầu Biên Hòa",
  description: content.metaDescription,
  path: "/bang-gia",
  absoluteTitle: "Tư Vấn Giá Thông Cống & Hút Hầm Cầu Biên Hòa – MTX",
});

export default function PricingPage() {
  return (
    <>
      <section className="bg-paper">
        <Container className="py-10 md:py-14">
          <Breadcrumbs
            items={[
              { href: "/", label: "Trang chủ" },
              { href: "/bang-gia", label: "Bảng giá" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            {content.intro}
          </p>
          <div className="mt-8">
            <ButtonLink href={contactHref}>{content.ctaLabel}</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.factors.title} />
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed">
            {content.factors.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.survey.title} />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">{content.survey.body}</p>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.howTo.title} />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">{content.howTo.body}</p>
          <p className="mt-6 max-w-3xl leading-relaxed">
            Xem thêm{" "}
            <Link href="/thong-cong-bien-hoa" className="font-semibold text-brand">
              dịch vụ thông cống
            </Link>{" "}
            và{" "}
            <Link href="/hut-ham-cau-bien-hoa" className="font-semibold text-brand">
              dịch vụ hút hầm cầu
            </Link>.
          </p>
          <div className="mt-8">
            <ButtonLink href={contactHref}>{content.ctaLabel}</ButtonLink>
          </div>
        </Container>
      </section>

      <ContactBanner title={content.closing.title} body={content.closing.body} />
    </>
  );
}
