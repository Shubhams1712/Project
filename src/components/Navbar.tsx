import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Download } from 'lucide-react';

interface NavbarProps {
  onLearnClick: () => void;
  onTakeQuizClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLearnClick, onTakeQuizClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLearn = () => {
    setMobileMenuOpen(false);
    onLearnClick();
  };

  const handleQuiz = () => {
    setMobileMenuOpen(false);
    onTakeQuizClick();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-slate-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            aria-label="ThinkBeforeYouShare Home"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0a192f] leading-none">
                ThinkBeforeYouShare
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide mt-0.5">
                Public Awareness Initiative
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={handleLearn}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Learn
            </button>
            <button
              onClick={handleQuiz}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Take the Quiz
            </button>
            <a
              href="/thinkbeforeyoushare.zip"
              download="thinkbeforeyoushare.zip"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Download source code archive"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>Download Code (.zip)</span>
            </a>
            <button
              onClick={handleQuiz}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Test Knowledge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleLearn}
              className="text-left px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Learn
            </button>
            <button
              onClick={handleQuiz}
              className="text-left px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Take the Quiz
            </button>
            <a
              href="/thinkbeforeyoushare.zip"
              download="thinkbeforeyoushare.zip"
              className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Code (.zip)</span>
              </div>
              <span className="text-xs text-slate-400">51 KB</span>
            </a>
            <button
              onClick={handleQuiz}
              className="flex items-center justify-between px-4 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>Test Knowledge Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
