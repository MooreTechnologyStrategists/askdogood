import { Link } from "wouter";
import { gardenSeasons } from "@/content/gardenSeasons";
import SEO from "@/components/SEO";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";


/**
 * Garden landing page
 * Fixes:
 * - Ensures heroImg points to an existing path under: client/src/content/images/garden/
 * - Normalizes season label if title isn't provided
 * - Keeps Link usage compatible with wouter (<Link><a/></Link>)
 */
export default function Garden() {
  return (
    <main className="container mx-auto px-4 py-12">
      <SEO title="A Garden Through the Seasons | AskDoGood" description="Come through RoSeé's garden for real-life stories, fall and winter growing ideas, seasonal food, and conversation starters." url="/garden" />
      <header className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">RoSeé's garden journal</p>
        <h1 className="text-4xl md:text-5xl font-bold">Seasons of Growth</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          My garden has taught me patience, fed a few good meals, and occasionally humbled me before breakfast. Follow the seasons for what is growing, what is resting, and what that has to do with the rest of life.
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {gardenSeasons.map((s) => {
          // Prefer explicit title, otherwise Title Case the slug
          const label =
            (s as any).title ??
            s.slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");

          // If your gardenSeasons already exports heroImg correctly, this does nothing.
          // If it still points at /assets/images/garden/*, we correct it here.
          const heroImg =
            typeof s.heroImg === "string" && s.heroImg.includes("/assets/images/garden/")
              ? s.heroImg.replace(
                  "/assets/images/garden/",
                  "/content/images/garden/"
                )
              : s.heroImg;

          return (
            <Link key={s.slug} href={`/garden/${s.slug}`}>
              <a className="group relative overflow-hidden rounded-3xl shadow-lg border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 block">
                <img
                  src={heroImg}
                  alt={s.heroAlt ?? `${label} garden`}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-white text-2xl font-bold mb-1">{label}</div>
                  <div className="text-white/90 text-sm font-medium">{s.subtitle}</div>
                </div>
              </a>
            </Link>
          );
        })}
      </section>

      <section className="mt-14 grid gap-6 rounded-3xl bg-[#fff8ed] p-7 md:grid-cols-[1fr_1fr] md:p-10">
        <img src="/images/personal/food/collards-in-small-raised-bed.jpg" alt="Greens growing in RoSeé's raised garden bed" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
        <div className="self-center"><p className="text-sm font-semibold uppercase tracking-widest text-primary">Start a conversation</p><h2 className="mt-3 text-3xl font-bold">What are you growing through?</h2><p className="mt-4 leading-7 text-muted-foreground">Sometimes the question is about vegetables. Sometimes it's about surviving a season you didn't choose. Bring the honest answer; there's room for both.</p><a href="mailto:askdogood@gmail.com?subject=Garden%20Table%20conversation" className="mt-5 inline-flex font-semibold text-primary underline">Write to the Garden Table</a></div>
      </section>

      <section className="mt-14 max-w-3xl rounded-3xl border bg-card p-6"><BeehiivSubscribe variant="inline" source="garden_journal" title="Notes from the garden" description="Seasonal stories, useful ideas, and invitations to future conversations." buttonText="Join free" /></section>

      {/* Optional: small debug hint during development */}
      {/* <pre className="mt-10 text-xs text-muted-foreground">{JSON.stringify(gardenSeasons, null, 2)}</pre> */}
    </main>
  );
}
