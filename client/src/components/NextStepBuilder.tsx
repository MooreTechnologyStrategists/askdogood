import { useState } from "react";
import { Action } from "@/components/Experience";
import { trackEvent } from "@/lib/analytics";

const paths = [
  { id: "health", label: "Protect my health", title: "Build health into your everyday choices.", text: "Use food and routine tools to care for yourself, then prepare for a useful conversation with your clinician about prevention, health goals, and your medicines.", steps: ["Choose one realistic food, movement, or rest habit for this week.", "List your medicines, supplements, symptoms, and questions before your next appointment.", "Ask your clinician what changes could improve your health and whether a medication review is appropriate. Keep taking medicines as prescribed until your clinician changes the plan."], href: "/doctor-checklist", action: "Prepare for my appointment", second: "/whats-good-to-eat", secondAction: "Build my meals", topic: "Health and everyday routines" },
  { id: "habits", label: "Change a draining habit", title: "Name the pattern. Find support. Take one safe step.", text: "Start with the habit you want to change—smoking, substance use, or another pattern that is costing you peace. AskDoGood offers reflection and resource starting points; qualified providers handle treatment and withdrawal care.", steps: ["Write down the pattern you want to change and when it shows up.", "Choose a trusted person or qualified provider to discuss a safe plan with. Some substance withdrawal can be dangerous; get clinical advice before stopping.", "Use the treatment locator if you need substance-use or mental-health care, and ask about cost, coverage, and availability."], href: "https://findtreatment.gov/", action: "Find qualified treatment", second: "/support/health", secondAction: "Explore everyday support", topic: "Habit-change resources" },
  { id: "career", label: "Build skills & a career", title: "Your past does not get the final word.", text: "Explore education, cloud and AI skills, and practical career resources. Starting over, returning after incarceration, or changing direction deserves a concrete plan.", steps: ["Choose one role or skill you want to explore; write down experience you already bring.", "List barriers such as documents, internet, transportation, cost, or a work-history gap.", "Explore DCT classes and use CareerOneStop to find training and job-search support that fits your starting point."], href: "https://thedopecloudteacher.org/classes/", action: "Explore DCT classes", second: "https://www.careeronestop.org/JusticeImpacted/default.aspx", secondAction: "Find career & reentry resources", topic: "Career and education next step" },
  { id: "relationships", label: "Know my worth & boundaries", title: "Love should make room for your dignity.", text: "Learn to recognize respect, practice boundaries, and name what you need. Start with a relationship check-in or a private reflection, at your own pace.", steps: ["Name three things you need to feel respected, heard, and safe.", "Write one boundary and what you will do to honor it.", "Prepare a conversation only if it is safe. If you feel afraid or controlled, seek qualified safety support rather than confronting someone alone."], href: "/support/relationships", action: "Build healthier boundaries", second: "/blog/how-to-build-a-weekly-relationship-check-in-ritual", secondAction: "Try a relationship check-in", topic: "Relationships and self-worth" },
  { id: "stability", label: "Find practical help", title: "Get some ground beneath your feet.", text: "Food, housing, bills, care, and paperwork can crowd out everything else. Sort what is urgent and find a resource you can contact today.", steps: ["Write your most urgent need and the deadline, if there is one.", "Use 211 to locate community services and ask about eligibility and required documents.", "Choose one call or application to complete, then record the next step and who to follow up with."], href: "https://www.211.org/", action: "Find local support with 211", second: "/resources/start#right-now", secondAction: "Explore the resource directory", topic: "Practical resource support" },
];

export default function NextStepBuilder() {
  const [selected, setSelected] = useState<string | null>(null);
  const path = paths.find(item => item.id === selected);
  function download() {
    if (!path) return;
    const text = `AskDoGood · My next good step\n\n${path.title}\n${path.text}\n\n${path.steps.map((step, i) => `${i + 1}. ${step}`).join("\n\n")}\n\nStart here: ${new URL(path.href, window.location.origin).href}\nAlso explore: ${new URL(path.second, window.location.origin).href}\n\nMy action today: ____________________\nMy follow-up date: ____________________\n\nQuestions? askdogood@gmail.com\nEducational starting points, not individualized medical care, treatment, therapy, or a guarantee of services or employment. Medication changes require your prescribing clinician.\n`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url; link.download = `askdogood-${path.id}-next-step.txt`;
    document.body.appendChild(link); link.click(); link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    trackEvent("next_step_plan_download", { path: path.id });
  }
  return <div>
    <fieldset>
      <legend className="adg-lead">What are you ready to work on?</legend>
      <div className="adg-actions">
        {paths.map(item => <button key={item.id} type="button" aria-pressed={selected === item.id} aria-controls="next-step-result" className={`adg-button${selected === item.id ? "" : " adg-button-secondary"}`} onClick={() => { setSelected(item.id); trackEvent("next_step_path_selected", { path: item.id }); }}>{item.label}</button>)}
      </div>
    </fieldset>
    <div id="next-step-result" aria-live="polite" aria-atomic="true">
      {path ? <article className="adg-card" style={{ marginTop: "1.5rem" }}>
        <p className="adg-eyebrow">Your free starting plan</p>
        <h3>{path.title}</h3><p>{path.text}</p>
        <ol style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>{path.steps.map(step => <li key={step} style={{ marginBottom: ".75rem" }}>{step}</li>)}</ol>
        <div className="adg-actions"><Action href={path.href}>{path.action}</Action><Action href={path.second} secondary>{path.secondAction}</Action></div>
        <div className="adg-actions"><button type="button" className="adg-button" onClick={download}>Save my next-step plan</button><Action href={`/contact?topic=${encodeURIComponent(path.topic)}`} secondary>Ask us about support</Action></div>
        <p className="adg-small">Free download. No account required. This is a starting checklist based on your chosen topic. Inquiries go to our email draft form; service scope, availability, and pricing are confirmed before booking.</p>
      </article> : <p className="adg-small">Choose a goal to see three practical steps and the tools to begin. No account or purchase required.</p>}
    </div>
  </div>;
}
