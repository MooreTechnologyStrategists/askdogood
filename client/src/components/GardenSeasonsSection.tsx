import { Link } from "wouter";

// ✅ Import images from YOUR actual structure
import springImg from "@/content/images/garden/spring.webp";
import summerImg from "@/content/images/garden/summer.webp";
import fallImg from "@/content/images/garden/fall.webp";
import winterImg from "@/content/images/garden/winter.webp";

export default function GardenSeasonsSection() {
  const seasons = [
    {
      title: "Spring Reset",
      description: "Fresh starts, lighter meals, and gentle routines that rebuild momentum.",
      image: springImg,
      tag: "Renew",
      href: "/garden",
    },
    {
      title: "Summer Fuel",
      description: "Hydration, energy, and nourishment without burnout or extremes.",
      image: summerImg,
      tag: "Energize",
      href: "/garden",
    },
    {
      title: "Fall Balance",
      description: "Grounding foods, gut support, and structure as life speeds up.",
      image: fallImg,
      tag: "Stabilize",
      href: "/garden",
    },
    {
      title: "Winter Restore",
      description: "Warm meals, rest, and nervous-system care that actually helps.",
      image: winterImg,
      tag: "Restore",
      href: "/garden",
    },
  ];

  return (
    <section className="border-t bg-background">
      <div className="container py-14 md:py-18">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              AskDoGood Garden
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Wellness by season — realistic, not rigid
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Healing rhythms that respect your body, your budget, and your real life.
            </p>
          </div>

          <Link href="/garden">
            <a className="mt-2 inline-flex w-fit items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-accent md:mt-0">
              Explore the Garden →
            </a>
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((season) => (
            <Link key={season.title} href={season.href}>
              <a className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative">
                  <img
                    src={season.image}
                    alt={season.title}
                    className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                    {season.tag}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold">{season.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {season.description}
                  </p>

                  <div className="mt-4 text-sm font-medium text-primary">
                    Read more →
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
