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
      "A vivid 5.7-mile morning after thyroid surgery recovery: five cities, one trail, and proof that feeling good in your body is still possible.",
    href: "/flipbooks/indian-creek-trail.html",
    recoveredHeading: "Everything Was Vivid.",
    recoveredSummary:
      "A recovery walk told through eight scenes, local geography, and the feeling of being well enough to notice beauty again.",
    stats: [
      { label: "Distance", value: "5.7 mi" },
      { label: "Steps", value: "12,840" },
      { label: "Goal", value: "5.0 mi" },
      { label: "Cities", value: "5" },
    ],
    highlights: [
      "12,840 steps across 5.7 miles, with five cities connected on one trail.",
      "Everything Was Vivid: a walk framed as part of life after thyroidectomy recovery.",
      "Eight photo scenes, including the smile, the creek, the bridges, and the chalk message for survivors.",
      "Closing line: The world did not get more beautiful. I just got well enough to see it again.",
    ],
    featured: false,
    featureCard: {
      badge: "Walk Recovery Story",
      title: "The walk story is part of the library, not buried under it.",
      description:
        "Indian Creek already contains the real narrative, scene captions, and recovery proof points. Surfacing it directly makes the library feel grounded in lived experience instead of generic wellness copy.",
      callouts: [
        {
          label: "Story frame",
          value: "Eight scenes, one trail, and a body that finally feels present again.",
        },
        {
          label: "Proof point",
          value: "5.7 miles and 12,840 steps after a period when that kind of morning would have felt unreachable.",
        },
      ],
    },
  },
  {
    slug: "patuxent-river-blue-trail",
    title: "Patuxent River Blue Trail",
    eyebrow: "Trail essay",
    description:
      "An editorial photo story from the Patuxent River Trail on the Blue Trail, framed around spring light, public land, and the practical calm that comes from walking near water.",
    href: "/flipbooks/patuxent-river-blue-trail.html",
    recoveredHeading: "A river walk that slows the day down.",
    recoveredSummary:
      "A longer trail essay built from Patuxent River images: boardwalk, wetland views, quiet pauses, and the argument that local public trails are still a real wellness resource.",
    stats: [
      { label: "Trail", value: "Blue Trail" },
      { label: "Region", value: "Patuxent River" },
      { label: "Season", value: "Spring" },
      { label: "Format", value: "Article" },
    ],
    highlights: [
      "A 1,200-word article framed around the Patuxent River Trail and the Blue Trail section of the Star-Spangled Banner route.",
      "Balances landscape images with personal trail moments instead of treating the walk as generic stock wellness content.",
      "Centers public trails as a practical form of healing, not a luxury add-on or aspirational brand story.",
      "Uses direct hosted trail images so the piece can stay live and easy to update as more walks are added.",
    ],
    featured: true,
    featureCard: {
      badge: "New trail feature",
      title: "Patuxent expands the walk library into a longer editorial trail story.",
      description:
        "This entry adds a more reflective river-based piece to the collection. It shows how future walks can mix landscape, local context, and personal recovery language without changing the underlying schema.",
      callouts: [
        {
          label: "Story angle",
          value: "Public trails as accessible healing spaces, especially when the route offers water, quiet, and room to slow down.",
        },
        {
          label: "Template use",
          value: "Built as a reusable article-style flipbook with direct blob images and structured sections for future trail uploads.",
        },
      ],
    },
  },
  {
    slug: "keep-moving",
    title: "Keep Moving",
    eyebrow: "Series cover",
    description:
      "The original editorial-style spread that frames this project: movement, public space, healing, and the kind of wealth that starts with being able to breathe and keep going.",
    href: "/flipbooks/keep-moving.html",
    recoveredHeading: "Movement, public space, and healing.",
    recoveredSummary:
      "The original editorial spread is still here too: photos, bold pull quotes, and the core argument that everyday walking is one of the most practical forms of healing available.",
    stats: [],
    highlights: [
      "Go Outside: the trail is free, the air is free, and the trees do not charge a subscription fee.",
      "Stop Trying To Keep Up With The Jones's: your walk is free and their stress is not.",
      "A bridge. A river. A smile. That's enough.",
      "Work Smarter. Walk Daily: a simple argument for public trails, daily movement, and low-cost healing.",
    ],
    featureCard: {
      badge: "Series frame",
      title: "Walking is the lowest-friction healing practice on the page.",
      description:
        "This piece works best as the editorial anchor for the walk series: it explains the why behind the images, the trails, and the insistence on moving through public space with intention.",
      callouts: [
        {
          label: "Core line",
          value: "A bridge. A river. A smile. That's enough.",
        },
        {
          label: "Use case",
          value: "Best used as the cover story or framing essay for a larger run of walk entries.",
        },
      ],
    },
  },
];

export const featuredWalkResource =
  walkResources.find((resource) => resource.featured) ?? walkResources[0];