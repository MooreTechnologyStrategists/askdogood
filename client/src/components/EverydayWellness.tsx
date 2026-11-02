import { useState } from "react";
import { Action, Section } from "@/components/Experience";
import { dersPillars } from "@/content/wellnessFramework";

export function DERSFoundation() {
  return <Section id="ders" eyebrow="Our everyday foundation" title="DERS: four habits, one real life.">
    <p className="adg-lead">Diet, Exercise, Rest, and Spiritual practice guide AskDoGood’s everyday wellness education. Start with what fits your life and build from there.</p>
    <div className="adg-grid adg-grid-four">{dersPillars.map(p => <article className="adg-card" key={p.key}><h3>{p.name}</h3><p>{p.description}</p></article>)}</div>
    <p className="adg-small">DERS is our practical habit framework, not a medical assessment. Faith, reflection, and purpose are personal; participation in a religious practice is never required.</p>
  </Section>;
}

export function EverydayWellnessOffer() {
  return <Section id="everyday-wellness" tone eyebrow="Our signature guided workshop · Pilot" title="Your Everyday Wellness Plan.">
    <div className="adg-split"><div>
      <p className="adg-lead">Create a realistic seven-day plan for eating, moving, resting, and making space for what grounds you—based on your budget and actual life.</p>
      <p><strong>$25 per participant · One-time guided group workshop</strong></p>
      <p>Designed for adults who want a manageable starting point. No wellness expertise needed. Bring a notebook and a rough idea of your weekly food budget. Online participation requires an internet-connected device; tell us about access or accommodation needs when inquiring.</p>
      <p>Planned format: about 75 minutes, online or at a community location. Public session dates are not open yet. Confirm the date, format, accessibility, included materials, and cancellation terms before payment. There is no charge to inquire.</p>
      <div className="adg-actions"><Action href="/contact?topic=Everyday%20Wellness%20Plan%20pilot">Ask about the $25 workshop</Action><Action href="/services#wellness-planner" secondary>Try the free plan starter</Action></div>
      <p className="adg-small">Guided workshop support is separate from the self-paced toolkits below. General wellness education; no medical, therapy, or individualized dietary treatment is included.</p>
    </div><article className="adg-card"><h3>Leave with a plan you can use.</h3><ul className="adg-list">
      <li>A completed seven-day DERS plan shaped around your week.</li><li>A meal outline and grocery list that consider your budget and ingredients.</li><li>A manageable movement step and rest routine.</li><li>A grounding practice of your choice.</li><li>One barrier named, with a fallback step or resource to explore.</li>
    </ul><h3>Practice, feedback, then your next step.</h3><p>Work through an example, draft your own plan, and revise it with facilitator feedback. Finish by adapting it to a different real-life challenge—such as a busier day or a smaller grocery budget.</p></article></div>
  </Section>;
}

export function WellnessPlanStarter() {
  const [values, setValues] = useState<Record<string, string>>({});
  const set = (key: string, value: string) => setValues(v => ({ ...v, [key]: value }));
  function save() {
    const text = ["AskDoGood — My seven-day DERS plan starter", "Free self-directed worksheet; not the guided workshop.", "", ...[["week", "Week beginning"], ["goal", "What I want to make easier"], ["budget", "Weekly grocery budget"], ...dersPillars.map(p => [p.key, p.name]), ["meals", "Meals and grocery list"], ["barrier", "My biggest barrier"], ["fallback", "My fallback step"], ["review", "When I will review my plan"]].map(([key, label]) => label + ": " + (values[key] || "________________")), "", "Choose habits that suit your needs. This worksheet does not provide medical advice.", "askdogood.com"].join("\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = "AskDoGood-Seven-Day-DERS-Plan.txt"; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const fields = [
    ["week", "Week beginning", "Example: Monday, November 9"],
    ["goal", "What do I want to make easier this week?", "Choose one achievable goal."],
    ["budget", "My weekly grocery budget", "Optional: use a rough amount, not account details."],
    ...dersPillars.map(p => [p.key, p.prompt, p.example]),
    ["meals", "My meal outline and grocery list", "Use what you have; list what you need."],
    ["barrier", "What could get in the way?", "Example: working late or missing a grocery trip."],
    ["fallback", "My smaller fallback step", "What can I still do on a difficult day?"],
    ["review", "When will I check what worked?", "Choose a day to adjust the plan."],
  ];
  return <Section id="wellness-planner" eyebrow="Free plan starter" title="Put one good week on paper.">
    <p>Use this starter on your own, or bring it to a guided workshop. Your entries stay in this page’s memory and disappear when you leave or reload. Save a copy before leaving. Nothing you enter here is sent to AskDoGood.</p>
    <div className="adg-grid adg-grid-two">{fields.map(([key, label, hint]) => <div key={key}><label className="adg-label" htmlFor={"ders-" + key}>{label}</label><textarea id={"ders-" + key} className="adg-input" rows={2} maxLength={1500} value={values[key] || ""} placeholder={hint} onChange={e => set(key, e.target.value)} /></div>)}</div>
    <div className="adg-actions"><button type="button" className="adg-button" onClick={save}>Save my plan as text</button><button type="button" className="adg-button adg-button-secondary" onClick={() => window.print()}>Print or save as PDF</button></div>
    <p className="adg-small">The text download contains your entries. Printing includes this page. No account or payment required.</p>
  </Section>;
}
