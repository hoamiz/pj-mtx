import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactCTAGroup } from "@/components/sections/contact-cta";
import { Container } from "@/components/ui/container";
import { contactHref, siteConfig } from "@/config/site";
import { contactContent as content } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Liên hệ",
  description: content.metaDescription,
  path: contactHref,
});

export default function ContactPage() {
  return (
    <article className="bg-paper">
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { href: "/", label: "Trang chủ" },
            { href: contactHref, label: "Liên hệ" },
          ]}
        />
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              {content.intro}
            </p>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink">
              {content.area}
            </p>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
              {siteConfig.role}
            </p>
          </div>
          <div className="rounded-lg border border-brand/15 bg-surface p-6">
            <p className="font-semibold text-ink">{content.channelsLabel}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {content.area}
            </p>
            <ContactCTAGroup className="mt-6" placement="contact_page" />
          </div>
        </div>
      </Container>
    </article>
  );
}
