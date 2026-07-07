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

          <RevealGroup className="border-t border-white/[0.1]" stagger={0.06}>
            {team.map((m, i) => (
              <RevealItem key={m.name}>
                <div className="group flex flex-col gap-1.5 border-b border-white/[0.1] py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-8">
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-[12px] leading-none text-muted transition-colors duration-300 group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display text-[28px] font-semibold leading-[1.02] tracking-tight text-white transition-transform duration-300 ease-out group-hover:translate-x-1.5 sm:text-4xl lg:text-[52px]">
                      {m.name}
                    </h3>
                  </div>
                  <p className="pl-8 text-[13px] leading-relaxed text-muted sm:pl-0 sm:text-right sm:text-[14px]">
                    {m.role}
                  </p>
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
