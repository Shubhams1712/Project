import { VerificationStep } from '../types';

export const checklistData: VerificationStep[] = [
  {
    id: 1,
    number: 1,
    title: 'Stop before forwarding.',
    description:
      'Take a pause. Notice if the message triggers strong fear, anger, or urgency. Emotional pressure is the #1 tactic used to spread false rumors.',
    tip: 'Take a deep breath and ask: "Why was this sent to me, and why does it want me to forward it right away?"'
  },
  {
    id: 2,
    number: 2,
    title: 'Check the original source.',
    description:
      'Look for the author, official publisher, or credible news organization. If it is an unverified screenshot, blog with no contact info, or anonymous message, treat it with caution.',
    tip: 'Look beyond the headline—does an established, recognized organization or reputable journalist stand behind it?'
  },
  {
    id: 3,
    number: 3,
    title: 'Read the full story and publication date.',
    description:
      'Headlines are often sensationalized to grab clicks. Read past the title and verify the timestamp to ensure it is not an outdated event being recycled.',
    tip: 'Check when it happened. Old photos from previous years are frequently shared as today’s events.'
  },
  {
    id: 4,
    number: 4,
    title: 'Compare the claim with other reliable sources.',
    description:
      'Search the core claim on established news agencies or independent fact-checking platforms. If a major event truly occurred, multiple reputable outlets will report it.',
    tip: 'Run a quick search on Google or trusted fact-check sites (e.g., AFP Fact Check, Reuters Fact Check).'
  },
  {
    id: 5,
    number: 5,
    title: 'Share only when you have sufficient evidence.',
    description:
      'If you cannot confirm the facts or find trustworthy evidence, do not forward it. Breaking the chain of misinformation keeps your family and friends safe.',
    tip: 'When in doubt, choose not to send. Silence stops a rumor; forwarding multiplies it.'
  }
];
