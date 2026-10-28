"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Modal } from "@/components/ui/Modal";
import { portfolio, type Project } from "@/data/portfolio";
import { ArrowUpRight, ExternalLink, Sparkles, Layers, CheckCircle2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Venture", "Social Impact", "Research", "Essay", "Business Plan", "Business Model"];

  const filteredProjects = activeFilter === "All"
    ? portfolio.projects
    : portfolio.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-sm md:text-base font-bold text-wine dark:text-gold tracking-widest">
            02
          </span>
          <div className="w-8 h-[1px] bg-wine/40 dark:bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted font-sans font-semibold">
            Ventures &middot; Research &middot; Inquiries
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
              Selected Works & Case Studies
            </h2>
            <p className="text-sm md:text-base text-ink-muted mt-2 max-w-2xl">
              From building live e-commerce infrastructure for grassroots craftswomen to commended global economic essays.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine",
                  activeFilter === category
                    ? "bg-wine text-white shadow-wine"
                    : "bg-card text-ink-muted hover:text-ink border border-border"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-12 items-stretch">
        {filteredProjects.map((project, index) => {
          const isFeatured = project.featured;
          const colSpanClass = isFeatured
            ? "lg:col-span-6 md:col-span-2"
            : "lg:col-span-4 md:col-span-1";

          return (
            <Reveal
              key={project.id}
              delay={index * 0.08}
              className={cn("h-full", colSpanClass)}
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-editorial transition-all duration-500 hover:-translate-y-1.5 hover:shadow-editorial-lg hover:border-gold/70 cursor-pointer overflow-hidden"
              >
                {/* Background accent hover glow */}
                <div className="pointer-events-none absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-wine/5 dark:bg-gold/5 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                {/* Card Top Details */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                      {project.category}
                    </span>

                    <span className="text-[11px] font-sans text-ink-muted tracking-wider uppercase">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink tracking-tight group-hover:text-wine dark:group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-wine dark:text-[#E8829C] mt-1 italic font-serif">
                    {project.tagline}
                  </p>

                  {/* Real platform visual for Rural Bazaar */}
                  {project.image && (
                    <div className="relative w-full h-44 sm:h-52 my-4 rounded-2xl overflow-hidden border border-border/80 bg-black/5 dark:bg-black/30 group/img shadow-sm">
                      {/* Browser Mockup Top Bar */}
                      <div className="absolute top-0 inset-x-0 h-6 bg-card-subtle/95 border-b border-border/70 flex items-center px-3 gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-red-400/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                        <div className="w-2 h-2 rounded-full bg-green-400/80" />
                        <div className="ml-2 flex items-center gap-1 text-[9px] font-mono text-ink-muted">
                          <Globe className="w-2.5 h-2.5 text-gold" />
                          <span>ruralbazaar.netlify.app</span>
                        </div>
                      </div>
                      <div className="relative w-full h-full pt-6">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-3 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom Meta & Actions */}
                <div className="mt-8 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-card-subtle text-ink-muted border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Live Link Button right on the card face */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-wine text-white text-xs font-semibold hover:bg-wine-hover shadow-wine transition-colors"
                        aria-label={`Visit live site for ${project.title}`}
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink-muted group-hover:text-white group-hover:bg-wine group-hover:border-wine transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Project Detail Modal with Pinned Footer Action */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        category={selectedProject?.category}
        footerActions={
          selectedProject && (
            <>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-card border border-border text-ink-muted font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-wine text-white text-xs font-bold tracking-wider uppercase hover:bg-wine-hover shadow-wine transition-all hover:scale-105"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-full border border-border text-xs uppercase tracking-wider font-semibold hover:bg-card-subtle transition-colors"
                >
                  Close Case Study
                </button>
              )}
            </>
          )
        }
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* If project has a high-res platform visual, render it */}
            {selectedProject.image && (
              <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-border/80 shadow-md">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )}

            <div>
              <span className="text-xs uppercase tracking-wider text-gold font-sans font-semibold">
                Role & Accountability: {selectedProject.role}
              </span>
              <p className="font-serif italic text-lg text-ink mt-1">
                &ldquo;{selectedProject.tagline}&rdquo;
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-ink font-sans font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-wine dark:text-gold" /> Comprehensive Overview
              </h4>
              <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                {selectedProject.extendedDescription}
              </p>
            </div>

            {selectedProject.impactMetrics && (
              <div className="space-y-2.5 p-5 rounded-2xl bg-card-subtle border border-border/80">
                <h4 className="text-xs uppercase tracking-widest text-ink font-sans font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold" /> Key Impact & Outcomes
                </h4>
                <ul className="space-y-2 mt-2">
                  {selectedProject.impactMetrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted">
                      <CheckCircle2 className="w-4 h-4 text-wine dark:text-gold shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
