"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { social } from "@/data/site";
import { LogoMark } from "./ui/Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

const menu = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 ${
          open ? "" : "backdrop-blur-[10px]"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-white transition-opacity hover:opacity-70"
        >
          <LogoMark className="h-7 w-7" />
          <span className="sr-only">Glassbox</span>
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="relative flex h-7 w-8 items-center justify-center text-white transition-opacity hover:opacity-70"
        >
          <span
            className={`absolute h-[2px] bg-white transition-all duration-300 ${
              open ? "w-7 rotate-45" : "w-7 -translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-[2px] bg-white transition-all duration-300 ${
              open ? "w-7 -rotate-45" : "w-4 translate-x-[6px] translate-y-[5px]"
            }`}
          />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-[#08080a]/65 px-5 pb-8 pt-28 backdrop-blur-2xl sm:px-8 sm:pb-12 sm:pt-32"
          >
            {/* Ambient aurora glow */}
            <div
              aria-hidden
              className="aurora pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[80vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-60"
            />

            <nav className="relative flex flex-col gap-1 sm:gap-2">
              {menu.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.08 + i * 0.06, ease: EASE, duration: 0.5 }}
                  className="group w-full"
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display block w-full py-3 text-[10vw] font-medium leading-[1] tracking-tight text-white/85 transition-colors duration-300 group-hover:text-white sm:py-3.5 sm:text-[5.2vw] lg:text-[3.75rem]"
                  >
                    {l.label}
                  </Link>
                  <span className="block h-px w-full origin-left scale-x-0 bg-white/35 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="relative mt-auto flex items-end justify-between gap-4 text-[14px] text-white/70"
            >
              <a
                href={social.mailto}
                className="text-[16px] transition-colors hover:text-white sm:text-[18px]"
              >
                {social.email}
              </a>
              <div className="flex items-center gap-3">
                <a href={social.behance} className="transition-colors hover:text-white">BE</a>
                <span className="text-white/20">/</span>
                <a href={social.dribbble} className="transition-colors hover:text-white">DR</a>
                <span className="text-white/20">/</span>
                <a href={social.x} className="transition-colors hover:text-white">X</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
