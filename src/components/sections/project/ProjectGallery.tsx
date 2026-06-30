"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Narrative image sequence. Alternates full-bleed and contained frames, gives
 * each a short caption, and staggers the reveal. Aspect ratios are reserved to
 * prevent layout shift; below-the-fold media lazy-loads.
 */
export function ProjectGallery({
  name,
  gallery,
  galleryVideos,
  galleryCaptions,
}: {
  name: string;
  gallery: string[];
  galleryVideos?: (string | undefined)[];
  galleryCaptions?: (string | undefined)[];
}) {
  return (
    <section className="flex flex-col gap-20 sm:gap-28">
      {gallery.map((src, i) => {
        const fullBleed = i % 2 === 0;
        const video = galleryVideos?.[i];
        const caption = galleryCaptions?.[i];

        const frame = (
          <figure>
            <div
              className={`relative w-full overflow-hidden bg-ink-800 ${
                fullBleed
                  ? "aspect-[16/10] sm:aspect-[21/9]"
                  : "aspect-[16/10] rounded-[22px]"
              }`}
            >
              {video ? (
                <video
                  src={video}
                  poster={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={caption ?? `${name} — visual ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={src}
                  alt={caption ?? `${name} — visual ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes={fullBleed ? "100vw" : "(max-width: 1024px) 100vw, 64rem"}
                  className="object-cover"
                />
              )}
            </div>
            {caption ? (
              <figcaption
                className={`mt-4 text-[13px] leading-relaxed text-muted sm:text-[14px] ${
                  fullBleed ? "container-x" : ""
                }`}
              >
                {caption}
              </figcaption>
            ) : null}
          </figure>
        );

        return (
          <Reveal key={i} delay={0.04} duration={0.6} y={32}>
            {fullBleed ? (
              frame
            ) : (
              <div className="container-x">
                <div className="mx-auto max-w-5xl">{frame}</div>
              </div>
            )}
          </Reveal>
        );
      })}
    </section>
  );
}
