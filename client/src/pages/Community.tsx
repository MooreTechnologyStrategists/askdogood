import { Action, PageIntro, Section } from "@/components/Experience";
import CommunityEvents from "@/components/CommunityEvents";
export default function Community() { return <div className="adg-page">
  <PageIntro eyebrow="Faith in motion · Community" title="Grace gives us another chance. Good gives us something to do with it." text="We’re living, learning, and paying it forward. Meet us in the community, explore practical resources, or talk with us about serving the people you care for." image="/images/personal/rosee-at-the-table.webp" alt="RoSeé smiling at a table in a green sweater" />
  <Section title="Where you can meet us."><CommunityEvents /></Section>
  <Section tone eyebrow="Also happening in our community" title="Digital Inclusion & Tech Fair">
    <p>Hosted by The Code for Change · Saturday, October 10, 2026 · 10 a.m.–1 p.m. Eastern.</p><p>Trinidad Baptist Church, 6611 Walker Mill Rd, Capitol Heights, MD 20743.</p><p>A free community event connecting people with digital tools, skills and opportunity. DCT and AskDoGood have confirmed booth coverage for this event.</p><Action href="https://thecodeforchange.org/events/" secondary>Organizer details & registration</Action>
  </Section>
  <Section title="Invite us to do something useful together."><p>AskDoGood brings practical wellness education. The Dope Cloud TeacHer brings approachable technology learning. We agree on the audience, scope, timing and price before booking.</p><div className="adg-actions"><Action href="/work-with-askdogood">Discuss a workshop</Action><Action href="/contact?topic=Community%20event" secondary>Connect with us</Action></div></Section>
</div>; }
