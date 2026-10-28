import React from 'react';
import { ArrowDown, CheckCircle2, Smartphone, Newspaper, ShieldCheck, AlertCircle, Share2 } from 'lucide-react';

interface HeroProps {
  onLearnClick: () => void;
  onTestKnowledgeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnClick, onTestKnowledgeClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle, Buttons */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs sm:text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Public Media Awareness & Verification
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0a192f] leading-[1.12]">
              Not Everything You See Online Is True.
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Before you believe it. Before you forward it. Take a moment to verify it.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              <button
                onClick={onLearnClick}
                className="w-full sm:w-auto px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Learn How to Spot Fake News</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onTestKnowledgeClick}
                className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Test Your Knowledge</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0a192f]">100%</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Free & Public</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">5 Steps</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Easy Checklist</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0a192f]">5 Mins</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Quick Interactive Quiz</p>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration showing a phone, news article, and verification checkmark */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Background soft glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 via-sky-100/50 to-blue-50/30 rounded-3xl blur-2xl -z-10" />

              {/* Central Illustration Container */}
              <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/50">
                {/* Phone Mockup Frame */}
                <div className="bg-slate-900 rounded-[2.2rem] p-3 shadow-inner ring-1 ring-slate-800">
                  <div className="bg-slate-50 rounded-[1.8rem] overflow-hidden border border-slate-200">
                    {/* Phone Top Notch / Header */}
                    <div className="bg-slate-900 text-white px-5 py-2.5 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">9:41</span>
                      <div className="w-16 h-3.5 bg-slate-800 rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-slate-700 rounded-full" />
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <span className="text-[10px] font-medium">5G</span>
                        <div className="w-3.5 h-2 bg-slate-300 rounded-xs" />
                      </div>
                    </div>

                    {/* Chat / Feed Simulation */}
                    <div className="p-4 bg-slate-100/70 space-y-3 min-h-[260px] flex flex-col justify-center">
                      {/* Incoming forward message simulation */}
                      <div className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-xs">
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 mb-1.5">
                          <Share2 className="w-3 h-3 text-slate-400" />
                          <span>Forwarded many times</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                            <AlertCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              “Shocking secret remedy revealed!”
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                              Source unknown • Claims immediate results...
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Verification Arrow / Transition */}
                      <div className="flex items-center justify-center gap-2 py-0.5">
                        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          Take 30 seconds to verify ↓
                        </span>
                      </div>

                      {/* Verified News Article Result */}
                      <div className="bg-white rounded-2xl p-3.5 border-2 border-blue-500/80 shadow-md">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                            Fact-Checked
                          </span>
                          <span className="text-[10px] text-slate-400">Verified Today</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <Newspaper className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 leading-snug">
                              Official Health Organization Statement
                            </p>
                            <p className="text-[11px] text-slate-600 mt-0.5">
                              Credible sources confirm the viral claim was false.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Verification Checkmark */}
                <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-emerald-600 text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 border-2 border-white animate-bounce-subtle">
                  <CheckCircle2 className="w-5 h-5 text-emerald-200" strokeWidth={2.5} />
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">
                      Safe to Share
                    </p>
                    <p className="text-xs font-extrabold">Verified Fact</p>
                  </div>
                </div>

                {/* Floating Badge 2: Phone & News icon pill */}
                <div className="absolute -top-3 -left-3 sm:-left-4 bg-white text-slate-800 px-3 py-1.5 rounded-xl shadow-md border border-slate-200 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">Think Before Sharing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
