import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WarningSigns } from './components/WarningSigns';
import { FactCheckingGuide } from './components/FactCheckingGuide';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header with ThinkBeforeYouShare logo and Learn & Take the Quiz navigation */}
      <Navbar
        onLearnClick={() => scrollTo('warning-signs')}
        onTakeQuizClick={() => scrollTo('quiz')}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Heading, Subtitle, CTA buttons, and Illustration */}
        <Hero
          onLearnClick={() => scrollTo('warning-signs')}
          onTestKnowledgeClick={() => scrollTo('quiz')}
        />

        {/* 3. Three Simple Warning Signs */}
        <WarningSigns />

        {/* 4. How to Verify News (Interactive 5-step checklist with progress tracker) */}
        <FactCheckingGuide onTakeQuizClick={() => scrollTo('quiz')} />

        {/* 5. Interactive 5-Question Quiz with instant feedback and score */}
        <InteractiveQuiz />

        {/* 6. Final Call to Action ("Stop the Spread. Start With Yourself.") */}
        <CallToAction onTakeQuizClick={() => scrollTo('quiz')} />
      </main>

      {/* 7. Footer ("ThinkBeforeYouShare — Be aware. Verify. Share responsibly.") */}
      <Footer />
    </div>
  );
}
