"use client";

import { motion } from "framer-motion";
import { social } from "@/data/site";

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

const brands = [
  { name: "Coral", icon: "coral" },
  { name: "Clonify", icon: "clonify" },
  { name: "Blob", icon: "blob" },
  { name: "Yallo!", icon: "yallo" },
  { name: "Bliss+", icon: "bliss" },
  { name: "Flea", icon: "flea" },
  { name: "Polltree", icon: "poll" },
  { name: "Winkk", icon: "winkk" },
] as const;

function BrandIcon({ type }: { type: string }) {
  const c = "h-5 w-5";
  switch (type) {
    case "coral":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
          <path d="M12 2.5l7 4v9l-7 4-7-4v-9l7-4z" opacity="0.9" />
          <circle cx="12" cy="11" r="3" fill="#08080a" />
        </svg>
      );
    case "clonify":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M12 3l7 4v8l-7 4-7-4V7l7-4z" />
          <circle cx="12" cy="11" r="2.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "blob":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <ellipse cx="12" cy="12" rx="9" ry="6" />
          <ellipse cx="12" cy="12" rx="5.5" ry="3.4" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        </svg>
      );
    case "yallo":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M7 7l10 10" />
        </svg>
      );
    case "bliss":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
          {[0, 45, 90, 135].map((a) => (
            <rect key={a} x="10.6" y="3" width="2.8" height="18" rx="1.4" transform={`rotate(${a} 12 12)`} />
          ))}
        </svg>
      );
    case "flea":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
          <path d="M12 4l8 15H4l8-15z" />
        </svg>
      );
    case "poll":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
          {[0, 60, 120].map((a) => (
            <rect key={a} x="11" y="2.5" width="2" height="19" rx="1" transform={`rotate(${a} 12 12)`} />
          ))}
          <circle cx="12" cy="12" r="2.4" />
        </svg>
      );
    default: // winkk
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <path d="M3 12a9 9 0 0 0 18 0" />
        </svg>
      );
  }
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
          className="display absolute left-6 top-6 max-w-[13ch] text-balance text-3xl font-semibold leading-[1.04] tracking-tight text-white sm:left-10 sm:top-10 sm:text-5xl lg:text-6xl"
        >
          Glassbox &mdash; creative ideas that refuse to be ordinary.
        </motion.h1>

        {/* Caption top-right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="absolute inset-x-5 bottom-20 text-left sm:inset-x-auto sm:bottom-auto sm:right-10 sm:top-11 sm:max-w-[300px] sm:text-right"
        >
          <p className="text-[12px] leading-relaxed text-white/90 sm:text-[15px]">
            Glassbox is a modern creative studio where design, strategy, and
            storytelling grow together.
          </p>
          <div className="mt-3 flex items-center justify-start gap-3 text-[12px] text-white/80 sm:mt-4 sm:justify-end sm:text-[13px]">
            <a href={social.behance} className="transition-colors hover:text-white">BE</a>
            <span className="text-white/30">/</span>
            <a href={social.dribbble} className="transition-colors hover:text-white">DR</a>
            <span className="text-white/30">/</span>
            <a href={social.x} className="transition-colors hover:text-white">X</a>
          </div>
        </motion.div>

        {/* Brand carousel — inside the box, pinned to the bottom */}
        <div
          className="absolute inset-x-0 bottom-0 overflow-hidden bg-gradient-to-t from-black/35 to-transparent py-5"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)",
          }}
        >
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...brands, ...brands].map((b, i) => (
              <span
                key={`${b.name}-${i}`}
                className="mr-14 flex items-center gap-2.5 whitespace-nowrap text-[22px] font-medium tracking-tight text-white/85"
              >
                <BrandIcon type={b.icon} />
                {b.name}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
