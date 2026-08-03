export type RelationshipCategoryId =
  | "books-learning"
  | "music-live"
  | "walks-nature"
  | "museums-culture"
  | "healthy-food-cooking"
  | "adventure-movement"
  | "communication-reflection"
  | "community-service"
  | "travel-exploration"
  | "romance-rest"
  | "creativity"
  | "personal-growth"
  | "spiritual-connection"
  | "financial-future"
  | "fun-play";

export type RelationshipStatus =
  | "not_started"
  | "interested"
  | "planned"
  | "completed"
  | "skipped"
  | "favorite"
  | "want_to_repeat";

export type RelationshipIndoorOutdoor = "Indoor" | "Outdoor" | "Either";
export type RelationshipActivityLevel = "Low" | "Moderate" | "Active";

export type RelationshipExperience = {
  experienceId: string;
  title: string;
  categoryId: RelationshipCategoryId;
  category: string;
  description: string;
  estimatedCost: string;
  duration: string;
  activityLevel: RelationshipActivityLevel;
  indoorOutdoor: RelationshipIndoorOutdoor;
  bestSeason: string;
  suggestedPreparation: string;
  optionalFoodPairing: string;
  conversationPrompt: string;
  reflectionQuestion: string;
  isActive: boolean;
};

export type RelationshipCategory = {
  id: RelationshipCategoryId;
  name: string;
  subtitle: string;
  accent: string;
};

export type RelationshipMonthlyGoal = {
  id: string;
  title: string;
  description: string;
};

export type RelationshipCheckInQuestion = {
  id: string;
  label: string;
};

export type DmvRecommendation = {
  id: string;
  region: string;
  title: string;
  description: string;
  tags: string[];
  priceLabel: string;
  indoorOutdoor: RelationshipIndoorOutdoor;
  season: string;
  accessibility: string;
};

