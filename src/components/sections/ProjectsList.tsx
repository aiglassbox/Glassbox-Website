"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects, type Project } from "@/data/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

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
  const targetScale = 1 - (total - 1 - index) * 0.045;
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-3 sm:px-4">
      <motion.div
        style={{ scale, top: `${index * 24}px` }}
        className="relative origin-top"
      >
        <Link
          href={`/projects/${project.slug}`}
          className="group relative block h-[78vh] max-h-[780px] w-[min(1320px,94vw)] overflow-hidden rounded-[24px] bg-ink-800 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)]"
        >
          <Image
            src={project.cover}
            alt={project.name}
            fill
            sizes="94vw"
            className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

          {/* Name pill */}
          <div className="absolute right-5 top-5 rounded-full bg-white/[0.14] px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur-md">
            {project.name}
          </div>

          {/* Centered name */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-medium tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-6xl">
              {project.name}
            </span>
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

export function ProjectsList() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section className="px-5 pt-28 sm:px-8 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h1 className="display text-6xl font-semibold tracking-tight sm:text-7xl lg:text-[84px]">
              Projects.
            </h1>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted sm:text-[16px]">
              Every color, word, and pixel comes from a clear strategy built to
              help you grow.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[15px] text-white underline-offset-[6px] hover:underline"
          >
            Let&rsquo;s Talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </section>

      <div ref={container} className="relative mt-10">
        {projects.map((p, i) => (
          <StackCard
            key={p.slug}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <div className="h-24" />
    </>
  );
}
