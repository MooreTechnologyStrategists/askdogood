import { useState } from "react";
import { Action, PageIntro, Section } from "@/components/Experience";
import stories from "@/data/healthStories.json";
export default function HealthStories() {
  const [category, setCategory] = useState("All topics");
  const categories = ["All topics", ...new Set(stories.map(s => s.category))];
  return <div className="adg-page">
    <PageIntro eyebrow="RoSeé’s health stories · Resources for your next step" title="My health is part of my story. Let’s make room for yours." text="Hearing loss. Cancer. Mental health. Digestive health. Changes in our bodies and habits. These are parts of my lived experience—and places where we deserve understanding, reliable information, and support.">
      <div className="adg-actions"><Action href="#health-topics">Find my topic</Action><Action href="/in-the-works#memoir" secondary>Explore my book in progress</Action></div>
    </PageIntro>
    <Section title="Your experience deserves more than a label." tone>
      <p className="adg-lead">Each section brings together a personal introduction, practical encouragement, trusted resources, and questions you can take to an appointment. Charts name their source, population, and data period. Older research is marked as historical.</p>
      <p>These introductions are the beginning of a growing story collection. More detailed reflections and selected book excerpts are planned as the manuscript develops. They are not presented here as published chapters.</p>
      <p className="adg-small">Personal perspective and health education support a care conversation. They do not diagnose conditions or direct treatment or medication changes.</p>
    </Section>
    <Section id="health-topics" eyebrow="17 places to begin" title="Choose what speaks to your life.">
      <div className="health-filters" role="group" aria-label="Filter health topics">{categories.map(c => <button key={c} type="button" aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <p role="status" className="adg-small">{stories.filter(s=>category==="All topics" || s.category===category).length} topics shown</p>
      <div className="adg-grid adg-grid-three">{stories.filter(s=>category==="All topics" || s.category===category).map(s=><article key={s.slug} className="adg-card health-topic-card"><p className="adg-eyebrow">{s.category}</p><h3>{s.title}</h3><p>{s.story}</p><Action href={`/health-stories/${s.slug}`} secondary>Explore {s.title.toLowerCase()}</Action></article>)}</div>
    </Section>
  </div>;
}
