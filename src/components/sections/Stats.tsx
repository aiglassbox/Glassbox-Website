"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

export function Counter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState("0");
  const target = parseInt(value.replace(/,/g, ""), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-14">
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-3">
            <span className="display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </span>
            <p className="max-w-[200px] text-[14px] text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
