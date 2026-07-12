// Placeholder event data — no backend/API involved.
export const events = [
  {
    id: 'programming-contest',
    title: "CodeStorm — Programming Contest",
    tag: 'ICPC-Style',
    icon: 'code',
    summary: 'A 5-hour, team-based algorithmic contest following ACM ICPC rules.',
    description:
      "CodeStorm is TechFest 2026's flagship competitive programming event, run under official ACM ICPC regional rules. Teams of three race against the clock to solve algorithmic problems, with a live scoreboard tracking every accepted submission.",
    format: 'Onsite, team-based, ICPC rules (one shared workstation)',
    teamSize: '3 members / team',
    duration: '5 hours',
    scope: '10 problems',
    prize: '$5,000 total prize pool',
    venue: 'Contest Hall A & B',
    eligibility:
      'Open to undergraduate & graduate students from the host university. All team members must be enrolled at the same institution.',
    rules: [
      'Standard ACM ICPC rules apply — one shared workstation per team.',
      'Supported languages: C++, Java, Python 3.',
      'Live scoreboard tracks every accepted submission.',
      'A 1-hour scoreboard freeze applies in the final hour of the contest.',
      'Internet access is restricted to the official judge and language documentation.',
    ],
    rounds: [
      { name: 'Round 1 — Warm-up', description: 'A 30-minute practice session on the judge system before the clock starts.' },
      { name: 'Round 2 — Main Contest', description: '5 hours, 10 problems, ranked by problems solved then total penalty time.' },
      { name: 'Round 3 — Awards', description: 'Top 3 teams recognized at the closing ceremony.' },
    ],
    judgingCriteria: [
      'Number of problems solved',
      'Total penalty time (20 minutes per wrong submission)',
      'Tie-break: earliest last-accepted submission',
    ],
    link: '/programming-contest',
  },
  {
    id: 'hackathon',
    title: 'HackNova — Hackathon',
    tag: '24-Hour Build',
    icon: 'bolt',
    summary: 'A 24-hour build sprint across five tracks, from idea to live demo.',
    description:
      'HackNova challenges teams to design, build, and pitch a working prototype in 24 hours. Mentors circulate throughout the night, and every team demos live in front of a judging panel on the final morning.',
    format: 'Onsite, team-based, bring-your-own-device',
    teamSize: '2–4 members / team',
    duration: '24 hours',
    scope: '5 tracks',
    prize: '$3,000 total prize pool',
    venue: 'Innovation Lab',
    eligibility: 'Open to all currently enrolled students, including inter-university teams.',
    rules: [
      'All code must be written during the 24-hour window.',
      'Pre-built design assets and open-source libraries are allowed.',
      'Each team gets a 4-minute live demo plus 2 minutes of Q&A.',
      'Teams choose one track at kickoff: Health, Climate, EdTech, FinTech, or Open Innovation.',
    ],
    rounds: [
      { name: 'Kickoff', description: 'Track reveal, team formation help, and mentor introductions.' },
      { name: 'Build Sprint', description: '24 hours of hacking with two scheduled mentor check-ins.' },
      { name: 'Live Demos', description: 'Every team presents to the judging panel on the final morning.' },
    ],
    judgingCriteria: [
      'Innovation & originality of the idea',
      'Technical execution & completeness',
      'Design & user experience',
      'Real-world impact & feasibility',
    ],
    link: '/hackathon',
  },
]