"use client";

import { useEffect, useState } from "react";

/**
 * Framer-style progressive blur strip, stacked backdrop-filter layers, each
 * with a doubling blur and a band mask, so content blurs more toward the edge.
 * Fixed to the bottom of the viewport, but fades out once the footer scrolls
 * into view so the footer stays perfectly clear.
 */
export function ProgressiveBlur({
  className = "",
  height = 120,
}: {
  className?: string;
  height?: number;
}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { root: null, threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const layers = Array.from({ length: 8 }, (_, i) => {
    const blur = 0.234375 * 2 ** i;
    const start = 12.5 * i;
    const mask = `linear-gradient(to bottom, rgba(0,0,0,0) ${start}%, rgba(0,0,0,1) ${start + 12.5}%, rgba(0,0,0,1) ${start + 25}%, rgba(0,0,0,0) ${start + 37.5}%)`;
    return { blur, mask, z: i + 1 };
  });

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-opacity duration-300 ${
        hidden ? "opacity-0" : "opacity-100"
      } ${className}`}
      style={{ height }}
    >
      {layers.map((l, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            zIndex: l.z,
            backdropFilter: `blur(${l.blur}px)`,
            WebkitBackdropFilter: `blur(${l.blur}px)`,
            maskImage: l.mask,
            WebkitMaskImage: l.mask,
          }}
        />
      ))}
    </div>
  );
}
