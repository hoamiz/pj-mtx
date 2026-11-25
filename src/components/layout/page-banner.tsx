import Image from "next/image";
import { Container } from "@/components/ui/container";

type PageBannerProps = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function PageBanner({ title, src, alt, width, height }: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden" aria-label={title}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
      <Container className="relative z-10 flex min-h-48 items-center py-12 md:min-h-60 md:py-16">
        <p className="text-3xl font-semibold tracking-tight text-paper md:text-4xl">
          {title}
        </p>
      </Container>
    </section>
  );
}
