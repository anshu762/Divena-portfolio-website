"use client";

import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/data/portfolio";
import {
  Briefcase,
  Compass,
  HeartHandshake,
  Megaphone,
  Sparkles,
  Trees,
  Music,
  Camera,
  Mountain,
  CheckCircle2,
} from "lucide-react";

export function Experience() {
  const getLeadershipIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-wine dark:text-gold" };
    switch (iconName) {
      case "Compass":
        return <Compass {...props} />;
      case "HeartHandshake":
        return <HeartHandshake {...props} />;
      case "Megaphone":
        return <Megaphone {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Trees":
        return <Trees {...props} />;
      case "Music":
        return <Music {...props} />;
      case "Camera":
        return <Camera {...props} />;
      case "Mountain":
        return <Mountain {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-sm md:text-base font-bold text-wine dark:text-gold tracking-widest">
            05
          </span>
          <div className="w-8 h-[1px] bg-wine/40 dark:bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted font-sans font-semibold">
            Industry Immersion &middot; Civic Stewardship
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
          Experience & Leadership
        </h2>
        <p className="text-sm md:text-base text-ink-muted mt-2 max-w-2xl">
          Bridging boardroom consulting, venture capital research, and high-impact extracurricular initiatives.
        </p>
      </Reveal>

      {/* Two-Column Grid: Internships (Left) vs Leadership (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        {/* Column 1: Professional Internships */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border">
            <Briefcase className="w-4 h-4 text-wine dark:text-gold" />
            <h3 className="font-serif text-xl font-bold text-ink">
              Professional Internships
            </h3>
          </div>

          <div className="space-y-6">
            {portfolio.experience.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 0.08}>
                <div className="p-6 sm:p-7 rounded-3xl bg-card border border-border/80 shadow-editorial transition-all duration-300 hover:border-gold/60 hover:shadow-editorial-lg group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                      {exp.industry}
                    </span>
                    <span className="text-xs text-ink-muted font-sans">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-ink group-hover:text-wine dark:group-hover:text-gold transition-colors">
                    {exp.organization}
                  </h4>

                  <p className="text-xs uppercase tracking-widest text-ink-muted font-sans font-semibold mt-0.5">
                    {exp.role}
                  </p>

                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-3">
                    {exp.description}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-border/60 space-y-1.5">
                    {exp.takeaways.map((takeaway, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-ink-muted"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-wine dark:text-gold shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Column 2: Leadership & Extra-Curriculars */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border">
            <Compass className="w-4 h-4 text-wine dark:text-gold" />
            <h3 className="font-serif text-xl font-bold text-ink">
              Leadership & Extra-Curriculars
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolio.leadership.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <div className="h-full p-5 rounded-2xl bg-card border border-border/70 shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-editorial flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-full bg-wine/10 dark:bg-gold/15 flex items-center justify-center">
                        {getLeadershipIcon(item.iconName)}
                      </div>
                      {item.badge && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-card-subtle text-ink-muted border border-border">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-base text-ink group-hover:text-wine dark:group-hover:text-gold transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs font-sans text-gold mt-0.5 font-medium">
                      {item.organization}
                    </p>

                    <p className="text-xs text-ink-muted leading-relaxed mt-2.5">
                      {item.description}
                    </p>
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border/50 text-[11px] text-ink-muted/90 italic font-serif">
                      &bull; {item.highlights[0]}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
