"use client";

type MarqueeProps = {
  children: React.ReactNode;
  speed?: number; // seconds for one full loop
  reverse?: boolean;
  className?: string;
  gap?: string;
  pauseOnHover?: boolean;
};

/**
 * Seamless horizontal marquee. The track holds two identical copies of the
 * content and is translated by -50% (exactly one copy width) for a loop.
 */
export function Marquee({
  children,
  speed = 30,
  reverse = false,
  className = "",
  gap = "gap-6",
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div className={`group relative w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${gap} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className={`flex shrink-0 items-center ${gap}`}>{children}</div>
        <div aria-hidden className={`flex shrink-0 items-center ${gap}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
