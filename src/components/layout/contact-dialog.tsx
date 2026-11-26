"use client";

import { useId, useRef, type RefObject } from "react";
import Link from "next/link";
import { contactHref, hasPhone, hasZalo, siteConfig } from "@/config/site";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { trackEvent } from "@/lib/analytics";

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLElement | null>;
};

export function ContactDialog({
  open,
  onClose,
  returnFocusRef,
}: ContactDialogProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useFocusTrap({
    open,
    containerRef: panelRef,
    onClose,
    returnFocusRef,
  });

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 hidden md:block">
      <div
        className="absolute inset-0 bg-ink/40"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute top-1/2 left-1/2 w-[min(22rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-paper p-6 shadow-lg"
      >
        <div className="flex items-start justify-between gap-3">
          <h2 id={titleId} className="text-lg font-semibold text-ink">
            Liên hệ MTX
          </h2>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-ink"
            aria-label="Đóng"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {hasZalo ? (
            <a
              href={siteConfig.zaloUrl}
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-semibold text-[#0068FF]"
              onClick={() => {
                trackEvent("zalo_click", { placement: "header" });
                trackEvent("contact_cta_click", { placement: "header" });
              }}
            >
              Liên hệ Zalo
            </a>
          ) : null}
          {hasPhone ? (
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex min-h-11 items-center font-semibold text-ink"
              onClick={() => {
                trackEvent("phone_click", { placement: "header" });
                trackEvent("contact_cta_click", { placement: "header" });
              }}
            >
              Gọi điện {siteConfig.phone}
            </a>
          ) : null}
          <Link
            href={contactHref}
            className="inline-flex min-h-11 items-center font-semibold text-brand"
            onClick={onClose}
          >
            Xem trang liên hệ
          </Link>
        </div>
      </div>
    </div>
  );
}
