import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Không tìm thấy trang",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="py-16 md:py-24">
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Không tìm thấy trang
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Đường dẫn này không tồn tại trên website MTX. Bạn có thể quay về trang
          chủ hoặc liên hệ qua Zalo hoặc điện thoại để được hỗ trợ.
        </p>
        <ButtonLink href="/" className="mt-8">
          Về trang chủ
        </ButtonLink>
      </Container>
    </section>
  );
}
