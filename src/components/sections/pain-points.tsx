import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { contactHref, hasPhone, siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";

export function PainPoints() {
  return (
    <section className="bg-paper">
      <Container className="py-12 md:py-16">
        <div className="rounded-xl border-4 border-brand bg-surface p-6 shadow-sm md:p-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-brand md:text-3xl">
            {homeContent.painPoints.title}
          </h2>
          <ul className="mt-8 grid overflow-hidden rounded-lg border border-brand/30 sm:grid-cols-2">
            {homeContent.painPoints.items.map((item) => (
              <li
                key={item}
                className="border-b border-brand/30 sm:border-r sm:odd:border-r sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <a
                  href={contactHref}
                  className="flex min-h-11 items-center px-4 py-3 text-ink hover:bg-paper hover:text-brand"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-xl text-center leading-relaxed text-ink">
            {homeContent.painPoints.cta}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {hasPhone ? (
              <ButtonLink href={`tel:${siteConfig.phone}`} external>
                Gọi ngay {siteConfig.phone}
              </ButtonLink>
            ) : (
              <ButtonLink href={contactHref}>Liên hệ tư vấn</ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
