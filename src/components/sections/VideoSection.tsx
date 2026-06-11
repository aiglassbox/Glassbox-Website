import { Reveal } from "../ui/Reveal";

export function VideoSection() {
  return (
    <section className="px-5 pt-8 sm:px-8 sm:pt-12">
      <Reveal>
        <h2 className="display max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
          Glassbox is a creative studio shaping bold brands and daring ideas.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[26px] bg-ink-900 sm:aspect-[16/7]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/showreel.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
      </Reveal>
    </section>
  );
}
