import type { Metadata } from "next";
import { social } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Glassbox",
  description: "Ready for lift off? Let’s talk.",
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Get in touch</span>
          <div className="mt-5 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[80px]">
              Ready for lift off?
              <br />
              Let&rsquo;s talk.
            </h1>
            <a href={social.mailto} className="group shrink-0">
              <span className="text-[22px] font-medium tracking-tight text-white sm:text-[30px]">
                {social.email}
              </span>
              <span className="mt-2 block h-px w-10 bg-white/60 transition-all duration-500 group-hover:w-full" />
            </a>
          </div>
          <div className="mt-10 h-px w-full bg-white/[0.1]" />
        </Reveal>
      </div>

      <ContactForm />
    </section>
  );
}
