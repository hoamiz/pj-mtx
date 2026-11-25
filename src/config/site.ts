export const siteConfig = {
  name: "Môi Trường Xanh",
  shortName: "MTX",
  phone: "0962928125",
  zaloUrl: "https://zalo.me/0962928125",
  siteUrl: "https://lesontz.click",
  gaMeasurementId: "",
  serviceArea: "Biên Hòa, Đồng Nai",
  title: "Môi Trường Xanh MTX – Thông Cống, Hút Hầm Cầu Biên Hòa",
  role: "Môi Trường Xanh (MTX) là kênh tiếp nhận nhu cầu và hỗ trợ kết nối dịch vụ thông cống, hút hầm cầu tại Biên Hòa, Đồng Nai. Khách hàng có thể liên hệ trực tiếp qua Zalo hoặc điện thoại để được tư vấn và hỗ trợ sắp xếp dịch vụ.",
} as const;

export const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/thong-cong-bien-hoa", label: "Thông cống" },
  { href: "/hut-ham-cau-bien-hoa", label: "Hút hầm cầu" },
  { href: "/bang-gia", label: "Bảng giá" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;

export const privacyHref = "/chinh-sach-bao-mat";
export const contactHref = "/lien-he";

export const hasPhone = siteConfig.phone.trim().length > 0;
export const hasZalo = siteConfig.zaloUrl.trim().length > 0;
export const hasContact = hasPhone || hasZalo;
export const hasAnalytics = /^G-[A-Z0-9]+$/i.test(
  siteConfig.gaMeasurementId.trim(),
);
