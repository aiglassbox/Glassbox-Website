"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Reveal } from "../ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectsList() {
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
              Our Works.
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

      {/* Full-width work cards, normal scroll */}
      <div className="mt-10 flex flex-col gap-4 px-3 pb-24 sm:gap-5 sm:px-4">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.05}>
            <Link
              href={`/projects/${p.slug}`}
              className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[22px] bg-ink-800 sm:aspect-[16/8]"
            >
              <Image
                src={p.cover}
                alt={p.name}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

              {/* Centered name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-medium tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-6xl">
                  {p.name}
                </span>
              </div>

              {/* Corner meta */}
              <div className="absolute right-6 top-6 flex items-center justify-end gap-3 text-[13px] text-white/75">
                <span className="font-mono">{p.year}</span>
                <span className="text-white/30">/</span>
                <span>{p.scope}</span>
              </div>
              <div className="absolute bottom-6 right-6 flex translate-y-1 items-center gap-1.5 text-[13px] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View project <span>&#8599;</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
