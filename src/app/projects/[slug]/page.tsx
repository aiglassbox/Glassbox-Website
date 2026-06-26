import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryVideo } from "@/components/ui/GalleryVideo";
import { Counter } from "@/components/sections/Stats";
import { CtaProject } from "@/components/sections/CtaProject";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = getProject(params.slug);
  return {
    title: p ? `${p.name} - Glassbox` : "Project - Glassbox",
    description: p?.intro,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const meta: { label: string; value: ReactNode }[] = [
    { label: "Year", value: project.year },
    { label: "Tag", value: project.scope },
    { label: "Timeline", value: project.timeline },
  ];

  return (
    <>
      {/* Header */}
      <section className="px-5 pt-32 sm:px-8 sm:pt-40">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="max-w-sm text-[13px] leading-relaxed text-muted sm:text-right sm:text-[14px]">
            {project.intro}
          </p>
        </Reveal>

        {/* Meta rows */}
        <Reveal delay={0.1} className="mt-10 border-t border-white/[0.1]">
          {meta.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between gap-6 border-b border-white/[0.1] py-3.5 text-[14px]"
            >
              <span className="text-muted">{m.label}</span>
              <span className="font-medium text-white">{m.value}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Cover */}
      <section className="mt-8 px-5 sm:px-8">
        <Reveal className="overflow-hidden rounded-[22px]">
          <div className="relative aspect-[16/10] w-full bg-ink-800">
            {project.video ? (
              <video
                src={project.video}
                poster={project.cover}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={project.cover}
                alt={project.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
        </Reveal>
      </section>

      {/* Body */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-balance text-[22px] font-medium leading-snug tracking-tight text-white sm:text-[28px]">
            {project.tagline}
          </p>
          <p className="mt-7 text-[15px] leading-relaxed text-muted sm:text-[16px]">
            {project.body}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
            {project.results}
          </p>
        </Reveal>

        {project.metrics && project.metrics.length > 0 && (
          <Reveal
            delay={0.1}
            className="mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 border-t border-white/[0.1] pt-10 sm:mt-14 sm:grid-cols-3 sm:pt-12"
          >
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <span className="display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <Counter value={m.value} suffix={m.suffix} />
                </span>
                <p className="text-[13px] text-muted sm:text-[14px]">{m.label}</p>
              </div>
            ))}
          </Reveal>
        )}
      </section>

      {/* Gallery */}
      <section className="px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:gap-5">
          {project.gallery.map((g, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className="overflow-hidden rounded-[22px]"
            >
              {project.galleryVideos?.[i] ? (
                <GalleryVideo src={project.galleryVideos[i]!} poster={g} />
              ) : (
                <div className="relative aspect-[16/10] w-full bg-ink-800">
                  <Image
                    src={g}
                    alt={`${project.name} visual ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* More projects */}
      <section className="px-5 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <h2 className="display text-4xl font-semibold tracking-tight sm:text-5xl">
            More projects.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {more.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/projects/${p.slug}`}
                className="group relative block aspect-[16/11] overflow-hidden rounded-[20px] bg-ink-800"
              >
                <Image
                  src={p.cover}
                  alt={p.name}
                  fill
                  sizes="(max-width:640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />
                <div className="absolute right-4 top-4 rounded-full bg-white/[0.14] px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                  {p.name}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-medium tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-3xl">
                    {p.name}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaProject />
    </>
  );
}
