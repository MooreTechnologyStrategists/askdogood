// client/src/content/gardenSeasons.ts

// Import images explicitly so Vite can bundle them
import springImg from "@/content/images/garden/spring.webp";
import summerImg from "@/content/images/garden/summer.webp";
import fallImg from "@/content/images/garden/fall.webp";
import winterImg from "@/content/images/garden/winter.webp";

export type GardenSeason = {
  slug: string;
  title: string;
  subtitle: string;
  heroImg: string;
  heroAlt: string;
  body: string[];
};

export const gardenSeasons: GardenSeason[] = [
  {
    slug: "spring",
    title: "Spring",
    subtitle: "Planting with faith and patience",
    heroImg: springImg,
    heroAlt: "Spring garden in bloom",
    body: [
      "Spring reminds me that growth starts quietly.",
      "You prepare the soil long before you ever see results.",
      "Faith looks like watering seeds you can't see yet."
    ]
  },
  {
    slug: "summer",
    title: "Summer",
    subtitle: "Tending what you prayed for",
    heroImg: summerImg,
    heroAlt: "Summer garden in full growth",
    body: [
      "Summer is loud. Everything demands attention.",
      "Growth requires consistency, not perfection.",
      "This is where discipline becomes devotion."
    ]
  },
  {
    slug: "fall",
    title: "Fall",
    subtitle: "Harvest, release, and reflection",
    heroImg: fallImg,
    heroAlt: "Fall garden harvest",
    body: [
      "Fall teaches gratitude.",
      "Not everything is meant to be carried forward.",
      "Some things are harvested. Some things are compost."
    ]
  },
  {
    slug: "winter",
    title: "Winter",
    subtitle: "Rest is not failure",
    heroImg: winterImg,
    heroAlt: "Winter garden at rest",
    body: [
      "Winter looks empty but the work is still happening.",
      "Rest restores what growth depletes.",
      "Dormancy is preparation, not punishment."
    ]
  }
];

export function getSeason(slug: string) {
  return gardenSeasons.find((s) => s.slug === slug);
}
