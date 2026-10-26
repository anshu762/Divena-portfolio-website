"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: "normal" | "slow" | "fast";
  direction?: "left" | "right";
  className?: string;
  separator?: string;
}

export function Marquee({
  items,
  speed = "slow",
  direction = "left",
  className,
  separator = "✦",
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee",
  }[speed];

  const reverseClass = direction === "right" ? "animate-marquee-reverse" : speedClass;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden whitespace-nowrap py-4 border-y border-border/80 bg-card/60 backdrop-blur-md select-none",
        className
      )}
    >
      {/* Left/Right Vignette gradients for infinite fading */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

      <div className={cn("inline-flex items-center gap-8 group-hover:[animation-play-state:paused]", reverseClass)}>
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-8">
            <span className="text-sm md:text-base font-serif tracking-widest uppercase text-ink-muted transition-colors hover:text-wine font-medium">
              {item}
            </span>
            <span className="text-xs text-gold/70 select-none">{separator}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
