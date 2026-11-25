import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { hasAnalytics } from "@/config/site";
import { privacyContent as content } from "@/content/privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Chính Sách Bảo Mật",
  description: content.metaDescription,
  path: "/chinh-sach-bao-mat",
});

export default function PrivacyPage() {
  return (
    <article className="bg-paper">
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { href: "/", label: "Trang chủ" },
            { href: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
          ]}
        />
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {content.title}
        </h1>
        <p className="mt-4 max-w-3xl rounded-md border border-brand/20 bg-surface p-4 leading-relaxed">
          {content.reviewNote}
        </p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">{content.operator.title}</h2>
          {content.operator.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            {content.dataTypes.title}
          </h2>
          <p className="mt-4 leading-relaxed">{content.dataTypes.intro}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
            {content.dataTypes.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">{content.purpose.title}</h2>
          <p className="mt-4 leading-relaxed">{content.purpose.body}</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">{content.sharing.title}</h2>
          {content.sharing.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">{content.storage.title}</h2>
          {content.storage.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">{content.requests.title}</h2>
          <p className="mt-4 leading-relaxed">{content.requests.body}</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">{content.cookies.title}</h2>
          <p className="mt-4 leading-relaxed">
            {hasAnalytics
              ? content.cookies.bodyWithAnalytics
              : content.cookies.bodyWithoutAnalytics}
          </p>
        </section>

        <section className="mt-12 max-w-3xl pb-8">
          <h2 className="text-2xl font-semibold tracking-tight">{content.contact.title}</h2>
          <p className="mt-4 leading-relaxed">{content.contact.body}</p>
        </section>
      </Container>
    </article>
  );
}
