"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-bleed cinematic case-study hero. A single media layer (muted autoplay
 * loop video, or a priority image) — no stacked seam. Subtle parallax on the
 * media and a fade/lift on the title as it scrolls away. Reduced-motion safe.
 */
export function ProjectHero({
  name,
  eyebrow,
  cover,
  video,
}: {
  name: string;
  eyebrow: string;
  cover: string;
  video?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, reduce ? 1 : 0],
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] w-full overflow-hidden bg-ink-900"
    >
      {/* Media (over-sized so the parallax never reveals an edge) */}
      <motion.div
        style={{ y: mediaY }}
        className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform"
      >
        {video ? (
          <video
            src={video}
            poster={cover}
            autoPlay
            loop
            muted
            playsInline
            aria-label={`${name} — case study showreel`}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={cover}
            alt={`${name} — case study cover`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </motion.div>

      {/* Scrims for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent"
      />

      {/* Title, bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        style={{ y: titleY, opacity: titleOpacity }}
        className="absolute inset-x-0 bottom-0"
      >
        <div className="container-x pb-12 sm:pb-16 lg:pb-20">
          <p className="eyebrow mb-4 text-white/70">{eyebrow}</p>
          <h1 className="display max-w-[14ch] text-[15vw] font-semibold leading-[0.92] text-white sm:text-[10vw] lg:text-[112px]">
            {name}
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
