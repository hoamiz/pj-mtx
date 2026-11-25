# MTX -- Đặc tả website và kế hoạch triển khai cho Cursor

> **Mục đích tài liệu:** Đây là tài liệu bàn giao để Cursor triển khai
> website giới thiệu và tiếp nhận yêu cầu dịch vụ cho thương hiệu Môi
> Trường Xanh (MTX). Cursor phải đọc tài liệu này trước khi thay đổi
> code và thực hiện theo từng task nhỏ, không tự mở rộng phạm vi.

-   Phiên bản: 1.0
-   Ngày: 13/11/2026
-   Ngôn ngữ website: Tiếng Việt
-   Thương hiệu: Môi Trường Xanh (MTX)
-   Khu vực: Biên Hòa, Đồng Nai

------------------------------------------------------------------------

## 1. Mục tiêu và phạm vi dự án

### 1.1. Mục tiêu

Xây dựng website giới thiệu hai dịch vụ:

1.  Thông cống nghẹt, thông đường ống thoát nước.
2.  Hút hầm cầu.

Website phục vụ khách hàng tại Biên Hòa, Đồng Nai. Mục tiêu chính là
giúp khách hiểu dịch vụ, xem thông tin cần thiết và liên hệ trực tiếp
qua Zalo hoặc điện thoại để được tư vấn.

### 1.2. Mô hình hoạt động và cách diễn đạt

MTX là **kênh tiếp nhận dịch vụ riêng**, do người vận hành website quản
lý. Khách liên hệ MTX qua Zalo hoặc điện thoại; MTX tiếp nhận nhu cầu và
hỗ trợ kết nối khách với đơn vị cung cấp dịch vụ thực tế.

Website phải minh bạch vai trò này. Không được khiến khách hiểu nhầm MTX
trực tiếp sở hữu xe, thiết bị, nhân viên hoặc tự thi công nếu điều đó
chưa được xác nhận.

Cách diễn đạt định hướng:

> Môi Trường Xanh (MTX) là kênh tiếp nhận nhu cầu và hỗ trợ kết nối dịch
> vụ thông cống, hút hầm cầu tại Biên Hòa, Đồng Nai. Khách hàng có thể
> liên hệ trực tiếp qua Zalo hoặc điện thoại để được tư vấn và hỗ trợ
> sắp xếp dịch vụ.

Không công khai tên chi tiết của công ty đối tác trên website nếu chưa
có yêu cầu khác. Tuy nhiên, không được giả mạo tư cách pháp nhân hoặc
che giấu thông tin mà pháp luật bắt buộc phải công bố.

### 1.3. Phạm vi MVP

**Bao gồm:** - Website tĩnh, responsive, ưu tiên mobile. - Trang chủ và
hai trang dịch vụ riêng. - Trang thông tin giá/báo giá. - Trang chính
sách bảo mật. - CTA Zalo và gọi điện, lấy thông tin từ cấu hình. - SEO
cơ bản và metadata. - Sitemap, robots.txt, favicon, Open Graph. - Có thể
tích hợp GA4 và Google Search Console sau khi có ID/tài khoản. - Nội
dung quản lý trực tiếp trong source code.

**Không bao gồm trong MVP:** - Backend/API riêng. - Database. - CMS. -
Đăng nhập, phân quyền, admin dashboard. - Form gửi dữ liệu về server. -
CRM hoặc hệ thống quản lý lead. - Thanh toán/đặt hàng trực tuyến. - Tự
động gửi tin nhắn Zalo. - Tính giá tự động. - Blog hoặc hàng loạt trang
SEO theo phường/xã. - Tự tạo đánh giá, testimonial, số liệu hoặc chứng
nhận.

### 1.4. Công nghệ dự kiến

-   Next.js (App Router).
-   TypeScript.
-   Tailwind CSS.
-   Static export nếu tương thích với cấu hình dự án và nhu cầu deploy.
-   GitHub để quản lý source.
-   Cloudflare Pages là phương án hosting dự kiến.

**Lưu ý cho Cursor:** Trước khi cài đặt hoặc thay đổi dependency, kiểm
tra repository hiện tại, phiên bản Node/package manager, convention, cấu
hình Next.js và scripts. Không tự nâng cấp major version hoặc thay
framework nếu không có lý do và chưa được duyệt.

------------------------------------------------------------------------

## 2. Thông tin thương hiệu

### 2.1. Nhận diện

  Thuộc tính        Giá trị
  ----------------- -----------------------------------------------------------
  Tên thương hiệu   Môi Trường Xanh
  Tên viết tắt      MTX
  Nhóm dịch vụ      Thông cống & Hút hầm cầu
  Khu vực           Biên Hòa, Đồng Nai
  Slogan đề xuất    Giải pháp thông cống và hút hầm cầu tại Biên Hòa
  Phong cách        Sạch sẽ, đáng tin cậy, rõ ràng, chuyên nghiệp
  Logo              Chữ/biểu tượng MTX; cần tạo hoặc cung cấp file chính thức

Tên, slogan và logo là định hướng nhận diện. Trước khi public cần kiểm
tra khả năng sử dụng tên thương hiệu, domain và quyền sử dụng tài sản
nhận diện.

### 2.2. Màu sắc đề xuất

-   Xanh lá chính: `#16834A`
-   Xanh dương phụ: `#1677B8`
-   Nền sáng: `#F1F5F9`
-   Chữ chính: `#1F2937`
-   Chữ phụ: `#64748B`
-   Trắng: `#FFFFFF`

Màu sắc cần được triển khai bằng design tokens/CSS variables hoặc theme
thống nhất, tránh hard-code rải rác. Đảm bảo tương phản chữ và nền đủ
đọc.

### 2.3. Logo và tài sản thương hiệu

-   Tạo logo dạng SVG nếu có thể; nếu chưa có logo chính thức, dùng
    wordmark MTX đơn giản làm placeholder có chủ đích.
