"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { LogoMark } from "../ui/Logo";
import { Reveal } from "../ui/Reveal";

function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each card shrinks as the cards stacked on top of it come into view.
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-3 sm:px-4">
      <motion.div
        style={{ scale, top: `${index * 26}px` }}
        className="relative origin-top"
      >
        <Link
          href={`/projects/${project.slug}`}
          className="group relative block h-[76vh] max-h-[760px] w-[min(1320px,94vw)] overflow-hidden rounded-[24px] bg-ink-800 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
        >
          <Image
            src={project.cover}
            alt={project.name}
            fill
            sizes="94vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

          {/* Centered brand lockup */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-3 text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]">
              <LogoMark className="h-9 w-9 sm:h-11 sm:w-11" />
              <span className="text-4xl font-medium tracking-tight sm:text-6xl">
                {project.name}
              </span>
            </span>
          </div>

          {/* Index marker */}
          <div className="absolute left-6 top-6 font-mono text-[13px] text-white/70">
            _{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>

          {/* Corner meta */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 text-[13px] text-white/75">
            <span className="font-mono">{project.year}</span>
            <span className="text-white/30">/</span>
            <span>{project.scope}</span>
          </div>
          <div className="absolute bottom-6 right-6 flex translate-y-1 items-center gap-1.5 text-[13px] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View project <span>&#8599;</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export function Projects({ limit = 5 }: { limit?: number }) {
  const list = projects.slice(0, limit);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

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
              Projects.
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
      <div ref={container} className="relative mt-10">
        {list.map((p, i) => (
          <StackCard
            key={p.slug}
            project={p}
            index={i}
            total={list.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <div className="h-24" />
    </section>
  );
}
