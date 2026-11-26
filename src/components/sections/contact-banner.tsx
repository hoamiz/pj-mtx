import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { contactHref } from "@/config/site";

type ContactBannerProps = {
  title: string;
  body: string;
};

export function ContactBanner({ title, body }: ContactBannerProps) {
  return (
    <section className="bg-[#12452B] text-paper">
      <Container className="py-12 md:py-16">
        <h2 className="max-w-3xl text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-paper/90">{body}</p>
        <ButtonLink
          href={contactHref}
          variant="secondary"
          className="mt-8 border-paper bg-paper text-ink"
        >
          Liên hệ tư vấn
        </ButtonLink>
      </Container>
    </section>
  );
}