-   Không tự nhận logo placeholder là logo đã đăng ký.
-   Favicon sử dụng biểu tượng MTX đơn giản.
-   Không dùng logo công ty đối tác nếu chưa được cho phép.
-   Không sử dụng hình ảnh/nhận diện của đơn vị khác như thể thuộc MTX.

------------------------------------------------------------------------

## 3. Thông tin nội dung đã xác nhận

### 3.1. Đối tượng khách hàng

-   Hộ gia đình.
-   Nhà trọ.
-   Cửa hàng.
-   Nhà hàng.
-   Công trình kinh doanh (đặc biệt với dịch vụ hút hầm cầu).

### 3.2. Dịch vụ thông cống

  -----------------------------------------------------------------------
  Hạng mục                            Thông tin
  ----------------------------------- -----------------------------------
  Dịch vụ                             Thông cống nghẹt, thông đường ống
                                      thoát nước

  Thiết bị                            Thiết bị chuyên dụng

  Đối tượng                           Nhà dân, nhà trọ, cửa hàng, nhà
                                      hàng

  Thời gian                           Luôn tiếp nhận yêu cầu và hỗ trợ
                                      hẹn lịch sớm nhất

  Báo giá                             Dựa trên tình trạng, vị trí, phương
                                      pháp và khối lượng công việc

  Bảo hành                            Có bảo hành; chưa có thời hạn/điều
                                      kiện cụ thể
  -----------------------------------------------------------------------

Nội dung giới thiệu đề xuất:

> **Dịch vụ thông cống tại Biên Hòa**
>
> MTX tiếp nhận nhu cầu thông cống nghẹt và thông đường ống thoát nước
> cho hộ gia đình, nhà trọ, cửa hàng và nhà hàng tại Biên Hòa.
>
> Khách hàng có thể liên hệ trực tiếp qua Zalo hoặc điện thoại để được
> tư vấn. Chi phí được xác định dựa trên tình trạng thực tế, vị trí,
> phương pháp xử lý và khối lượng công việc.
>
> MTX hỗ trợ kết nối với đơn vị cung cấp dịch vụ để khách hàng được tư
> vấn và sắp xếp lịch phù hợp.

### 3.3. Dịch vụ hút hầm cầu

  Hạng mục                   Thông tin
  -------------------------- --------------------------------------------
  Dịch vụ                    Hút hầm cầu
  Đối tượng                  Nhà dân, nhà trọ, cửa hàng, nhà hàng
  Công trình                 Hầm cầu gia đình, công trình kinh doanh
  Phương pháp                Hút bằng xe chuyên dụng
  Công trình trong hẻm nhỏ   Cần khảo sát điều kiện thực tế
  Báo giá                    Tư vấn/khảo sát trước khi xác định chi phí
  Bảo hành                   Chưa xác nhận điều kiện

Nội dung giới thiệu đề xuất:

> **Dịch vụ hút hầm cầu tại Biên Hòa**
>
> MTX tiếp nhận nhu cầu hút hầm cầu cho hộ gia đình, nhà trọ, cửa hàng,
> nhà hàng và công trình kinh doanh tại Biên Hòa.
>
> Dịch vụ sử dụng xe hút chuyên dụng. Đối với công trình trong hẻm nhỏ
> hoặc có điều kiện tiếp cận đặc biệt, cần khảo sát thực tế để xác định
> phương án phù hợp.
>
> Khách hàng có thể liên hệ trực tiếp qua Zalo hoặc điện thoại để được
> tư vấn và hỗ trợ kết nối đơn vị thực hiện.

### 3.4. Quy tắc với thông tin chưa xác nhận

**Quy tắc bắt buộc cho toàn website:**

Nếu thông tin chưa có dữ liệu chính xác hoặc chưa được xác nhận, không
để câu hỏi bỏ trống, không tự suy đoán và không tạo cam kết. Chuyển
thành lời mời liên hệ tư vấn.

Cách diễn đạt chuẩn:

-   Giá: "Liên hệ để được tư vấn và báo giá theo tình trạng thực tế."
-   Bảo hành: "Liên hệ để được tư vấn chi tiết về chính sách bảo hành."
-   Thời gian thực hiện: "Liên hệ để được tư vấn và hỗ trợ sắp xếp lịch
    sớm nhất."
-   Hẻm nhỏ: "Liên hệ để được khảo sát điều kiện thực tế và tư vấn
    phương án phù hợp."
-   Khu vực cụ thể: "Liên hệ để xác nhận khu vực phục vụ."
-   Phương pháp: "Liên hệ để được tư vấn theo tình trạng thực tế."
-   Chi phí phát sinh: "Các chi phí sẽ được tư vấn trước khi thực hiện."
-   Mọi thông tin khác chưa rõ: "Vui lòng liên hệ MTX qua Zalo hoặc điện
    thoại để được tư vấn."

Không được tự thêm: - Giá cụ thể, giá từ, giá rẻ nhất. - Thời gian có
mặt kiểu "15 phút", "30 phút". - Cam kết hoạt động 24/7 nếu chưa xác
nhận. "Luôn tiếp nhận yêu cầu" không đồng nghĩa chắc chắn thi công
24/7. - Thời hạn bảo hành hoặc điều kiện bảo hành. - Số lượng xe, dung
tích xe, số năm kinh nghiệm. - Số khách hàng, số công trình, tỷ lệ hài
lòng. - Chứng nhận, giấy phép, giải thưởng. - Đánh giá khách hàng hoặc
lời chứng thực giả. - Cam kết "không phát sinh", "triệt để 100%", "rẻ
nhất". - Danh sách phường/xã hoặc vùng phục vụ chưa được xác nhận.

### 3.5. Thông tin liên hệ

