import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { posts, getPost } from "@/data/blog";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/ui/BlogCard";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = getPost(params.slug);
  return {
    title: p ? `${p.title} — Glassbox` : "Article — Glassbox",
    description: p?.body[0],
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pt-40 sm:pt-48">
        <div className="container-x max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="font-mono text-[12px] text-muted transition-colors hover:text-white"
            >
              ← Back to blog
            </Link>
            <p className="mt-8 font-mono text-[13px] text-muted">{post.date}</p>
            <h1 className="display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
          </Reveal>
        </div>

        <div className="container-x mt-12">
          <Reveal className="hover-img-zoom overflow-hidden rounded-3xl">
            <div className="relative aspect-[16/9] w-full bg-ink-700">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-14 max-w-3xl">
          <div className="flex flex-col gap-6">
            {post.body.map((para, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
                <p className="text-[17px] leading-relaxed text-white/80 sm:text-[18px]">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      {/* More articles */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">
              Keep reading.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
