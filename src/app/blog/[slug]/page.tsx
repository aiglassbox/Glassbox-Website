import type { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { posts, getPost } from "@/data/blog";
import { Reveal } from "@/components/ui/Reveal";

const DEFAULT_INSET = "/assets/eII1CsBFMUv0tWAVY9REnIiw.jpg";

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
    title: p ? `${p.title} - Glassbox` : "Article - Glassbox",
    description: p?.body[0],
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === post.slug);
  const next = posts[(idx + 1) % posts.length];

  const inset = post.inset ?? DEFAULT_INSET;
  // Insert the inline image roughly a third of the way down.
  const insetAt = Math.min(3, Math.max(1, post.body.length - 2));

  return (
    <article className="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      {/* Header */}
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
          {post.date}
        </p>
        <h1 className="display mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
      </Reveal>

      {/* Cover */}
      <Reveal delay={0.1} className="mx-auto mt-10 max-w-[1200px] overflow-hidden rounded-[22px]">
        <div className="relative aspect-[16/10] w-full bg-ink-800 sm:aspect-[16/9]">
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

      {/* Body */}
      <div className="mx-auto mt-14 max-w-[640px]">
        <div className="flex flex-col gap-6">
          {post.body.map((para, i) => {
            const lead = i === 0 || para.length < 165;
            return (
              <Fragment key={i}>
                <Reveal delay={Math.min(i * 0.03, 0.15)}>
                  {lead ? (
                    <p className="text-[22px] font-medium leading-snug tracking-tight text-white sm:text-[26px]">
                      {para}
                    </p>
                  ) : (
                    <p className="text-[15px] leading-relaxed text-muted sm:text-[16px]">
                      {para}
                    </p>
                  )}
                </Reveal>

                {i === insetAt && (
                  <Reveal className="my-6 overflow-hidden rounded-[18px]">
                    <div className="relative aspect-[16/10] w-full bg-ink-800">
                      <Image
                        src={inset}
                        alt=""
                        fill
                        sizes="640px"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Next */}
        <div className="mt-16 flex justify-center">
          <Link href={`/blog/${next.slug}`} className="pill pill-light gap-2 px-7 py-3">
            Next <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
