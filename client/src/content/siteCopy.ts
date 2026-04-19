export const siteCopy = {
  home: {
    headline: "Real Health. Real Discipline. Real Life.",
    subtext: "Take control of your health through food, movement, and consistency.",
  },
  mealPrep: {
    headline: "Cook Once. Eat Better All Week.",
    content:
      "Meal prep isn't about being perfect - it's about being prepared.\n\nWhen your food is already made, you remove the stress, the guessing, and the bad decisions. You eat better, spend less, and stay consistent without effort.\n\nThis is one of the easiest ways to take control of your health.",
    whyItWorksTitle: "Why It Works",
    whyItWorks:
      "People don't struggle because they don't know what to eat - they struggle because they don't prepare.\n\nMeal prep removes excuses. It stabilizes your eating habits, helps control portions, and keeps your energy consistent throughout the day.\n\nIt's not discipline - it's strategy.",
    kitchenHeader: "In My Kitchen",
    kitchenIntro:
      "This is where everything comes together. No shortcuts, no guesswork - just real food, real balance, and real intention.\n\nI don't cook just to eat - I cook to support my body, my energy, and my life.",
    hydrationHeader: "Start With Water",
    hydrationBody:
      "Before supplements, before diets - start with water.\n\nHydration affects your energy, digestion, focus, and overall function. Most people are running low without realizing it.\n\nFix that first, and everything else becomes easier.",
  },
  shop: {
    headline: "Tools That Actually Help",
    content:
      "Everything here has a purpose. If it's on this page, it's something I've used, built, or stand behind.\n\nNo filler. No hype. Just products and resources that support better health, better habits, and better living.",
    whyBuyFromHere:
      "You're not just buying a product - you're investing in a better way of living.\n\nEvery item is connected to the bigger goal: helping you take control of your health and your habits in a way that lasts.",
  },
  resources: {
    headline: "Real Tools. Real Results.",
    content:
      "This is where I put what actually works.\n\nGuides, flipbooks, and resources designed to help you move better, eat better, and think differently about your health.\n\nTake what you need, apply it, and make it work for your life.",
  },
  blog: {
    headline: "Learn It. Apply It. Live It.",
    content:
      "This isn't just content - it's direction.\n\nEverything here is meant to help you understand your body, your habits, and your health on a deeper level so you can make better decisions daily.",
  },
  about: {
    headline: "Why AskDoGood Exists",
    content:
      "AskDoGood was built from real-life experience - learning what works, what doesn't, and what actually helps people feel better and live better.\n\nThis isn't about perfection. It's about progress, awareness, and building habits that support your life long-term.\n\nThe mission is simple: help people take control of their health, break cycles, and create better outcomes for themselves and their families.",
  },
  cta: "Start where you are. Use what you have. Do better consistently.",
} as const;

export function splitCopy(content: string): string[] {
  return content.split("\n\n");
}