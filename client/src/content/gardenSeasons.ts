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
    heroAlt: "Summer garden in full growth - Black woman tending thriving vegetables",
    body: [
      "Summer is loud. Everything demands attention. The plants you carefully started in spring are now towering, sprawling, and screaming for water, for pruning, for support. This is the season where your commitment gets tested—where the dream of 'having a garden' meets the reality of maintaining one.",
      
      "Here's what nobody tells you about summer: it's not just hot. It's relentless. The weeds grow faster than you can pull them. The pests show up like they paid rent. Your tomatoes split before you can harvest them. Your basil bolts and goes to seed just when you need it most. And that cute little cucumber plant? It's now a monster taking over half your garden.",
      
      "But this is where the magic happens. This is where you learn that growth requires consistency, not perfection. You're out here every morning checking for tomato hornworms, testing soil moisture, adjusting stakes and trellises, harvesting before the heat scorches everything. This is devotion.",
      
      "Summer in the garden mirrors summer in life. All those intentions you set in spring? Now you're living them. The job you manifested? You're showing up for it daily. The relationship you prayed for? You're tending it through disagreements and growth spurts. The health goals? You're choosing the salad over the fries in 95-degree heat.",
      
      "This is where discipline becomes devotion. You don't water your garden because it's fun—you do it because you're committed to the harvest. You don't show up to therapy or the gym or meal prep because it's convenient—you do it because you know what you planted in spring, and you refuse to let it die in summer.",
      
      "Summer also teaches you about abundance and overwhelm. One zucchini plant produces enough to feed your entire block. Cherry tomatoes ripen faster than you can eat them. Herbs need constant harvesting or they go to seed. You're giving away produce, making preserves, freezing extras—and you're still overwhelmed.",
      
      "This is the lesson: sometimes blessings show up as work. Sometimes getting what you asked for means managing the overflow. You wanted the thriving business? Great—now you're managing clients, invoices, boundaries. You wanted the healthy relationship? Beautiful—now you're navigating communication, compromise, quality time. You wanted the garden? Congrats—now you're googling 'what to do with 47 zucchinis.'",
      
      "Summer in my DMV backyard is specific. The humidity makes everything grow like it's on steroids. Morning dew lasts until 10am. Afternoon thunderstorms water everything but also flatten your beans. Japanese beetles show up like clockwork in July. Squash vine borers are the devil. But the okra? Thriving. The collards? Taking over. The peppers? Finally ripening.",
      
      "I'm out here in my garden every morning before the heat hits, coffee in hand, checking on my babies. I'm talking to my tomatoes (yes, really), pruning suckers, tying up branches heavy with fruit. I'm pulling weeds before they seed. I'm hand-picking pests because I'm not spraying chemicals on food I'm about to eat. This is therapy. This is meditation. This is proof that I can keep something alive.",
      
      "And here's what summer teaches that nobody talks about: maintenance is its own form of growth. You're not always going to see dramatic transformation. Some weeks, you're just keeping things alive. Some weeks, you're just showing up. That's enough.",
      
      "In summer, you learn to appreciate the small wins. The first ripe tomato. The cucumber that's actually the right size (not a baseball bat). The basil that survived the heatwave. The morning you wake up and realize you haven't forgotten to water anything in three days.",
      
      "This is also the season for harvesting and sharing. Your garden produces more than you can use alone—and that's by design. Take zucchini to your neighbors. Make tomato sauce for your mom. Trade your excess cucumbers for your friend's peppers. Community gardens exist for a reason. We're not meant to do this alone.",
      
      "Summer asks you: can you maintain what you manifested? Can you show up when it's hard? Can you manage abundance without burning out? Can you appreciate growth even when it's messy?",
      
      "The answer is yes. But only if you're honest about what it takes. Summer doesn't lie to you. Your garden shows you exactly what you put in. Water it? It thrives. Neglect it? It withers. Give it too much love? It drowns. Summer is direct like that.",
      
      "So here's my summer wisdom: tend what you prayed for. Show up for what you asked for. Maintain what you manifested. This is the work. This is the devotion. This is the season that separates intentions from commitments.",
      
      "And when you're exhausted from watering and weeding and harvesting and preserving, remember: the work you're doing now determines what you'll eat all winter. The consistency you practice now determines what survives into fall. The devotion you give now determines the harvest you'll celebrate later.",
      
      "Summer whispers: 'You planted it. Now tend it. The harvest is coming.'"
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
