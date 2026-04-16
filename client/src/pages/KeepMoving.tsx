import { Link } from "wouter";
import { ArrowRight, Footprints, HeartPulse, Leaf, MapPinned } from "lucide-react";

const mosaicImages = [
  "/images/personal/rosee-hero-1.jpg",
  "/images/personal/professional/rosee-professional-suit.jpg",
  "/images/personal/food/greens-salad.jpg",
  "/images/personal/food/meal-prep.jpg",
  "/images/personal/food/vegetables-roasted.jpg",
  "/hero-home.webp",
];

const reflections = [
  {
    title: "Free therapy. No copay.",
    description:
      "Walking has become one of the most honest forms of care in my life. It clears fear out of the room long enough for gratitude, breath, and perspective to get a turn.",
    icon: HeartPulse,
  },
  {
    title: "The simple things hit different.",
    description:
      "A safe trail. A good meal. A body that can go a little farther than it could last season. Those are not small things anymore.",
    icon: Footprints,
  },
  {
    title: "It was already waiting for you.",
    description:
      "Sometimes healing is not about inventing a whole new life. It is about noticing the creek, the park, the recipe, the rhythm that was there all along.",
    icon: MapPinned,
  },
];

const flipbooks = [
  {
    title: "Indian Creek Trail",
    eyebrow: "Walk story",
    description:
      "A vivid 5.7-mile morning after thyroid surgery recovery: five cities, one trail, and proof that feeling good in your body is still possible.",
    href: "/flipbooks/indian-creek-trail.html",
    image: "/images/personal/rosee-hero-1.jpg",
  },
  {
    title: "Keep Moving",
    eyebrow: "Series cover",
    description:
      "The original editorial-style spread that frames this project: movement, public space, healing, and the kind of wealth that starts with being able to breathe and keep going.",
    href: "/flipbooks/keep-moving.html",
    image: "/images/personal/professional/rosee-professional-suit.jpg",
  },
];

export default function KeepMoving() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,#efe6d2_0%,transparent_38%),linear-gradient(180deg,#14372d_0%,#0f201d_55%,#0b1314_100%)] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="grid h-full grid-cols-2 md:grid-cols-3">
            {mosaicImages.map((src, index) => (
              <div key={src} className="relative min-h-[180px] overflow-hidden border border-white/5">
                <img
                  src={src}
                  alt="Keep Moving collage"
                  className={`h-full w-full object-cover ${index % 2 === 0 ? "scale-110" : "scale-100"}`}
                />
                <div className="absolute inset-0 bg-black/55" />
              </div>
            ))}
          </div>
        </div>

        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-4xl space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/65">
              Walks And Foods For Healing
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-bold leading-none md:text-7xl">
                Keep Moving
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                A new home for the stories I want to share more consistently: healing walks,
                recovery milestones, public spaces worth protecting, and the foods that help me feel like myself again.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/flipbooks/indian-creek-trail.html"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition-transform hover:-translate-y-0.5"
              >
                Read Indian Creek
              </a>
              <a
                href="/flipbooks/keep-moving.html"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/14"
              >
                Open The Original Spread
              </a>
              <Link href="/journey">
                <a className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/78 transition-colors hover:border-white/30 hover:text-white">
                  Back To My Journey
                </a>
              </Link>
            </div>

            <div className="grid gap-4 pt-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Proof</p>
                <p className="mt-3 text-3xl font-bold">12,840</p>
                <p className="mt-2 text-sm text-white/72">steps on a morning that felt vivid again</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Distance</p>
                <p className="mt-3 text-3xl font-bold">5.7 miles</p>
                <p className="mt-2 text-sm text-white/72">walked with energy instead of depletion</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Direction</p>
                <p className="mt-3 text-3xl font-bold">One rhythm</p>
                <p className="mt-2 text-sm text-white/72">walk, reflect, nourish, share, repeat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-18 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {reflections.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-border bg-card p-7 shadow-[0_20px_60px_rgba(12,28,24,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container pb-18 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="rounded-[2.25rem] border border-border bg-[linear-gradient(135deg,rgba(19,55,45,0.06),rgba(205,177,109,0.11))] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/75">
              The Series
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Shareable flipbooks, with room to grow.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              I added the two attached flipbooks as live pages so they are immediately shareable on AskDoGood.
              This page now acts as the front door for the series, which means future walks and healing-food stories can live under one consistent concept instead of getting lost as isolated exports.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {flipbooks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-sm transition-transform hover:-translate-y-1"
                >
                  <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Open flipbook
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <article className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
              <img
                src="/images/personal/food/meal-prep.jpg"
                alt="Prepared healing food"
                className="h-64 w-full object-cover"
              />
              <div className="p-7">
                <div className="flex items-center gap-3 text-primary">
                  <Leaf className="h-5 w-5" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em]">Foods For Healing</p>
                </div>
                <h3 className="mt-4 text-3xl font-bold">The food side belongs here too.</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  This same series can hold the meals, drinks, prep rituals, and simple ingredients that support recovery.
                  The walks are one half of the rhythm. The nourishment is the other.
                </p>
                <Link href="/meal-prep">
                  <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore meal prep
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Link>
              </div>
            </article>

            <article className="rounded-[2rem] border border-border bg-secondary/40 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Next Step</p>
              <h3 className="mt-4 text-3xl font-bold">A repeatable publishing rhythm.</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                When you make another walk story or food story, the cleanest move is to add it here as another flipbook card,
                then decide later whether it stays as a preserved export or gets rebuilt as a fully native page.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}