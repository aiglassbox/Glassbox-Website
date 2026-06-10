"use client";

import { motion } from "framer-motion";

export function IntroGlobe() {
  return (
    <div className="relative h-28 w-28">
      {/* Wireframe sphere */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-white/45" fill="none" stroke="currentColor" aria-hidden>
        <circle cx="50" cy="50" r="34" strokeWidth="1" />
        <ellipse cx="50" cy="50" rx="13" ry="34" strokeWidth="0.8" />
        <ellipse cx="50" cy="50" rx="25" ry="34" strokeWidth="0.8" />
        <line x1="16" y1="50" x2="84" y2="50" strokeWidth="0.8" />
        <path d="M19 35 Q50 28 81 35" strokeWidth="0.8" />
        <path d="M19 65 Q50 72 81 65" strokeWidth="0.8" />
      </svg>

      {/* Subtle metallic sheen */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 38% 32%, rgba(255,255,255,0.35), rgba(255,255,255,0.05) 45%, transparent 70%)",
        }}
      />

      {/* Rotating ring of text */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-white/70"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <defs>
          <path id="globe-ring" d="M50,50 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text fill="currentColor" style={{ fontSize: "8px", letterSpacing: "2px", fontFamily: "var(--font-chivo), monospace" }}>
          <textPath href="#globe-ring" startOffset="0">
            GLASSBOX • 140 COUNTRIES • GLASSBOX • 140 COUNTRIES •
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
}
