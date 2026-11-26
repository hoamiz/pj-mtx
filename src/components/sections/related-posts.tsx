import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { postPath, type BlogPost } from "@/content/blog";

type RelatedPostsProps = {
  title?: string;
  posts: BlogPost[];
};

export function RelatedPosts({
  title = "Hướng dẫn liên quan",
  posts,
}: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-paper">
      <Container className="py-12 md:py-16">
        <SectionHeading title={title} />
        <ul className="mt-6 max-w-3xl space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={postPath(post.slug)}
                className="font-semibold text-brand"
              >
                {post.title}
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
