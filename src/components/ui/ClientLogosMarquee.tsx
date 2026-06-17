"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Trimmed + height-normalised client logos (intrinsic height 200px).
const CLIENTS: { name: string; file: string; w: number }[] = [
  { name: "Tata", file: "tata.png", w: 228 },
  { name: "P&G", file: "pg.png", w: 458 },
  { name: "Nestlé", file: "nestle.png", w: 193 },
  { name: "Hero MotoCorp", file: "hero.png", w: 617 },
  { name: "Bisleri", file: "bisleri.png", w: 591 },
  { name: "ITC", file: "itc.png", w: 192 },
  { name: "SUGAR Cosmetics", file: "sugar.png", w: 698 },
  { name: "McDonald's", file: "mcdonalds.png", w: 229 },
  { name: "Piramal", file: "piramal.png", w: 434 },
  { name: "Unilever", file: "unilever.png", w: 200 },
  { name: "Essar", file: "essar.png", w: 640 },
  { name: "Star Health", file: "starhealth.png", w: 437 },
  { name: "Bata", file: "bata.png", w: 885 },
];

// Seamless logo marquee: two identical sequences translated by -50%.
// `logoClassName` controls height/opacity so it can blend into different
// backgrounds (e.g. faint on dark strips, brighter on the gradient hero).
export function ClientLogosMarquee({
  duration = 36,
  logoClassName = "h-7 opacity-50",
}: {
  duration?: number;
  logoClassName?: string;
}) {
  return (
    <motion.div
      className="flex w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {[...CLIENTS, ...CLIENTS].map((c, i) => (
        <Image
          key={`${c.file}-${i}`}
          src={`/assets/clients/${c.file}`}
          alt={c.name}
          width={c.w}
          height={200}
          className={`mr-16 w-auto shrink-0 brightness-0 invert ${logoClassName}`}
        />
      ))}
    </motion.div>
  );
}
