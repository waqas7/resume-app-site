import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { KEYWORDS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Resume & CV Tips Blog — Expert Career Advice",
  description:
    "Read expert guides on writing CVs, ATS resume tips, UK job formats, and common resume mistakes. Boost your job search with our resume builder blog.",
  path: "/blog",
  keywords: [...KEYWORDS, "resume tips", "CV writing guide", "ATS tips"],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section className="pt-16">
      <Container>
        <h1 className="text-4xl font-bold md:text-5xl">
          Resume & CV Career Blog
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Expert guides to help you write better resumes, pass ATS screening,
          and land interviews faster.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-violet-500/30 hover:shadow-lg"
            >
              <time
                dateTime={post.date}
                className="text-sm text-muted-foreground"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readingTime}
              </time>
              <h2 className="mt-3 text-xl font-bold group-hover:text-violet-600">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-violet-600 hover:underline"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
