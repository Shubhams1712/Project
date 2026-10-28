import { WarningSign } from '../types';

export const warningSignsData: WarningSign[] = [
  {
    id: 'shocking',
    title: 'Too Shocking to Be True',
    tagline: 'Extreme emotions & sensationalism',
    description:
      'Sensational headlines designed to create fear, anger, or excitement deserve extra scrutiny. Viral hoaxes often trigger urgency so you react before thinking.',
    iconName: 'Flame',
    exampleSnippet: '“URGENT! Forward to everyone immediately before it gets banned!”'
  },
  {
    id: 'source',
    title: 'No Trusted Source',
    tagline: 'Missing or dubious attribution',
    description:
      'Check who published the information and whether credible sources support it. Vague attributions like “forwarded as received” or anonymous screenshots are major red flags.',
    iconName: 'HelpCircle',
    exampleSnippet: '“A top doctor secretly confirmed this remedy works 100%...”'
  },
  {
    id: 'outdated',
    title: 'Old or Misleading Content',
    tagline: 'Recycled context & altered dates',
    description:
      'Check the date, context, and original image or article before believing it. Old incidents, recycled crisis footage, or satire are frequently reposted as breaking news.',
    iconName: 'CalendarClock',
    exampleSnippet: 'Photo from an event 7 years ago shared as “happening right now”.'
  }
];
