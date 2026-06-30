import Link from "next/link";
import { Reveal } from "../ui/Reveal";

export function CtaProject() {
  return (
    <section className="border-t border-white/[0.1] bg-ink-900">
      <div className="container-x py-28 text-center sm:py-36 lg:py-44">
        <Reveal duration={0.6}>
          <p className="eyebrow mb-7">Start something</p>
          <h2 className="display text-5xl font-semibold tracking-tightest text-white sm:text-7xl lg:text-[112px]">
            Have a project?
          </h2>
          <p className="mx-auto mt-7 max-w-md text-balance text-[16px] leading-relaxed text-muted sm:text-[18px]">
            We&rsquo;d love to hear from you — whether you have a brief in mind
            or just want to say hi.
          </p>
          <Link
            href="/contact"
            className="pill pill-light mt-11 gap-2 px-9 py-4 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
          >
            Let&rsquo;s Talk
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
