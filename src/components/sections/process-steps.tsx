import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";

function ProcessStepIcon({ index }: { index: number }) {
  const className = "size-14 text-brand";

  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3h9a2 2 0 0 1 2 2v15H8.5A2.5 2.5 0 0 1 6 17.5V5a2 2 0 0 1 1-2Zm1.5 3.5h6v1.5h-6V6.5Zm0 3h6V11h-6V9.5Zm0 3h4V14h-4v-1.5ZM5 7H4a1 1 0 0 0 0 2h1V7Z"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3a8 8 0 0 0-8 8v4a3 3 0 0 0 3 3h1.5v-6H6v-1a6 6 0 0 1 12 0v1h-2.5v6H18a3 3 0 0 0 3-3v-4a8 8 0 0 0-8-8Zm-2 16.5A2.5 2.5 0 0 0 12.5 22h.5a1 1 0 1 1 0 2h-.5A4.5 4.5 0 0 1 8 19.5V19h2v.5Z"
        />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M9 3h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 0 1 1-1Zm1 2v1h4V5h-4Zm1.2 6.3-1.7 1.7-1.2-1.2-1.4 1.4 2.6 2.6 3.1-3.1-1.4-1.4Zm4.8 0h-3v2h3v-2Zm0 4h-3v2h3v-2Z"
        />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M14 4v5h5.72a2 2 0 0 1 1.96 2.4l-1.38 9A2 2 0 0 1 18.34 22H7V11l4.2-7.4A2.5 2.5 0 0 1 14 4ZM5 11H3.5A1.5 1.5 0 0 0 2 12.5v8A1.5 1.5 0 0 0 3.5 22H5v-11Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4V6.5ZM4 10h16v7.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5V10Zm12.25 2.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
}

export function ProcessSteps() {
  return (
    <section className="bg-paper">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title={homeContent.process.title}
          description={homeContent.process.description}
          decorated
        />
        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {homeContent.process.steps.map((step, index) => (
            <li
              key={step}
              className="relative flex gap-4 text-left md:flex-col md:text-center"
            >
              {index < homeContent.process.steps.length - 1 ? (
                <span
                  className="absolute top-16 left-8 z-0 w-px -translate-x-1/2 bg-brand/30 max-md:bottom-[-1.5rem] md:hidden"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative z-[1] flex size-16 shrink-0 items-center justify-center bg-paper md:mx-auto md:bg-transparent">
                <ProcessStepIcon index={index} />
              </div>
              <div className="min-w-0 flex-1 pb-2 pr-14 md:pb-0 md:pr-0">
                <p className="inline-block rounded-md bg-accent px-2 py-0.5 text-sm font-semibold text-ink">
                  Bước {index + 1}
                </p>
                <p className="mt-2 text-base leading-relaxed text-ink md:hidden">
                  {homeContent.process.stepsMobile[index]}
                </p>
                <p className="mt-2 hidden text-base leading-relaxed text-ink md:block">
                  {step}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
