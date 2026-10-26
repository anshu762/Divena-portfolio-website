"use client";

import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Credentials", href: "#certificates" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="mt-20 border-t border-border/70 bg-card/60 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center bg-card">
              <span className="font-serif text-xs font-bold text-wine dark:text-gold">
                DC
              </span>
            </div>
            <div>
              <p className="font-serif font-bold text-sm text-ink">
                {portfolio.name}
              </p>
              <p className="text-[11px] text-ink-muted font-sans">
                {portfolio.tagline}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-ink-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-wine dark:hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-ink-muted hover:text-wine hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <p>
            &copy; {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
          <p className="font-serif italic text-gold">
            Designed &amp; built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
