import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, CheckSquare, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { checklistData } from '../data/checklistData';

interface FactCheckingGuideProps {
  onTakeQuizClick?: () => void;
}

export const FactCheckingGuide: React.FC<FactCheckingGuideProps> = ({ onTakeQuizClick }) => {
  // Set of completed step IDs
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (id: number) => {
    setCompletedSteps((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const markAll = () => {
    setCompletedSteps(checklistData.map((step) => step.id));
  };

  const resetAll = () => {
    setCompletedSteps([]);
  };

  const progressPercentage = Math.round((completedSteps.length / checklistData.length) * 100);
  const isAllCompleted = completedSteps.length === checklistData.length;

  return (
    <section id="learn" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            Verification Protocol
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            How to Verify News
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A simple 5-step checklist to follow before you believe or forward any message.
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-800">
                  Interactive Verification Checklist
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {completedSteps.length} of {checklistData.length} Completed
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Tick off each step as you practice verifying suspicious posts.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={markAll}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Mark All Done</span>
              </button>

              {completedSteps.length > 0 && (
                <button
                  type="button"
                  onClick={resetAll}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-5">
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200/60">
              <div
                className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] text-slate-400 mt-1.5 font-medium">
              <span>0% Start</span>
              <span>{progressPercentage}% Completed</span>
              <span>100% Ready</span>
            </div>
          </div>

          {/* Completion Celebration Message */}
          {isAllCompleted && (
            <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in duration-300">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-900">
                    Excellent! You’ve mastered the 5 verification habits.
                  </p>
                  <p className="text-xs text-emerald-700">
                    You have all the tools needed to stop false information in its tracks.
                  </p>
                </div>
              </div>

              {onTakeQuizClick && (
                <button
                  type="button"
                  onClick={onTakeQuizClick}
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shrink-0 flex items-center gap-1.5 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <span>Test Your Skills Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* 5 Checklist Steps List */}
        <div className="mt-8 space-y-4">
          {checklistData.map((step) => {
            const isChecked = completedSteps.includes(step.id);

            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                className={`group cursor-pointer rounded-2xl p-5 sm:p-6 border transition-all duration-200 flex items-start gap-4 sm:gap-5 ${
                  isChecked
                    ? 'bg-blue-50/40 border-blue-300/80 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    toggleStep(step.id);
                  }
                }}
              >
                {/* Custom Accessible Checkbox */}
                <div className="pt-0.5 shrink-0">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors border ${
                      isChecked
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-slate-300 bg-white group-hover:border-blue-400'
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      Step {step.number}
                    </span>
                    <h3
                      className={`text-lg font-bold transition-colors ${
                        isChecked ? 'text-blue-900 line-through/10' : 'text-[#0a192f]'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Practical Action Tip */}
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/80 text-slate-700 text-xs">
                    <span className="font-semibold text-blue-700">Quick Tip:</span>
                    <span>{step.tip}</span>
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
