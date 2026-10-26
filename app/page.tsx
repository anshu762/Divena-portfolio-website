import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-wine selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Infinite Keyword Marquee */}
        <Marquee items={portfolio.marqueeKeywords} speed="slow" />

        {/* 01: About & Stats */}
        <About />

        {/* 02: Projects & Inquiries Bento Grid */}
        <Projects />

        {/* 03: Achievements & Athletic Stewardship */}
        <Achievements />

        {/* 04: Certificates & Academic Programs */}
        <Certificates />

        {/* 05: Industry Immersion & Civic Leadership */}
        <Experience />

        {/* 06: Core Skills & Competencies */}
        <Skills />

        {/* 07: Contact & Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
