import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";

function ReasonIcon({ index }: { index: number }) {
  const className = "size-6 text-brand";

  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.2 3.5c.4-.4 1-.5 1.5-.3l2.1.8c.7.3 1.1 1 1 1.8l-.3 2.2c-.1.5-.3.9-.7 1.2l-1 1c1.2 2.1 2.9 3.8 5 5l1-1c.3-.4.7-.6 1.2-.7l2.2-.3c.8-.1 1.5.3 1.8 1l.8 2.1c.2.5.1 1.1-.3 1.5l-1.5 1.5c-.5.5-1.2.7-1.9.6-3.4-.5-6.6-2.3-9-4.7S4.7 10 4.2 6.6c-.1-.7.1-1.4.6-1.9l2.4-1.2Z"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v9A2.5 2.5 0 0 1 17.5 17H9l-3.8 2.7A1 1 0 0 1 4 18.8V5.5Z"
        />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 3a1 1 0 0 1 1 1v1h8V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm12 8H5v8h14v-8Z"
      />
    </svg>
  );
}

export function ReasonsGrid() {
  return (
    <section className="bg-surface">
      <Container className="py-12 md:py-16">
        <SectionHeading title={homeContent.reasons.title} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {homeContent.reasons.items.map((item, index) => (
            <li
              key={item}
              className="rounded-lg border border-brand/15 bg-paper p-5"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-brand/10">
                <ReasonIcon index={index} />
              </span>
              <p className="mt-4 leading-relaxed text-ink">{item}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
