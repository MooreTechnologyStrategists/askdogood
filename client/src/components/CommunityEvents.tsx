import { Action } from "./Experience";
const events = [
  { title: "Jobs Not Guns / Jobs Not Drugs", subtitle: "Citywide Recruitment & Resource Fair", date: "Thursday, October 8, 2026", time: "10 a.m.–3 p.m. Eastern", end: "2026-10-08T15:00:00-04:00", venue: "St. Luke Roman Catholic Church Community Center", address: "4923 East Capitol St SE, Washington, DC 20019", presence: "Meet AskDoGood + The Dope Cloud TeacHer at our shared table.", href: "/community#st-luke-recap", link: "Read the St. Luke recap & watch the video" },
  { title: "YPD Community Impact Event", subtitle: "Hosted by Youth Professional Development", date: "Saturday, October 10, 2026", time: "10 a.m.–1 p.m. Eastern", end: "2026-10-10T13:00:00-04:00", venue: "Conference Room", address: "10201 Martin Luther King Jr. Hwy, Bowie, MD 20720", presence: "AskDoGood participation confirmed. Come connect around practical wellness and your next good step.", href: "/community#ypd-recap", link: "Read the event recap & see photos" },
];
export default function CommunityEvents() {
  const now = Date.now();
  const upcoming = events.filter(event => Date.parse(event.end) >= now);
  const past = events.filter(event => Date.parse(event.end) < now);
  function cards(items: typeof events) { return <div className="adg-grid adg-grid-two">{items.map(event => <article className="adg-card" key={event.title}>
    <p className="adg-eyebrow">{event.date}</p><h3>{event.title}</h3><p>{event.subtitle}</p><p><strong>{event.time}</strong><br />{event.venue}<br />{event.address}</p><p>{Date.parse(event.end) < now ? (event.title.startsWith("YPD") ? "AskDoGood attended this inclusive gathering alongside several developmental organizations." : "AskDoGood attended this recruitment and resource fair at St. Luke. Explore our reflection on opportunity, dignity, and second chances.") : event.presence}</p><Action href={event.href} secondary>{event.link}</Action>
  </article>)}</div>; }
  return <>
    {upcoming.length ? cards(upcoming) : <p>New community dates will appear here when confirmed. <Action href="/work-with-askdogood" secondary>Bring us to your community</Action></p>}
    {past.length > 0 && <details className="adg-event-history"><summary>Previous scheduled community dates</summary>{cards(past)}</details>}
    <p className="adg-small">These are community appearances, not claims of sponsorship or endorsement. Event information may change; check with the organizer before traveling.</p>
  </>;
}