const categories: Array<{
  id: RelationshipCategoryId;
  name: string;
  subtitle: string;
  accent: string;
  titles: string[];
  prep: string;
  foodPairing: string;
}> = [
  {
    id: "books-learning",
    name: "Books and Learning",
    subtitle: "Read, discuss, and expand the relationship together.",
    accent: "from-stone-800 via-stone-700 to-stone-500",
    prep: "Pick one title, bring a notebook, and leave time to talk afterward.",
    foodPairing: "Coffee, tea, or a small pastry to keep the pace unhurried.",
    titles: [
      "Browse a used bookstore and trade recommendations",
      "Attend an author talk or literary reading",
      "Build a shared reading list for the season",
      "Read the same chapter and discuss it over coffee",
      "Visit a library exhibit or special collection",
      "Create a two-person book club at home",
      "Plan a bookstore-and-dessert night",
    ],
  },
  {
    id: "music-live",
    name: "Music and Live Entertainment",
    subtitle: "Let sound become a shared memory.",
    accent: "from-rose-900 via-rose-800 to-amber-700",
    prep: "Check the lineup, arrive early, and choose one song to remember later.",
    foodPairing: "Mocktails, tapas, or something easy to eat between sets.",
    titles: [
      "Catch a jazz set at an intimate venue",
      "Explore a record store and each pick one album",
      "Build a shared couple playlist for the season",
      "Attend an outdoor concert or festival",
      "Host a vinyl listening night at home",
      "Try a live poetry or open-mic evening",
      "Dance to one favorite song in a meaningful place",
    ],
  },
  {
    id: "walks-nature",
    name: "Walks and Nature",
    subtitle: "Use movement to slow the mind and open conversation.",
    accent: "from-emerald-900 via-emerald-700 to-sky-600",
    prep: "Wear comfortable shoes, charge your phone, and let the route stay flexible.",
    foodPairing: "Fresh fruit, sandwiches, sparkling water, or a picnic snack.",
    titles: [
      "Take a sunrise or sunset walk",
      "Explore a local trail and spot wildlife",
      "Visit a botanical garden or conservatory",
      "Do a neighborhood architecture walk",
      "Walk with no destination and notice what you feel",
      "Pack a picnic for a park date",
      "Try a steps challenge together for the week",
    ],
  },
  {
    id: "museums-culture",
    name: "Museums and Culture",
    subtitle: "Learn through art, history, and shared perspective.",
    accent: "from-indigo-900 via-slate-700 to-cyan-700",
    prep: "Choose one exhibit to slow down for instead of trying to see everything.",
    foodPairing: "A cafe stop, light lunch, or a dessert after the exhibit.",
    titles: [
      "Visit a museum with an exhibit neither of you knows well",
      "Explore a cultural festival",
      "Tour a historic neighborhood",
      "Spend an afternoon at a gallery opening",
      "Take a guided city history walk",
      "Attend a film screening at an art house",
      "Learn a shared cultural ritual and reflect on it",
    ],
  },
  {
    id: "healthy-food-cooking",
    name: "Healthy Food and Cooking",
    subtitle: "Cook, taste, and nourish the relationship.",
    accent: "from-lime-900 via-green-700 to-teal-700",
    prep: "Shop together or set the ingredients out before you start cooking.",
    foodPairing: "Plant-forward meals, balanced bowls, smoothies, or a lighter dessert.",
    titles: [
      "Cook a new plant-forward dinner together",
      "Try a healthy brunch spot and rate the menu",
      "Visit a farmers market and build a basket together",
      "Make smoothie flights at home",
      "Host a tasting night with three healthy appetizers",
      "Plan a meal-prep date for the week",
      "Make a dessert with lighter ingredients and share slowly",
    ],
  },
  {
    id: "adventure-movement",
    name: "Adventure and Movement",
    subtitle: "Move boldly, but together.",
    accent: "from-orange-900 via-amber-700 to-red-700",
    prep: "Confirm reservations, hydration, and clothing that can handle movement.",
    foodPairing: "Water, protein, and something simple after the activity.",
    titles: [
      "Go kayaking or paddleboarding",
      "Try a beginner climbing gym session",
      "Rent bikes and explore a new part of the city",
      "Take a long scenic hike",
      "Join a dance or movement class",
      "Go ziplining or tackle a ropes course if available",
      "Build an active day trip around one challenge",
    ],
  },
  {
    id: "communication-reflection",
    name: "Communication and Reflection",
    subtitle: "Make space for clarity, honesty, and appreciation.",
    accent: "from-violet-900 via-fuchsia-800 to-rose-700",
    prep: "Turn phones off, choose a calm setting, and bring paper if needed.",
    foodPairing: "Tea, warm drinks, or a simple snack that keeps the focus on talking.",
    titles: [
      "Do a relationship check-in over tea",
      "Write each other letters and exchange them",
      "Share childhood photos and tell the stories",
      "Ask the questions you usually avoid",
      "Create a couple manifesto for the season",
      "Talk through a shared goal and next step",
      "Reflect on one recent moment of appreciation",
    ],
  },
  {
    id: "community-service",
    name: "Community and Service",
    subtitle: "Give together and feel connected to something larger.",
    accent: "from-blue-900 via-sky-700 to-emerald-700",
    prep: "Check the organization’s volunteer instructions before you arrive.",
    foodPairing: "A simple lunch, packed snacks, or something nourishing after service.",
    titles: [
      "Volunteer at a food pantry together",
      "Pack care kits for neighbors or shelter guests",
      "Attend a community fundraiser or benefit",
      "Join a cleanup walk in the neighborhood",
      "Support a local Black-owned business together",
      "Deliver something helpful to someone you love",
      "Choose one service habit you can repeat monthly",
    ],
  },
  {
    id: "travel-exploration",
    name: "Travel and Exploration",
    subtitle: "Use new places to create new stories.",
    accent: "from-cyan-900 via-sky-700 to-blue-700",
    prep: "Leave room for detours and keep one back-up plan in case weather shifts.",
    foodPairing: "A local specialty, food hall stop, or a memorable cafe along the way.",
    titles: [
      "Plan a day trip to a nearby town",
      "Take a train ride with no agenda",
      "Explore a waterfront or harbor area",
      "Build a future travel wish list",
      "Try a local staycation with a hotel brunch",
      "Follow a spontaneous route and document it",
      "Visit a destination neither of you usually chooses",
    ],
  },
  {
    id: "romance-rest",
    name: "Romance and Rest",
    subtitle: "Slow down enough to feel cared for.",
    accent: "from-rose-800 via-pink-700 to-amber-600",
    prep: "Keep the pace gentle and protect the evening from unnecessary errands.",
    foodPairing: "Comfort food, warm drinks, or a shared dessert with no rush.",
    titles: [
      "Plan an at-home candlelit dinner",
      "Book a slow morning with breakfast in bed",
      "Take a bath, face masks, and music night",
      "Watch the sunrise from blankets and coffee",
      "Create a no-phone evening with tea and board games",
      "Write a note to open on a hard day",
      "Recreate your favorite first-date details",
    ],
  },
  {
    id: "creativity",
    name: "Creativity",
    subtitle: "Make something together, even if it is imperfect.",
    accent: "from-fuchsia-900 via-violet-700 to-sky-700",
    prep: "Set out supplies before you start so the date stays playful.",
    foodPairing: "A fun snack plate, berries, or sparkling juice while you create.",
    titles: [
      "Paint side-by-side without planning the outcome",
      "Make a collage of your relationship season",
      "Take a photography walk and choose favorite shots",
      "Build a shared playlist cover or mini poster",
      "Try a pottery, sketching, or craft workshop",
      "Create a couple time capsule",
    ],
  },
  {
    id: "personal-growth",
    name: "Personal Growth",
    subtitle: "Support each other while still growing as individuals.",
    accent: "from-slate-900 via-zinc-700 to-teal-700",
    prep: "Bring honesty, but keep the tone encouraging and practical.",
    foodPairing: "Whatever helps you think clearly: tea, water, or a light meal.",
    titles: [
      "Set individual intentions and share them",
      "Read one article on growth and discuss it",
      "Build a habit you both want to keep",
      "Celebrate a private win each of you named",
      "Create a support plan for a stressful season",
      "Map the version of yourselves you're becoming",
    ],
  },
  {
    id: "spiritual-connection",
    name: "Spiritual Connection",
    subtitle: "Create space for meaning, gratitude, and grounding.",
    accent: "from-stone-900 via-neutral-700 to-amber-700",
    prep: "Choose a quiet setting that helps you both slow down.",
    foodPairing: "Tea, fruit, or a simple meal that keeps the atmosphere calm.",
    titles: [
      "Attend a service or spiritual gathering together",
      "Take a quiet nature prayer or meditation walk",
      "Read a meaningful passage and reflect",
      "Light a candle for gratitude and hopes",
      "Share a blessing or affirmation for each other",
      "Spend a screen-free hour in silence or prayer",
    ],
  },
  {
    id: "financial-future",
    name: "Financial and Future Planning",
    subtitle: "Build practical clarity for the life you are making.",
    accent: "from-green-900 via-emerald-700 to-slate-700",
    prep: "Pick a calm time and agree to stay curious instead of defensive.",
    foodPairing: "Coffee or a simple snack so the conversation stays grounded.",
    titles: [
      "Review a shared budget without blame",
      "Make a dream list for the next year",
      "Talk about travel savings or a house fund",
      "Decide one money habit to strengthen",
      "Compare subscriptions and cut one you do not use",
      "Sketch a future milestone plan together",
    ],
  },
  {
    id: "fun-play",
    name: "Fun and Play",
    subtitle: "Keep the relationship light, curious, and joyful.",
    accent: "from-yellow-900 via-orange-700 to-pink-700",
    prep: "Choose a low-pressure activity that makes room for laughter.",
    foodPairing: "Shared snacks, a playful treat, or a late-night dessert run.",
    titles: [
      "Play mini golf or go bowling",
      "Try a trivia night or game cafe",
      "Make a silly snack board competition",
      "Go thrifting and style each other",
      "Plan a surprise challenge jar",
      "Do a low-stakes scavenger hunt together",
    ],
  },
];

