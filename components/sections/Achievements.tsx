"use client";

import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/data/portfolio";
import { Trophy, Medal, HeartHandshake, TrendingUp, Award, ExternalLink } from "lucide-react";

export function Achievements() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Athletics":
        return <Trophy className="w-4 h-4 text-gold" />;
      case "Philanthropy":
        return <HeartHandshake className="w-4 h-4 text-wine dark:text-gold" />;
      case "Marketing":
        return <TrendingUp className="w-4 h-4 text-gold" />;
      default:
        return <Award className="w-4 h-4 text-wine dark:text-gold" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-sm md:text-base font-bold text-wine dark:text-gold tracking-widest">
            03
          </span>
          <div className="w-8 h-[1px] bg-wine/40 dark:bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted font-sans font-semibold">
            Honors &middot; Athletic Leadership &middot; Impact
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
          Recognitions & Milestones
        </h2>
        <p className="text-sm md:text-base text-ink-muted mt-2 max-w-2xl">
          A track record of competitive drive, academic distinction, and social responsibility.
        </p>
      </Reveal>

      {/* Dedicated Volleyball Spotlight Card */}
      <Reveal delay={0.15}>
        <div className="relative mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-card via-card to-card-subtle border border-gold/40 shadow-editorial-lg overflow-hidden group">
          {/* Subtle gold watermark emblem */}
          <div className="pointer-events-none absolute -right-10 -bottom-10 opacity-5 dark:opacity-10">
            <Trophy className="w-64 h-64 text-gold" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" /> Athletic Leadership Spotlight
                </span>
                <span className="text-xs text-ink-muted font-sans">
                  {portfolio.volleyballSpotlight.tenure}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight">
                {portfolio.volleyballSpotlight.title}
              </h3>

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-wine dark:text-gold font-sans">
                {portfolio.volleyballSpotlight.role}
              </p>

              <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                {portfolio.volleyballSpotlight.narrative}
              </p>
            </div>

            {/* Right: 3 Podium Accolade Pills */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {portfolio.volleyballSpotlight.accolades.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-card border border-border/70 flex items-center justify-between gap-4 shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:border-gold"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <Medal className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-sm text-ink">{item.event}</p>
                      <p className="text-xs text-wine dark:text-gold font-medium mt-0.5">{item.rank}</p>
                    </div>
                  </div>
                  <span className="text-xs font-sans font-bold text-ink-muted shrink-0">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Timeline of Achievements */}
      <div className="mt-16 space-y-6">
        {portfolio.achievements.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <div className="group relative p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-editorial transition-all duration-300 hover:border-gold/60 hover:shadow-editorial-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Left Details */}
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider bg-card-subtle text-ink-muted border border-border">
                    {getCategoryIcon(item.category)}
                    {item.category}
                  </span>
                  <span className="text-xs text-ink-muted font-sans">
                    {item.organization} &middot; {item.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink group-hover:text-wine dark:group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>

                {item.id === "ach-erudite-marketing" && (
                  <div className="pt-1">
                    <a
                      href="https://www.instagram.com/theeruditenewspaper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine dark:text-gold hover:underline"
                    >
                      <span>View @theeruditenewspaper on Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Big Metric Pill */}
              {item.metric && (
                <div className="shrink-0 flex md:flex-col items-center justify-between md:justify-center p-4 rounded-2xl bg-card-subtle border border-border/70 min-w-[150px] text-center">
                  <span className="text-[10px] uppercase tracking-widest text-ink-muted font-sans font-bold">
                    Metric Highlight
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-wine dark:text-gold tracking-tight mt-1">
                    {item.metric}
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
