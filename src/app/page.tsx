import type { Metadata } from "next";
import { ContactBanner } from "@/components/sections/contact-banner";
import { FAQList } from "@/components/sections/faq-list";
import { HeroSection } from "@/components/sections/hero-section";
import { PainPoints } from "@/components/sections/pain-points";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ReasonsGrid } from "@/components/sections/reasons-grid";
import { ServiceAreaSection } from "@/components/sections/service-area-section";
import { ServiceGrid } from "@/components/sections/service-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { homeFaqs } from "@/content/faq";
import { homeContent } from "@/content/home";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: siteConfig.title,
  description: homeContent.metaDescription,
  path: "/",
  absoluteTitle: siteConfig.title,
});

export default function Home() {
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.role,
    ...(absoluteUrl("/") ? { url: absoluteUrl("/") } : {}),
  };
  return (
    <>
      <JsonLd data={websiteLd} />
      <HeroSection />
      <PainPoints />
      <section className="bg-surface">
        <Container className="py-12 md:py-16">
          <SectionHeading title={homeContent.intro.title} />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">
            {homeContent.intro.body}
          </p>
        </Container>
      </section>
      <ServiceGrid />
      <ReasonsGrid />
      <ProcessSteps />
      <ServiceAreaSection />
      <FAQList items={homeFaqs} />
      <ContactBanner
        title={homeContent.closing.title}
        body={homeContent.closing.body}
      />
    </>
  );
}
