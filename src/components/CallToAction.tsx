import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface CallToActionProps {
  onTakeQuizClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onTakeQuizClick }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0a192f] via-[#0f2347] to-[#1e3a8a] text-white p-8 sm:p-12 shadow-xl overflow-hidden text-center sm:text-left">
          {/* Subtle background decorative circle */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold mb-4 border border-blue-400/20">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-300" />
                Community Responsibility
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Stop the Spread. Start With Yourself.
              </h2>

              <p className="mt-3.5 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                One unverified forward can mislead many people. Check first. Share responsibly.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={onTakeQuizClick}
                className="w-full sm:w-auto px-7 py-4 text-base font-bold text-[#0a192f] bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Take the Quiz</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
