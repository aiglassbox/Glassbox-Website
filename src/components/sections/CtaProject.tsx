import Link from "next/link";
import { Reveal } from "../ui/Reveal";

export function CtaProject() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal className="px-6 py-12 text-center sm:py-16">
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
        </Reveal>
      </div>
    </section>
  );
}
