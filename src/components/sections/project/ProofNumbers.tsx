"use client";

import { Counter } from "@/components/sections/Stats";
import { Reveal } from "@/components/ui/Reveal";

type Metric = { value: string; suffix: string; prefix?: string; label: string };

/**
 * The money shot — hero-scale animated proof numbers with hairline dividers
 * and a refined label beneath each. Count-up triggers on scroll-into-view
 * (reduced-motion safe via Counter).
 */
export function ProofNumbers({ metrics }: { metrics: Metric[] }) {
  // Stay stacked until lg, where there's room for big figures side by side.
  const cols =
    metrics.length === 1
      ? "lg:grid-cols-1"
      : metrics.length === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <section className="container-x pb-24 sm:pb-32">
      <Reveal duration={0.6}>
        <p className="eyebrow mb-10 text-center sm:mb-14">By the numbers</p>
      </Reveal>
      <div
        className={`grid grid-cols-1 divide-y divide-white/[0.1] border-y border-white/[0.1] ${cols} lg:divide-x lg:divide-y-0`}
      >
        {metrics.map((m, i) => (
          <Reveal
            key={m.label}
            delay={i * 0.08}
            duration={0.6}
            className="px-1 py-12 text-center sm:py-16 lg:px-8"
          >
            <div className="display whitespace-nowrap text-[56px] font-semibold leading-[0.9] tracking-tightest text-white sm:text-[88px] lg:text-[64px] xl:text-[88px]">
              <Counter value={m.value} suffix={m.suffix} prefix={m.prefix} />
            </div>
            <p className="mx-auto mt-5 max-w-[26ch] text-balance text-[13px] leading-snug text-muted sm:mt-6 sm:text-[14px]">
              {m.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
