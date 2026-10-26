"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Toast } from "@/components/ui/Toast";
import { portfolio } from "@/data/portfolio";
import {
  Mail,
  Phone,
  Copy,
  ArrowUpRight,
  Send,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const copyToClipboard = (text: string, label: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      showToast(`${label} copied to clipboard!`);
    }
  };

  const handleLaunchEmailClient = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = senderSubject.trim() || `Inquiry for Divena Rajesh Chugani`;
    const bodyContent = `Hello Divena,\n\nMy name is ${senderName || "[Your Name]"}.\n\n${
      senderMessage || "I would like to connect regarding your portfolio and ventures."
    }\n\nBest regards,\n${senderName || ""}`;

    const mailtoUrl = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
    showToast("Opening your email client...");
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-sm md:text-base font-bold text-wine dark:text-gold tracking-widest">
            07
          </span>
          <div className="w-8 h-[1px] bg-wine/40 dark:bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted font-sans font-semibold">
            Inquiries &middot; Partnerships &middot; Dialogue
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink max-w-3xl leading-[1.05]">
          Let&apos;s build something meaningful.
        </h2>
        <p className="text-sm md:text-base text-ink-muted mt-3 max-w-xl">
          Whether you want to discuss behavioural economics, explore collaborative social ventures, or connect over athletics and leadership, reach out directly.
        </p>
      </Reveal>

      {/* Main Grid: Direct Channels & Interactive Mailer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        {/* Left Column: Direct High-Impact Contact Card */}
        <div className="lg:col-span-5 space-y-6">
          <Reveal delay={0.1}>
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-editorial space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <h3 className="font-serif text-xl font-bold text-ink">
                  Direct Inquiries
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-gold font-sans font-semibold">
                  Personal Channels
                </span>
              </div>

              {/* Primary Email Card with Quick Action */}
              <div className="p-5 rounded-2xl bg-card-subtle/80 border border-border/70 space-y-3 transition-all hover:border-gold/60">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-wine/10 text-wine dark:text-gold flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-ink-muted font-sans font-bold">
                        Direct Email
                      </p>
                      <a
                        href={`mailto:${portfolio.contact.email}`}
                        className="font-sans text-sm font-bold text-ink hover:text-wine dark:hover:text-gold truncate block"
                      >
                        {portfolio.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(portfolio.contact.email, "Email")}
                    aria-label="Copy email address"
                    className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-ink-muted hover:text-wine hover:border-wine transition-colors shrink-0"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href={`mailto:${portfolio.contact.email}?subject=Portfolio%20Inquiry%20-%20Divena%20Rajesh%20Chugani`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-wine text-white text-xs font-semibold uppercase tracking-wider hover:bg-wine-hover shadow-wine transition-colors"
                >
                  <span>Compose Email Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-card-subtle/80 border border-border/70 flex items-center justify-between gap-4 transition-colors hover:border-gold/60">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-ink-muted font-sans font-bold">
                      Direct Telephone
                    </p>
                    <a
                      href={`tel:${portfolio.contact.phone}`}
                      className="font-sans text-sm font-semibold text-ink hover:text-wine dark:hover:text-gold truncate block"
                    >
                      {portfolio.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(portfolio.contact.phoneFormatted, "Phone number")}
                    aria-label="Copy phone number"
                    className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-ink-muted hover:text-wine hover:border-wine transition-colors"
                    title="Copy phone number"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-border/60">
                <p className="text-xs uppercase tracking-widest text-ink-muted font-sans font-bold mb-3">
                  Social Profiles
                </p>
                <div className="flex flex-wrap gap-3">
                  {/* Instagram Button */}
                  <a
                    href={portfolio.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-xs font-semibold text-ink hover:border-wine hover:text-wine transition-colors"
                  >
                    <FaInstagram className="w-4 h-4 text-[#E1306C]" />
                    <span>@{portfolio.contact.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3 text-ink-muted" />
                  </a>

                  {/* LinkedIn Button - auto-hidden when empty */}
                  {portfolio.contact.linkedin && portfolio.contact.linkedin.trim() !== "" && (
                    <a
                      href={portfolio.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-xs font-semibold text-ink hover:border-wine hover:text-wine transition-colors"
                    >
                      <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3 text-ink-muted" />
                    </a>
                  )}
                </div>
              </div>

              {/* Academic Location Note */}
              <div className="pt-2 text-xs text-ink-muted space-y-1">
                <p className="font-semibold text-ink">{portfolio.school}</p>
                <p>{portfolio.education} &middot; Hyderabad, India</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Pre-draft Email Helper (No backend required, directly opens mail client) */}
        <div className="lg:col-span-7">
          <Reveal delay={0.2}>
            <div className="p-6 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-editorial space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Prepare Your Message
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted mt-0.5">
                    Draft your note here, then launch your native email client with one click.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-gold shrink-0" />
              </div>

              <form onSubmit={handleLaunchEmailClient} className="space-y-4">
                <div>
                  <label
                    htmlFor="senderName"
                    className="block text-xs uppercase tracking-wider font-sans font-semibold text-ink mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="senderName"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. John Doe / Venture Partner"
                    className="w-full px-4 py-3 rounded-xl bg-card-subtle/50 border border-border text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="senderSubject"
                    className="block text-xs uppercase tracking-wider font-sans font-semibold text-ink mb-1.5"
                  >
                    Topic / Subject
                  </label>
                  <input
                    id="senderSubject"
                    type="text"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="e.g. Collaboration on Behavioral Economics / Venture Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-card-subtle/50 border border-border text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="senderMessage"
                    className="block text-xs uppercase tracking-wider font-sans font-semibold text-ink mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="senderMessage"
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-card-subtle/50 border border-border text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-wine text-white font-medium text-xs uppercase tracking-widest hover:bg-wine-hover shadow-wine transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
                  >
                    <span>Send via Email Client</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const text = `Name: ${senderName || "N/A"}\nSubject: ${
                        senderSubject || "Inquiry"
                      }\nMessage: ${senderMessage || "N/A"}`;
                      copyToClipboard(text, "Drafted message");
                    }}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-full border border-border bg-card text-ink hover:text-wine hover:border-wine text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Copy Toast */}
      <Toast message={toastMessage} isVisible={toastVisible} />
    </section>
  );
}
