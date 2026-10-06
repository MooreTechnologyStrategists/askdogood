import { useState } from "react";
import type { CatalogItem } from "@/data/catalog";
import { productDetailsById } from "@/data/productDetails";

/** A contents overview built from the published offer, never an invented download screenshot. */
export default function ProductPreview({ product, compact = false }: { product: CatalogItem; compact?: boolean }) {
  const [view, setView] = useState("contents");
  const detail = productDetailsById[product.id];
  const items = detail?.includes || [product.description];
  const format = product.kind === "membership" ? "Membership" : product.kind === "service" ? "Personalized service" : "Digital resource";
  const hasCover = product.image.startsWith("/") && !product.image.includes("branding/");
  return <div className={`adg-product-preview${compact ? " is-compact" : ""}`}>
    {hasCover && <img src={product.image} alt={`${product.name} cover`} className="adg-preview-cover" loading="lazy" onError={e => { e.currentTarget.style.display = "none"; }} />}
    <div className="adg-preview-page">
      <p className="adg-eyebrow">AskDoGood · {format}</p>
      <h3>{product.name}</h3>
      {!compact && <div className="adg-preview-tabs" aria-label="Explore this offer"><button type="button" aria-pressed={view === "contents"} onClick={() => setView("contents")}>Inside the offer</button><button type="button" aria-pressed={view === "use"} onClick={() => setView("use")}>How to use it</button></div>}
      <div aria-live="polite">{view === "contents" ? <ol>{items.slice(0, compact ? 3 : undefined).map(item => <li key={item}>{item}</li>)}</ol> : <p>{detail?.deliveryNote || "Review access and delivery details before purchasing."}</p>}</div>
      <p className="adg-small">Contents overview{compact ? "" : " · based on the offer description"}</p>
    </div>
  </div>;
}
