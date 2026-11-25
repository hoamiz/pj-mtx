import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ContentImage } from "@/components/ui/content-image";
import { contactHref } from "@/config/site";
import { homeContent } from "@/content/home";
import { media } from "@/content/media";

export function HeroSection() {
  const { eyebrow, title, description, contactHint } = homeContent.hero;

  return (
    <section className="bg-paper">
      <Container className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            {description}
          </p>
          <p className="mt-3 max-w-2xl font-medium text-ink">{contactHint}</p>
          <ButtonLink href={contactHref} className="mt-8">
            Liên hệ tư vấn
          </ButtonLink>
        </div>
        <ContentImage
          src={media.heroCover.src}
          alt={media.heroCover.alt}
          width={media.heroCover.width}
          height={media.heroCover.height}
          priority
        />
      </Container>
    </section>
  );
}