-   Số điện thoại: đã có nhưng sẽ bổ sung sau.
-   Zalo: đã có nhưng sẽ bổ sung sau.
-   Không tự tạo số điện thoại hoặc link Zalo giả.
-   Để cấu hình rỗng/null và ẩn CTA tương ứng khi chưa có dữ liệu thật.
-   Khi số/link được cung cấp, cập nhật tại một nơi duy nhất (ví dụ
    `siteConfig`), không sửa nhiều component.

------------------------------------------------------------------------

## 4. Sitemap và cấu trúc trang

MVP gồm 5 route:

  -------------------------------------------------------------------------
  Route                     Tên trang               Mục tiêu
  ------------------------- ----------------------- -----------------------
  `/`                       Trang chủ               Giới thiệu MTX và điều
                                                    hướng đến hai dịch vụ

  `/thong-cong-bien-hoa`    Thông cống              Landing page riêng cho
                                                    dịch vụ thông cống

  `/hut-ham-cau-bien-hoa`   Hút hầm cầu             Landing page riêng cho
                                                    dịch vụ hút hầm cầu

  `/bang-gia`               Bảng giá                Giải thích cách xác
                                                    định chi phí, hướng
                                                    khách liên hệ

  `/chinh-sach-bao-mat`     Chính sách bảo mật      Thông báo việc tiếp
                                                    nhận và xử lý dữ liệu
  -------------------------------------------------------------------------

Các phần dùng chung: - Header. - Footer. - CTA liên hệ. - Nút liên hệ
nổi trên mobile. - Breadcrumb cho trang dịch vụ và trang con. - FAQ
component nếu phù hợp.

Không cần trang `/lien-he` riêng trong MVP nếu header/footer và CTA đã
cung cấp đầy đủ cách liên hệ. Có thể bổ sung sau.

------------------------------------------------------------------------

## 5. Wireframe và bố cục nội dung

### 5.1. Header dùng chung

Desktop: - Logo MTX bên trái. - Menu: Trang chủ, Thông cống, Hút hầm
cầu, Bảng giá. - CTA "Liên hệ tư vấn". - Không hiển thị số điện thoại
placeholder.

Mobile: - Logo bên trái. - Menu hamburger bên phải. - Có CTA dễ chạm,
không làm header quá cao. - Đảm bảo menu keyboard-accessible và có trạng
thái focus.

### 5.2. Trang chủ `/`

Thứ tự section đề xuất:

1.  **Hero**
    -   Eyebrow: "DỊCH VỤ TẠI BIÊN HÒA, ĐỒNG NAI".
    -   H1: "Thông Cống & Hút Hầm Cầu Tại Biên Hòa".
    -   Mô tả: "MTX tiếp nhận nhu cầu, tư vấn và hỗ trợ kết nối dịch vụ
        cho hộ gia đình, nhà trọ, cửa hàng và nhà hàng."
    -   CTA Zalo và gọi điện (chỉ hiện khi có cấu hình).
    -   Ảnh thực tế được phép sử dụng hoặc ảnh minh họa có bản quyền phù
        hợp.
2.  **Giới thiệu ngắn về MTX**
    -   Giải thích MTX là kênh tiếp nhận và hỗ trợ kết nối dịch vụ.
    -   Không nói MTX trực tiếp thi công nếu không đúng.
3.  **Hai thẻ dịch vụ**
    -   Thông cống: mô tả thông cống nghẹt và đường ống thoát nước.
    -   Hút hầm cầu: mô tả hút hầm cầu gia đình và công trình kinh
        doanh.
    -   Mỗi thẻ có link đến landing page tương ứng.
4.  **Lý do liên hệ MTX**
    -   Tiếp nhận nhu cầu qua Zalo/điện thoại.
    -   Tư vấn theo tình trạng thực tế.
    -   Hỗ trợ kết nối đơn vị cung cấp dịch vụ.
    -   Hỗ trợ hẹn lịch sớm nhất có thể.
    -   Chỉ dùng các nội dung đã xác nhận; không phóng đại thành cam
        kết.
5.  **Quy trình tiếp nhận**
    -   Khách liên hệ.
    -   MTX tiếp nhận nhu cầu và thông tin khu vực.
    -   MTX tư vấn ban đầu và, khi khách đồng ý, chuyển thông tin cần
        thiết cho đơn vị cung cấp.
    -   Đơn vị cung cấp liên hệ để tư vấn/khảo sát/báo giá và thống nhất
        thực hiện.
    -   Trình bày đúng vai trò kết nối, không khiến khách nghĩ MTX là
        đơn vị trực tiếp thi công.
6.  **Khu vực**
    -   Biên Hòa, Đồng Nai.
    -   Không liệt kê các địa bàn nhỏ chưa xác nhận.
7.  **FAQ tổng quan**
    -   MTX cung cấp dịch vụ gì?
    -   MTX tiếp nhận yêu cầu ở đâu?
    -   Làm sao để nhận tư vấn/báo giá?
    -   Ai sẽ liên hệ để thực hiện dịch vụ?
    -   CTA liên hệ sau FAQ.
8.  **CTA cuối trang**
    -   "Bạn cần thông cống hoặc hút hầm cầu tại Biên Hòa?"
    -   "Liên hệ MTX để được tư vấn."
9.  **Footer**
    -   Logo/tên MTX.
    -   Mô tả vai trò tiếp nhận và kết nối.
    -   Khu vực Biên Hòa, Đồng Nai.
    -   Link các trang.
    -   Điện thoại/Zalo chỉ khi đã cấu hình.
    -   Link chính sách bảo mật.

### 5.3. Trang thông cống `/thong-cong-bien-hoa`

Thứ tự section:

1.  Breadcrumb.
2.  Hero:
    -   H1: "Dịch Vụ Thông Cống Tại Biên Hòa".
    -   Mô tả: "Tiếp nhận yêu cầu thông cống nghẹt và thông đường ống
        thoát nước cho nhà dân, nhà trọ, cửa hàng và nhà hàng."
    -   CTA liên hệ.
