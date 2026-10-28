import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topic: 'The Meaning of Fake News',
    question: 'What is the most accurate definition of "fake news"?',
    options: [
      'Any news story that you personally disagree with or dislike',
      'False or misleading information presented as factual news',
      'A news report that has a minor spelling or typographical error',
      'An editorial opinion column written by a guest journalist'
    ],
    correctIndex: 1,
    explanation:
      'Fake news refers to false, fabricated, or deliberately misleading information that is presented as genuine, factual reporting.'
  },
  {
    id: 2,
    topic: 'Misinformation vs. Disinformation',
    question: 'What is the key difference between misinformation and disinformation?',
    options: [
      'Misinformation only spreads online, while disinformation only spreads in print',
      'Misinformation is shared without malicious intent, whereas disinformation is deliberately created to deceive',
      'Disinformation is always true, whereas misinformation is always partially false',
      'There is no difference; both terms describe the exact same situation'
    ],
    correctIndex: 1,
    explanation:
      'Misinformation is false information shared mistakenly by people who believe it is true. Disinformation is intentionally crafted and weaponized to deceive or mislead others.'
  },
  {
    id: 3,
    topic: 'Handling Shocking WhatsApp Messages',
    question:
      'You receive an urgent message in a group chat claiming an emergency health warning with "Forward to everyone right now!" What should you do first?',
    options: [
      'Forward it immediately to all your contacts just in case it is true',
      'Pause, hold off on forwarding, and check official health authorities or reputable news sources',
      'Copy and paste it to public social media platforms asking if it is real',
      'Edit the text to sound less alarming and forward it anyway'
    ],
    correctIndex: 1,
    explanation:
      'Always pause. High urgency and emotional pressure are warning signs of viral hoaxes. Verify the claim with official sources before taking any action.'
  },
  {
    id: 4,
    topic: 'Verifying an Online Claim',
    question: 'What is the most reliable way to check if an astonishing social media claim is true?',
    options: [
      'Look at how many thousands of likes and shares the post has accumulated',
      'Read what anonymous commenters are saying under the post',
      'Cross-check the claim across multiple reputable, established news sources or fact-checking websites',
      'Trust it completely if an influencer or celebrity has reshared it'
    ],
    correctIndex: 2,
    explanation:
      'Virality and celebrity resharing are not proof of truth. Cross-referencing against trusted news organizations and professional fact-checkers is the gold standard.'
  },
  {
    id: 5,
    topic: 'Correcting Inaccurate Shares',
    question: 'What is the most responsible action if you discover a message you previously forwarded was false?',
    options: [
      'Silently delete the message and pretend you never shared it',
      'Post a polite correction in the same group or chat with the verified facts',
      'Defend the claim by saying "it could still happen in the future"',
      'Blame the person who originally sent it to you and leave the group'
    ],
    correctIndex: 1,
    explanation:
      'Everyone can make an honest mistake. The responsible step is to clarify the error in the same chat and share the verified facts to stop the rumor from spreading further.'
  }
];
