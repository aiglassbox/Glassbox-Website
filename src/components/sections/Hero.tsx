"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { A } from "@/data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

// Two horizontal ticker rows, top scrolls right, bottom scrolls left.
// The whole block is gently rotated (-6deg).
const ROWS = [
  {
    duration: 58,
    direction: "right" as const,
    imgs: [
      "eII1CsBFMUv0tWAVY9REnIiw.jpg",
      "j1bAxPZv9KXkSAWes0FMzAgWh50.jpg",
      "73igyKZXdSW8DTMpUdfroZgsw.jpg",
      "RnspdH5WSIpfq7Qyu2EJdxWXw.jpg",
      "gcCOK3eBfHG7P5Zcxtv9TwUq5A.jpg",
      "UhttJHgYv5v9K5nOB1SgfoSJNaE.jpg",
      "wC3yZuiJfempkYMiAwDYliyoldg.jpg",
    ],
  },
  {
    duration: 70,
    direction: "left" as const,
    imgs: [
      "73igyKZXdSW8DTMpUdfroZgsw.jpg",
      "XGkRPb7WAPw3szcTiYXC2JSd5gk.jpg",
      "yN8oP8ZViEml2iTJPEeku2zEM.jpg",
      "8AFDwJazXH9ditYWThksaaP9jYM.jpg",
      "vwKprytyeP5HhBmRSTrVvcLDIQ.jpg",
      "HSuCYseGw4ZE1rGvst62AgiKg.jpg",
      "jguNtVYh32U9SeTpRzxXyIOhqRI.jpg",
    ],
  },
];

function Tile({ src, priority }: { src: string; priority?: boolean }) {
  return (
    <div className="relative mr-6 h-[46vh] w-[12.5vw] min-w-[150px] shrink-0 overflow-hidden rounded-b-[18px] rounded-t-[clamp(30px,4vw,64px)]">
      <Image
        src={A(src)}
        alt=""
        fill
        sizes="220px"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}

// Seamless infinite ticker, two identical sequences, translated by exactly
// one sequence width so the loop never jumps.
function TickerRow({
  imgs,
  duration,
  direction,
  priorityRow,
}: {
  imgs: string[];
  duration: number;
  direction: "left" | "right";
  priorityRow?: boolean;
}) {
  // Each sequence is the image list doubled so one copy always overflows.
  const seq = [...imgs, ...imgs];
  const x = direction === "right" ? ["-50%", "0%"] : ["0%", "-50%"];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{ x }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {[...seq, ...seq].map((src, i) => (
          <Tile key={i} src={src} priority={priorityRow && i < 4} />
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-[#08080a]">
      {/* Tilted scrolling tickers */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2"
          style={{ transform: "translate(-50%, -50%) rotate(-6deg)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            className="flex w-[150vw] flex-col gap-4"
          >
            {ROWS.map((row, ri) => (
              <TickerRow
                key={ri}
                imgs={row.imgs}
                duration={row.duration}
                direction={row.direction}
                priorityRow={ri === 0}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Vibrant colour wash blended over the mosaic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(58% 40% at 50% 50%, rgba(255,58,210,0.92), transparent 72%)," +
            "radial-gradient(40% 30% at 30% 48%, rgba(96,116,255,0.78), transparent 72%)," +
            "radial-gradient(44% 32% at 64% 55%, rgba(48,238,150,0.85), transparent 72%)," +
            "radial-gradient(34% 26% at 82% 50%, rgba(255,150,55,0.7), transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-75 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(52% 36% at 50% 50%, rgba(255,60,200,0.95), rgba(70,90,235,0.5) 55%, transparent 78%)",
        }}
      />

      {/* Edge vignette + top/bottom scrim */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 100% at 50% 45%, transparent 48%, rgba(8,8,10,0.42) 100%)," +
            "linear-gradient(180deg, rgba(8,8,10,0.55) 0%, transparent 20%, transparent 82%, rgba(8,8,10,0.72) 100%)",
        }}
      />

      {/* Gradient soft-blur glow behind the wordmark */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-[5] h-[52vh] w-[64vw] max-w-[860px] -translate-x-1/2 -translate-y-1/2"
        style={{ filter: "blur(70px)" }}
      >
        <div
          className="absolute left-[6%] top-[14%] h-[58%] w-[54%] rounded-full"
          style={{ backgroundColor: "#7B61FF", transform: "rotate(162.6deg)" }}
        />
        <div
          className="absolute bottom-[12%] right-[6%] h-[60%] w-[54%] rounded-full"
          style={{ backgroundColor: "#2EE6A6", transform: "rotate(162.6deg)" }}
        />
        <div
          className="absolute left-[26%] top-[22%] h-[56%] w-[50%] rounded-full"
          style={{ backgroundColor: "#FF5EDB", transform: "rotate(162.5deg)" }}
        />
      </motion.div>

      {/* Wordmark + tagline */}
      <div className="relative z-10 flex w-full flex-col items-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 1.06 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          className="flex items-start justify-center drop-shadow-[0_4px_60px_rgba(0,0,0,0.4)]"
        >
          <span className="sr-only">Glassbox, a Komerz company</span>
          <Image
            src={A("glassbox-komerz.png")}
            alt="Glassbox, a Komerz company"
            width={2400}
            height={473}
            priority
            className="h-auto w-[80vw] lg:w-[64vw]"
          />
        </motion.h1>
      </div>

      {/* Tagline, pinned just above the scroll cue */}
      <div className="absolute bottom-[92px] left-1/2 z-10 w-full max-w-md -translate-x-1/2 px-4 text-center sm:bottom-28">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          className="text-balance text-[19px] font-medium leading-snug tracking-tight text-white sm:text-[22px] lg:text-[26px]"
        >
          We use brand, experience, procurement and commerce to compound
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 flex h-9 w-[22px] -translate-x-1/2 items-start justify-center rounded-full border border-white/40 pt-2"
      >
        <motion.span
          animate={{ y: [0, 7, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-white"
        />
      </motion.div>
    </section>
  );
}
