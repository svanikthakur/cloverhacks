export const event = {
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

export const sponsorshipPackages = [
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

export const tracks = [
  {
    title: "AI for Good",
    blurb:
      "Use AI to actually help real people — your school, your neighborhood, a club, whoever. LLMs, agents, plain old ML, all fair game.",
    icon: "✨",
  },
  {
    title: "Game Dev",
    blurb:
      "Make a game from scratch — 2D, 3D, web, mobile, whatever you can pull off in a day. Extra love for the ones we can't put down.",
    icon: "🎮",
  },
  {
    title: "Beginner Track",
    blurb:
      "First hackathon? Start here. Smaller scope, workshops to get you going, and judges who remember being new too.",
    icon: "🌱",
  },
];

export const schedule: { day: string; items: { time: string; title: string }[] }[] = [
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

export const faq = [
  {
    q: "Who can attend?",
    a: "Any high schooler. Zero experience needed — first-timers are kind of our whole thing.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. It's free top to bottom — food and swag included.",
  },
  {
    q: "Do I need a team?",
    a: "Nope. Bring one if you've got it, or find people at team formation right after the opening ceremony.",
  },
  {
    q: "What should I bring?",
    a: "A laptop, your charger, and whatever else helps you build. We've got the rest covered.",
  },
  {
    q: "Will there be prizes?",
    a: "Yep — best overall, a winner per track, and a few sponsor categories. We'll post the full list closer to the day.",
  },
];
