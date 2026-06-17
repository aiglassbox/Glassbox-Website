import Image from "next/image";
import { Marquee } from "../ui/Marquee";

// Trimmed + height-normalised client logos (intrinsic height 200px).
const CLIENTS: { name: string; file: string; w: number }[] = [
  { name: "Tata", file: "tata.png", w: 228 },
  { name: "P&G", file: "pg.png", w: 458 },
  { name: "Nestlé", file: "nestle.png", w: 193 },
  { name: "Hero MotoCorp", file: "hero.png", w: 617 },
  { name: "Bisleri", file: "bisleri.png", w: 591 },
  { name: "ITC", file: "itc.png", w: 192 },
  { name: "SUGAR Cosmetics", file: "sugar.png", w: 698 },
  { name: "McDonald's", file: "mcdonalds.png", w: 229 },
  { name: "Piramal", file: "piramal.png", w: 434 },
  { name: "Unilever", file: "unilever.png", w: 200 },
  { name: "Essar", file: "essar.png", w: 640 },
  { name: "Aditya Birla Group", file: "adityabirla.png", w: 357 },
  { name: "Star Health", file: "starhealth.png", w: 437 },
  { name: "Bata", file: "bata.png", w: 885 },
];

export function ClientLogos({
  label = "Trusted by the brands people love",
}: {
  label?: string;
}) {
  return (
    <section className="overflow-hidden border-y border-white/[0.06] py-12 sm:py-14">
      <p className="eyebrow mb-9 text-center">{label}</p>
      <Marquee speed={45} gap="gap-12 sm:gap-20">
        {CLIENTS.map((c) => (
          <Image
            key={c.file}
            src={`/assets/clients/${c.file}`}
            alt={c.name}
            width={c.w}
            height={200}
            className="h-6 w-auto shrink-0 opacity-50 brightness-0 invert transition-opacity duration-300 hover:opacity-100 sm:h-7"
          />
        ))}
      </Marquee>
    </section>
  );
}
