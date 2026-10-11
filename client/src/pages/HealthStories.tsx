import PocketPeek from "@/components/PocketPeek";
import { useParams } from "wouter";
import { Action, PageIntro, Section } from "@/components/Experience";
import stories from "@/data/healthStories.json";
import categories from "@/data/healthCategories.json";
export default function HealthStories() {
  return <div className="adg-page health-bubbly-page">
    <PageIntro eyebrow="RoSeé’s health stories · 19 topics in 6 categories" title="My health is part of my story. Let’s make room for yours." text="My experiences open the conversation. Trusted information helps us understand it. Choose a category, then explore individual topics with personal perspective, sourced facts, visuals, and a useful next step.">
      <div className="adg-actions"><Action href="#health-topics">Choose my category</Action><Action href="/in-the-works#memoir" secondary>Explore my book in progress</Action></div>
    </PageIntro>
    <Section title="Real experience. Reliable information. Room to grow." tone>
      <p className="adg-lead">I’m sharing the health experiences I have lived, alongside resources that can help us ask better questions. Personal introductions are clearly separate from medical information, and every chart names its source and data period.</p>
      <p>This collection will grow with fuller reflections and selected excerpts as my manuscript develops. The categories help you find a starting point; conditions can overlap, and menopause is a life stage rather than an illness.</p>
      <p className="adg-small">Personal perspective and health education support a care conversation. They do not diagnose conditions or direct treatment or medication changes.</p>
    </Section>
    <Section tone eyebrow="A lighter way to learn" title="Curiosity looks good on you."><PocketPeek /><p>Try a quick health knowledge round, piece together a little peace, or open a reflection pocket. Learn a fact, follow its source, and take it into your next conversation.</p><div className="adg-actions"><Action href="/play-grow?track=health">Play a health round</Action><Action href="/play-grow" secondary>Explore all the activities</Action></div></Section>
    <Section id="health-topics" eyebrow="Start with the part of life that speaks to you" title="Choose a category. Find your topic.">
      <div className="adg-grid adg-grid-three">{categories.map(c=><article key={c.slug} className="adg-card health-topic-card"><p className="adg-eyebrow">{c.topics.length} topics</p><h3>{c.title}</h3><p>{c.description}</p><Action href={`/health-stories/category/${c.slug}`} secondary>Open {c.title.toLowerCase()}</Action></article>)}</div>
    </Section>
  </div>;
}
export function HealthCategory() {
  const {categorySlug}=useParams<{categorySlug:string}>();
  const category=categories.find(c=>c.slug===categorySlug);
  if(!category)return <div className="adg-page health-bubbly-page"><Section title="Health category not found"><Action href="/health-stories">All health categories</Action></Section></div>;
  const topics=category.topics.map(slug=>stories.find(s=>s.slug===slug)!);
  return <div className="adg-page health-bubbly-page">
    <PageIntro eyebrow="RoSeé’s health stories · Explore a category" title={category.title} text={category.intro}><div className="adg-actions"><Action href="#category-topics">Explore these topics</Action><Action href="/health-stories" secondary>All health categories</Action></div></PageIntro>
    <Section id="category-topics" eyebrow={`${topics.length} individual conversations`} title="My experience is the introduction. Your next step is yours.">
      <p>Open a topic for my personal perspective, clearly sourced health information, visuals, and a downloadable appointment worksheet. This grouping is a way to browse; it does not imply that one condition caused another.</p>
      <div className="adg-grid adg-grid-three">{topics.map(s=><article key={s.slug} className="adg-card health-topic-card"><h3>{s.title}</h3><p>{s.story}</p><Action href={`/health-stories/${s.slug}`} secondary>Explore {s.title.toLowerCase()}</Action></article>)}</div>
      <div className="adg-actions"><Action href="/in-the-works#memoir" secondary>Follow the book in progress</Action><Action href="/health-stories" secondary>Choose another category</Action></div>
    </Section>
  </div>;
}