3.  Giới thiệu dịch vụ và phạm vi đã xác nhận.
4.  Các nhu cầu khách có thể liên hệ:
    -   Cống nghẹt.
    -   Đường ống thoát nước bị tắc/nghẹt.
    -   Không mở rộng sang xử lý bể phốt, nạo vét hoặc dịch vụ khác khi
        chưa xác nhận.
5.  Thiết bị:
    -   Chỉ nói "thiết bị chuyên dụng".
    -   Không tự nêu thương hiệu/model/phương pháp cụ thể.
6.  Quy trình tiếp nhận:
    -   Liên hệ MTX.
    -   Cung cấp tình trạng và vị trí.
    -   Được tư vấn/khảo sát và báo giá.
    -   Thống nhất phương án và lịch với đơn vị cung cấp.
7.  Chi phí và bảo hành:
    -   Giá phụ thuộc tình trạng, vị trí, phương pháp, khối lượng.
    -   Bảo hành: có, nhưng điều kiện/thời hạn cần liên hệ tư vấn.
8.  FAQ riêng cho thông cống.
9.  CTA cuối trang.

### 5.4. Trang hút hầm cầu `/hut-ham-cau-bien-hoa`

Thứ tự section:

1.  Breadcrumb.
2.  Hero:
    -   H1: "Dịch Vụ Hút Hầm Cầu Tại Biên Hòa".
    -   Mô tả: "Tiếp nhận nhu cầu hút hầm cầu cho hộ gia đình, nhà trọ,
        cửa hàng, nhà hàng và công trình kinh doanh."
    -   CTA liên hệ.
3.  Đối tượng/công trình:
    -   Nhà dân.
    -   Nhà trọ.
    -   Cửa hàng, nhà hàng.
    -   Công trình kinh doanh.
4.  Phương tiện:
    -   Hút bằng xe chuyên dụng.
    -   Không nêu dung tích hoặc số lượng xe khi chưa có dữ liệu.
5.  Điều kiện công trình:
    -   Công trình trong hẻm nhỏ cần khảo sát.
    -   CTA "Liên hệ để được khảo sát và tư vấn".
6.  Quy trình tiếp nhận:
    -   Liên hệ MTX.
    -   Cung cấp vị trí và nhu cầu.
    -   Hỗ trợ kết nối đơn vị cung cấp.
    -   Khảo sát/trao đổi phương án, báo giá và hẹn lịch.
7.  Chi phí:
    -   Liên hệ để tư vấn/khảo sát và báo giá.
8.  FAQ riêng cho hút hầm cầu.
9.  CTA cuối trang.

### 5.5. Trang bảng giá `/bang-gia`

Không tạo bảng giá số khi chưa có bảng giá được xác nhận.

Nội dung: - H1: "Tư Vấn Chi Phí Thông Cống & Hút Hầm Cầu". - Giải thích
giá phụ thuộc loại dịch vụ, tình trạng, vị trí, phương pháp và khối
lượng công việc. - Với công trình cần khảo sát, thông báo rõ cần khảo
sát trước khi xác định phương án/chi phí. - Khuyến khích khách cung cấp
mô tả và vị trí qua Zalo/điện thoại. - CTA "Liên hệ để được tư vấn và
báo giá". - Không sử dụng giá giả, giá "từ", bảng giá tham khảo tự nghĩ
ra.

### 5.6. Trang chính sách bảo mật `/chinh-sach-bao-mat`

Cần viết nội dung phù hợp với hoạt động thực tế, không dùng mẫu chung
chung không liên quan.

Các phần cần có: - Đơn vị/kênh vận hành và cách liên hệ. - Loại thông
tin khách có thể tự nguyện cung cấp: tên, số điện thoại, khu vực/địa chỉ
công trình, nội dung yêu cầu. - Mục đích: tiếp nhận, tư vấn và hỗ trợ
kết nối dịch vụ. - Việc chuyển thông tin cần thiết cho đơn vị cung cấp
dịch vụ: phải thông báo và có sự đồng ý phù hợp trước khi chia sẻ. -
Cách lưu trữ, giới hạn người được truy cập, thời gian lưu giữ và cách
yêu cầu hỗ trợ/xóa/chỉnh sửa dữ liệu. - Cookies/analytics nếu thực sự
được cài đặt. - Kênh tiếp nhận yêu cầu về dữ liệu cá nhân.

Không tuyên bố tuân thủ tuyệt đối hoặc tự đặt thời hạn lưu dữ liệu khi
chưa có quy trình thực tế. Nội dung chính sách cần được rà soát theo
pháp luật Việt Nam hiện hành trước khi website hoạt động chính thức.

### 5.7. FAQ đề xuất

**FAQ chung** - MTX hỗ trợ những dịch vụ nào? - MTX tiếp nhận nhu cầu
thông cống nghẹt, thông đường ống thoát nước và hút hầm cầu tại Biên
Hòa. - Tôi cần liên hệ bằng cách nào? - Bạn có thể liên hệ trực tiếp qua
Zalo hoặc điện thoại để được tư vấn. - Sau khi liên hệ, ai sẽ thực hiện
dịch vụ? - MTX hỗ trợ tiếp nhận nhu cầu và kết nối với đơn vị cung cấp
dịch vụ phù hợp. Đơn vị cung cấp sẽ trao đổi về phương án, chi phí và
lịch thực hiện. - Giá dịch vụ được xác định như thế nào? - Chi phí phụ
thuộc tình trạng, vị trí, phương pháp và khối lượng công việc. Vui lòng
liên hệ để được tư vấn.

