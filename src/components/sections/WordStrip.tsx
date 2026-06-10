import { Marquee } from "../ui/Marquee";

export function WordStrip({ reverse = false }: { reverse?: boolean }) {
  return (
    <section className="overflow-hidden border-y border-white/[0.06] py-10">
      <Marquee speed={28} reverse={reverse} gap="gap-8">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="display flex items-center gap-8 text-[12vw] font-bold leading-none text-white/[0.06] lg:text-[7vw]"
          >
            GLASSBOX
            <span className="text-accent/40">•</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
