import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactHref } from "@/config/site";
import { homeContent } from "@/content/home";

export function ServiceAreaSection() {
  return (
    <section className="bg-surface">
      <Container className="py-12 md:py-16">
        <SectionHeading title={homeContent.area.title} decorated />
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center">
          <ul className="flex flex-wrap justify-center gap-3">
            {homeContent.area.places.map((place) => (
              <li
                key={place}
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink"
              >
                {place}
              </li>
            ))}
          </ul>
          <ButtonLink href={contactHref} className="mt-8">
            Liên hệ tư vấn
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
