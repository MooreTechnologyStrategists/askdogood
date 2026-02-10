import ClinicalRecipesApp from '@/components/ClinicalRecipesApp';
import SEO from '@/components/SEO';

export default function ClinicalRecipesPage() {
  return (
    <>
      <SEO
        title="Clinical Recipes - Thyroid-Friendly Healing Meals"
        description="Discover science-backed, thyroid-friendly recipes designed to reduce inflammation, support hormone balance, and promote healing. Over 50 anti-inflammatory recipes with nutritional information."
        keywords={['thyroid recipes', 'anti-inflammatory recipes', 'hashimotos recipes', 'hypothyroid diet', 'healing foods', 'hormone balance recipes', 'clinical nutrition', 'therapeutic recipes']}
        url="/clinical-recipes"
      />
      <ClinicalRecipesApp />
    </>
  );
}
