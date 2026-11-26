"use client";

import { ButtonLink } from "@/components/ui/button";
import { hasContact, hasPhone, hasZalo, siteConfig } from "@/config/site";
import {
  trackEvent,
  type AnalyticsPlacement,
  type ServiceType,
} from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ContactFields = {
  className?: string;
  placement: AnalyticsPlacement;
  serviceType?: ServiceType;
};

function handleContactClick(
  channel: "zalo" | "phone",
  placement: AnalyticsPlacement,
  serviceType?: ServiceType,
) {
  const params = {
    placement,
    service_type: serviceType,
  };

  trackEvent(channel === "zalo" ? "zalo_click" : "phone_click", params);
  trackEvent("contact_cta_click", params);
}

type ContactCTAProps = ContactFields & {
  label?: string;
};

export function ContactCTA({
  className,
  label = "Liên hệ tư vấn",
  placement,
  serviceType,
}: ContactCTAProps) {
  if (hasZalo) {
    return (
      <ButtonLink
        href={siteConfig.zaloUrl}
        external
        className={className}
        onClick={() => handleContactClick("zalo", placement, serviceType)}
      >
        {label}
      </ButtonLink>
    );
  }

  if (hasPhone) {
    return (
      <ButtonLink
        href={`tel:${siteConfig.phone}`}
        external
        className={className}
        onClick={() => handleContactClick("phone", placement, serviceType)}
      >
        {label}
      </ButtonLink>
    );
  }

  return null;
}

export function ContactCTAGroup({
  className,
  placement,
  serviceType,
}: ContactFields) {
  if (!hasContact) {
    return null;
  }

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {hasZalo ? (
        <ButtonLink
          href={siteConfig.zaloUrl}
          external
          onClick={() => handleContactClick("zalo", placement, serviceType)}
        >
          Liên hệ Zalo
        </ButtonLink>
      ) : null}
      {hasPhone ? (
        <ButtonLink
          href={`tel:${siteConfig.phone}`}
          external
          variant={hasZalo ? "secondary" : "primary"}
          onClick={() => handleContactClick("phone", placement, serviceType)}
        >
          Gọi điện
        </ButtonLink>
      ) : null}
    </div>
  );
}

export function ContactLinks({
  className,
  placement,
  serviceType,
}: ContactFields) {
  if (!hasZalo && !hasPhone) {
    return null;
  }

  return (
    <div className={className}>
      {hasZalo ? (
        <a
          href={siteConfig.zaloUrl}
          rel="noopener noreferrer"
          className="font-semibold text-[#0068FF]"
          onClick={() => handleContactClick("zalo", placement, serviceType)}
        >
          Zalo
        </a>
      ) : null}
      {hasPhone ? (
        <a
          href={`tel:${siteConfig.phone}`}
          className="font-semibold text-brand"
          onClick={() => handleContactClick("phone", placement, serviceType)}
        >
          Gọi điện
        </a>
      ) : null}
    </div>
  );
}