**FAQ thông cống** - MTX tiếp nhận thông cống nghẹt và thông đường ống
thoát nước không? - Có, MTX tiếp nhận yêu cầu cho nhà dân, nhà trọ, cửa
hàng và nhà hàng tại Biên Hòa. - Thiết bị sử dụng là gì? - Dịch vụ sử
dụng thiết bị chuyên dụng phù hợp với công việc thực tế. Liên hệ để được
tư vấn cụ thể. - Giá thông cống bao nhiêu? - Liên hệ để được tư vấn và
báo giá theo tình trạng thực tế. - Có bảo hành không? - Có chính sách
bảo hành. Liên hệ để được tư vấn chi tiết về điều kiện áp dụng.

**FAQ hút hầm cầu** - Có nhận hút hầm cầu cho nhà trọ và công trình kinh
doanh không? - MTX tiếp nhận nhu cầu cho nhà dân, nhà trọ, cửa hàng, nhà
hàng và công trình kinh doanh. - Dịch vụ sử dụng phương tiện gì? - Dịch
vụ hút bằng xe chuyên dụng. - Có nhận công trình trong hẻm nhỏ không? -
Cần khảo sát điều kiện tiếp cận thực tế. Vui lòng liên hệ để được tư
vấn. - Giá hút hầm cầu bao nhiêu? - Liên hệ để được tư vấn/khảo sát và
báo giá. - Thời gian thực hiện khi nào? - MTX tiếp nhận yêu cầu và hỗ
trợ hẹn lịch sớm nhất có thể. Vui lòng liên hệ để được tư vấn.

Chỉ triển khai FAQ schema nếu FAQ thực sự hiển thị trên trang và đáp ứng
hướng dẫn của công cụ tìm kiếm. Không kỳ vọng FAQ schema chắc chắn tạo
rich result.

------------------------------------------------------------------------

## 6. Giao diện và trải nghiệm người dùng

### 6.1. Phong cách

-   Sạch sẽ, rõ ràng, đáng tin cậy.
-   Hình ảnh dịch vụ thực tế, không gây phản cảm.
-   Thiết kế mobile-first.
-   Không lạm dụng animation, gradient hoặc hiệu ứng.
-   Ưu tiên nội dung và CTA dễ nhận biết.
-   Khoảng trắng đủ rộng, typography dễ đọc.
-   Không sử dụng popup gây cản trở.

### 6.2. Typography

-   Chọn font hỗ trợ tiếng Việt tốt.
-   Dùng một font family chính, tối đa một font phụ nếu có lý do.
-   H1/H2 phân cấp rõ.
-   Body text đủ lớn trên mobile.
-   Line-height dễ đọc.
-   Tránh chữ in hoa toàn bộ ở các đoạn dài.

### 6.3. Component dùng chung

Có thể tạo các component sau nếu phù hợp convention của repository:

-   `SiteHeader`
-   `MobileNavigation`
-   `SiteFooter`
-   `HeroSection`
-   `ServiceCard`
-   `ServiceGrid`
-   `PrimaryCTA`
-   `ContactCTA`
-   `ProcessSteps`
-   `ServiceAreaSection`
-   `FAQList`
-   `Breadcrumbs`
-   `FloatingContactBar`
-   `SectionHeading`

Không cần tạo component cho mọi đoạn markup nhỏ. Tránh over-engineering.

### 6.4. CTA và liên hệ

Tất cả CTA phải dùng cấu hình tập trung, ví dụ:

``` ts
export const siteConfig = {
  name: "Môi Trường Xanh",
  shortName: "MTX",
  phone: "",
  zaloUrl: "",
  serviceArea: "Biên Hòa, Đồng Nai",
};
```

Quy tắc: - Không tự bịa số điện thoại hoặc URL. - Nếu `phone` rỗng, ẩn
nút gọi điện hoặc render trạng thái chưa cấu hình trong môi trường
development; không tạo link `tel:` rỗng. - Nếu `zaloUrl` rỗng, ẩn CTA
Zalo; không tạo URL giả. - Khi có thông tin thật, chỉ cần sửa config. -
Link gọi điện dùng `tel:` với số hợp lệ. - Link Zalo phải được kiểm tra
trên mobile và desktop. - Có thể chuẩn bị CTA theo từng dịch vụ nhưng
không bắt buộc phải tự điền nội dung tin nhắn nếu chưa thống nhất.

### 6.5. Hình ảnh

Ưu tiên: 1. Ảnh xe/thiết bị/công trình thật do đối tác cung cấp và cho
phép sử dụng. 2. Ảnh stock có giấy phép phù hợp, chỉ dùng như ảnh minh
họa. 3. Không dùng ảnh của đối thủ hoặc ảnh lấy từ kết quả tìm kiếm mà
không có quyền sử dụng.

Quy tắc: - Tối ưu kích thước và định dạng WebP/AVIF khi phù hợp. - Có
`alt` mô tả đúng nội dung ảnh. - Không nhồi từ khóa vào alt. - Đặt kích
thước/aspect ratio để giảm layout shift. - Ảnh hero không lazy-load nếu
là ảnh LCP quan trọng; ảnh dưới màn hình có thể lazy-load. - Không ghi
chú ảnh minh họa thành ảnh công trình MTX. - Không dùng hình ảnh phản
cảm hoặc mô tả sai dịch vụ.

### 6.6. Accessibility

-   Dùng semantic HTML: `header`, `nav`, `main`, `section`, `footer`.
-   Mỗi trang có một H1 chính.
-   Thứ tự heading hợp lý.
-   Button dùng cho hành động; anchor dùng cho điều hướng.
-   Tất cả control có accessible name.
-   Menu mobile hỗ trợ keyboard và focus.
-   Focus indicator rõ.
-   Màu chữ/nền đạt tương phản phù hợp.
-   Ảnh nội dung có alt; ảnh trang trí có alt rỗng.
-   Không chỉ dùng màu để biểu thị trạng thái.

------------------------------------------------------------------------

## 7. SEO và metadata

### 7.1. Từ khóa mục tiêu

