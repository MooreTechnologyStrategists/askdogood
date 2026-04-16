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
    title: "Health & Nutrition",
    description:
      "Guides focused on energy, inflammation, food choices, and simple daily resets that support your body without overcomplicating the process.",
    icon: HeartPulse,
  },
  {
    title: "Body Awareness",
    description:
      "Resources that help you understand symptoms, basic lab markers, and what your body may be trying to tell you so you stop relying on guesswork.",
    icon: Footprints,
  },
  {
    title: "Lifestyle Reset",
    description:
      "Programs and tools built to help you create healthier routines that fit real life and lead into stronger daily consistency over time.",
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
                AskDoGood Digital Library
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                Practical guides to help you improve your health, understand your body, and build better daily habits.
              </p>
              <p className="max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                The AskDoGood Digital Library is a growing collection of practical guides designed to help you better understand your health, improve your daily habits, and take action with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/flipbooks/indian-creek-trail.html"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition-transform hover:-translate-y-0.5"
              >
                View Digital Library
              </a>
              <a
                href="/flipbooks/keep-moving.html"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/14"
              >
                Start Your Reset
              </a>
              <Link href="/shop">
                <a className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/78 transition-colors hover:border-white/30 hover:text-white">
                  Shop Products
                </a>
              </Link>
            </div>

            <div className="grid gap-4 pt-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Utility</p>
                <p className="mt-3 text-3xl font-bold">Action</p>
                <p className="mt-2 text-sm text-white/72">built for real progress instead of passive scrolling</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Focus</p>
                <p className="mt-3 text-3xl font-bold">3 lanes</p>
                <p className="mt-2 text-sm text-white/72">nutrition, body awareness, and lifestyle reset</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Next step</p>
                <p className="mt-3 text-3xl font-bold">Buy deeper</p>
                <p className="mt-2 text-sm text-white/72">each guide should lead naturally into a fuller program</p>
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
              What You Will Find Here
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Resources designed to be read and used.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              These resources were created to make health information easier to understand and easier to apply in real life.
              Each guide is designed to help you take action, not just collect information.
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
                      View guide
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
                  <p className="text-xs font-semibold uppercase tracking-[0.28em]">Health & Nutrition</p>
                </div>
                <h3 className="mt-4 text-3xl font-bold">Practical food support belongs in the library too.</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  Guides focused on energy, inflammation, food choices, and daily resets should move people from reading into real nutrition action.
                </p>
                <Link href="/shop">
                  <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore Programs
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Link>
              </div>
            </article>

            <article className="rounded-[2rem] border border-border bg-secondary/40 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">What Happens Next</p>
              <h3 className="mt-4 text-3xl font-bold">Ready to go deeper?</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Explore the full AskDoGood programs and digital products for the next level of structure, support, and practical guidance.
              </p>
              <Link href="/shop">
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Start Your Reset
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}