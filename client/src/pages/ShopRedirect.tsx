// client/src/pages/ShopRedirect.tsx
// No longer redirecting - /shop now shows the full Shop page with courses
import Shop from "./Shop";
import SEO from "@/components/SEO";

export default function ShopRedirect() {
  return (
    <>
      <SEO
        title="Shop - Wellness Courses & Resources | Ask DoGood"
        description="Browse wellness courses, thyroid health programs, meal plans, and holistic resources designed by RoSeé Murphy."
        keywords={['wellness shop', 'thyroid courses', 'health programs', 'meal plans', 'wellness resources']}
        url="/shop"
      />
      <Shop />
    </>
  );
}
