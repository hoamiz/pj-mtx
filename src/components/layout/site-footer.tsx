import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  hasPhone,
  hasZalo,
  navItems,
  privacyHref,
  siteConfig,
} from "@/config/site";
import { postsHref } from "@/content/blog";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#12452B] text-paper">
      <Container className="grid gap-6 py-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xl font-semibold text-accent">{siteConfig.shortName}</p>
          <p className="mt-1 font-semibold text-paper">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/80">
            {siteConfig.role}
          </p>
          <p className="mt-3 text-sm font-medium text-paper">
            Khu vực phục vụ: {siteConfig.serviceArea}
          </p>
          {hasPhone ? (
            <p className="mt-2 text-sm">
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-semibold text-paper underline decoration-accent decoration-2 underline-offset-4"
              >
                {siteConfig.phone}
              </a>
            </p>
          ) : null}
          {hasZalo ? (
            <p className="mt-1 text-sm">
              <a
                href={siteConfig.zaloUrl}
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-paper px-2 py-0.5 font-semibold text-[#0068FF]"
              >
                Zalo
              </a>
            </p>
          ) : null}
        </div>
        <nav aria-label="Liên kết chân trang">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={postsHref}
                className="inline-flex min-h-11 items-center text-sm font-medium text-paper"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={privacyHref}
                className="inline-flex min-h-11 items-center text-sm font-medium text-paper"
              >
                Chính sách bảo mật
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
