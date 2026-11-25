# MTX — ngữ cảnh dự án

## 13/11/2026

- Phase 0: thư mục chỉ có file brief. Git cha là `D:/WWW`; không dùng repo đó.
- Phase 1: Next.js 16.4.6, React 19.3.0, Tailwind CSS 4.3.3, TypeScript 5.9.3. App Router, thư mục `src/`, npm. Static export ra `out/`.
- Đã tắt `cacheComponents` (và `partialPrefetching` đi kèm) vì Next báo PPR không chạy cùng `output: "export"`.
- Màu đặt trong `@theme` của Tailwind v4. Font Be Vietnam Pro, subset vietnamese và latin; fallback Segoe UI / system-ui. Build tải font thành công.
- Điện thoại và Zalo trong cấu hình đang rỗng. Chưa có nút gọi hoặc Zalo.
- Trang `/` chỉ có H1 tên thương hiệu và câu vai trò đã xác nhận. Chưa có trang dịch vụ, bảng giá, chính sách, sitemap, canonical hay ảnh Open Graph.
- Git local khởi tạo trong `pj-mtx`. Chưa commit, chưa remote.
- `npm run lint`, `npm run typecheck` và `npm run build` đều thành công.

## 13/11/2026 — Phase 2

- Shared layout: header desktop/mobile, footer, Container, Button, SectionHeading, ContactCTA.
- Menu mobile: nút hamburger, dialog, Escape đóng, trả focus về nút menu.
- Điện thoại/Zalo vẫn rỗng nên không có nút Liên hệ tư vấn, không có thanh nổi, không có `tel:` hay link Zalo.
- Liên kết menu trỏ đúng URL sẽ làm ở phase 4–5; các trang đó hiện 404.
- `npm run lint`, `npm run typecheck` và `npm run build` thành công.

## 13/11/2026 — Phase 3

- Trang chủ đủ 8 section: hero, giới thiệu vai trò kênh tiếp nhận, hai thẻ dịch vụ, lý do liên hệ, quy trình, khu vực Biên Hòa Đồng Nai, FAQ, CTA cuối trang.
- Copy lấy từ brief; không giá, không ảnh (chưa có ảnh được cấp quyền), không CTA `tel:`/Zalo khi config rỗng.
- FAQ mở bằng `details`. Hai thẻ dịch vụ trỏ `/thong-cong-bien-hoa` và `/hut-ham-cau-bien-hoa` (trang chưa làm, 404).
- `npm run lint`, `npm run typecheck` và `npm run build` thành công.

## 13/11/2026 — Phase 4

- `/thong-cong-bien-hoa` và `/hut-ham-cau-bien-hoa` có nội dung riêng: nhu cầu/thiết bị/bảo hành (thông cống) so với đối tượng/xe hút/hẻm nhỏ (hút hầm cầu).
- Mỗi trang có H1, metadata, breadcrumb, FAQ riêng, CTA từ config (đang ẩn vì chưa có số/Zalo). Không có số giá.
- `npm run lint`, `npm run typecheck` và `npm run build` thành công. Build có 2 route dịch vụ.

## 13/11/2026 — Phase 5

- `/bang-gia`: tư vấn chi phí, không số giá. `/chinh-sach-bao-mat`: mô tả tiếp nhận qua Zalo/điện thoại, chia sẻ khi khách đồng ý; đánh dấu cần rà soát pháp lý người vận hành và thời hạn lưu dữ liệu.
- Footer đủ 5 route MVP. CTA ẩn khi chưa có số/Zalo.
- `npm run lint`, `npm run typecheck` và `npm run build` thành công.

## 13/11/2026 — Phase 6

- Title/description/Open Graph từng trang. Favicon SVG MTX. Ảnh OG là wordmark (không dùng ảnh công trình). Không có ảnh dịch vụ vì chưa có quyền sử dụng.
- `siteConfig.siteUrl` đang rỗng: chưa gắn canonical; `sitemap.xml` trống cho đến khi điền domain rồi build lại. `robots.txt` Allow `/`.
- JSON-LD: WebSite (trang chủ), FAQPage (trang có FAQ), BreadcrumbList. Không LocalBusiness, không rating giả.
- `npm run lint`, `npm run typecheck` và `npm run build` thành công.

## 13/11/2026 — Phase 7

- `phone`, `zaloUrl`, `gaMeasurementId` vẫn rỗng trong `siteConfig`. CTA và script GA4 không render. Chính sách bảo mật ghi chưa cài analytics.
- Đã gắn `zalo_click`, `phone_click`, `contact_cta_click` (placement, service_type) và `view_service` trên hai trang dịch vụ. Event không gửi số điện thoại/tên.
- Chưa kiểm tra được event trên GA DebugView vì chưa có Measurement ID và số/Zalo thật.
- `npm run lint`, `npm run typecheck` và `npm run build` thành công.

## 13/11/2026 — Liên hệ thật

- `phone`: `0962928125`. `zaloUrl`: `https://zalo.me/0962928125`. GA4 vẫn tắt.
- CTA header/menu/hero/FAQ/footer/thanh nổi hiện Zalo và gọi điện. Sự kiện analytics chỉ chạy nếu sau này có Measurement ID.

## 13/11/2026 — Phase 8

