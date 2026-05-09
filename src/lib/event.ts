export const EVENT = {
  name: "Clover Hacks",
  tagline: "Get Lucky. Build Something.",
  startsAt: "2026-09-12T09:00:00-04:00",
  endsAt: "2026-09-12T22:00:00-04:00",
  location: "TBD",
  durationLabel: "13 hours",
  applyUrl: "#register",
  socials: {
    instagram: "https://instagram.com/",
    discord: "#",
    email: "mailto:team@cloverhacks.org",
  },
} as const;

export const TRACKS = [
  {
    title: "AI for Good",
    blurb:
      "Use LLMs, agents, or classical ML to make life measurably better for a real community.",
    icon: "✨",
  },
  {
    title: "Hardware & IRL",
    blurb:
      "Solder it, print it, glue it together. Anything physical or wearable that does something cool.",
    icon: "⚡",
  },
  {
    title: "Beginner Track",
    blurb:
      "First hackathon? This one's for you. Mentors, simpler scope, and a friendlier judging rubric.",
    icon: "🌱",
  },
];

export const SCHEDULE: { day: string; items: { time: string; title: string }[] }[] = [
  {
    day: "Morning",
    items: [
      { time: "9:00 AM", title: "Doors open + check-in" },
      { time: "10:00 AM", title: "Opening ceremony" },
      { time: "10:30 AM", title: "Hacking begins 🚀" },
      { time: "12:30 PM", title: "Lunch + team formation" },
    ],
  },
  {
    day: "Afternoon & Evening",
    items: [
      { time: "2:00 PM", title: "Workshop: Shipping with Next.js" },
      { time: "6:00 PM", title: "Dinner + mini events" },
      { time: "8:00 PM", title: "Hacking ends" },
      { time: "8:30 PM", title: "Project expo + judging" },
      { time: "9:30 PM", title: "Closing ceremony + prizes 🏆" },
    ],
  },
];

export const FAQ = [
  {
    q: "Who can attend?",
    a: "Any high school or college student. No experience required — we love first-timers.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. Clover Hacks is completely free, including food, swag, and travel reimbursement for some teams.",
  },
  {
    q: "Do I need a team?",
    a: "Nope. Come solo and we'll help you find a team during opening ceremony.",
  },
  {
    q: "What should I bring?",
    a: "A laptop, charger, photo ID, and any hardware you want to hack on. We provide the rest.",
  },
  {
    q: "Will there be prizes?",
    a: "Yes — top overall, best in each track, and a few sponsor categories. Details drop closer to the event.",
  },
];
