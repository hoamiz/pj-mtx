"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { NavLinks } from "@/components/layout/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contactHref, hasPhone, siteConfig } from "@/config/site";
import { media } from "@/content/media";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <header className="border-b border-brand/15 bg-paper">
      <div className="hidden border-b border-brand/10 bg-surface md:block">
        <Container className="flex min-h-9 items-center justify-between gap-4 py-1 text-sm">
          <p className="text-ink">
            Khu vực phục vụ: {siteConfig.serviceArea}
          </p>
          {hasPhone ? (
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-semibold text-brand"
            >
              {siteConfig.phone}
            </a>
          ) : null}
        </Container>
      </div>
      <Container className="flex min-h-14 items-center justify-between gap-4 py-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg font-semibold tracking-wide text-brand"
          aria-label={`${siteConfig.shortName}, ${siteConfig.name}`}
        >
          <Image
            src={media.logo.src}
            alt=""
            width={media.logo.width}
            height={media.logo.height}
            className="h-8 w-8 rounded-md"
            priority
          />
          {siteConfig.shortName}
        </Link>
        <nav aria-label="Điều hướng chính" className="hidden md:block">
          <NavLinks className="flex items-center gap-6" />
        </nav>
        <div className="hidden md:block">
          <ButtonLink href={contactHref}>Liên hệ</ButtonLink>
        </div>
        <button
          id={menuButtonId}
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </Container>
      <MobileNavigation open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
