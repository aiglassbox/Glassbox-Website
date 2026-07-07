import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { CtaProject } from "@/components/sections/CtaProject";
import { ProjectHero } from "@/components/sections/project/ProjectHero";
import { ProofNumbers } from "@/components/sections/project/ProofNumbers";
import { ProjectGallery } from "@/components/sections/project/ProjectGallery";

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
  const firstTag = project.scope.split(",")[0]?.trim() ?? "Case study";

  // Two-tone headline: lead sentences in white, the last clause in muted.
  const sentences = project.tagline.split(/(?<=[.!?])\s+/).filter(Boolean);
  const lead = sentences.slice(0, -1).join(" ");
  const tail = sentences[sentences.length - 1] ?? project.tagline;

  const meta = [
    { label: "Year", value: project.year, tabular: true },
    { label: "Tag", value: project.scope, tabular: false },
    { label: "Industry", value: project.industry, tabular: false },
  ];

  return (
    <>
      {/* 1 — Cinematic hero */}
      <ProjectHero
        name={project.name}
        eyebrow={`${firstTag} — ${project.year}`}
        cover={project.cover}
        video={project.video}
      />

      {/* 2 — Spec-sheet strip */}
      <section className="container-x">
        <Reveal duration={0.55}>
          <dl className="grid grid-cols-1 divide-y divide-white/[0.1] border-b border-white/[0.1] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {meta.map((m) => (
              <div
                key={m.label}
                className="flex flex-col gap-2.5 py-7 sm:px-8 sm:py-8 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="eyebrow">{m.label}</dt>
                <dd
                  className={`text-[15px] font-medium leading-snug text-white sm:text-[16px] ${
                    m.tabular ? "tabular-nums" : ""
                  }`}
                >
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* 3 — Intro, two resolved columns */}
      <section className="container-x py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal duration={0.6} className="lg:col-span-7">
            <p className="eyebrow mb-6">Overview</p>
            <h2 className="display text-3xl font-semibold leading-[1.04] sm:text-4xl lg:text-[46px]">
              {lead ? <span className="text-white">{lead} </span> : null}
              <span className={lead ? "block text-muted" : "text-white"}>
                {tail}
              </span>
            </h2>
          </Reveal>
          <Reveal duration={0.6} delay={0.08} className="lg:col-span-5">
            <p className="max-w-[68ch] text-[15px] leading-relaxed text-soft sm:text-[17px]">
              {project.body}
            </p>
            <p className="mt-5 max-w-[68ch] text-[15px] leading-relaxed text-soft sm:text-[17px]">
              {project.results}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4 — Proof numbers */}
      {project.metrics && project.metrics.length > 0 ? (
        <ProofNumbers metrics={project.metrics} />
      ) : null}

      {/* 5 — Image sequence */}
      <ProjectGallery
        name={project.name}
        gallery={project.gallery}
        galleryVideos={project.galleryVideos}
        galleryCaptions={project.galleryCaptions}
      />

      {/* 7 — More projects */}
      <section className="container-x py-24 sm:py-32 lg:py-40">
        <Reveal duration={0.55} className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
          <h2 className="display text-3xl font-semibold tracking-tightest sm:text-5xl">
            More work
          </h2>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full text-[14px] text-white outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:text-[15px]"
          >
            All works
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {more.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} duration={0.6}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-ink-800">
                  <Image
                    src={p.cover}
                    alt={`${p.name} — case study cover`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-black/35 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                    {p.scope.split(",")[0]?.trim()}
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="display text-2xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-[28px]">
                    {p.name}
                  </h3>
                  <span className="text-[15px] text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                    &#8599;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6 — CTA */}
      <CtaProject />
    </>
  );
}