- Build production (`out/`): 5 route MVP + `404.html`, `robots.txt` Allow `/`, `sitemap.xml` trống vì chưa có `siteUrl`.
- Trang 404 tiếng Việt, `noindex`. Padding đáy trên mobile để thanh nổi không che footer. Nút đóng menu có `aria-label`.
- Lint, typecheck, build thành công. HTML không có gtag. CTA: `tel:0962928125`, `https://zalo.me/0962928125`.
- Đã mở 5 trang, 404, menu mobile 375px (mở/Escape), tablet 768px không tràn ngang.
- Chưa deploy preview, chưa HTTPS/canonical. Chưa Lighthouse production. OG vẫn dùng localhost vì chưa domain.
- Chưa public: thiếu domain, logo/ảnh được cấp quyền, GA4, thông tin pháp lý người vận hành và thời hạn lưu dữ liệu trên chính sách bảo mật.

## 13/11/2026 — QA tổng thể (không sửa code)

- Đã chạy thật: `npm run lint`, `typecheck`, `build` (exit 0). Đọc `out/`. Browser local: 5 route MVP + `/khong-ton-tai`. Menu 375px mở/Escape/trả focus. Overflow 375/390/768/1280/1440. FAQ chuột mở `details`. CTA `tel:0962928125`, `https://zalo.me/0962928125`. Không gtag.
- Kết luận: MVP local ổn. **Chưa public.** Thiếu domain (canonical, sitemap rỗng, OG `localhost`), privacy còn rà soát pháp lý/thời hạn lưu, chưa HTTPS/preview/Lighthouse.
- High: B1 `metadataBase`/og:image = `http://localhost:3000` khi `siteUrl` rỗng. B2 `sitemap.xml` urlset trống. B3 cổng legal privacy (không phải bug code).
- Medium: B4 Zalo không `target="_blank"`. B5 404 `og:title` vẫn title trang chủ. B6 contrast `#64748b` trên `#f1f5f9` ≈ 4.34:1.
- Low: B7 `tel:` đi qua `ButtonLink external` nên có `rel="noopener noreferrer"`. B8 `aria-controls="mobile-navigation"` khi dialog chưa mount.
- Không ghi lỗi: GA4 tắt, canonical trống, câu bảo hành theo brief.
- Chưa test: Playwright (không có package), Lighthouse, GA DebugView, Tab/skip-link trên browser thật, click Zalo/tel trên máy, host tĩnh/HTTPS. Một số click Next `Link` trong Cursor browser không đổi URL; HTML tĩnh vẫn có `href` đúng.
- Thứ tự xử lý đã đề xuất: domain → `siteUrl` + build lại; rà soát privacy; Zalo `_blank`; contrast; OG 404 / tel / aria-controls. Chờ Product Owner duyệt.

## 23/11/2026 — Domain thử

- `siteUrl`: `https://lesontz.click`. Canonical, sitemap và `metadataBase` lấy từ đây sau khi build lại.
- Chưa xác nhận DNS/HTTPS/host. Privacy pháp lý và GA4 vẫn thiếu.

## 23/11/2026 — Ảnh minh họa tạm

- Logo header, cover hero, ảnh hai thẻ/trang dịch vụ. File trong `public/images/`. Chú thích: không phải ảnh công trình MTX. Logo tạm, chưa đăng ký.
- Site không có blog/avatar/bài viết nên không tạo slot post hay ảnh người giả.

## 23/11/2026 — CTA gọn

- Trang `/lien-he`: Zalo và Gọi điện nội dung một lần. Menu/hero/FAQ/banner trỏ về trang này, không còn cụm tel/Zalo rải rác.
- Nút nổi góc phải: Zalo, Gọi (ẩn trên `/lien-he`), và ↑ lên đầu trang khi đã cuộn. Thanh nổi full-width mobile đã bỏ.

## 23/11/2026 — UI trang chủ (layout, không copy cam kết)

- Trang chủ: pain points, thẻ dịch vụ có thanh accent, lý do dạng lưới, quy trình 4 bước số lớn, khu vực chip Biên Hòa/Đồng Nai (không phường, không chi nhánh).
- Header desktop: thanh mỏng khu vực + SĐT từ `siteConfig`. `/lien-he` 2 cột, không form, không giờ làm việc bịa.
- Footer lặp khu vực, SĐT, Zalo. `muted` đậm hơn để dễ đọc trên `surface`.
- Không lấy 15 phút/24/7/bảo hành số/keyword stuffing từ trang tham khảo.

## 25/11/2026 — Page banner trang chủ

- Homepage: dải banner full-width dưới header (`page-banner-home.jpg`), overlay “Trang chủ”, hero 2 cột giữ nguyên.
- Đã bỏ chú thích “Ảnh minh họa tạm thời. Không phải ảnh công trình MTX.” trên site.

## 25/11/2026 — Gỡ banner Trang chủ + copy

- Đã bỏ page banner khỏi homepage; hero sát header. Component/ảnh banner giữ lại.
- Header, footer, khối khu vực: **Khu vực phục vụ: Biên Hòa, Đồng Nai**.
- FAQ “ai sẽ thực hiện dịch vụ”: nhân viên MTX khảo sát/tư vấn/thực hiện, không nói đơn vị khác.
- Menu `text-base`; tab hiện tại brand + gạch dưới.
