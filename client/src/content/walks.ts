export interface WalkStat {
  label: string;
  value: string;
}

export interface WalkFeatureCallout {
  label: string;
  value: string;
}

export interface WalkFeatureCard {
  badge: string;
  title: string;
  description: string;
  callouts: WalkFeatureCallout[];
}

export interface WalkResource {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  recoveredHeading: string;
  recoveredSummary: string;
  stats: WalkStat[];
  highlights: string[];
  featured?: boolean;
  featureCard: WalkFeatureCard;
}

export const walkResources: WalkResource[] = [
  {
    slug: "indian-creek-trail",
    title: "Indian Creek Trail",
    eyebrow: "Walk story",
    description:
      "A recovery walk about forgiveness without forgetting: honoring what happened, carrying the lesson, and still choosing to move forward with your full life.",
    href: "/flipbooks/indian-creek-trail.html",
    recoveredHeading: "Everything Was Vivid.",
    recoveredSummary:
      "A reflective recovery walk about releasing bitterness without erasing memory, and using both grace and boundaries to protect your next chapter.",
    stats: [
      { label: "Distance", value: "5.7 mi" },
      { label: "Steps", value: "12,840" },
      { label: "Goal", value: "5.0 mi" },
      { label: "Cities", value: "5" },
    ],
    highlights: [
      "12,840 steps across 5.7 miles, with five cities connected on one trail.",
      "Everything Was Vivid: a walk framed as life after thyroidectomy recovery and emotional rebuilding.",
      "Forgiveness is framed as wisdom, not amnesia: keep the lesson, lose the poison.",
      "Eight photo scenes, including the smile, the creek, the bridges, and the chalk message for survivors.",
      "Closing line: The world did not get more beautiful. I just got well enough to see it again, and wise enough to move differently.",
    ],
    featured: false,
    featureCard: {
      badge: "Walk Recovery Story",
      title: "A forgiveness narrative rooted in memory, not denial.",
      description:
        "Indian Creek now carries a stronger emotional arc: you can forgive what hurt you, remember what it taught you, and still walk with dignity into what is next.",
      callouts: [
        {
          label: "Story frame",
          value: "Eight scenes, one trail, and the practice of forgiving without giving your discernment away.",
        },
        {
          label: "Proof point",
          value: "5.7 miles and 12,840 steps after a period when progress felt distant, now tied to emotional maturity and self-respect.",
        },
      ],
    },
  },
  {
    slug: "patuxent-river-blue-trail",
    title: "Patuxent River Blue Trail",
    eyebrow: "Trail essay",
    description:
      "An editorial trail essay on accountability in growth: measuring your habits honestly, owning your patterns, and building a life that matches your values.",
    href: "/flipbooks/patuxent-river-blue-trail.html",
    recoveredHeading: "A river walk that slows the day down.",
    recoveredSummary:
      "A longer river essay that links physical movement with personal accountability: how to audit your choices, reset your standards, and walk in alignment.",
    stats: [
      { label: "Trail", value: "Blue Trail" },
      { label: "Region", value: "Patuxent River" },
      { label: "Season", value: "Spring" },
      { label: "Format", value: "Article" },
    ],
    highlights: [
      "A 1,200-word article framed around accountability and the Blue Trail section of the Patuxent River route.",
      "Uses landscape moments as prompts for self-audit: what is working, what is performative, and what must change.",
      "Centers growth as repeated responsibility, not motivation spikes or image management.",
      "Uses direct hosted trail images so the narrative remains live, practical, and expandable as new walk stories are added.",
    ],
    featured: true,
    featureCard: {
      badge: "New trail feature",
      title: "Patuxent reframes growth as accountability in motion.",
      description:
        "This entry uses river pace and quiet to push honest reflection: accountability is not punishment, it is how real change becomes measurable and repeatable.",
      callouts: [
        {
          label: "Story angle",
          value: "Accountability as daily practice: own your habits, track your patterns, and close the gap between what you say and what you do.",
        },
        {
          label: "Template use",
          value: "Built as a reusable article-style flipbook where each future trail can carry a growth principle, not just a location summary.",
        },
      ],
    },
  },
  {
    slug: "keep-moving",
    title: "Keep Moving",
    eyebrow: "Series cover",
    description:
      "The editorial anchor for moving like you really want peace: putting away childish patterns and choosing emotional, mental, and spiritual maturity.",
    href: "/flipbooks/keep-moving.html",
    recoveredHeading: "Movement, public space, and healing.",
    recoveredSummary:
      "The original editorial spread now carries a stronger life ethic: choose peace with discipline, regulate your emotions, and build grown standards that protect your future.",
    stats: [],
    highlights: [
      "Go Outside: the trail is free, the air is free, and the trees do not charge a subscription fee.",
      "Stop Trying To Keep Up With The Jones's: your walk is free and their stress is not.",
      "Move like you want peace: retire childish reactions and practice emotional, mental, and spiritual steadiness.",
      "A bridge. A river. A smile. That's enough.",
      "Work Smarter. Walk Daily: a simple argument for public trails, daily movement, and low-cost healing.",
    ],
    featureCard: {
      badge: "Series frame",
      title: "Walking becomes a maturity practice, not just a fitness habit.",
      description:
        "This piece anchors the whole walk series around disciplined peace: grow up where needed, slow down where needed, and move with intention that matches the life you say you want.",
      callouts: [
        {
          label: "Core line",
          value: "Move like you really want peace, not just attention or temporary relief.",
        },
        {
          label: "Use case",
          value: "Best used as the cover story that frames every future walk around practical growth and life alignment.",
        },
      ],
    },
  },
];

export const featuredWalkResource =
  walkResources.find((resource) => resource.featured) ?? walkResources[0];