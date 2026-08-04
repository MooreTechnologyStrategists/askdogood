import { ArrowRight, BookOpen, HeartHandshake, Leaf, MoveUpRight, Moon, UtensilsCrossed } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";

const pillars = [
  { title: "Nourish", description: "Practical food and nutrition for the life you are actually living.", href: "/blog", icon: UtensilsCrossed },
  { title: "Move", description: "Movement that supports your energy, body, and everyday routines.", href: "/keep-moving", icon: Leaf },
  { title: "Restore", description: "Rest, reflection, and routines that make room for renewal.", href: "/resources", icon: Moon },
  { title: "Explore", description: "Traditional wisdom, modern information, and emerging wellness tools.", href: "/resources/library", icon: BookOpen },
];

const pathways = [
  { title: "I want practical food ideas", description: "Start with recipes, food education, and garden-to-table inspiration.", href: "/blog", action: "Explore food" },
  { title: "I want to feel better", description: "Find approachable resources for movement, rest, relationships, and daily habits.", href: "/resources/start", action: "Start exploring" },
  { title: "I want to learn", description: "Browse the full library of articles, guides, stories, and tools.", href: "/resources/library", action: "Visit the library" },
  { title: "I represent an organization", description: "Bring wellness education, workshops, and practical resources to your community.", href: "/work-with-askdogood", action: "Partner with us" },
];

const featuredResources = [
  { title: "What is AskDoGood?", description: "A practical starting point for whole-person wellness education.", href: "/blog/what-is-askdogood", image: "/assets/img/blog/assigned/what-is-askdogood.webp" },
  { title: "Recipes for real life", description: "Simple food ideas that make nourishing yourself feel more possible.", href: "/clinical-recipes", image: "/images/personal/food/muhammad-dishes-2.jpg" },
  { title: "The founder journey", description: "Why Rosee built a place for useful knowledge and better choices.", href: "/journey", image: "/assets/img/journey/hero-journey.png" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="container grid gap-10 py-14 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">AskDoGood</p>
          <h1 className="mt-5 text-5xl leading-[0.98] text-foreground md:text-7xl">Wellness should not be a luxury.</h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-muted-foreground">Practical wellness for real life.</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">Accessible knowledge, tools, and experiences for making informed choices about food, movement, restoration, and everyday wellness.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/resources/start"><Button className="rounded-full px-6 py-6 text-base">Explore wellness <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/work-with-askdogood"><Button variant="outline" className="rounded-full px-6 py-6 text-base">Partner with AskDoGood</Button></Link>
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">AskDoGood is a wellness education platform, not a healthcare provider. Our resources do not replace professional medical care.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-primary/10 blur-2xl" aria-hidden="true" />
          <img src="/assets/img/heroes/hero-home.webp" alt="A Black woman preparing fresh food in a bright kitchen" className="relative aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-2xl" width="1200" height="900" fetchPriority="high" />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/55">
        <div className="container grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">A better front door</p><h2 className="mt-3 text-4xl">Useful wellness, made easier to reach.</h2></div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">AskDoGood connects practical generational wisdom with modern wellness knowledge and tools to help people create healthier, more sustainable everyday routines.</p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">The four pillars</p><h2 className="mt-3 text-4xl">Start with what matters today.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Old wisdom. New tools. Better choices.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ title, description, href, icon: Icon }) => <Link key={title} href={href} className="group rounded-3xl border border-border/70 bg-background p-6 transition-transform hover:-translate-y-1 hover:border-primary/50"><Icon className="h-6 w-6 text-primary" /><h3 className="mt-8 text-2xl capitalize">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p><span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">Start where you are</p><h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Choose your next good step.</h2><div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-primary-foreground/20 bg-primary-foreground/20 md:grid-cols-2">{pathways.map((pathway) => <Link key={pathway.title} href={pathway.href} className="group bg-primary p-6 transition-colors hover:bg-primary-foreground hover:text-primary"><h3 className="text-xl">{pathway.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/75 group-hover:text-primary/75">{pathway.description}</p><span className="mt-6 inline-flex items-center text-sm font-semibold">{pathway.action}<MoveUpRight className="ml-2 h-4 w-4" /></span></Link>)}</div></div>
      </section>

      <section className="container py-16 md:py-20"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Featured resources</p><h2 className="mt-3 text-4xl">A few places to begin.</h2></div><Link href="/resources/library" className="inline-flex items-center text-sm font-semibold text-primary">Browse the full library <ArrowRight className="ml-2 h-4 w-4" /></Link></div><div className="mt-10 grid gap-6 md:grid-cols-3">{featuredResources.map((resource) => <Link key={resource.title} href={resource.href} className="group overflow-hidden rounded-3xl border border-border/70 bg-card"><img src={resource.image} alt="" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" width="640" height="480" /><div className="p-6"><h3 className="text-2xl">{resource.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{resource.description}</p><span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">Read more <ArrowRight className="ml-2 h-4 w-4" /></span></div></Link>)}</div></section>

      <section className="border-y border-border/70 bg-[#f3ddd2] py-16 md:py-20"><div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Community and partnership</p><h2 className="mt-3 max-w-2xl text-4xl">Bring AskDoGood to your community.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-foreground/75">We support workshops, senior and veteran programming, food education, wellness education, and thoughtful organizational partnerships.</p></div><Link href="/work-with-askdogood"><Button className="rounded-full px-6 py-6">Let&apos;s work together <HeartHandshake className="ml-2 h-4 w-4" /></Button></Link></div></section>

      <section className="container grid gap-10 py-16 md:grid-cols-[0.7fr_1.3fr] md:items-center md:py-20"><img src="/images/personal/rosee-hero-1.jpg" alt="Rosee, AskDoGood founder" className="aspect-square w-full max-w-sm rounded-[2rem] object-cover" loading="lazy" width="600" height="600" /><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why AskDoGood exists</p><h2 className="mt-3 text-4xl">Knowledge should help people live, not overwhelm them.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Rosee built AskDoGood from a lived journey of learning, changing habits, and sharing what proved useful. Today, the platform makes practical wellness education more accessible to everyday people.</p><Link href="/journey" className="mt-6 inline-flex items-center font-semibold text-primary">Read the full story <ArrowRight className="ml-2 h-4 w-4" /></Link></div></section>

      <section className="container pb-16 md:pb-20"><div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-12"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Keep going</p><h2 className="mt-3 text-4xl">Let&apos;s do some good.</h2><p className="mt-3 max-w-xl leading-7 text-muted-foreground">Get practical notes and new resources for food, movement, restoration, and everyday wellness.</p></div><BeehiivSubscribe variant="inline" className="mt-8 w-full md:mt-0 md:max-w-md" source="home_front_door" magnetType="wellness-notes" title="Stay connected" description="Useful wellness education, delivered occasionally." buttonText="Join free" /></div></section>
    </div>
  );
}
