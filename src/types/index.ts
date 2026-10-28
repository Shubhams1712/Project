export interface WarningSign {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'Flame' | 'HelpCircle' | 'CalendarClock';
  exampleSnippet: string;
}

export interface VerificationStep {
  id: number;
  number: number;
  title: string;
  description: string;
  tip: string;
}

export interface QuizQuestion {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
