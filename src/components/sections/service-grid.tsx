import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContentImage } from "@/components/ui/content-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";
import { media } from "@/content/media";

const serviceImages = {
  "/thong-cong-bien-hoa": media.drain,
  "/hut-ham-cau-bien-hoa": media.septic,
} as const;

export function ServiceGrid() {
  return (
    <section className="bg-paper">
      <Container className="py-12 md:py-16">
        <SectionHeading title="Hai dịch vụ tại MTX" decorated />
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {homeContent.services.map((service) => {
            const image = serviceImages[service.href];

            return (
              <li key={service.href}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand/15 bg-surface transition hover:border-brand/40 hover:shadow-md">
                  <div className="h-1.5 bg-accent" aria-hidden="true" />
                  <ContentImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="px-5 pt-5"
                  />
                  <div className="flex flex-1 flex-col p-6 pt-5">
                    <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ButtonLink
                      href={service.href}
                      variant="secondary"
                      className="mt-6 self-start"
                    >
                      Xem dịch vụ {service.title}
                    </ButtonLink>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
