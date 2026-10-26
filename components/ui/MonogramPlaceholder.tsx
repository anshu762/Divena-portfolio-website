"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MonogramPlaceholderProps {
  className?: string;
  imageSrc?: string;
  name?: string;
}

export function MonogramPlaceholder({
  className,
  imageSrc,
  name = "Divena Rajesh Chugani",
}: MonogramPlaceholderProps) {
  // If a real profile photo is supplied, render it inside the luxury arched frame
  if (imageSrc && imageSrc.trim() !== "") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-t-[140px] rounded-b-[40px] border border-gold/40 shadow-editorial-lg bg-card-subtle group",
          className
        )}
      >
        <Image
          src={imageSrc}
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 280px, (max-width: 1200px) 380px, 440px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle gold hairline inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-t-[140px] rounded-b-[40px] ring-1 ring-inset ring-gold/30" />
      </div>
    );
  }

  // Otherwise render the luxury editorial monogram frame
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-t-[140px] rounded-b-[40px] border border-gold/40 shadow-editorial-lg flex flex-col items-center justify-between p-8 select-none bg-gradient-to-b from-[#2A121A] via-[#1B0F14] to-[#120B0E] text-white",
        className
      )}
    >
      {/* Background radial gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,166,107,0.22),transparent_70%)]" />

      {/* Arched decorative hairline */}
      <div className="pointer-events-none absolute inset-3 rounded-t-[125px] rounded-b-[30px] border border-gold/30" />
      <div className="pointer-events-none absolute inset-5 rounded-t-[115px] rounded-b-[24px] border border-gold/15" />

      {/* Top emblem */}
      <div className="relative z-10 pt-4 flex flex-col items-center gap-1.5">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-sans font-medium">
          Personal Monogram
        </span>
        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>

      {/* Center initials */}
      <div className="relative z-10 flex flex-col items-center my-auto py-8">
        <div className="relative flex items-center justify-center">
          <span className="font-serif text-7xl md:text-8xl lg:text-9xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5E6] via-[#E6C687] to-[#B38F4D] drop-shadow-md">
            DC
          </span>
          <span className="absolute -bottom-2 text-[10px] md:text-xs font-serif italic text-gold/80 tracking-widest">
            Divena Chugani
          </span>
        </div>
      </div>

      {/* Bottom descriptor */}
      <div className="relative z-10 pb-2 text-center flex flex-col items-center gap-2">
        <div className="w-12 h-[1px] bg-gold/40" />
        <p className="text-[11px] font-sans text-stone-300/80 tracking-wider uppercase">
          Economics &middot; Strategy &middot; Venture
        </p>
      </div>

      {/* Subtle corner ornamentation */}
      <div className="pointer-events-none absolute bottom-4 left-4 w-2 h-2 border-l border-b border-gold/50" />
      <div className="pointer-events-none absolute bottom-4 right-4 w-2 h-2 border-r border-b border-gold/50" />
    </div>
  );
}
