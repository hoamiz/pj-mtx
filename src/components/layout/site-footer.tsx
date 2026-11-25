import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  hasPhone,
  hasZalo,
  navItems,
  privacyHref,
  siteConfig,
} from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand/15 bg-paper">
      <Container className="grid gap-6 py-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-lg font-semibold text-brand">{siteConfig.shortName}</p>
          <p className="mt-1 font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/80">
            {siteConfig.role}
          </p>
          <p className="mt-3 text-sm font-medium text-ink">
            Khu vực phục vụ: {siteConfig.serviceArea}
          </p>
          {hasPhone ? (
            <p className="mt-2 text-sm">
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-semibold text-brand"
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
                className="font-semibold text-accent"
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
                  className="inline-flex min-h-11 items-center text-sm font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={privacyHref}
                className="inline-flex min-h-11 items-center text-sm font-medium text-ink"
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
