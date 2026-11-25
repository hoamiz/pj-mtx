import Script from "next/script";
import { hasAnalytics, siteConfig } from "@/config/site";

export function GaScripts() {
  if (!hasAnalytics) {
    return null;
  }

  const measurementId = siteConfig.gaMeasurementId.trim();

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${measurementId}');`}
      </Script>
    </>
  );
}
