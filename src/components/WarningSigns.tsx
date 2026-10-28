import React from 'react';
import { Flame, HelpCircle, CalendarClock, Info, AlertTriangle } from 'lucide-react';
import { warningSignsData } from '../data/warningSignsData';

export const WarningSigns: React.FC = () => {
  return (
    <section id="warning-signs" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-blue-600" />
            Spotting Red Flags
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            3 Simple Warning Signs
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Be on high alert whenever an unverified message matches these three common patterns.
          </p>

          {/* Prominent disclaimer required by brief */}
          <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-sm font-medium">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Key Principle:</strong> Warning signs are reasons to investigate, not proof that a story is fake.
            </span>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {warningSignsData.map((item, index) => {
            const iconMap = {
              Flame: <Flame className="w-6 h-6 text-red-600" />,
              HelpCircle: <HelpCircle className="w-6 h-6 text-blue-600" />,
              CalendarClock: <CalendarClock className="w-6 h-6 text-indigo-600" />
            };

            const bgGlowMap = {
              Flame: 'bg-red-50 text-red-600 border-red-100',
              HelpCircle: 'bg-blue-50 text-blue-600 border-blue-100',
              CalendarClock: 'bg-indigo-50 text-indigo-600 border-indigo-100'
            };

            return (
              <div
                key={item.id}
                className="group relative bg-white border border-slate-200 rounded-2xl p-7 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${bgGlowMap[item.iconName]}`}
                    >
                      {iconMap[item.iconName]}
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">0{index + 1}</span>
                  </div>

                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {item.tagline}
                  </span>

                  <h3 className="text-xl font-bold text-[#0a192f] mt-1 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Example Callout Box */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Typical Example
                  </p>
                  <div className="bg-slate-50 rounded-lg p-2.5 text-xs text-slate-700 italic border border-slate-100">
                    {item.exampleSnippet}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
