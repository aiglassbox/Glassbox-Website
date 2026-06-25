"use client";

import { motion } from "framer-motion";
import { social } from "@/data/site";
import { ClientLogosMarquee } from "../ui/ClientLogosMarquee";

const EASE = [0.22, 1, 0.36, 1] as const;

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function GradientArt() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Diagonal rainbow sweep */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(118deg, #0a0a2e 0%, #1b2790 15%, #5a2ec7 29%, #c91f93 42%, #ff5a33 56%, #f6a623 66%, #2fae5f 80%, #0b2440 100%)",
        }}
      />
      {/* Soft iridescent folds */}
      <motion.div
        className="absolute inset-0"
        style={{ filter: "blur(50px)" }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(45% 60% at 52% 30%, rgba(255,120,210,0.65), transparent 62%)," +
              "radial-gradient(40% 55% at 30% 72%, rgba(40,210,130,0.55), transparent 66%)," +
              "radial-gradient(45% 50% at 82% 55%, rgba(255,120,40,0.5), transparent 66%)",
          }}
        />
      </motion.div>
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: "200px 200px" }}
      />
      {/* Edge vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 105% at 52% 42%, transparent 38%, rgba(8,8,10,0.6) 100%)",
        }}
      />
      {/* Dark scrim so the heading / caption read */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/10 to-transparent" />
    </div>
  );
}

export function AboutHero() {
  return (
    <section className="px-3 pt-24 sm:px-4 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE }}
        className="relative h-[clamp(440px,58vw,680px)] w-full overflow-hidden rounded-[26px] bg-ink-900"
      >
        <GradientArt />

        {/* Heading top-left */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="display absolute left-6 top-6 max-w-[13ch] text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:left-10 sm:top-10 sm:text-4xl lg:text-[52px]"
        >
          Connected brands across commerce, creativity, and culture.
        </motion.h1>

        {/* Caption top-right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="absolute inset-x-5 bottom-20 text-left lg:inset-x-auto lg:bottom-auto lg:right-10 lg:top-11 lg:max-w-[300px] lg:text-right"
        >
          <p className="text-[12px] leading-relaxed text-white/90 sm:text-[15px]">
            Glassbox is a brand and media agency, a Komerz company, measured
            on what comes back, not what goes out.
          </p>
          <div className="mt-3 flex items-center justify-start gap-3 text-[12px] text-white/80 sm:mt-4 lg:justify-end lg:text-[13px]">
            <a href={social.instagram} className="transition-colors hover:text-white">IG</a>
            <span className="text-white/30">/</span>
            <a href={social.linkedin} className="transition-colors hover:text-white">LI</a>
          </div>
        </motion.div>

        {/* Brand carousel, inside the box, pinned to the bottom */}
        <div
          className="absolute inset-x-0 bottom-0 overflow-hidden bg-gradient-to-t from-black/35 to-transparent py-5"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)",
          }}
        >
          <ClientLogosMarquee duration={32} logoClassName="h-6 opacity-90 sm:h-7" />
        </div>
      </motion.div>
    </section>
  );
}
