"use client";

import Link from "next/link";
import { services } from "@/data/site";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

// Accent colour per service, drives the hover pixel texture.
const ACCENTS = ["#ff5a3c", "#4a7cff", "#2fae5f", "#c965d8", "#f6a623"];

// Scattered pixel-block field in the given hex colour — the Glassbox brand
// element. Tiles seamlessly across a 40px grid.
function pixels(hex: string) {
  const c = encodeURIComponent(hex);
  // 4px squares on an 8px grid, deterministically scattered for a digital,
  // pixelated texture that still leaves plenty of gaps for text to read.
  const cells = [
    [8, 0], [24, 0], [32, 0],
    [0, 8], [16, 8], [24, 8],
    [8, 16], [32, 16],
    [0, 24], [16, 24], [24, 24],
    [8, 32], [16, 32], [32, 32],
  ];
  const rects = cells
    .map(([x, y]) => `%3Crect x='${x}' y='${y}' width='4' height='4'/%3E`)
    .join("");
  return (
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cg fill='" +
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
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[15px] text-white underline-offset-[6px] hover:underline"
          >
            Get in touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </Reveal>

        {/* Service rows */}
        <RevealGroup className="mt-12 flex flex-col gap-3" stagger={0.06}>
          {services.map((s, i) => (
            <RevealItem key={s.no}>
              <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.035]">
                {/* Hover dot texture */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80"
                  style={{
                    backgroundImage: pixels(ACCENTS[i % ACCENTS.length]),
                    backgroundSize: "40px 40px",
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
