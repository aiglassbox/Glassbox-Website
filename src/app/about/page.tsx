import type { Metadata } from "next";
import { team, awards, stats } from "@/data/site";
import { AboutHero } from "@/components/sections/AboutHero";
import { IntroGlobe } from "@/components/sections/IntroGlobe";
import { Counter } from "@/components/sections/Stats";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About - Glassbox",
  description:
    "Glassbox is a brand and media agency, a Komerz company, measured on what comes back, not what goes out.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Intro */}
      <section className="section-pad">
        <div className="container-x flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center">
            <IntroGlobe />
            <p className="mt-8 max-w-2xl text-balance text-[19px] font-medium leading-relaxed tracking-tight text-white/90 sm:text-[22px]">
              We&rsquo;re Glassbox, a brand and media company. We build bold
              brands and run the media behind them, across brand, commerce, and
              performance, measured on what comes back, not what goes out.
            </p>
          </Reveal>

          {/* Stats */}
          <RevealGroup
            className="mt-16 grid w-full max-w-xl grid-cols-2 gap-x-10 gap-y-12 text-left"
            stagger={0.1}
          >
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <span className="display block text-5xl font-semibold tracking-tight sm:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <p className="mt-3 max-w-[210px] text-[13px] leading-relaxed text-muted">
                  {s.label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad pt-0">
        <div className="container-x">
          <Reveal className="mb-10 flex flex-col gap-3">
            <span className="eyebrow">The Team</span>
            <h2 className="display max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
              We collaborate closely to hit your goals and go beyond
              expectations.
            </h2>
          </Reveal>

          <RevealGroup className="border-t border-white/[0.09]" stagger={0.07}>
            {team.map((m, i) => (
              <RevealItem key={m.name}>
                <div className="group relative flex flex-col gap-2 overflow-hidden border-b border-white/[0.09] py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-7">
                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -left-16 top-1/2 h-48 w-2/3 -translate-y-1/2 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 30% 50%, rgba(0,153,255,0.4), rgba(255,94,219,0.25) 52%, transparent 80%)",
                    }}
                  />

                  {/* Index + name */}
                  <div className="relative flex items-baseline gap-4 sm:gap-9">
                    <span className="font-mono text-[13px] tabular-nums text-muted transition-colors duration-300 group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display text-2xl font-semibold leading-[1.05] tracking-tight text-white transition-[transform,color] duration-500 ease-out group-hover:translate-x-2 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:via-pink group-hover:to-mint group-hover:bg-clip-text group-hover:text-transparent sm:text-[32px] lg:text-[44px]">
                      {m.name}
                    </h3>
                  </div>

                  {/* Role + arrow */}
                  <div className="relative flex items-center gap-4 pl-9 sm:justify-end sm:pl-0">
                    <p className="text-[13px] text-muted transition-colors duration-300 group-hover:text-white sm:max-w-[240px] sm:text-right sm:text-[14px]">
                      {m.role}
                    </p>
                    <span
                      aria-hidden
                      className="hidden text-[20px] leading-none text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100 sm:inline-block sm:-translate-x-2"
                    >
                      &#8599;
                    </span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Awards */}
      <section className="section-pad pt-0">
        <div className="container-x">
          <Reveal className="flex flex-col gap-3">
            <span className="eyebrow">Awards</span>
            <h2 className="display max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              We&rsquo;re proud to have won several prestigious awards over the
              years.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 border-t border-white/[0.08]" stagger={0.04}>
            {awards.map((a, i) => (
              <RevealItem key={i}>
                <div className="group flex items-center justify-between gap-6 border-b border-white/[0.08] py-5 transition-colors hover:bg-white/[0.02]">
                  <span className="text-[18px] font-medium tracking-tight text-white sm:text-[20px]">
                    {a.org}
                  </span>
                  <div className="flex items-center gap-6 sm:gap-12">
                    <span className="hidden text-[14px] text-muted sm:block">
                      {a.title}
                    </span>
                    <span className="w-[78px] text-right font-mono text-[13px] text-white/45">
                      {a.date}
                    </span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
