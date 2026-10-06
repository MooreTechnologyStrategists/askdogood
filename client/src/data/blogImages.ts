import assignedImages from "./blogImageAssets.json";
import { safeBlogPosts } from "@/content/blogData";
export const BLOG_DEFAULT_CARD =
  "/images/editorial/when-life-shifts-your-next-step-still-matters.svg";
export const BLOG_DEFAULT_HERO = BLOG_DEFAULT_CARD;
export function articleTopic(text: string) {
  if (/faith|prayer|god|bible|revelation|scripture|spiritual/i.test(text)) return "faith";
  if (
    /date-ideas|dates-|slow-walk|relationship|dating|partner|marriage|love|trust|couple|boundary|boundaries|bedroom|connection|communication/i.test(
      text
    )
  )
    return "relationships";
  if (
    /career|work-from-home|working-from-home|business|job|raise|pay|income|azure|technology|software|productivity|student|loan|credit|money/i.test(
      text
    )
  )
    return "career";
  if (
    /thyroid|health|food|meal|recipe|vegan|nutrition|supplement|symptom|disease|blood|skin|herb|collagen|beet|weight|exercise|muscle|menopause/i.test(
      text
    )
  )
    return "health";
  return "life";
}
// Explicit editorial choices take priority; archive photos remain on their actual stories.
const photoRules: [RegExp, string, string][] = [
 [/from-kingston-courts-to-yonkers-dreams/, "/images/personal/professional/jamaica-youth-team.webp", "Youth basketball team from the AskDoGood archive"],
 [/overcoming-fear-and-thriving-my-journey-to-paris/, "/images/personal/travel/rosee-speaking-paris-2023.webp", "RoSeé speaking in Paris in 2023"],
 [/^dmv-meal-prep-/, "/images/personal/food/muhammad-dishes-1.jpg", "A colorful prepared vegetable dish"],
 [/^healthy-date-ideas/, "/images/personal/food/night-umbrella.jpg", "An outdoor evening setting for conversation"],
 [/^affordable-dmv-date-ideas/, "/images/personal/professional/zachary-nelson-community.jpg", "People spending time together outdoors"],
 [/^music-dates-bookstore-dates/, "/images/personal/food/night-garden.jpg", "An evening garden setting for an unhurried conversation"],
 [/^how-to-build-a-weekly-relationship/, "/images/personal/professional/clay-banks-hands-together.jpg", "Hands together around a table, illustrating connection"],
 [/^when-life-shifts/, "/images/personal/food/blue-suit-sit-down-zay.jpg", "RoSeé sitting in a blue suit, illustrating a personal next chapter"],
 [/^what-ders-means/, "/images/personal/food/muhammad-dishes-3.jpg", "A prepared meal illustrating everyday food habits"],
 [/^the-sound-of-silence/, "/assets/img/blog/assigned/the-sound-of-silence-my-battle-with-otosclerosis-and-vertigo.webp", "Editorial illustration accompanying a personal hearing-loss story"],
 [/^does-revelation-speak/, "/images/editorial/revelation-bible-study.jpg", "An open Bible on a table in natural light"],
];
const assets: Record<string, string> = assignedImages;
const aliases: Record<string, string> = {
 "superbeets-the-superfood-your-heart-has-been-waiting-for": "superbe-ets-the-superfood-your-heart-has-been-waiting-for",
 "superbeets-the-superfood-that-helped-sustain-me-for-7-years-while-battling-thyroid-cancer": "superbeets-the-superfood-that-helped-sustain-me-for-7-years-while-battling-thyroid-cancer",
};
const knownSlugs = new Set(safeBlogPosts.map(post => post.id));
export function articleImage(slug: string) {
  const match = photoRules.find(([test]) => test.test(slug));
  return (
    match?.[1] || assets[aliases[slug] || slug] ||
    (knownSlugs.has(slug) ? `/images/editorial/${slug}.svg` : BLOG_DEFAULT_CARD)
  );
}
export function articleImageAlt(slug: string) {
  return (
    photoRules.find(([test]) => test.test(slug))?.[2] ||
    (assets[slug] ? `Editorial illustration: ${safeBlogPosts.find(post => post.id === slug)?.title || "AskDoGood reading room"}` : undefined) ||
    `Editorial cover: ${safeBlogPosts.find(post => post.id === slug)?.title || "AskDoGood reading room"}`
  );
}
export const blogImages: Record<string, string> = Object.fromEntries(
  safeBlogPosts.map(post => [post.id, articleImage(post.id)])
);
