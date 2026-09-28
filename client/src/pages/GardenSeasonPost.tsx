import { Link, useRoute } from "wouter";
import SEO from "@/components/SEO";
import { gardenSeasons, getSeason } from "@/content/gardenSeasons";
import { truncateDescription } from "@/lib/seo";

/**
 * Garden season detail page
 * Fixes:
 * - Normalizes label safely (uses title if available, otherwise Title Case slug)
 * - Hardens hero image path if old /assets/images/garden/* strings are still lingering
 * - Guards against missing body arrays
 * - Keeps prev/next navigation safe
 */
export default function GardenSeasonPost() {
  const [, params] = useRoute("/garden/:season");
  const slug = params?.season || "";
  const season = getSeason(slug);

  if (!season) {
    return (
      <main className="container mx-auto px-4 py-12">
        <SEO
          title="Garden Page Not Found"
          description="That garden season is not available yet."
          url={slug ? `/garden/${slug}` : "/garden"}
          noindex
        />
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="mt-2 text-muted-foreground">That season isn’t planted yet.</p>
        <Link href="/garden">
          <a className="underline mt-6 inline-block">Back to Garden</a>
        </Link>
      </main>
    );
  }

  const index = gardenSeasons.findIndex((s) => s.slug === season.slug);
  const prev = index > 0 ? gardenSeasons[index - 1] : undefined;
  const next = index >= 0 && index < gardenSeasons.length - 1 ? gardenSeasons[index + 1] : undefined;

  const label =
    (season as any).title ??
    season.slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // If season.heroImg is still pointing at the old assets path, correct it here.
  // NOTE: the most robust fix is to update gardenSeasons to import images from "@/content/images/garden/*"
  const heroImg =
    typeof season.heroImg === "string" && season.heroImg.includes("/assets/images/garden/")
      ? season.heroImg.replace("/assets/images/garden/", "/content/images/garden/")
      : season.heroImg;

  const body = Array.isArray(season.body) ? season.body : [];
  const description = truncateDescription(
    [season.subtitle, body[0]].filter(Boolean).join(" "),
  );
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${season.title} Garden Reflection`,
    description,
    image: heroImg,
    articleSection: "Garden",
    mainEntityOfPage: `https://askdogood.com/garden/${season.slug}`,
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <SEO
        title={`${season.title} Garden Reflection`}
        description={description}
        keywords={["garden reflection", season.title, "seasonal living", "Ask DoGood garden"]}
        image={heroImg}
        imageAlt={season.heroAlt ?? `${label} garden`}
        url={`/garden/${season.slug}`}
        type="article"
        schema={schema}
      />
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/">
          <a className="underline">Home</a>
        </Link>{" "}
        <span className="opacity-60">/</span>{" "}
        <Link href="/garden">
          <a className="underline">Garden</a>
        </Link>{" "}
        <span className="opacity-60">/</span>{" "}
        <span className="text-foreground">{label}</span>
      </nav>

      <article className="max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold">{season.title}</h1>
        {season.subtitle ? (
          <p className="mt-2 text-muted-foreground">{season.subtitle}</p>
        ) : null}

        <div className="mt-8 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <img src={heroImg} alt={season.heroAlt ?? `${label} garden`} className="h-full min-h-80 max-h-[34rem] w-full rounded-3xl object-cover shadow-lg" loading="lazy" />
          <div className="grid gap-4">
            <img src={season.slug === "fall" ? "/images/personal/food/garden-peppers.jpg" : "/images/personal/food/collards-in-small-raised-bed.jpg"} alt={season.slug === "fall" ? "Peppers growing in the AskDoGood garden" : "Leafy greens growing in a raised bed"} className="h-48 w-full rounded-3xl object-cover md:h-full" loading="lazy" />
          </div>
        </div>

        {season.inSeason?.length ? <section className="mt-10 rounded-3xl bg-[#fff8ed] p-6 md:p-8" aria-labelledby="season-produce">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">From bed, orchard, and pantry</p>
          <h2 id="season-produce" className="mt-2 text-2xl font-bold">What this season can put on the table</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{season.inSeason.map((crop) => <div key={crop} className="rounded-2xl border border-[#173c32]/15 bg-white px-5 py-4 font-medium">{crop}</div>)}</div>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">{season.seasonNote} <a className="underline" href="https://extension.umd.edu/resource/when-plant-vegetables" target="_blank" rel="noreferrer">See the University of Maryland planting calendar</a>.</p>
        </section> : null}

        <div className="mt-8 space-y-5 text-base leading-7">
          {body.length ? (
            body.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p className="text-muted-foreground">
              This season does not have a written journal entry yet, but the garden archive and photo timeline are still available.
            </p>
          )}
        </div>

        <div className="mt-12 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/garden/${prev.slug}`}>
              <a className="underline">← {prev.slug.toUpperCase()}</a>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={`/garden/${next.slug}`}>
              <a className="underline">{next.slug.toUpperCase()} →</a>
            </Link>
          ) : (
            <span />
          )}
        </div>

        <div className="mt-10 rounded-3xl border border-primary/20 bg-[#f8eee5] p-8">
          <h2 className="text-2xl font-bold">Pull up a chair</h2>
          <p className="mt-3 text-lg leading-8">{season.conversation ?? "What has this season been teaching you?"}</p>
          <a className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground" href={`mailto:askdogood@gmail.com?subject=${encodeURIComponent(`${season.title} garden conversation`)}`}>Tell me your story</a>
        </div>
      </article>
    </main>
  );
}