**Thông cống:** - thông cống Biên Hòa - thông cống nghẹt Biên Hòa -
thông đường ống thoát nước Biên Hòa - dịch vụ thông cống Biên Hòa

**Hút hầm cầu:** - hút hầm cầu Biên Hòa - dịch vụ hút hầm cầu Biên Hòa -
hút hầm cầu tại nhà Biên Hòa - giá hút hầm cầu Biên Hòa

Không nhồi từ khóa và không tạo hàng loạt trang mỏng chỉ thay tên
phường/xã.

### 7.2. SEO title đề xuất

-   Trang chủ: `Môi Trường Xanh MTX – Thông Cống, Hút Hầm Cầu Biên Hòa`
-   Thông cống: `Dịch Vụ Thông Cống Biên Hòa – Môi Trường Xanh MTX`
-   Hút hầm cầu: `Dịch Vụ Hút Hầm Cầu Biên Hòa – Môi Trường Xanh MTX`
-   Bảng giá: `Tư Vấn Giá Thông Cống & Hút Hầm Cầu Biên Hòa – MTX`
-   Chính sách: `Chính Sách Bảo Mật – Môi Trường Xanh MTX`

Description phải tự nhiên, mô tả đúng trang và không hứa hẹn chưa được
xác nhận.

### 7.3. Technical SEO

-   Metadata riêng cho từng route.
-   Canonical URL đúng domain sau khi domain được chốt.
-   `sitemap.xml`.
-   `robots.txt`.
-   Open Graph title/description/image.
-   Favicon.
-   URL dễ đọc, nhất quán.
-   Internal links giữa trang chủ và hai trang dịch vụ.
-   Breadcrumbs cho trang con.
-   Không chặn nhầm CSS/JS hoặc các trang cần index.
-   Không index trang preview/staging nếu không muốn public.
-   Kiểm tra HTML output của static export.
-   Structured data chỉ dùng loại phù hợp, thông tin phải có thật và
    hiển thị phù hợp trên trang. Không tự khai báo LocalBusiness với địa
    chỉ/đánh giá giả. Không khai báo rating hoặc review không tồn tại.

### 7.4. Tracking

Có thể tích hợp GA4 sau khi được cung cấp Measurement ID.

Event đề xuất: - `zalo_click` - `phone_click` - `view_service` với
parameter `service_type` - `contact_cta_click` với parameter `placement`
và `service_type` nếu có.

Không ghi số điện thoại, tên hoặc thông tin cá nhân của khách vào
analytics event.

Lượt click không đồng nghĩa với cuộc trò chuyện hoặc lead hợp lệ. Không
báo cáo click là khách hàng thực tế.

------------------------------------------------------------------------

## 8. Kiến trúc source code đề xuất

Đây là cấu trúc tham khảo; trước tiên phải kiểm tra cấu trúc repository
hiện có và điều chỉnh theo convention, không ép repo phải giống tuyệt
đối.

``` text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    thong-cong-bien-hoa/
      page.tsx
    hut-ham-cau-bien-hoa/
      page.tsx
    bang-gia/
      page.tsx
    chinh-sach-bao-mat/
      page.tsx
  components/
    layout/
      site-header.tsx
      site-footer.tsx
      mobile-navigation.tsx
    sections/
      hero-section.tsx
      service-grid.tsx
      process-steps.tsx
      service-area-section.tsx
      contact-cta.tsx
      faq-list.tsx
    ui/
      button.tsx
      container.tsx
      section-heading.tsx
  config/
    site.ts
  content/
    home.ts
    drain-cleaning.ts
    septic-pumping.ts
    faq.ts
  lib/
    metadata.ts
    utils.ts
public/
  images/
  icons/
  favicon.ico
```

Nếu dự án hiện tại dùng cấu trúc khác, ưu tiên giữ convention sẵn có.
Không tạo thêm abstraction nếu chỉ có một nơi sử dụng và chưa có nhu cầu
tái sử dụng rõ ràng.

------------------------------------------------------------------------

## 9. Quy trình làm việc với Cursor

### 9.1. Nguyên tắc bắt buộc

1.  Đọc repository và tài liệu hiện có trước khi sửa.
2.  Kiểm tra `package.json`, scripts, framework version, cấu trúc route
    và component conventions.
3.  Chỉ làm một task nhỏ trong mỗi lần giao việc.
4.  Không tự ý đổi kiến trúc, dependency, framework hoặc cấu hình
    deploy.
5.  Không tạo backend/database/CMS/auth.
6.  Không thay đổi nội dung đã xác nhận theo hướng tự bịa thông tin.
7.  Nếu thiếu thông tin, dùng quy tắc "liên hệ để được tư vấn".
8.  Không tạo link/số điện thoại giả.
9.  Không sửa ngoài phạm vi task.
10. Sau mỗi task, chạy các kiểm tra liên quan và báo cáo chính xác.
11. Không tuyên bố test thành công nếu chưa thực sự chạy.
12. Không dùng worktree hoặc nhiều agent cho task thông thường.
13. Nếu phát hiện cần thay đổi shared contract hoặc kiến trúc, giải
    thích tác động và xin xác nhận trước.

### 9.2. Quy trình cho mỗi task

1.  **Inspect:** đọc file liên quan, tìm convention và trạng thái hiện
    tại.
2.  **Plan:** nêu ngắn gọn file dự kiến sửa và cách làm.
3.  **Implement:** sửa đúng phạm vi.
4.  **Validate:** chạy lint, typecheck, test liên quan.
5.  **Review:** kiểm tra diff, responsive/accessibility nếu có UI.
6.  **Report:** nêu file thay đổi, hành vi, lệnh test và kết quả, vấn đề
    còn lại.
7.  **Update context:** cập nhật `CONTEXT.md` sau task làm thay đổi
    trạng thái dự án, ghi ngày và bullet ngắn; không paste code vào file
    này.

