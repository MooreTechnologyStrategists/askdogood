import { Action, PageIntro, Section } from "@/components/Experience";
import { walkResources } from "@/content/walks";
export default function KeepMoving() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Everyday life & movement"
        title="Make room to move at your pace."
        text="Explore walking resources and small ways to make movement part of an ordinary day. Choose activities that fit your abilities and needs."
        image="/images/personal/rosee-founder-snow-2026.jpg"
        alt="RoSeé outdoors in the snow"
      />
      <Section title="Explore the walking guides.">
        <div className="adg-grid adg-grid-three">
          {walkResources.map(walk => (
            <article className="adg-card" key={walk.slug}>
              <h3>{walk.title}</h3>
              <p>{walk.description}</p>
              <Action href={walk.href} secondary>
                Open the guide
              </Action>
            </article>
          ))}
        </div>
      </Section>
      <Section tone title="Build a routine you can return to.">
        <p>
          A manageable reset can help you think about movement alongside food,
          rest, and reflection.
        </p>
        <div className="adg-actions">
          <Action href="/product/7-day-reset">Explore the $17 reset</Action>
          <Action href="/support/life" secondary>
            Everyday life resources
          </Action>
        </div>
      </Section>
    </div>
  );
}
