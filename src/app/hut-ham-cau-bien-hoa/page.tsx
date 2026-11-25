import type { Metadata } from "next";
import Link from "next/link";
import { ServiceViewTracker } from "@/components/analytics/service-view-tracker";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactBanner } from "@/components/sections/contact-banner";
import { FAQList } from "@/components/sections/faq-list";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContentImage } from "@/components/ui/content-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactHref } from "@/config/site";
import { septicFaqs } from "@/content/faq";
import { media } from "@/content/media";
import { septicPumpingContent as content } from "@/content/septic-pumping";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Dịch Vụ Hút Hầm Cầu Biên Hòa",
  description: content.metaDescription,
  path: "/hut-ham-cau-bien-hoa",
});

export default function SepticPumpingPage() {
  return (
    <>
      <ServiceViewTracker serviceType="septic_pumping" />
      <section className="bg-paper">
        <Container className="py-10 md:py-14">
          <Breadcrumbs
            items={[
              { href: "/", label: "Trang chủ" },
              { href: "/hut-ham-cau-bien-hoa", label: "Hút hầm cầu" },
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
            src={media.septic.src}
            alt={media.septic.alt}
            width={media.septic.width}
            height={media.septic.height}
          />
          <ButtonLink href={contactHref} className="mt-8">
            Liên hệ tư vấn
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-12 md:py-16">
          <SectionHeading
            title={content.intro.title}
            description={content.intro.body}
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.intro.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-brand/15 bg-paper px-4 py-3 font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.vehicle.title} />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            {content.vehicle.body}
          </p>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.access.title} />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            {content.access.body}
          </p>
          <div className="mt-8">
            <ButtonLink href={contactHref}>{content.access.ctaLabel}</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 md:py-16">
          <SectionHeading title={content.process.title} />
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
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
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">{content.cost.body}</p>
          <p className="mt-4 max-w-3xl leading-relaxed">
            <Link href="/bang-gia" className="font-semibold text-brand">
              Xem cách MTX tư vấn chi phí
            </Link>
          </p>
        </Container>
      </section>

      <FAQList items={septicFaqs} />
      <ContactBanner title={content.closing.title} body={content.closing.body} />
    </>
  );
}