### 9.3. Prompt khởi đầu cho Cursor

``` text
Đọc toàn bộ tài liệu đặc tả website MTX này trước khi làm việc.

Task hiện tại CHỈ là khảo sát repository, chưa sửa code.

Hãy:
1. Kiểm tra cấu trúc repository và các file hướng dẫn hiện có.
2. Đọc package.json, Next.js config, TypeScript config, Tailwind config và scripts.
3. Xác định phiên bản framework, package manager và cách chạy lint/typecheck/test/build.
4. Đối chiếu trạng thái hiện tại với yêu cầu trong tài liệu MTX.
5. Báo cáo:
   - Những gì đã có.
   - Những gì còn thiếu.
   - Rủi ro hoặc xung đột.
   - Đề xuất các task nhỏ theo thứ tự.

Không cài package, không sửa file, không tạo route và không thay đổi cấu hình trong task này.
Không giả định công nghệ hoặc tính năng chưa có trong repository.
```

------------------------------------------------------------------------

## 10. Kế hoạch triển khai theo phase

Không yêu cầu Cursor tạo toàn bộ website trong một prompt. Thực hiện
tuần tự và kiểm tra từng phase.

### Phase 0 -- Repository audit

-   Đọc repository.
-   Xác nhận cấu trúc, framework, scripts.
-   Xác nhận static export có phù hợp.
-   Lập danh sách task nhỏ.
-   Chưa sửa code.

**Điều kiện hoàn thành:** Có báo cáo audit và kế hoạch được duyệt.

### Phase 1 -- Project foundation

-   Thiết lập hoặc xác nhận design tokens.
-   Font hỗ trợ tiếng Việt.
-   Global CSS/reset.
-   Site config.
-   Layout cơ bản.
-   Metadata mặc định.
-   Xác nhận build.

**Điều kiện hoàn thành:** Project chạy và build được; chưa cần hoàn
thiện toàn bộ trang.

### Phase 2 -- Shared layout

-   Header desktop/mobile.
-   Navigation.
-   Footer.
-   Container, button, section heading.
-   CTA component lấy dữ liệu từ config.
-   Kiểm tra keyboard và responsive.

**Điều kiện hoàn thành:** Shared layout hoạt động ở mobile và desktop;
không có link liên hệ giả.

### Phase 3 -- Homepage

Triển khai từng section: 1. Hero. 2. Giới thiệu MTX. 3. Hai service
cards. 4. Lý do liên hệ. 5. Quy trình tiếp nhận. 6. Khu vực. 7. FAQ. 8.
CTA cuối trang.

**Điều kiện hoàn thành:** Nội dung đúng Content Brief, responsive, CTA
xử lý đúng trạng thái chưa có số/Zalo.

### Phase 4 -- Service pages

Làm riêng từng trang: - `/thong-cong-bien-hoa` - `/hut-ham-cau-bien-hoa`

Mỗi trang có nội dung riêng, không chỉ copy template rồi thay tên dịch
vụ.

**Điều kiện hoàn thành:** Mỗi trang có H1, metadata, nội dung, FAQ và
CTA phù hợp.

### Phase 5 -- Pricing and privacy

-   Trang bảng giá không có số giá tự tạo.
-   Trang bảo mật mô tả đúng việc tiếp nhận và chuyển thông tin.
-   Kiểm tra footer links.
-   Rà soát nội dung pháp lý trước khi public.

**Điều kiện hoàn thành:** Không còn placeholder nội dung giả; các thông
tin pháp lý chưa rõ được đánh dấu cần rà soát.

### Phase 6 -- SEO and assets

-   Title/description từng trang.
-   Canonical khi có domain.
-   Sitemap/robots.
-   OG image.
-   Favicon.
-   Ảnh được cấp quyền và tối ưu.
-   Internal links.
-   Structured data phù hợp, không khai báo dữ liệu giả.

**Điều kiện hoàn thành:** Kiểm tra metadata và crawl cơ bản.

### Phase 7 -- Analytics and contact configuration

-   Thêm Zalo URL và số điện thoại thật khi được cung cấp.
-   Kiểm tra `zalo_click`, `phone_click`.
-   GA4 nếu có Measurement ID.
-   Không gửi PII vào analytics.
-   Không coi click là lead.

**Điều kiện hoàn thành:** CTA mở đúng đích; event được kiểm tra trong
môi trường phù hợp.

### Phase 8 -- Production readiness

-   Build production.
-   Kiểm tra static output.
-   Deploy preview.
-   Kiểm tra domain/HTTPS sau khi có domain.
-   Kiểm tra mobile/desktop.
-   Kiểm tra SEO và accessibility.
-   Kiểm tra link, ảnh, 404, console errors.
-   Kiểm tra chính sách bảo mật và thông tin công khai.
-   Chỉ public khi các mục bắt buộc hoàn thành.

------------------------------------------------------------------------

## 11. Checklist kiểm thử

### 11.1. Functional

-   [ ] Logo click về trang chủ.
-   [ ] Header navigation đến đúng route.
-   [ ] Mobile menu mở/đóng đúng.
-   [ ] Service card dẫn đến đúng trang.
-   [ ] Breadcrumb hoạt động.
-   [ ] CTA không tạo URL rỗng hoặc giả.
-   [ ] Khi chưa cấu hình số/Zalo, CTA tương ứng được ẩn hoặc xử lý rõ
    ràng.
-   [ ] Khi cấu hình số thật, `tel:` mở đúng số.
-   [ ] Khi cấu hình Zalo thật, link mở đúng tài khoản.
-   [ ] Footer links đúng.
-   [ ] Không có link `#` giả cho hành động quan trọng.
-   [ ] Trang 404 có xử lý phù hợp.

### 11.2. Responsive

