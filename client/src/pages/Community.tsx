import { Action, PageIntro, Section } from "@/components/Experience";
import CommunityEvents from "@/components/CommunityEvents";
export default function Community() { return <div className="adg-page">
  <PageIntro eyebrow="Faith in motion · Community" title="Grace gives us another chance. Good gives us something to do with it." text="We’re living, learning, and paying it forward. Meet us in the community, explore practical resources, or talk with us about serving the people you care for."  />
  <Section id="ypd-recap" tone eyebrow="Out in the community · YPD" title="Different organizations. A shared commitment to people.">
    <p className="adg-lead">The YPD Community Impact Event brought inclusion into the room in a meaningful way. Several developmental organizations were represented, creating space to learn about different resources and the people behind them. I appreciated being part of a gathering where community connection had room to grow across organizations. When we show up together, people can see more possibilities for their next step.</p>
    <p>For AskDoGood, this is why being present matters. The Youth Career Connections table was one visible reminder that education, career development, and community support belong in the same conversation. Our purpose is to help people connect everyday choices with a stronger future—from caring for their health and valuing themselves to exploring learning and work opportunities. I left grateful for the inclusive spirit of the event and the chance to keep building those connections. If you are looking for your next good step, start with our free resources or reach out and tell us what kind of support you are seeking.</p>
    <div className="adg-grid adg-grid-three adg-event-gallery">
      <figure><img src="/images/community/ypd-rosee.webp" alt="RoSeé posing inside a YPD Takeover event photo frame" loading="lazy" /><figcaption>RoSeé at the YPD event.</figcaption></figure>
      <figure><img src="/images/community/ypd-welcome.webp" alt="Youth Professional Development event sign beside yellow flowers" loading="lazy" /><figcaption>A welcome from Youth Professional Development.</figcaption></figure>
      <figure><img src="/images/community/ypd-career-connections.webp" alt="Youth Career Connections resource table with career program brochures" loading="lazy" /><figcaption>Youth Career Connections resources on display.</figcaption></figure>
    </div>
    <div className="adg-actions"><Action href="/resources/start">Find my next-step resources</Action><Action href="/contact?topic=Community%20support" secondary>Tell us what you need</Action></div>
  </Section>
  <Section title="Where you can meet us."><CommunityEvents /></Section>
  <Section tone eyebrow="Also happening in our community" title="Digital Inclusion & Tech Fair">
    <p>Hosted by The Code for Change · Saturday, October 10, 2026 · 10 a.m.–1 p.m. Eastern.</p><p>Trinidad Baptist Church, 6611 Walker Mill Rd, Capitol Heights, MD 20743.</p><p>A free community event connecting people with digital tools, skills and opportunity. DCT and AskDoGood have confirmed booth coverage for this event.</p><Action href="https://thecodeforchange.org/events/" secondary>Organizer details & registration</Action>
  </Section>
  <Section title="Invite us to do something useful together."><p>AskDoGood brings practical wellness education. The Dope Cloud TeacHer brings approachable technology learning. We agree on the audience, scope, timing and price before booking.</p><div className="adg-actions"><Action href="/work-with-askdogood">Discuss a workshop</Action><Action href="/contact?topic=Community%20event" secondary>Connect with us</Action></div></Section>
</div>; }
