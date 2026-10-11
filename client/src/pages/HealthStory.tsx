import { useEffect, useState, type CSSProperties } from "react";
import { useParams } from "wouter";
import { Action, PageIntro, Section } from "@/components/Experience";
import stories from "@/data/healthStories.json";
function Source({href,children}:{href:string;children:React.ReactNode}) { return <a href={href} target="_blank" rel="noopener noreferrer" className="health-source">{children} ↗</a>; }
export default function HealthStory() {
  const {slug}=useParams<{slug:string}>();
  const story=stories.find(s=>s.slug===slug);
  const [replay,setReplay]=useState(0);
  const [notes,setNotes]=useState("");
  const [downloaded,setDownloaded]=useState(false);
  useEffect(()=>{setNotes("");setDownloaded(false);setReplay(0);},[slug]);
  if (!story) return <div className="adg-page health-bubbly-page"><Section title="Health topic not found"><p>Choose a topic from the health-story collection.</p><Action href="/health-stories">All health stories</Action></Section></div>;
  const chart=story.stat;
  const max=chart?.unit==="%" ? 100 : Math.ceil(Math.max(...(chart?.rows.map(r=>r.value)??[1]))/10000)*10000;
  function download() {
    if(!story) return;
    const text=`AskDoGood • ${story.title}\nAppointment conversation worksheet\n\nQuestions I can ask:\n${story.questions.map(q=>'- '+q).join('\n')}\n\nMy notes:\n${notes || '(Add notes here or on paper.)'}\n\nPersonal perspective and education—not a diagnosis or treatment plan.\nResources: ${story.resources.map(r=>r.url).join('\n')}\n`;
    const url=URL.createObjectURL(new Blob([text],{type:"text/plain;charset=utf-8"}));
    const a=document.createElement('a');a.href=url;a.download=`askdogood-${story.slug}-care-conversation.txt`;a.click();
    window.setTimeout(()=>URL.revokeObjectURL(url),1000);setDownloaded(true);
  }
  return <div className="adg-page health-bubbly-page" key={story.slug}>
    <PageIntro eyebrow={`RoSeé’s health stories · ${story.category}`} title={story.title} text={story.story}>
      <div className="adg-actions"><Action href="#care-conversation">Prepare my care conversation</Action><Action href={`/health-stories/category/${story.categorySlug}`} secondary>{story.category}</Action></div>
    </PageIntro>
    <Section eyebrow="My perspective" title="You deserve to be heard.">
      <div className="adg-split"><div><p>These are the things I want you to take with you:</p><ul className="health-list">{story.guidance.map(g=><li key={g}>{g}</li>)}</ul></div><aside className="adg-card"><p className="adg-eyebrow">The story is still growing</p><h3>From my life to the page</h3><p>I’m developing my memoir and the fuller stories behind these topics. Detailed reflections and selected excerpts are planned as the manuscript develops.</p><Action href="/in-the-works#memoir" secondary>See the book in progress</Action></aside></div>
      <p className="adg-small">This is personal encouragement and educational information. Your clinician can advise on diagnosis, treatment, and medication decisions.</p>
    </Section>
    <Section tone eyebrow="Understand the topic" title="A clearer starting point">
      <p className="adg-lead">{story.definition}</p>
      {story.resources.map(r=><p key={r.url}><Source href={r.url}>{r.title}</Source></p>)}
      {story.urgent && <aside className="health-urgent"><h3>When to get urgent help</h3><p>{story.urgent}</p><Source href={story.urgentUrl!}>NIDDK: symptoms and warning signs</Source></aside>}
      {story.category==="Mental & emotional health" && <aside className="health-urgent"><h3>Support in a crisis</h3><p>In the United States, call or text <a href="tel:988">988</a> for crisis support. If there is immediate danger or a medical emergency, call 911.</p><Source href="https://988lifeline.org/">988 Lifeline: support and ways to connect</Source></aside>}
    </Section>
    {chart && <Section eyebrow="The data, with context" title="Numbers describe populations. They don’t define you.">
      <figure className="health-chart" aria-labelledby="health-chart-title">
        <figcaption><h3 id="health-chart-title">{chart.title}</h3><p>{chart.population}</p><p className="adg-small"><strong>Data period:</strong> {chart.period}</p></figcaption>
        <div key={replay} className="health-bars" aria-hidden="true">{chart.rows.map(row=><div key={row.label} className="health-bar-row"><div className="health-bar-label"><span>{row.label}</span><strong>{row.value.toLocaleString()}{chart.unit==="%"?'%':' '+chart.unit}</strong></div><div className="health-bar-track"><div className="health-bar-fill" style={{width:`${row.value/max*100}%`,'--bar-width':`${row.value/max*100}%`} as CSSProperties}/></div></div>)}<div className="health-scale"><span>0{chart.unit==='%'?'%':''}</span><span>{max.toLocaleString()}{chart.unit==='%'?'%':' cases'}</span></div></div>
        <button type="button" className="health-replay" onClick={()=>setReplay(r=>r+1)}>Replay chart animation</button>
        <table className="health-data-table"><caption>Chart values in text</caption><thead><tr><th scope="col">Group or measure</th><th scope="col">Estimate</th></tr></thead><tbody>{chart.rows.map(r=><tr key={r.label}><th scope="row">{r.label}</th><td>{r.value.toLocaleString()}{chart.unit==='%'?'%':' '+chart.unit}</td></tr>)}</tbody></table>
        {chart.note && <p className="adg-small">{chart.note}</p>}<Source href={chart.url}>Read the original data source</Source>
      </figure>
    </Section>}
    {story.diagram && <Section eyebrow="A visual guide" title={story.diagram.title}><div className="health-map">{story.diagram.nodes.map(([name,detail],i)=><article className="adg-card" key={name}><span className="health-map-number" aria-hidden="true">{i+1}</span><h3>{name}</h3><p>{detail}</p></article>)}</div><p className="adg-small">{story.diagram.note}</p>{story.category==='Digestive health' && <p><Source href="https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers/definition-facts">NIDDK: ulcers</Source> · <Source href="https://www.niddk.nih.gov/health-information/digestive-diseases/gastritis-gastropathy/definition-facts">NIDDK: gastritis</Source> · <Source href="https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/definition-facts">NIDDK: reflux</Source></p>}</Section>}
    <Section eyebrow="Let curiosity lead" title="Make a little room for play."><p>Practice health knowledge with short quizzes and gentle puzzles, then come back to the questions that matter to you.</p><Action href="/play-grow?track=health" secondary>Try a quick curiosity round</Action></Section>
    <Section id="care-conversation" tone eyebrow="Something useful to take with you" title="Prepare your next care conversation.">
      <ol className="health-list">{story.questions.map(q=><li key={q}>{q}</li>)}</ol>
      <label className="health-notes-label" htmlFor={`notes-${story.slug}`}>Optional notes for your appointment</label>
      <textarea id={`notes-${story.slug}`} className="health-notes" rows={5} value={notes} onChange={e=>{setNotes(e.target.value);setDownloaded(false);}} placeholder="What I want to ask, symptoms I want to describe, or support I need…"/>
      <p className="adg-small">Notes stay in this page’s memory and are not submitted to AskDoGood. Refreshing or leaving clears them. Downloading saves a text file on your device; choose where you keep or share it.</p>
      <button className="adg-button" type="button" onClick={download}>Download my appointment worksheet</button><p role="status" className="adg-small">{downloaded ? 'Your worksheet download is ready. Keep the file somewhere you trust.' : ''}</p>
      <p className="adg-small">Sources checked October 11, 2026. This is the check date, not the date of the underlying data.</p>
      <div className="adg-actions"><Action href={`/health-stories/category/${story.categorySlug}`} secondary>More in {story.category.toLowerCase()}</Action><Action href="/health-stories" secondary>All health categories</Action><Action href="/journey" secondary>More of RoSeé’s story</Action></div>
    </Section>
  </div>;
}