const costOptions = ["Free", "Under $25", "Under $50", "$50-$100", "$100+"];
const durationOptions = ["30-60 minutes", "1-2 hours", "2-3 hours", "Half-day"];
const activityLevels: RelationshipActivityLevel[] = ["Low", "Moderate", "Active"];
const indoorOutdoorOptions: RelationshipIndoorOutdoor[] = ["Indoor", "Outdoor", "Either"];
const seasonOptions = ["Any season", "Spring", "Summer", "Fall", "Winter"];
const commonPrompts = [
  "What helped us feel most connected today?",
  "What did we notice about each other that felt new?",
  "What would make this date even better next time?",
  "What part of this experience felt most memorable?",
  "What did we learn about our pace, preferences, or energy?",
];
const commonReflections = [
  "What do I want to remember about this date one month from now?",
  "What kind of relationship rhythm does this experience support?",
  "What felt easy here, and what felt worth repeating?",
  "How did this date change the way I think about us?",
  "What would I tell a friend to capture from this experience?",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildExperience(
  category: (typeof categories)[number],
  title: string,
  index: number
): RelationshipExperience {
  return {
    experienceId: `rk-${slugify(category.id)}-${index + 1}`,
    title,
    categoryId: category.id,
    category: category.name,
    description: `An intentional ${category.name.toLowerCase()} date centered on ${title.toLowerCase()}.`,
    estimatedCost: costOptions[index % costOptions.length],
    duration: durationOptions[index % durationOptions.length],
    activityLevel: activityLevels[index % activityLevels.length],
    indoorOutdoor: indoorOutdoorOptions[index % indoorOutdoorOptions.length],
    bestSeason: seasonOptions[index % seasonOptions.length],
    suggestedPreparation: category.prep,
    optionalFoodPairing: category.foodPairing,
    conversationPrompt: commonPrompts[index % commonPrompts.length],
    reflectionQuestion: commonReflections[(index + 1) % commonReflections.length],
    isActive: true,
  };
}

export const relationshipCategories: RelationshipCategory[] = categories.map(
  ({ id, name, subtitle, accent }) => ({
    id,
    name,
    subtitle,
    accent,
  })
);

export const relationshipExperiences: RelationshipExperience[] = categories.flatMap(
  (category) => category.titles.map((title, index) => buildExperience(category, title, index))
);

export const relationshipStatuses: Array<{
  value: RelationshipStatus;
  label: string;
}> = [
  { value: "not_started", label: "Not Started" },
  { value: "interested", label: "Interested" },
  { value: "planned", label: "Planned" },
  { value: "completed", label: "Completed" },
  { value: "skipped", label: "Skipped" },
  { value: "favorite", label: "Favorite" },
  { value: "want_to_repeat", label: "Want to Repeat" },
];

export const relationshipMonthlyGoals: RelationshipMonthlyGoal[] = [
  {
    id: "walking-dates",
    title: "Complete four walking dates",
    description: "Use movement to keep connection active and routine-free.",
  },
  {
    id: "healthy-restaurants",
    title: "Try two healthy restaurants",
    description: "Make nourishment part of the relationship rhythm.",
  },
  {
    id: "cook-together",
    title: "Cook one new meal together",
    description: "Choose a recipe that creates a shared win in the kitchen.",
  },
  {
    id: "cultural-event",
    title: "Attend one cultural event",
    description: "Stay rooted in art, music, books, and community.",
  },
  {
    id: "phone-free-evening",
    title: "Spend one evening without phones",
    description: "Protect time for presence, rest, and conversation.",
  },
];

export const relationshipCheckInQuestions: RelationshipCheckInQuestion[] = [
  { id: "connected", label: "How connected did we feel this week?" },
  { id: "intentional-time", label: "Did we spend intentional time together?" },
  { id: "laugh", label: "What made us laugh?" },
  { id: "more-needed", label: "What do we need more of?" },
  { id: "difficult", label: "What felt difficult?" },
  { id: "grateful", label: "What are we grateful for?" },
  { id: "next", label: "What should we plan next?" },
  { id: "discussion", label: "Is there anything we need to discuss?" },
  { id: "appreciated", label: "What is one thing I appreciated about my partner?" },
];

export const relationshipHabitOptions = [
  "Walking dates",
  "Active dates",
  "Healthy restaurant choices",
  "Cooking together",
  "Water goals",
  "Alcohol-free dates",
  "Outdoor time",
  "Screen-free time",
  "Sleep-friendly evening plans",
  "Stress-reducing activities",
];

export const dmvRecommendations: DmvRecommendation[] = [
  {
    id: "dc-free-museum-walk",
    region: "Washington, DC",
    title: "Free museum walk and coffee",
    description: "Pair a low-cost museum stop with a slow cafe break and one deep conversation.",
    tags: ["Free", "Museum", "Walking", "Indoor"],
    priceLabel: "Free",
    indoorOutdoor: "Indoor",
    season: "Any season",
    accessibility: "Accessible paths and seated breaks are typically easy to plan.",
  },
  {
    id: "pg-botanical-park",
    region: "Prince George's County",
    title: "Botanical park stroll",
    description: "A calm, reflective outdoor date for couples who want fresh air without high effort.",
    tags: ["Outdoor", "Walking", "Accessible"],
    priceLabel: "Under $25",
    indoorOutdoor: "Outdoor",
    season: "Spring",
    accessibility: "Choose paved paths and shade if mobility support is needed.",
  },
  {
    id: "nova-live-music",
    region: "Northern Virginia",
    title: "Live music supper club",
    description: "A grown-up evening with music, conversation, and a reservations-first mindset.",
    tags: ["Music", "Indoor", "Under $50"],
    priceLabel: "Under $50",
    indoorOutdoor: "Indoor",
    season: "Fall",
    accessibility: "Call ahead for seating and entrance details.",
  },
  {
    id: "arlington-books-market",
    region: "Arlington",
    title: "Bookstore and market date",
    description: "Browse a bookstore, share picks, then pick up a healthy snack or lunch nearby.",
    tags: ["Books", "Healthy food", "Indoor"],
    priceLabel: "Under $25",
    indoorOutdoor: "Indoor",
    season: "Winter",
    accessibility: "Indoor and transit-friendly for most couples.",
  },
  {
    id: "national-harbor-waterfront",
    region: "National Harbor",
    title: "Waterfront stroll and dessert",
    description: "A scenic walk with easy conversation and a soft landing at the end.",
    tags: ["Outdoor", "Walking", "Romance"],
    priceLabel: "Under $50",
    indoorOutdoor: "Outdoor",
    season: "Summer",
    accessibility: "Plan for seated breaks and weather-aware shoes.",
  },
  {
    id: "annapolis-day-trip",
    region: "Annapolis",
    title: "Historic harbor day trip",
    description: "Combine a relaxed walk, local food, and a little exploration with no rush.",
    tags: ["Travel", "Outdoor", "Healthy food"],
    priceLabel: "Under $50",
    indoorOutdoor: "Either",
    season: "Spring",
    accessibility: "Mixed terrain; plan a flexible route and parking strategy.",
  },
];

export const relationshipProfileDefaults = {
  primaryUserFirstName: "",
  partnerFirstName: "",
  coupleDisplayName: "",
  relationshipStartDate: "",
  anniversaryDate: "",
  cityOrRegion: "",
  interests: [] as string[],
  preferredActivityLevel: "Moderate",
  dietaryPreferences: [] as string[],
  accessibilityNeeds: "",
  typicalDateBudget: "$25-$50",
  favoriteMusicGenres: [] as string[],
  favoriteBooksOrAuthors: [] as string[],
  favoriteOutings: [] as string[],
  adventureComfort: "Balanced",
  wantsDmvRecommendations: true,
  wantsWeeklySuggestions: true,
};
