"use client";

import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function VideoSection() {
  return (
    <section className="px-5 pt-8 sm:px-8 sm:pt-12">
      <Reveal>
        <h2 className="display max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
          Glassbox is a creative studio shaping bold brands and daring ideas.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[26px] bg-ink-900 sm:aspect-[16/7]">
          {/* Holographic base */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(118deg, #bdeee6 0%, #e7c6ee 24%, #f6ecbe 44%, #cdd6f4 62%, #f2c6dd 80%, #bdeee6 100%)",
            }}
          />
          {/* Drifting iridescent folds */}
          <motion.div
            className="absolute inset-0"
            style={{ filter: "blur(48px)" }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(45% 60% at 38% 32%, rgba(255,150,220,0.8), transparent 60%)," +
                  "radial-gradient(45% 55% at 70% 68%, rgba(120,230,210,0.75), transparent 62%)," +
                  "radial-gradient(40% 50% at 85% 40%, rgba(250,235,150,0.7), transparent 60%)",
              }}
            />
          </motion.div>
          {/* Grain */}
          <div
            className="absolute inset-0 opacity-[0.22] mix-blend-overlay"
            style={{ backgroundImage: GRAIN, backgroundSize: "200px 200px" }}
          />

          {/* Faint wordmark watermark */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[-3vw] flex justify-center overflow-hidden">
            <span className="wordmark text-[15vw] leading-none text-white/20">
              GLASSBOX
            </span>
          </div>

          {/* Play button */}
          <button
            aria-label="Play showreel"
            className="group absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/35 backdrop-blur-md transition-transform duration-300 hover:scale-110"
          >
            <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