Kiểm tra ít nhất: - \[ \] Mobile nhỏ khoảng 320--375px. - \[ \] Mobile
phổ biến khoảng 390--430px. - \[ \] Tablet khoảng 768px. - \[ \] Desktop
khoảng 1280px trở lên.

Kiểm tra: - \[ \] Không tràn ngang. - \[ \] Không cắt chữ. - \[ \] CTA
dễ chạm. - \[ \] Header/menu không che nội dung. - \[ \] Ảnh giữ tỷ
lệ. - \[ \] Floating CTA không che footer hoặc nội dung. - \[ \] Spacing
nhất quán.

### 11.3. Accessibility

-   [ ] Có một H1 chính trên mỗi trang.
-   [ ] Heading order hợp lý.
-   [ ] Có landmark semantic.
-   [ ] Link và button dùng đúng mục đích.
-   [ ] Có focus visible.
-   [ ] Điều hướng được bằng bàn phím.
-   [ ] Menu có accessible name và trạng thái.
-   [ ] Ảnh có alt phù hợp.
-   [ ] Contrast đủ đọc.
-   [ ] Không phụ thuộc hoàn toàn vào màu sắc.

### 11.4. SEO

-   [ ] Mỗi trang có title riêng.
-   [ ] Mỗi trang có description riêng.
-   [ ] H1 phù hợp nội dung.
-   [ ] Canonical đúng khi domain đã chốt.
-   [ ] Sitemap hợp lệ.
-   [ ] Robots không chặn nhầm.
-   [ ] OG metadata có.
-   [ ] Internal links hoạt động.
-   [ ] Không có nội dung trùng lặp lớn giữa hai trang dịch vụ.
-   [ ] Không có keyword stuffing.
-   [ ] Structured data không chứa thông tin bịa đặt.

### 11.5. Performance

-   [ ] Ảnh được resize và nén phù hợp.
-   [ ] Dùng WebP/AVIF khi thích hợp.
-   [ ] Không tải thư viện không cần thiết.
-   [ ] Không có layout shift lớn.
-   [ ] Hero image được ưu tiên tải hợp lý.
-   [ ] Ảnh dưới màn hình lazy-load khi phù hợp.
-   [ ] Kiểm tra Lighthouse trên production/preview.
-   [ ] Kiểm tra Core Web Vitals khi có dữ liệu thực tế.

Không cam kết điểm Lighthouse hoặc Core Web Vitals cụ thể trước khi đo.

### 11.6. Content and trust

-   [ ] Không có giá tự tạo.
-   [ ] Không có số điện thoại/Zalo giả.
-   [ ] Không có bảo hành tự tạo.
-   [ ] Không có cam kết thời gian có mặt tự tạo.
-   [ ] Không nói MTX trực tiếp thi công nếu không đúng.
-   [ ] Không tự nhận sở hữu xe/nhân viên/thiết bị.
-   [ ] Không có review/testimonial giả.
-   [ ] Ảnh có quyền sử dụng.
-   [ ] Vai trò kết nối được diễn đạt rõ.
-   [ ] Chính sách bảo mật phản ánh quy trình thực tế.

------------------------------------------------------------------------

## 12. Điều kiện nghiệm thu MVP

Website chỉ được xem là hoàn thành khi:

1.  Có đủ 5 route đã thống nhất.
2.  Nội dung đúng thông tin đã xác nhận.
3.  Hai trang dịch vụ có nội dung riêng.
4.  Responsive trên mobile, tablet và desktop.
5.  CTA Zalo/điện thoại lấy từ cấu hình, không hard-code nhiều nơi.
6.  Chưa có thông tin liên hệ thì không tạo link giả.
7.  SEO cơ bản hoàn chỉnh.
8.  Không có lỗi lint/typecheck/build.
9.  Các kiểm thử chức năng và responsive quan trọng đã thực hiện.
10. Không có thông tin giả về giá, bảo hành, thời gian, năng lực hoặc
    đánh giá.
11. Trang chính sách bảo mật được rà soát trước khi public.
12. Có báo cáo nghiệm thu ghi rõ test nào đã chạy, kết quả và giới hạn
    còn lại.

------------------------------------------------------------------------

## 13. Những thông tin sẽ bổ sung sau

Các thông tin này không chặn việc bắt đầu code:

-   Số điện thoại.
-   Zalo URL.
-   Domain chính thức.
-   Logo chính thức/file SVG.
-   Ảnh thực tế và quyền sử dụng ảnh.
-   Giờ hoạt động/khung giờ hẹn lịch cụ thể.
-   Điều kiện và thời hạn bảo hành.
-   Phạm vi phục vụ chi tiết.
-   Email hoặc thông tin liên hệ bổ sung.
-   GA4 Measurement ID.
-   Thông tin pháp lý cần công bố của người vận hành website.

Khi chưa có dữ liệu, giữ cấu hình rỗng hoặc dùng câu "Liên hệ để được tư
vấn"; không tự điền dữ liệu giả.

------------------------------------------------------------------------

## 14. Chỉ dẫn cuối cùng cho Cursor

Tài liệu này là nguồn yêu cầu nội dung và phạm vi cho website MTX. Khi
có mâu thuẫn giữa nội dung tự suy đoán và dữ liệu trong tài liệu, ưu
tiên dữ liệu đã xác nhận.

Trước mỗi task: - Đọc yêu cầu và repository. - Nêu phạm vi thay đổi. -
Chỉ thực hiện task được giao. - Không tự mở rộng scope.

Sau mỗi task: - Chạy kiểm tra phù hợp. - Review diff. - Báo cáo file
thay đổi, kết quả test và việc còn thiếu. - Cập nhật `CONTEXT.md` nếu
trạng thái dự án thay đổi.

**Không triển khai toàn bộ website trong một lần. Bắt đầu bằng Phase 0
-- Repository audit. Chỉ chuyển phase sau khi người dùng xem và chấp
thuận kết quả phase hiện tại.**
