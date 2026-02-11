// client/src/pages/ShopRedirect.tsx
// No longer redirecting - /shop now shows the full Shop page with courses
import Shop from "./Shop";
import SEO from "@/components/SEO";

export default function ShopRedirect() {
  return (
    <>
      <SEO
        title="Shop | Ask DoGood"
        description="Browse wellness courses, meal plans, and resources"
        url="/shop"
        noindex={true}
      />
      <Shop />
    </>
  );
}
