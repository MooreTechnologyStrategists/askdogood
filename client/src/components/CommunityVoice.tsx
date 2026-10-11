import { Action } from "@/components/Experience";
export function CommunityVoice() {
  return (
    <div className="adg-community-voice">
      <div>
        <p className="adg-eyebrow">
          Whole-life support. With our people in mind.
        </p>
        <h2>
          You can exhale here.
          <br />
          Then we take the next step.
        </h2>
        <p>
          Leaving street life. Changing your relationship with weed or other substances. Coming home after incarceration. Grief, job uncertainty, bills, and relationships that keep draining you. You can bring the hard truth here without being reduced to it.
        </p>
        <p>
          AskDoGood is rooted in the lives of Black and Brown communities,
          including people living on modest incomes or no income. Your income
          does not determine your worth—or your welcome here. Everyone who comes
          with respect belongs.
        </p>
      </div>
      <div className="adg-manifesto">
        <p className="adg-eyebrow">A word from RoSeé</p>
        <blockquote>
          “Cry if you need to. Say the hard thing. Catch your breath. Then, when
          you’re ready, let’s build a life with more strength, health, and joy.”
        </blockquote>
        <p>
          My journey includes difficult seasons and meaningful reinvention. Education and technology helped me build a stronger foundation. I know rebuilding takes more than a motivational quote. Let’s name what you need, find a useful starting point, and make the next move concrete.
        </p>
        <Action href="/support/relationships" secondary>
          Make space for what I’m carrying
        </Action>
      </div>
    </div>
  );
}
export function CommunityResources() {
  const links = [
    {
      title: "Food, housing & bills",
      text: "Find local support through 211, or explore government benefit programs.",
      href: "https://www.211.org/",
      label: "Find local help",
      second: "https://www.usa.gov/benefit-finder",
      secondLabel: "Explore benefit programs",
      number: "01",
    },
    {
      title: "Care & coverage",
      text: "If your job or coverage changes, start with the official guide to health coverage options, then organize your questions for a care team.",
      href: "https://www.healthcare.gov/unemployed/coverage/",
      label: "Review coverage options",
      second: "/doctor-checklist",
      secondLabel: "Prepare for an appointment",
      number: "02",
    },
    {
      title: "Work & a next chapter",
      text: "Explore technology learning with The Dope Cloud Teacher, or make a practical plan for the transition in front of you.",
      href: "https://thedopecloudteacher.org",
      label: "Explore learning",
      second: "/support/career",
      secondLabel: "Plan my next step",
      number: "03",
    },
    {
      title: "Careers, training & reentry",
      text: "CareerOneStop provides career exploration and job-search tools, including resources for people with a criminal record. American Job Centers can help you find local employment and training support.",
      href: "https://www.careeronestop.org/JusticeImpacted/default.aspx",
      label: "Explore career & reentry tools",
      second: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx",
      secondLabel: "Find an American Job Center",
      number: "04",
    },
    {
      title: "Substance use & mental-health care",
      text: "FindTreatment.gov helps you locate treatment providers. Use SAMHSA’s help directory to explore treatment options and support. Ask a qualified provider about safely changing substance use.",
      href: "https://findtreatment.gov/",
      label: "Find treatment providers",
      second: "https://www.samhsa.gov/find-help",
      secondLabel: "Explore help & treatment",
      number: "05",
    },
    {
      title: "Relationship safety & support",
      text: "The National Domestic Violence Hotline offers support and safety-planning resources for people experiencing relationship abuse. If you worry someone monitors your device, consider using a safer device to seek help.",
      href: "https://www.thehotline.org/get-help/",
      label: "Reach relationship safety support",
      second: "/support/relationships",
      secondLabel: "Explore boundaries & self-worth",
      number: "06",
    },
    {
      title: "Veterans: care & benefits",
      text: "Use the VA’s official pages to explore health-care eligibility, services, and benefits. Bring your questions to the VA or the appropriate benefits office.",
      href: "https://www.va.gov/health-care/",
      label: "Explore VA health care",
      second: "https://www.va.gov/",
      secondLabel: "Explore VA benefits",
      number: "07",
    },
    {
      title: "Medication questions & prevention",
      text: "Prepare for a review with your prescribing clinician and explore NIH guidance on medication safety and habits that can lower the risk of type 2 diabetes. Never stop or reduce prescribed medicines on your own.",
      href: "/doctor-checklist",
      label: "Prepare my medication questions",
      second: "https://www.nia.nih.gov/health/medicines-and-medication-management/taking-medicines-safely-you-age",
      secondLabel: "Read NIH medication guidance",
      number: "08",
    },
  ];
  return (
    <>
      <div className="adg-grid adg-grid-three">
        {links.map(item => (
          <article key={item.title} className="adg-card adg-resource-card">
            {item.number === "01" ? <a href="https://www.211.org/" aria-label="211 official community resource"><img src="https://www.211.org/themes/custom/uw211/assets/images/home-logo_2024.svg" alt="211 official logo" width="120" height="60" loading="lazy" style={{ objectFit: "contain", marginBottom: "1rem" }} /></a> : <span className="adg-step">{item.number}</span>}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="adg-actions">
              <Action href={item.href} secondary>
                {item.label}
              </Action>
              <Action href={item.second} secondary>
                {item.secondLabel}
              </Action>
              {item.number === "08" && <Action href="https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-type-2-diabetes" secondary>Explore diabetes prevention</Action>}
            </div>
          </article>
        ))}
      </div>
      <p className="adg-small">
        The Dope Cloud TeacHer is our sister business. The other named services
        are independent resource providers, not confirmed AskDoGood partners.
        You contact each provider directly; eligibility, availability, costs,
        and application steps vary. External resource pages checked October 11, 2026.
        AskDoGood can help you organize questions and discuss a starting point;
        providers decide admission, benefits, treatment, and hiring.
      </p>
    </>
  );
}
