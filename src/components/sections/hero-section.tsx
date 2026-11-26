import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ContentImage } from "@/components/ui/content-image";
import { contactHref } from "@/config/site";
import { homeContent } from "@/content/home";
import { media } from "@/content/media";

const quickLinks = [
  { href: "/thong-cong-bien-hoa", label: "Thông cống" },
  { href: "/hut-ham-cau-bien-hoa", label: "Hút hầm cầu" },
  { href: contactHref, label: "Liên hệ" },
] as const;

export function HeroSection() {
  const { eyebrow, title, description, descriptionMobile, contactHint } =
    homeContent.hero;

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
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:hidden">
            {descriptionMobile}
          </p>
          <p className="mt-4 hidden max-w-2xl text-lg leading-relaxed text-muted md:block">
            {description}
          </p>
          <p className="mt-3 hidden max-w-2xl font-medium text-ink md:block">
            {contactHint}
          </p>
          <ButtonLink href={contactHref} className="mt-8">
            Liên hệ tư vấn
          </ButtonLink>
          <nav
            aria-label="Đi nhanh"
            className="mt-2 flex flex-wrap gap-x-5 md:hidden"
          >
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center font-semibold text-brand underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
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
