"use client";

import { services } from "@/data/site";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

// Accent colour per service, drives the hover block texture.
const ACCENTS = ["#ff5a3c", "#4a7cff", "#2fae5f", "#c965d8", "#f6a623"];

// The Glassbox brand mark dissolves into a field of modular square blocks on a
// uniform grid — adjacent filled cells merge into bigger blocks with sharp
// corners. This texture recreates that: full-cell squares scattered across an
// 8x6 grid of 16px cells (128x96 tile), tiling seamlessly in both axes.
const BLOCK = 16;
const COLS = 8;
const ROWS = 6;
const FILLED: [number, number][] = [
  [1, 0], [2, 0], [5, 0],
  [2, 1], [4, 1], [5, 1], [7, 1],
  [0, 2], [2, 2], [3, 2], [6, 2],
  [0, 3], [3, 3], [4, 3], [6, 3], [7, 3],
  [1, 4], [3, 4], [5, 4], [6, 4],
  [1, 5], [4, 5], [7, 5],
];

function blocks(hex: string) {
  const c = encodeURIComponent(hex);
  // +1 bleed so merged neighbours have no hairline seam when the tile scales.
  const rects = FILLED.map(
    ([col, row]) =>
      `%3Crect x='${col * BLOCK}' y='${row * BLOCK}' width='${BLOCK + 1}' height='${BLOCK + 1}'/%3E`
  ).join("");
  return (
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
    COLS * BLOCK +
    "' height='" +
    ROWS * BLOCK +
    "'%3E%3Cg fill='" +
    c +
    "'%3E" +
    rects +
    "%3C/g%3E%3C/svg%3E\")"
  );
}

export function Services() {
  return (
    <section className="section-pad">
      <div className="container-x">
        {/* Header */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Services.
            </h2>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted sm:text-[16px]">
              We&rsquo;ve helped businesses across industries achieve their
              goals.
            </p>
          </div>
        </Reveal>

        {/* Service rows */}
        <RevealGroup className="mt-12 flex flex-col gap-3" stagger={0.06}>
          {services.map((s, i) => (
            <RevealItem key={s.no}>
              <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.035]">
                {/* Hover dot texture */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.22]"
                  style={{
                    backgroundImage: blocks(ACCENTS[i % ACCENTS.length]),
                    backgroundSize: "128px 96px",
                    maskImage:
                      "linear-gradient(90deg, transparent, #000 18%, #000 82%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(90deg, transparent, #000 18%, #000 82%, transparent)",
                  }}
                />
                <div className="relative flex flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:gap-8 sm:px-9 sm:py-10">
                  <span className="font-mono text-[13px] text-muted">{s.no}</span>
                  <h3 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 sm:text-[30px]">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted sm:ml-auto sm:max-w-[280px]">
                    {s.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
