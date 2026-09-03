import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Link from "next/link";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Pagination } from "@/components/Pagination";
import { SanityImg } from "@/components/SanityImg";
import { demoBlogIndex } from "@/lib/demo-posts";
import { formatDateLong } from "@/lib/format";
import { safeFetch } from "@/sanity/client";
import { blogIndexQuery } from "@/sanity/queries";
import type { BlogIndexResult } from "@/sanity/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
};

const POSTS_PER_PAGE = 6;

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

function parsePage(raw: string | undefined) {
  const parsed = Number.parseInt(raw ?? "1", 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return parsed;
}

export default async function BlogIndexRoute({ searchParams }: BlogPageProps) {
  const { page: rawPage } = await searchParams;
  const page = parsePage(rawPage);

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const { posts, total } = await safeFetch<BlogIndexResult>(
    blogIndexQuery,
    { start, end },
    demoBlogIndex(start, end)
  );

  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));

  // Out of range page (e.g. ?page=99 when only 1 page exists) → 404,
  // but page 1 with no posts is a valid empty state.
  if (page > 1 && page > totalPages) {
    notFound();
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[var(--color-background)]">
        <Container className="py-16 text-center md:py-20">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
              Notes from the practice
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-[var(--color-foreground)] md:text-[3.2rem]">
              Slow reading for an unhurried mind.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-[var(--color-muted)]">
              Short, plain-spoken pieces on nervous systems, pacing, and what
              actually helps. Nothing here is urgent — read it whenever it&apos;s time.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <Container>
          {posts.length === 0 ? (
            <Reveal>
              <p className="mist-card p-8 text-[var(--color-muted)]">
                No posts yet. Once posts are published in the Studio, they show
                up here.
              </p>
            </Reveal>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                {posts.map((post, index) => (
                  <Reveal
                    key={post._id}
                    delay={Math.min(0.08 * index, 0.32)}
                    className="h-full"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mist-card group flex h-full flex-col p-8 transition-transform duration-500 hover:-translate-y-1.5"
                    >
                      <div className="-mx-8 -mt-8 mb-5 overflow-hidden rounded-t-[1.75rem]">
                        <SanityImg
                          image={post.featuredImage}
                          alt={post.featuredImage?.alt ?? post.title ?? ""}
                          width={600}
                          height={280}
                          className="aspect-[21/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 768px) 40vw, 100vw"
                        />
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        {post.categories?.[0]?.title ? (
                          <span
                            className="rounded-full px-3 py-1 text-[11px] font-medium text-[var(--color-accent-strong)]"
                            style={{ background: "var(--color-accent-soft)" }}
                          >
                            {post.categories[0].title}
                          </span>
                        ) : null}
                        {post.publishedAt ? (
                          <time
                            dateTime={post.publishedAt}
                            className="text-xs font-semibold text-[var(--color-muted)]"
                          >
                            {formatDateLong(post.publishedAt)}
                          </time>
                        ) : null}
                      </div>
                      <h2 className="mt-5 font-serif text-2xl leading-snug text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent-strong)]">
                        {post.title}
                      </h2>
                      {post.excerpt ? (
                        <p className="mt-3 flex-grow text-[15px] leading-relaxed text-[var(--color-muted)]">
                          {post.excerpt}
                        </p>
                      ) : null}
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-strong)]">
                        Read the piece
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  basePath="/blog"
                />
              </Reveal>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
