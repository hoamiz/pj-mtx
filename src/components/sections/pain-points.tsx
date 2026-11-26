import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { contactHref, hasPhone, siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

function ProblemMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 size-5 shrink-0 text-[#E53935]"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="5"
      />
    </svg>
  );
}

function ProblemList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "overflow-hidden rounded-lg border border-brand/30",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="border-b border-brand/30 max-sm:last:border-b-0 sm:border-r sm:odd:border-r sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
        >
          <a
            href={contactHref}
            className="flex min-h-12 items-start gap-2.5 px-4 py-3.5 pr-16 text-base leading-relaxed text-ink hover:bg-paper hover:text-brand sm:items-center sm:pr-4"
          >
            <ProblemMark />
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function PainPoints() {
  return (
    <section className="bg-paper">
      <Container className="py-12 pb-24 md:py-16">
        <div className="rounded-xl border-4 border-brand bg-surface p-5 shadow-sm md:p-8">
          <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.75rem] font-semibold leading-snug tracking-tight text-brand md:text-[2.125rem]">
            {homeContent.painPoints.title}
          </h2>
          <ProblemList
            items={homeContent.painPoints.itemsMobile}
            className="mt-8 grid md:hidden"
          />
          <ProblemList
            items={homeContent.painPoints.items}
            className="mt-8 hidden md:grid md:grid-cols-2"
          />
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
