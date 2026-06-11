"use client";

import Link from "next/link";
import { services } from "@/data/site";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

// Accent colour per service, drives the hover dot texture.
const ACCENTS = ["#ff5a3c", "#4a7cff", "#2fae5f", "#c965d8", "#f6a623"];

// Tiled cross-of-squares pattern in the given hex colour.
function dots(hex: string) {
  const c = encodeURIComponent(hex);
  return (
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cg fill='" +
    c +
    "'%3E%3Crect x='19' y='19' width='6' height='6'/%3E%3Crect x='19' y='7' width='6' height='6'/%3E%3Crect x='19' y='31' width='6' height='6'/%3E%3Crect x='7' y='19' width='6' height='6'/%3E%3Crect x='31' y='19' width='6' height='6'/%3E%3C/g%3E%3C/svg%3E\")"
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
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: dots(ACCENTS[i % ACCENTS.length]),
                    backgroundSize: "44px 44px",
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
