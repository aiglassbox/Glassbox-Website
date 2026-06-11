import Link from "next/link";
import { social } from "@/data/site";
import { NewsletterForm } from "./ui/NewsletterForm";

const studioLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { label: "Instagram", href: social.behance },
  { label: "Twitter", href: social.x },
  { label: "LinkedIn", href: social.dribbble },
  { label: "Are.na", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative z-[2] overflow-hidden bg-[#08080a] px-5 pb-8 pt-20 sm:px-8 sm:pt-24">
      {/* Giant wordmark */}
      <div className="mb-14 select-none sm:mb-20">
        <h2 className="wordmark bg-gradient-to-b from-black to-white bg-clip-text text-center text-[15vw] font-bold leading-[0.82] tracking-[0.02em] text-transparent lg:text-[16vw] lg:tracking-[0.04em]">
          GLASSBOX
        </h2>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
        <div className="flex flex-col gap-4">
          <p className="eyebrow">Studio</p>
          {studioLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="w-fit text-[16px] text-white/90 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow">Social</p>
          {socialLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="w-fit text-[16px] text-white/90 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="eyebrow mb-2">Contact</p>
          <a
            href={social.mailto}
            className="w-fit text-[16px] text-white/90 transition-colors hover:text-white"
          >
            {social.email}
          </a>
          <p className="text-[16px] text-muted">Gotham, NY</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="eyebrow mb-2">Newsletter</p>
          <NewsletterForm />
          <p className="mt-4 max-w-[220px] text-[14px] leading-relaxed text-muted">
            Occasional updates from the studio. No spam.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col gap-3 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; 2026 Glassbox Studio. All rights reserved.</span>
        <span>A creative studio based in Gotham.</span>
      </div>
    </footer>
  );
}
