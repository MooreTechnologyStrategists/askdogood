import { Link } from "wouter";
import { ArrowRight, Footprints, HeartPulse, MapPinned } from "lucide-react";
import { walkResources } from "@/content/walks";

const mosaicImages = [
  "/images/personal/rosee-hero-1.jpg",
  "/images/personal/professional/rosee-professional-suit.jpg",
  "/images/personal/food/greens-salad.jpg",
  "/images/personal/food/meal-complete.jpg",
  "/images/personal/food/vegetables-roasted.jpg",
  "/hero-home.webp",
];

const reflections = [
  {
    title: "Health & Nutrition",
    description:
      "Practical food structure for people rebuilding energy, hormone balance, and consistency without fake perfection.",
    icon: HeartPulse,
    href: "/shop",
    accent: "from-primary/10 to-secondary/10",
  },
  {
    title: "Body Awareness",
    description:
      "Learn to read your symptoms, rhythm, and stress patterns so your next wellness decision is informed, not random.",
    icon: Footprints,
    href: "/resources",
    accent: "from-secondary/15 to-primary/5",
  },
  {
    title: "Lifestyle Reset",
    description:
      "Systems for discipline, peace, and growth so your emotional, mental, and spiritual life can level up with your health.",
    icon: MapPinned,
    href: "/work-with-askdogood",
    accent: "from-primary/5 to-[rgba(205,177,109,0.18)]",
  },
];

