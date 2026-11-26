export type AnalyticsPlacement =
  | "header"
  | "mobile_menu"
  | "hero"
  | "faq"
  | "banner"
  | "footer"
  | "floating"
  | "pricing"
  | "access_survey"
  | "contact_page"
  | "blog";

export type ServiceType = "drain_cleaning" | "septic_pumping";

export type AnalyticsEventName =
  | "zalo_click"
  | "phone_click"
  | "view_service"
  | "contact_cta_click";

export type AnalyticsParams = {
  placement?: AnalyticsPlacement;
  service_type?: ServiceType;
};

export function buildAnalyticsParams(
  params?: AnalyticsParams,
): Record<string, string> {
  const payload: Record<string, string> = {};

  if (params?.placement) {
    payload.placement = params.placement;
  }

  if (params?.service_type) {
    payload.service_type = params.service_type;
  }

  return payload;
}

export function trackEvent(
  name: AnalyticsEventName,
  params?: AnalyticsParams,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload = buildAnalyticsParams(params);
  window.gtag?.("event", name, payload);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
