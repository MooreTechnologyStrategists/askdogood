import { Action, Section } from "@/components/Experience";
export default function CookbookTeaser() {
  return <Section tone id="hip-hop-kitchen" eyebrow="Beats, Plants & Plates · The cookbook" title="Before I wrote recipes, I wrote rhymes.">
    <div className="adg-split"><img className="adg-book-cover" src="/images/merch/beats-plants-plates-cover.webp" alt="Beats, Plants & Plates cookbook preview cover" loading="lazy" /><div>
      <p>Hip-hop has been part of my life since I was a little girl. At the tender age of nine, I wrote my first rap, “House of Roxanne.” I used to write rhymes myself—finding words, playing with rhythm, and discovering the joy of making something my own. My love for music has stayed with me.</p>
      <p>Beats, Plants &amp; Plates brings that love into the kitchen. Original recipe ideas, hip-hop culture, and everyday self-care share the same table. Put on a favorite track, make something good, and give yourself a little room to enjoy the process.</p>
      <h3>Get a taste of the book.</h3><p>Try the free two-recipe preview, then tell us you’re interested in the full collection. The cookbook is in development; its release date and price are still to come.</p>
      <div className="adg-actions"><Action href="/downloads/Beats-Plants-and-Plates-Preview.pdf">Read the free cookbook preview</Action><Action href="/cookbook#cookbook-interest" secondary>Explore the book &amp; register interest</Action></div>
    </div></div>
  </Section>;
}
