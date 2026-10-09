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
          I used to be in the streets, and learning and growing in technology became part of turning my life around. I know rebuilding takes more than a motivational quote. Let’s name what you need, find a useful starting point, and make the next move concrete.
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
            </div>
          </article>
        ))}
      </div>
      <p className="adg-small">
        External resources are provided by the named organizations. Eligibility,
        availability, costs, and application steps vary. Resource links reviewed
        October 6, 2026. Logos identify external resources; they do not imply an AskDoGood partnership or endorsement.
      </p>
    </>
  );
}
