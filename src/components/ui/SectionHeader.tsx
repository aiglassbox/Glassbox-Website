import Link from "next/link";
import { Reveal } from "./Reveal";

export function SectionHeader({
  title,
  subtitle,
  cta,
  align = "between",
}: {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  align?: "between" | "center";
}) {
  if (align === "center") {
    return (
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="display text-4xl font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-balance text-[15px] text-muted sm:text-[17px]">
            {subtitle}
          </p>
        )}
      </Reveal>
    );
  }

  return (
    <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="display text-4xl font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-md text-balance text-[15px] text-muted sm:text-[17px]">
            {subtitle}
          </p>
        )}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="pill pill-ghost group shrink-0 gap-2"
        >
          {cta.label}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      )}
    </Reveal>
  );
}
