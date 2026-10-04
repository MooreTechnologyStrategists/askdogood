export const mission =
  "Help people care for their health, strengthen their relationships, and move forward in everyday life.";
export const vision =
  "A community where useful guidance, encouragement, and opportunities are within everyone’s reach.";
export const topics = [
  {
    id: "health",
    name: "Health & food",
    question: "I want to feel better.",
    summary:
      "Food ideas, wellness routines, health education, and questions for your care team.",
    image: "/images/personal/food/muhammad-dishes-3.jpg",
    alt: "A meal from the AskDoGood food archive",
    title: "Make caring for yourself easier.",
    intro:
      "Start with a meal, a manageable routine, or a better question. Explore food and wellness education, then choose a guide or a personalized plan if you want more structure.",
    resources: [
      {
        title: "Find something good to cook",
        text: "Explore recipes and meal ideas.",
        href: "/clinical-recipes",
      },
      {
        title: "Prepare for your next appointment",
        text: "Use the doctor conversation checklist.",
        href: "/doctor-checklist",
      },
      {
        title: "Check a remedy before you try it",
        text: "NIH guidance on supplements, evidence, and medication interactions.",
        href: "https://www.nccih.nih.gov/health/using-dietary-supplements-wisely",
      },
    ],
    reads: [
      "dmv-meal-prep-for-busy-women-who-want-to-eat-clean-without-burning-out",
    ],
    offer: "custom-wellness-plan",
    note: "Our health resources are educational. Ask your clinician or pharmacist about symptoms, treatments, and possible interactions before trying a remedy.",
  },
  {
    id: "relationships",
    name: "Relationships & support",
    question: "I need to talk or reconnect.",
    summary:
      "Communication, boundaries, connection, and a place to sort through what’s on your mind.",
    image: "/images/personal/food/night-garden.jpg",
    alt: "An evening gathering space in RoSeé’s garden",
    title: "Make room for honest conversation.",
    intro:
      "Whether you are dating, rebuilding trust, caring for family, or simply carrying a lot, start with a reflection or a conversation prompt. Read at your own pace or reach out to AskDoGood.",
    resources: [
      {
        title: "Build a weekly relationship check-in",
        text: "A simple ritual for listening and making plans together.",
        href: "/blog/how-to-build-a-weekly-relationship-check-in-ritual",
      },
      {
        title: "Practice healthy boundaries",
        text: "Read about communicating your needs.",
        href: "/blog/setting-healthy-boundaries-for-lasting-love",
      },
      {
        title: "Try Relationship Keeper",
        text: "Explore shared activities and check-ins. Saved features require an account.",
        href: "/relationship-keeper",
      },
    ],
    reads: [
      "healthy-date-ideas-that-feel-like-care-not-homework",
      "music-dates-bookstore-dates-and-slow-walk-dates-that-actually-work",
    ],
    offer: "dogood-wellness-circle",
    note: "Reflection and community support are not therapy or crisis care. Contact AskDoGood to ask about conversation support; availability and scope are confirmed before booking.",
  },
  {
    id: "career",
    name: "Career & purpose",
    question: "I’m ready for my next chapter.",
    summary:
      "Work, learning, confidence, and practical steps toward a life with more direction.",
    image: "/images/personal/travel/rosee-speaking-paris-2023.webp",
    alt: "RoSeé speaking at a conference in Paris in 2023",
    title: "Find a next step you can act on.",
    intro:
      "A career change can affect your confidence, routines, and sense of purpose. Explore practical articles, make a short plan, or ask about support for your next chapter.",
    resources: [
      {
        title: "Work with more focus",
        text: "Practical ideas for working from home.",
        href: "/blog/7-ways-to-boost-focus-and-productivity-while-working-from-home",
      },
      {
        title: "Explore cloud and AI learning",
        text: "Visit our sister business, The Dope Cloud Teacher, for technology education and teaching opportunities.",
        href: "https://thedopecloudteacher.org",
      },
      {
        title: "Ask about career or life-transition support",
        text: "Tell us your goal. We’ll discuss the fit, scope, and price before you book.",
        href: "/contact?topic=Career%20and%20purpose",
      },
    ],
    reads: [],
    offer: "7-day-reset",
    note: "AskDoGood supports everyday routines around your next chapter. Technology training is offered through The Dope Cloud Teacher. No job or income outcome is guaranteed.",
  },
  {
    id: "life",
    name: "Everyday life",
    question: "I need a reset, or a little peace.",
    summary:
      "Stress, change, family, faith, music, and small habits that make a day feel better.",
    image: "/images/personal/rosee-garden-2026.webp",
    alt: "RoSeé smiling beside the plants in her garden",
    title: "Start where life has you today.",
    intro:
      "You do not have to solve everything at once. Find a small routine, a story that meets you where you are, or a little pocket of peace. Choose more support when you are ready.",
    resources: [
      {
        title: "Step into the garden",
        text: "Growing, changing seasons, and room to breathe.",
        href: "/garden",
      },
      {
        title: "Make space for music",
        text: "The sounds and stories that move us.",
        href: "/interests",
      },
      {
        title: "Read about emotional wellness",
        text: "Explore reflection and everyday self-care.",
        href: "/blog/10-tips-to-boost-your-emotional-wellness",
      },
    ],
    reads: ["finding-peace-in-the-chaos-mindfulness-for-black-women"],
    offer: "7-day-reset",
    note: "Our practical guides and personal stories offer a starting point. Your choices, pace, and support needs are your own.",
  },
] as const;
export const coreOfferIds = [
  "7-day-reset",
  "custom-wellness-plan",
  "dogood-wellness-circle",
];
export const coreOfferLabels: Record<
  string,
  { format: string; action: string; forWho: string }
> = {
  "7-day-reset": {
    format: "Digital guide · one-time purchase",
    action: "See the $17 reset",
    forWho: "For a simple place to restart your daily routine.",
  },
  "custom-wellness-plan": {
    format: "Personalized written plan · one-time purchase",
    action: "See the $97 plan",
    forWho: "For wellness priorities shaped around your goals and schedule.",
  },
  "dogood-wellness-circle": {
    format: "Membership · billed monthly",
    action: "Explore membership",
    forWho: "For ongoing wellness guidance, resources, and accountability.",
  },
};
