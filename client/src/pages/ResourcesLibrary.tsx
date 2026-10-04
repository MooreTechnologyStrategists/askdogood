import {
  PageIntro,
  Section,
  TopicCards,
  Action,
} from "@/components/Experience";
export default function ResourcesLibrary() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Free resources"
        title="Find something useful."
        text="Explore health and food, relationships, career, and everyday life. Start with free reading or a tool, then choose more support if you need it."
      />
      <Section>
        <TopicCards />
      </Section>
      <Section tone title="Read, try, or take a breath.">
        <div className="adg-grid adg-grid-three">
          {[
            ["Articles & stories", "Explore the full reading room.", "/blog"],
            [
              "Recipes & food ideas",
              "Find something to make at home.",
              "/clinical-recipes",
            ],
            [
              "Doctor conversation checklist",
              "Prepare questions for an appointment.",
              "/doctor-checklist",
            ],
            [
              "Relationship Keeper",
              "Activities and check-ins for connection.",
              "/relationship-keeper",
            ],
            ["The garden", "Seasonal stories and a little peace.", "/garden"],
            [
              "Music & interests",
              "Culture, sound, and everyday inspiration.",
              "/interests",
            ],
          ].map(([title, text, href]) => (
            <article className="adg-card" key={href}>
              <h3>{title}</h3>
              <p>{text}</p>
              <Action href={href} secondary>
                Explore
              </Action>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
