"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

type UseFocusTrapOptions = {
  open: boolean;
  containerRef: RefObject<HTMLElement | null>;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

export function useFocusTrap({
  open,
  containerRef,
  onClose,
  returnFocusRef,
}: UseFocusTrapOptions) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const root = containerRef.current;

    if (!root) {
      return;
    }

    const panel: HTMLElement = root;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    const returnTarget = returnFocusRef?.current;
    document.body.style.overflow = "hidden";

    function getFocusable() {
      return Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((element) => element.tabIndex !== -1);
    }

    getFocusable()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const items = getFocusable();

      if (items.length === 0) {
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      const restoreTarget =
        returnTarget ??
        (previouslyFocused instanceof HTMLElement ? previouslyFocused : null);
      restoreTarget?.focus();
    };
  }, [open, containerRef, onClose, returnFocusRef]);
}
