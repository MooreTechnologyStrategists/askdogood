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
    subtitle: "New Beginnings, Fresh Starts, and Intentional Growth",
    heroImg: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200",
    heroAlt: "Black woman tending to spring garden with fresh plants",
    body: [
      "Spring is that 'brand new, ready for a fresh look' season that everyone loves. We're happy to have survived the horrible dark moments of daylight savings time and seasonal depression. Even if you didn't struggle through winter, we all look to spring as the becoming of new things.",
      
      "New haircuts. New color in your hair, your room, your house or apartment. New energy. With this economic hardship we're facing, we should be putting the blooming season to use—prepping, planting, sowing, and growing. Not just in the garden, but in your life.",
      
      "You just lived through New Year's resolutions, Dry January, overspending and overeating through the holidays. Now you're inspired to get back in the gym, find a job, stay sane, whatever your version of reset looks like.",
      
      "What really helps me through spring is the optimism of planning and making new goals. It gives the mind something to zero in on, leaving less time to worry, be anxious, or be spontaneous at the wrong times. Use this time to practice smiling through it all.",
      
      "Get active in the house as a prelude to help lessen that transition back to the gym or walking or whatever. I cut grass, prep soil, and really grab my vision for garden staging. There are many factors to consider: soil type, zone, sun positioning in relation to your desired garden strategy—whether it's in the home or outside.",
      
      "Start seeds in the house, then transplant for optimal produce. This is a time to renew YOU. Stop looking for friends and people to validate you. Start finding validation in yourself.",
      
      "Spring whispers: 'You survived. Now bloom.'"
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
