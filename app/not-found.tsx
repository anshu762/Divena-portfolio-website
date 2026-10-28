import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand dark:bg-[#0E0C0B] px-6 text-ink selection:bg-wine selection:text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-gold">
          404 · Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink">
          Folio Entry Missing
        </h1>
        <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
          The page or dossier you are searching for does not exist or has been relocated within the portfolio archives.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wine text-white font-sans text-sm font-semibold hover:bg-wine-hover shadow-wine transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
