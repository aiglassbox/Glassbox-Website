"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { LogoMark } from "../ui/Logo";
import { Reveal } from "../ui/Reveal";

function StackCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  // Pure sticky cover: each card pins at the same line and the next slides
  // straight up over it (no scale, no peek offset).
  return (
    <div className="sticky top-[72px]">
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block h-[calc(100svh-92px)] w-full overflow-hidden rounded-[24px] bg-ink-800 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
      >
        <Image
          src={project.cover}
          alt={project.name}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

        {/* Centered name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-medium tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)] sm:text-6xl">
            {project.name}
          </span>
        </div>

        {/* Index marker */}
        <div className="absolute left-6 top-6 font-mono text-[13px] text-white/70">
          _{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* Corner meta */}
        <div className="absolute right-6 top-6 flex items-center justify-end gap-3 text-[13px] text-white/75">
          <span className="font-mono">{project.year}</span>
          <span className="text-white/30">/</span>
          <span>{project.scope}</span>
        </div>
        <div className="absolute bottom-6 right-6 flex translate-y-1 items-center gap-1.5 text-[13px] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View project <span>&#8599;</span>
        </div>
      </Link>
    </div>
  );
}

export function Projects({ limit = 5 }: { limit?: number }) {
  const list = projects.slice(0, limit);

  return (
    <section id="works" className="relative bg-[#08080a] pt-20">
      {/* Brand logo marquee, seamless scroll */}
      <div className="overflow-hidden border-y border-white/[0.06] py-7">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {[...projects, ...projects, ...projects, ...projects].map((p, i) => (
            <span
              key={`${p.slug}-${i}`}
              className="mr-14 flex items-center gap-2.5 whitespace-nowrap text-[26px] font-medium tracking-tight text-white/20"
            >
              <LogoMark className="h-6 w-6" />
              {p.name}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Header */}
      <div className="container-x mt-20">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Works.
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted sm:text-[16px]">
              Every pixel comes from a clear strategy built to help you grow.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[15px] text-white underline-offset-[6px] hover:underline"
          >
            See all
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </Reveal>
      </div>

      {/* Sticky-stack showcase cards */}
      <div className="relative mt-12 px-3 pb-16 sm:px-4">
        {list.map((p, i) => (
          <StackCard key={p.slug} project={p} index={i} total={list.length} />
        ))}
      </div>
    </section>
  );
}
