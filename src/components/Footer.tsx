import React from 'react';
import { ShieldCheck, ArrowUp, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Mission Statement */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-extrabold text-[#0a192f] text-base tracking-tight">
                ThinkBeforeYouShare — Be aware. Verify. Share responsibly.
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Educational awareness guide to help ordinary citizens spot misinformation online.
              </p>
            </div>
          </div>

          {/* Quick Nav, Download & Scroll to Top */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-slate-600">
            <button
              type="button"
              onClick={() => scrollToSection('warning-signs')}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Warning Signs
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('learn')}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Checklist
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('quiz')}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Quiz
            </button>

            {/* Direct Download ZIP Button */}
            <a
              href="/thinkbeforeyoushare.zip"
              download="thinkbeforeyoushare.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border border-blue-200/80 cursor-pointer"
              title="Download full project code as a .ZIP file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Code (.zip)</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Back to top</span>
            </button>
          </div>
        </div>

        {/* Responsible Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          <p>
            ThinkBeforeYouShare is a public-awareness educational resource. This website provides critical thinking guidelines and does not claim to automatically detect or verify real-world news stories.
          </p>
        </div>
      </div>
    </footer>
  );
};
