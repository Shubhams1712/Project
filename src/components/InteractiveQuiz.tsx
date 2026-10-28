import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Check,
  X
} from 'lucide-react';
import { quizQuestions } from '../data/quizData';

export const InteractiveQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQ = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => [...prev, index]);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setIsCompleted(false);
  };

  const scorePercentage = Math.round((score / totalQuestions) * 100);

  return (
    <section id="quiz" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            5-Question Challenge
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Test Your Knowledge
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            See how prepared you are to recognise fake news and stop misinformation from spreading.
          </p>
        </div>

        {!isCompleted ? (
          /* Active Question Card */
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8">
            {/* Top Bar: Progress and Topic */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="font-mono text-blue-600 font-bold px-2 py-0.5 rounded bg-blue-50">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
                <span aria-hidden="true" className="text-slate-300">
                  •
                </span>
                <span className="font-semibold text-slate-700">{currentQ.topic}</span>
              </div>

              <div className="text-xs text-slate-500">
                Score so far:{' '}
                <strong className="text-blue-700 font-mono text-sm">{score}</strong> /{' '}
                {currentIndex + (isAnswered ? 1 : 0)}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full mt-4 mb-6 overflow-hidden">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="my-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a192f] leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* 4 Options */}
            <div className="space-y-3 mt-6">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let optionStyles =
                  'bg-white border-slate-200 hover:border-blue-300 text-slate-700 hover:bg-slate-50/50';

                if (isAnswered) {
                  if (isCorrect) {
                    optionStyles = 'bg-emerald-50/80 border-emerald-500 text-emerald-950 font-medium';
                  } else if (isSelected && !isCorrect) {
                    optionStyles = 'bg-rose-50/80 border-rose-400 text-rose-950 font-medium';
                  } else {
                    optionStyles = 'bg-slate-50/40 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyles = 'bg-blue-50 border-blue-500 text-blue-950 font-medium';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-sm transition-all duration-150 flex items-start justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${optionStyles}`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 font-bold ${
                          isAnswered && isCorrect
                            ? 'bg-emerald-600 text-white'
                            : isAnswered && isSelected && !isCorrect
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{option}</span>
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Feedback & Short Explanation */}
            {isAnswered && (
              <div
                className={`mt-6 p-4.5 rounded-xl border animate-in fade-in duration-200 ${
                  selectedOption === currentQ.correctIndex
                    ? 'bg-emerald-50/90 border-emerald-200'
                    : 'bg-rose-50/90 border-rose-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    {selectedOption === currentQ.correctIndex ? (
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-1 flex-1">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        selectedOption === currentQ.correctIndex
                          ? 'text-emerald-800'
                          : 'text-rose-800'
                      }`}
                    >
                      {selectedOption === currentQ.correctIndex ? 'Correct!' : 'Incorrect'}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {currentQ.explanation}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <span>
                      {currentIndex < totalQuestions - 1 ? 'Next Question' : 'View Final Score'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Final Score Screen */
          <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-10 shadow-lg text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center mb-4">
              <Award className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Quiz Complete
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f]">
              {score >= 4
                ? 'Well Done! You’re a Vigilant Verifier'
                : score >= 3
                ? 'Good Effort! Keep Practicing'
                : 'Keep Learning! Practice Makes Safe'}
            </h3>

            {/* Score Banner */}
            <div className="my-6 py-4 px-8 bg-slate-50 rounded-2xl border border-slate-200 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Your Final Score:
              </span>
              <span className="text-3xl font-extrabold font-mono text-blue-700">
                {score} / {totalQuestions}
              </span>
              <span className="text-sm font-bold text-slate-600">({scorePercentage}%)</span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              {score >= 4
                ? 'You have strong critical instincts for identifying rumors and knowing when to pause before forwarding.'
                : 'Every time you pause to check a source, you help protect friends, family, and social circles from false rumors.'}
            </p>

            {/* Restart Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleRestart}
                className="px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-colors shadow-sm flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
