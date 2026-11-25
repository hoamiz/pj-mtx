"use client";

import { useEffect } from "react";
import { trackEvent, type ServiceType } from "@/lib/analytics";

export function ServiceViewTracker({
  serviceType,
}: {
  serviceType: ServiceType;
}) {
  useEffect(() => {
    trackEvent("view_service", { service_type: serviceType });
  }, [serviceType]);

  return null;
}
