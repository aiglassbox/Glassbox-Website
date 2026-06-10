"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden pb-6 pt-40 sm:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[360px] w-[700px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,153,255,0.18), transparent)",
        }}
      />
      <div className="container-x relative">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.span>
        )}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
            className="display mt-3 text-6xl font-semibold tracking-tight sm:text-7xl lg:text-[88px]"
          >
            {title}
          </motion.h1>
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            >
              <Link href={cta.href} className="pill pill-light px-6 py-3">
                {cta.label}
              </Link>
            </motion.div>
          )}
        </div>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="mt-6 max-w-xl text-balance text-[16px] text-muted sm:text-[18px]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
