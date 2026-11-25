import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { GaScripts } from "@/components/analytics/ga-scripts";
import { FloatingActions } from "@/components/layout/floating-actions";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/metadata";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: siteConfig.title,
    template: "%s – Môi Trường Xanh MTX",
  },
  description: siteConfig.role,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.role,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.role,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="bg-surface font-sans text-ink antialiased">
        <GaScripts />
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Đến nội dung chính
        </a>
        <SiteHeader />
        <main id="noi-dung">{children}</main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
