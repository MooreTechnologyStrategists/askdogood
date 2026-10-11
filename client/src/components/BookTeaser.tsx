import { Action, Section } from "@/components/Experience";
export default function BookTeaser() {
  return <Section tone eyebrow="Manuscript in progress" title="Starting from Scratch in the Basement">
    <p>A personal story about loss, rebuilding, and making purpose from what life has taught me. The writing is underway; publication details and launch pricing have not been finalized.</p>
    <div className="adg-actions"><Action href="/in-the-works">See where the book stands</Action><Action href="/contact?topic=Memoir%20interest" secondary>Share my interest in the book</Action></div>
  </Section>;
}
