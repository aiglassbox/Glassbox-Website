"use client";

import Image from "next/image";
import { testimonials } from "@/data/site";
import { Reveal } from "../ui/Reveal";

function Card({
  quote,
  name,
  role,
  img,
}: {
  quote: string;
  name: string;
  role: string;
  img: string;
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-ink-850">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width:1024px) 100vw, 44vw"
          className="object-cover object-top"
        />
      </div>
      <div className="p-7 sm:p-8">
        <p className="text-[19px] leading-snug tracking-tight text-white sm:text-[22px]">
          {quote}
        </p>
        <div className="mt-6">
          <p className="text-[15px] font-medium text-white">{name}</p>
          <p className="text-[13px] text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="pb-10 pt-20 sm:pb-12 sm:pt-28">
      <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — sticky heading */}
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
            <h2 className="display mt-6 max-w-md text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
              Trusted by brands who aren&rsquo;t afraid to stand out.
            </h2>
          </Reveal>
        </div>

        {/* Right — scrolling stack of cards */}
        <div className="flex flex-col gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <Card {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
