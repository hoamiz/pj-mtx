import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactHref } from "@/config/site";

export type FaqItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: readonly FaqItem[];
  showContact?: boolean;
  decoratedHeading?: boolean;
};

export function FAQList({
  items,
  showContact = true,
  decoratedHeading = false,
}: FAQListProps) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-paper">
      <JsonLd data={faqLd} />
      <Container className="py-12 md:py-16">
        <SectionHeading title="Câu hỏi thường gặp" decorated={decoratedHeading} />
        <div
          className={
            decoratedHeading
              ? "mx-auto mt-8 max-w-2xl divide-y divide-brand/15 border-y border-brand/15"
              : "mt-8 divide-y divide-brand/15 border-y border-brand/15"
          }
        >
          {items.map((item) => (
            <details key={item.question} className="py-4">
              <summary className="cursor-pointer py-1 text-base font-semibold text-ink">
                {item.question}
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        {showContact ? (
          <div
            className={
              decoratedHeading ? "mt-8 flex justify-center" : "mt-8"
            }
          >
            <ButtonLink href={contactHref}>Liên hệ tư vấn</ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
