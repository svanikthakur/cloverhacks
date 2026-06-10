export const EVENT = {
  name: "Clover Hacks",
  tagline: "Get Lucky. Build Something.",
  startsAt: "2026-09-19T09:00:00-04:00",
  endsAt: "2026-09-19T22:00:00-04:00",
  location: "Bay Area, California",
  durationLabel: "13 hours",
  applyUrl: "/register",
  socials: {
    instagram: "https://instagram.com/",
    discord: "#",
    email: "mailto:team@cloverhacks.org",
  },
} as const;

export const SPONSORSHIP_PACKAGES = [
  {
    name: "Diamond",
    price: "$1,500 to $2,000",
    perks: [
      "Premium logo placement on website, shirts, and venue signage",
      "Keynote slot during opening ceremony (5 minutes)",
      "Dedicated booth at the project expo",
      "Custom sponsor track and prize category",
      "Resume access to all participants",
    ],
  },
  {
    name: "Gold",
    price: "$1,000 to $1,499",
    perks: [
      "Logo on website, shirts, and venue signage",
      "Booth at the project expo",
      "Sponsor prize category",
      "Resume access to all participants",
    ],
  },
  {
    name: "Silver",
    price: "$500 to $999",
    perks: [
      "Logo on website and venue signage",
      "Shared booth time at expo",
      "Optional sponsor prize",
      "Mention during opening ceremony",
    ],
  },
  {
    name: "Supporter",
    price: "$100 to $499",
    perks: [
      "Logo on website",
      "Shoutout on social media",
      "Mention during closing ceremony",
    ],
  },
];

export const TRACKS = [
  {
    title: "AI for Good",
    blurb:
      "Use LLMs, agents, or classical ML to make life measurably better for a real community.",
    icon: "✨",
  },
  {
    title: "Game Dev",
    blurb:
      "Build a game from scratch. 2D, 3D, browser, mobile, jam-style. Bonus points for replayability.",
    icon: "🎮",
  },
  {
    title: "Beginner Track",
    blurb:
      "First hackathon? This one's for you. Beginner workshops, simpler scope, and a friendlier judging rubric.",
    icon: "🌱",
  },
];

export const SCHEDULE: { day: string; items: { time: string; title: string }[] }[] = [
  {
    day: "Morning",
    items: [
      { time: "9:00 AM", title: "Check-in opens" },
      { time: "9:30 AM", title: "Breakfast" },
      { time: "10:00 AM", title: "Opening ceremony" },
      { time: "10:45 AM", title: "Team formation" },
      { time: "11:00 AM", title: "Hacking begins 🚀" },
      { time: "12:30 PM", title: "Lunch" },
    ],
  },
  {
    day: "Afternoon & Evening",
    items: [
      { time: "2:00 PM", title: "Workshops + open hack time" },
      { time: "3:30 PM", title: "Coffee + snack break" },
      { time: "5:00 PM", title: "Mini event (trivia / games)" },
      { time: "6:30 PM", title: "Dinner" },
      { time: "8:00 PM", title: "Submissions close" },
      { time: "8:15 PM", title: "Project expo + judging" },
      { time: "9:30 PM", title: "Closing ceremony + prizes 🏆" },
      { time: "10:00 PM", title: "Doors close" },
    ],
  },
];

export const FAQ = [
  {
    q: "Who can attend?",
    a: "Any high school student. No experience required, we love first-timers.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. Clover Hacks is completely free, including food and swag.",
  },
  {
    q: "Do I need a team?",
    a: "If you have one, great. If not, we'll help you find a team during opening ceremony.",
  },
  {
    q: "What should I bring?",
    a: "A laptop, charger, and anything else to help you with your project. We provide the rest.",
  },
  {
    q: "Will there be prizes?",
    a: "Yes. Top overall, best in each track, and a few sponsor categories. Details drop closer to the event.",
  },
];
