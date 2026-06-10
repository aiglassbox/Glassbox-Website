import Link from "next/link";
import { Reveal } from "../ui/Reveal";

export function CtaProject() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-900 px-6 py-20 text-center sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full opacity-40 blur-[110px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(0,153,255,0.35), transparent)",
            }}
          />
          <div className="relative">
            <h2 className="display text-4xl font-semibold tracking-tight sm:text-6xl">
              Have a project?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-balance text-[16px] text-muted">
              We’d love to hear from you — whether you have a project in mind, or
              just want to say hi.
            </p>
            <Link href="/contact" className="pill pill-light mt-9 px-7 py-3">
              Let’s Talk
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
