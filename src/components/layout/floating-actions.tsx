"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  contactHref,
  hasPhone,
  hasZalo,
  siteConfig,
} from "@/config/site";
import { ZaloIcon } from "@/components/icons/zalo-icon";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import "./floating-actions.css";

const fabButton =
  "relative z-[1] inline-flex size-14 items-center justify-center rounded-full border-2 border-white shadow-[0_0_8px_rgba(0,0,0,0.35)]";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.2 3.5c.4-.4 1-.5 1.5-.3l2.1.8c.7.3 1.1 1 1 1.8l-.3 2.2c-.1.5-.3.9-.7 1.2l-1 1c1.2 2.1 2.9 3.8 5 5l1-1c.3-.4.7-.6 1.2-.7l2.2-.3c.8-.1 1.5.3 1.8 1l.8 2.1c.2.5.1 1.1-.3 1.5l-1.5 1.5c-.5.5-1.2.7-1.9.6-3.4-.5-6.6-2.3-9-4.7S4.7 10 4.2 6.6c-.1-.7.1-1.4.6-1.9l2.4-1.2Z"
      />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 7.5 5.5 14a1 1 0 1 0 1.4 1.4L12 10.3l5.1 5.1a1 1 0 0 0 1.4-1.4Z"
      />
    </svg>
  );
}

function FabWrap({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mtx-fab-wrap", className)}>
      <span className="mtx-fab-ring" aria-hidden="true" />
      <span className="mtx-fab-ring-fill" aria-hidden="true" />
      {children}
    </div>
  );
}

export function FloatingActions() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);
  const showContactFabs = pathname !== contactHref;

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 320);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onZalo() {
    trackEvent("zalo_click", { placement: "floating" });
    trackEvent("contact_cta_click", { placement: "floating" });
  }

  function onPhone() {
    trackEvent("phone_click", { placement: "floating" });
    trackEvent("contact_cta_click", { placement: "floating" });
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed right-1 bottom-1 z-30 flex flex-col items-center">
      {showContactFabs && hasZalo ? (
        <FabWrap className="text-[#0068FF]">
          <a
            href={siteConfig.zaloUrl}
            rel="noopener noreferrer"
            className={cn(fabButton, "mtx-fab-tada overflow-hidden bg-[#0068FF]")}
            aria-label="Liên hệ Zalo"
            onClick={onZalo}
          >
            <ZaloIcon className="size-full" />
          </a>
        </FabWrap>
      ) : null}
      {showContactFabs && hasPhone ? (
        <FabWrap className="text-[#e4212a]">
          <a
            href={`tel:${siteConfig.phone}`}
            className={cn(
              fabButton,
              "mtx-fab-shake bg-[#e4212a] text-white",
            )}
            aria-label="Gọi điện"
            onClick={onPhone}
          >
            <PhoneIcon />
          </a>
        </FabWrap>
      ) : null}
      {showTop ? (
        <button
          type="button"
          className={cn(
            fabButton,
            "mb-3 border-brand/20 bg-paper text-ink",
          )}
          aria-label="Lên đầu trang"
          onClick={scrollTop}
        >
          <ChevronUpIcon />
        </button>
      ) : null}
    </div>
  );
}
