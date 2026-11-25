import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export const alt = `${siteConfig.shortName} – Thông cống và hút hầm cầu tại Biên Hòa`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#16834A",
          color: "#FFFFFF",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: 4 }}>
          {siteConfig.shortName}
        </div>
        <div style={{ marginTop: 24, fontSize: 56, fontWeight: 700, lineHeight: 1.2 }}>
          Thong cong & hut ham cau
        </div>
        <div style={{ marginTop: 20, fontSize: 32 }}>{siteConfig.serviceArea}</div>
        <div style={{ marginTop: 28, fontSize: 24, opacity: 0.9 }}>
          Kenh tiep nhan nhu cau va ho tro ket noi dich vu
        </div>
      </div>
    ),
    size,
  );
}