function RecoveredContentSection() {
  return (
    <section className="container pb-18 md:pb-24">
      <div className="rounded-[2.25rem] border border-border bg-card p-8 shadow-[0_20px_60px_rgba(12,28,24,0.06)] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
          Before You Leave
        </p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Hold up, sweetheart. If you came to be fed, do not leave hungry.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          This library is built to nourish more than information. It is here to give you structure, language, and next steps for a better life in your body, your mind, and your daily standards.
        </p>
        <div className="mt-8 rounded-[1.75rem] border border-primary/20 bg-[linear-gradient(150deg,rgba(19,55,45,0.08),rgba(205,177,109,0.18))] p-5 md:p-6">
          <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="overflow-hidden rounded-2xl border border-white/60 shadow-lg">
              <img
                src="/images/personal/food/meal-complete.jpg"
                alt="RoSee Murphy meal prep session"
                className="h-full w-full object-cover"
                loading="lazy"
                width="520"
                height="360"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/75">From my real routine</p>
              <h3 className="mt-2 text-2xl font-bold">This photo is what accountability looks like for me.</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                Meal prep is not glamorous every day. It is just one of the grown decisions that protects my peace later in the week. This is the AskDoGood standard: do the practical work now so your future self is not left paying interest on avoidable chaos.
              </p>
              <Link href="/behind-the-scenes/in-my-kitchen">
                <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  See more founder moments
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          {walkResources.map((item) => (
            <a key={item.slug} href={item.href} className="group block rounded-[1.75rem] border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">{item.title}</p>
              <h3 className="mt-3 text-3xl font-bold">{item.recoveredHeading}</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{item.recoveredSummary}</p>

              {item.stats.length > 0 ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.stats.map((stat) => (
                    <div key={`${item.slug}-${stat.label}`} className="rounded-2xl border border-border bg-secondary/35 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-primary/70">{stat.label}</p>
                      <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <p key={highlight} className="rounded-2xl border border-border bg-secondary/20 px-4 py-3 text-sm leading-6 text-muted-foreground">
                    {highlight}
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-border bg-secondary/20 p-5 md:hidden">
                <p className="text-sm leading-6 text-muted-foreground">
                  Mobile preview is opened as a full page to avoid nested scrolling.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-5 py-2.5 text-sm font-semibold text-primary">
                  Open {item.title}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>

              <iframe
                src={item.href}
                title={`${item.title} preview`}
                className="mt-6 hidden h-[540px] w-full rounded-[1.5rem] border border-border bg-white md:block"
                loading="lazy"
                scrolling="no"
              />
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open full guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

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
                Welcome in. This is where I turn lived experience into practical tools. If you are tired, overwhelmed, or trying to get your life and health back in order, these resources are built to help you move with strategy, not confusion.
              </p>
              <p className="max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                You came to be fed. Stay long enough to get what you actually need.
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
                  Support Your Routine
                </a>
              </Link>
            </div>

            <div className="max-w-2xl rounded-[1.6rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm md:p-5">
              <div className="grid gap-4 sm:grid-cols-[0.75fr_1.25fr] sm:items-center">
                <img
                  src="/images/personal/rosee-hero-2.jpg"
                  alt="RoSee Murphy founder portrait"
                  className="h-44 w-full rounded-2xl object-cover border border-white/25"
                  loading="lazy"
                  width="360"
                  height="300"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">Founder note</p>
                  <p className="mt-2 text-sm leading-7 text-white/88 md:text-base">
                    I built this page for people who are one step away from giving up. Slow down, breathe, and let this library walk with you into a stronger version of your life.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-6 md:grid-cols-3">
              <a href="/resources/start" className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/12">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Utility</p>
                <p className="mt-3 text-3xl font-bold">Action</p>
                <p className="mt-2 text-sm text-white/72">Every guide on this page is designed to trigger a move: one food swap, one new boundary, one practical next step that changes your week immediately.</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">Start with action <ArrowRight className="h-4 w-4" /></p>
              </a>
              <a href="/shop" className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/12">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Focus</p>
                <p className="mt-3 text-3xl font-bold">3 Lanes</p>
                <p className="mt-2 text-sm text-white/72">The strategy is simple and sharp: Feed your body better, move your body daily, and train your awareness so your emotional, mental, and spiritual life stops drifting.</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">See the 3 lanes <ArrowRight className="h-4 w-4" /></p>
              </a>
              <a href="/work-with-askdogood" className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/12">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Next step</p>
                <p className="mt-3 text-3xl font-bold">Go Deeper</p>
                <p className="mt-2 text-sm text-white/72">When you are ready for deeper transformation, move into structured programs, coaching paths, and community support that hold you accountable for real growth.</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">Go deeper now <ArrowRight className="h-4 w-4" /></p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <RecoveredContentSection />

      <section className="container py-18 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {reflections.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} href={item.href}>
                <a className={`block rounded-[2rem] border border-border bg-[linear-gradient(145deg,var(--tw-gradient-stops))] ${item.accent} p-7 shadow-[0_20px_60px_rgba(12,28,24,0.06)] transition-all hover:-translate-y-1 hover:shadow-xl`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{item.description}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open resources
                    <ArrowRight className="h-4 w-4" />
                  </p>
                </a>
              </Link>
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
              {walkResources.map((item) => (
                <a
                  key={item.slug}
                  href={item.href}
                  className="group relative block overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-56 overflow-hidden border-b border-border bg-white">
                    <iframe
                      src={item.href}
                      title={`${item.title} card preview`}
                      className="pointer-events-none absolute inset-0 h-full w-full scale-[1.05] opacity-50"
                      loading="lazy"
                      scrolling="no"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,19,20,0.14),rgba(11,19,20,0.5))]" aria-hidden="true" />
                  </div>
                  <div className="relative p-5">
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
              <div className="relative h-64 overflow-hidden bg-white">
                <img
                  src="/images/personal/rosee-founder-snow-2026.jpg"
                  alt="RoSee Murphy founder trail moment"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  width="900"
                  height="560"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,13,0.12),rgba(10,17,13,0.52))]" aria-hidden="true" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-primary">
                  <Footprints className="h-5 w-5" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em]">Founder Trail Reflection</p>
                </div>
                <h3 className="mt-4 text-3xl font-bold">This photo reminds me to train peace, not perform it.</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  That day was not about content. It was about alignment. Walking helps me put away reactions that keep people small and return to standards that protect my emotional, mental, and spiritual growth.
                </p>
                <Link href="/journey">
                  <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read more founder reflections
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Link>
              </div>
            </article>

            <Link href="/shop">
              <a className="block rounded-[2rem] border border-border bg-secondary/40 p-7 transition-all hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">What Happens Next</p>
                <h3 className="mt-4 text-3xl font-bold">Ready to go deeper?</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  Explore the full AskDoGood programs and digital products for the next level of structure, support, and practical guidance.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Start Your Reset
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}