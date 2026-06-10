import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
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
    title: p ? `${p.name} — Glassbox` : "Project — Glassbox",
    description: p?.intro,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const meta = [
    { label: "Year", value: project.year },
    { label: "Scope", value: project.scope },
    { label: "Timeline", value: project.timeline },
    { label: "Status", value: project.status },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-40 sm:pt-48">
        <div className="container-x">
          <Reveal>
            <h1 className="display text-6xl font-semibold tracking-tight sm:text-7xl lg:text-[96px]">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-balance text-[17px] leading-relaxed text-white/80 sm:text-[20px]">
              {project.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cover */}
      <section className="pt-14">
        <div className="container-x">
          <Reveal className="hover-img-zoom overflow-hidden rounded-3xl">
            <div className="relative aspect-[16/10] w-full bg-ink-700">
              <Image
                src={project.cover}
                alt={project.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meta block */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="grid grid-cols-2 gap-y-8 rounded-2xl border border-white/[0.08] p-8">
                {meta.map((m) => (
                  <div key={m.label}>
                    <p className="eyebrow mb-2">{m.label}</p>
                    <p className="text-[16px] font-medium">{m.value}</p>
                  </div>
                ))}
                <div className="col-span-2 border-t border-white/[0.08] pt-6">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noreferrer"
                    className="pill pill-ghost gap-2"
                  >
                    Preview <span>↗</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[17px] leading-relaxed text-white/80 sm:text-[19px]">
                {project.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-8">
        <div className="container-x flex flex-col gap-6">
          {project.gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.05} className="hover-img-zoom overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/10] w-full bg-ink-700">
                <Image
                  src={g}
                  alt={`${project.name} visual ${i + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* More projects */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <h2 className="display text-4xl font-semibold tracking-tight sm:text-5xl">
              More projects.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-7">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className="hover-img-zoom group">
                <Link href={`/projects/${p.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-700">
                    <Image src={p.card} alt={p.name} fill sizes="50vw" className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-[18px] font-medium tracking-tight">{p.name}</h3>
                    <span className="font-mono text-[12px] text-muted">{p.scope}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaProject />
    </>
  );
}
