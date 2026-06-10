"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 2) * 0.08 }}
    >
      <Link href={`/projects/${project.slug}`} className="hover-img-zoom group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-700">
          <Image
            src={project.card}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Hover reveal pill */}
          <div className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View project
            <span>↗</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-[18px] font-medium tracking-tight">{project.name}</h3>
          <span className="font-mono text-[12px] text-muted">{project.scope}</span>
        </div>
      </Link>
    </motion.div>
  );
}
