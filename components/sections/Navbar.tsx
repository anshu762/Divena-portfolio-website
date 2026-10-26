"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Credentials", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When scrolled past top threshold, apply glassmorphism styling
      setIsScrolled(currentScrollY > 20);

      // Determine active section for highlighting
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = currentScrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (currentScrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Sticky Fixed Navbar (Always visible, stays on top during scroll) */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 md:px-8 flex justify-center pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className={cn(
            "w-full max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 pointer-events-auto",
            isScrolled
              ? "glass-panel shadow-editorial-lg border border-border/80"
              : "bg-card/40 backdrop-blur-sm border border-border/40 shadow-sm"
          )}
        >
          {/* Logo / Monogram matching the Favicon */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine rounded-full"
            aria-label="Divena Rajesh Chugani - Home"
          >
            <div className="w-9 h-9 rounded-full border border-gold/70 flex items-center justify-center bg-card shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-wine">
              <span className="font-serif text-sm font-bold tracking-wider text-wine dark:text-gold">
                DC
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-sm font-semibold tracking-wide text-ink">
                {portfolio.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-ink-muted font-sans font-medium">
                Economics &middot; Strategy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-card-subtle/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/70">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1 text-xs font-medium tracking-wide transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-wine",
                    isActive
                      ? "text-wine dark:text-gold font-semibold"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-wine/10 dark:bg-gold/15 rounded-full -z-10 border border-wine/20 dark:border-gold/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-wine text-white shadow-wine hover:bg-wine-hover transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-ink hover:text-wine focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-canvas/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-gold/70 flex items-center justify-center bg-card">
                  <span className="font-serif text-xs font-bold text-wine dark:text-gold">
                    DC
                  </span>
                </div>
                <span className="font-serif text-sm font-semibold text-ink">
                  {portfolio.name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Navigation Menu"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink hover:text-wine"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-3.5 my-auto py-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-bold mb-1">
                Navigation
              </span>
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 + 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink hover:text-wine dark:hover:text-gold transition-colors inline-block py-1"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions inside Overlay */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-ink-muted">
                <p className="font-medium text-ink">{portfolio.contact.email}</p>
                <p className="mt-0.5">{portfolio.contact.phoneFormatted}</p>
              </div>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-wine text-white text-xs uppercase tracking-widest font-semibold hover:bg-wine-hover shadow-wine transition-all"
              >
                Send Direct Email &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
