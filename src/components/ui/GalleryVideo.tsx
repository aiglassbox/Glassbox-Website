/**
 * Autoplaying, looping, muted gallery video (no audio controls).
 */
export function GalleryVideo({ src, poster }: { src: string; poster?: string }) {
  return (
    <div className="relative aspect-[16/10] w-full bg-ink-800">
      <video
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
