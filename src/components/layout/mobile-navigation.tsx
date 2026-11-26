"use client";

import { useId, useRef, type RefObject } from "react";
import { NavLinks } from "@/components/layout/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { contactHref } from "@/config/site";
import { useFocusTrap } from "@/hooks/use-focus-trap";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLElement | null>;
};

export function MobileNavigation({
  open,
  onClose,
  returnFocusRef,
}: MobileNavigationProps) {
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
    <div className="fixed inset-0 z-40 md:hidden">
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
        id="mobile-navigation"
        className="absolute top-0 right-0 flex h-full w-[min(20rem,100%)] flex-col bg-paper px-4 py-5 shadow-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 id={titleId} className="text-base font-semibold text-ink">
            Menu
          </h2>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-ink"
            aria-label="Đóng menu"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
        <nav aria-label="Điều hướng di động" className="mt-4">
          <NavLinks
            className="flex flex-col"
            linkClassName="w-full"
            onNavigate={onClose}
          />
        </nav>
        <div className="mt-6">
          <ButtonLink href={contactHref} className="w-full" onClick={onClose}>
            Liên hệ
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
