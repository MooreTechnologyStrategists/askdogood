import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp, AlertTriangle, Leaf, MapPin, Zap, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

// ─── Type ──────────────────────────────────────────────────────────────────
interface Herb {
  name: string;
  latin: string;
  letter: string;
  emoji: string;
  entryType?: "Herb" | "Essential Oil" | "Vitamin" | "Mineral";
  photo: string;
  origin: string[];
  categories: string[];
  benefits: string[];
  compounds: string;
  howToUse: string;
  cautions: string;
  interactions: string;
  thyroidNote?: string;
  warnLevel: "safe" | "caution" | "warning"; // green / yellow / red
}

// ─── Data ─────────────────────────────────────────────────────────────────
const herbs: Herb[] = [
  {
    name: "Aloe Vera",
    latin: "Aloe barbadensis",
    letter: "A",
    emoji: "🌵",
    photo: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=250&fit=crop",
    origin: ["Arabian Peninsula", "North Africa", "Widely cultivated worldwide"],
    categories: ["Gut Health", "Skin", "Anti-Inflammatory", "Digestion"],
    benefits: [
      "Soothes and heals gut lining (IBS, leaky gut)",
      "Powerful topical wound and burn healing",
      "Reduces skin inflammation and UV damage",
      "Short-term constipation relief (latex form)",
      "Blood sugar regulation support",
    ],
    compounds: "Acemannan (immune), anthraquinones (laxative), polyphenols, zinc",
    howToUse:
      "Inner fillet gel: add 2 tbsp to smoothies daily for gut support. Topical: apply pure gel directly to skin. Capsules: enteric-coated for digestive use. Avoid the yellow latex just beneath the skin for internal use.",
    cautions:
      "The latex form acts as a strong stimulant laxative — avoid with prolonged internal use, kidney disease, or hemorrhoids. Can cause electrolyte imbalance (low potassium) with extended use.",
    interactions:
      "Diuretics (risk of hypokalemia), diabetes medications (potentiates blood sugar lowering), heart medications (digoxin — electrolyte imbalance risk), laxatives (additive effect).",
    warnLevel: "caution",
  },
  {
    name: "Ashwagandha",
    latin: "Withania somnifera",
    letter: "A",
    emoji: "🌿",
    photo: "https://images.unsplash.com/photo-1618176729938-6fd80fe21dba?w=400&h=250&fit=crop",
    origin: ["India", "North Africa", "Mediterranean", "Parts of the Middle East"],
    categories: ["Stress & Adrenal", "Thyroid Support", "Energy", "Sleep", "Adaptogen"],
    benefits: [
      "Clinically proven to reduce cortisol 27–30%",
      "May increase T3 and T4 in subclinical hypothyroidism",
      "Improves sleep quality and time to fall asleep",
      "Enhances physical endurance and recovery",
      "Anti-inflammatory and antioxidant neuroprotection",
      "Supports testosterone and reproductive health",
    ],
    compounds: "Withanolides (primary adaptogen), alkaloids, steroidal lactones",
    howToUse:
      "300–600mg standardized extract (KSM-66 or Sensoril forms have best research). Capsule or mixed into warm milk as traditional moon milk. Take with meals. Allow 4–8 weeks to see full effects.",
    cautions:
      "Avoid during pregnancy (uterine stimulant). Use with care in active autoimmune conditions — it modulates the immune response. May cause mild GI upset initially; take with food. Rarely: liver sensitivity in high doses.",
    interactions:
      "Thyroid medications — may change hormone levels, requiring dose adjustment. Immunosuppressants (cyclosporine, methotrexate) — opposing effects. Sedatives and benzodiazepines — additive sedation. Stimulants — may partially counteract.",
    thyroidNote:
      "⬆️ May increase T3 and T4. If you're on levothyroxine or have Hashimoto's, monitor your labs every 3 months when using regularly. This herb can be genuinely helpful for hypothyroidism but requires lab oversight.",
    warnLevel: "caution",
  },
  {
    name: "Astragalus",
    latin: "Astragalus membranaceus",
    letter: "A",
    emoji: "🌱",
    photo: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
    origin: ["Northern China", "Mongolia", "Korea"],
    categories: ["Immune", "Longevity", "Energy", "Antioxidant"],
    benefits: [
      "Powerful immune system modulator and stimulant",
      "Antiviral — active against herpes, hepatitis, common cold viruses",
      "Antioxidant — protects cells from oxidative damage",
      "Mild adaptogen — supports adrenal and energy",
      "Research on telomere protection (longevity)",
      "Supports kidney function and reduces proteinuria",
    ],
    compounds: "Astragalosides, polysaccharides, saponins",
    howToUse:
      "Capsule 500–1500mg/day, decoction (root root tea), tincture. Can be added to soups and stews in root form. Best used in cycles: 6–8 weeks on, 2 weeks off.",
    cautions:
      "Generally well tolerated. Avoid in acute infections (immune stimulation during active infection can be counterproductive in some viruses). Use caution with organ transplants.",
    interactions:
      "Immunosuppressants (cyclosporine — directly opposes the action). Anticoagulants (mild blood-thinning effects). Diuretics (additive renal effects).",
    thyroidNote:
      "Generally safe for thyroid patients. No known direct thyroid interaction. Safe for Hashimoto's in typical doses unlike stronger immune stimulants.",
    warnLevel: "safe",
  },
  {
    name: "Black Seed (Nigella)",
    latin: "Nigella sativa",
    letter: "B",
    emoji: "🖤",
    photo: "https://images.unsplash.com/photo-1609252924198-d4ed39261a60?w=400&h=250&fit=crop",
    origin: ["Southwest Asia", "Mediterranean", "South Asia"],
    categories: ["Immune", "Anti-Inflammatory", "Respiratory", "Blood Pressure"],
    benefits: [
      "Powerful anti-inflammatory via thymoquinone",
      "Immune modulating — balances autoimmune response",
      "Respiratory support (asthma, allergies, bronchitis)",
      "Blood pressure reduction (modest effect)",
      "Antimicrobial and antifungal properties",
      "Research in Hashimoto's showing TPO antibody reduction",
    ],
    compounds: "Thymoquinone (primary active), thymohydroquinone, thymol, carvacrol",
    howToUse:
      "1 tsp black seeds or ½ tsp cold-pressed black seed oil daily. Can add to smoothies, yogurt, or taken straight. Capsules: 500–1000mg standardized to thymoquinone.",
    cautions:
      "May slow blood clotting — avoid before surgery (stop 2 weeks prior). Avoid in high doses during pregnancy. Large amounts can lower blood pressure significantly.",
    interactions:
      "Blood thinners (warfarin, aspirin, clopidogrel) — additive bleeding risk. Blood pressure medications — potentiating effect. Immunosuppressants — may partially oppose. Chemotherapy drugs — discuss with oncologist.",
    thyroidNote:
      "🔬 Research Interest: Small clinical studies show black seed oil may reduce TPO antibodies in Hashimoto's and support thyroid function. Discuss with your doctor if you have autoimmune thyroid disease.",
    warnLevel: "caution",
  },
  {
    name: "Burdock Root",
    latin: "Arctium lappa",
    letter: "B",
    emoji: "🌾",
    photo: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&h=250&fit=crop",
    origin: ["Europe", "Northern Asia", "North America (naturalized)"],
    categories: ["Liver Support", "Skin", "Detox", "Digestion", "Lymphatic"],
    benefits: [
      "Liver detoxification and bile flow stimulation",
      "Powerful blood purifier — historically for skin conditions",
      "Prebiotic inulin fiber feeds beneficial gut bacteria",
      "Antioxidant and anti-inflammatory for skin (acne, eczema, psoriasis)",
      "Lymphatic system support — moves stagnation",
      "Antifungal properties",
    ],
    compounds: "Inulin (prebiotic fiber), arctiin (lignan), polyacetylenes, polyphenols",
    howToUse:
      "Root decoction (boil root 20 min for tea), fresh root as Gobo in Japanese cooking, capsules 500mg 2x daily, tincture. Combines well with dandelion for liver support.",
    cautions:
      "Ragweed/chrysanthemum family — test for allergy first (especially if you react to daisy family plants). Avoid with kidney disease or active kidney obstruction. Use caution in pregnancy.",
    interactions:
      "Diuretics (additive effect — monitor electrolytes). Blood thinners (mild antiplatelet properties). Diabetes medications (may lower blood sugar).",
    warnLevel: "safe",
  },
  {
    name: "Chamomile",
    latin: "Matricaria chamomilla",
    letter: "C",
    emoji: "🌼",
    photo: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=250&fit=crop",
    origin: ["Europe", "Western Asia", "Widely naturalized and cultivated"],
    categories: ["Sleep", "Anxiety", "Digestion", "Anti-Inflammatory", "Skin"],
    benefits: [
      "Reduces anxiety and promotes calm without sedation",
      "Improves sleep quality and onset time",
      "Anti-spasmodic for digestive cramping and IBS",
      "Anti-inflammatory for gut lining",
      "Topical wound healing and eczema relief",
      "Mild pain relief",
    ],
    compounds: "Apigenin (binds GABA receptors), chamazulene (anti-inflammatory), alpha-bisabolol, flavonoids",
    howToUse:
      "Strong tea (2 tsp dried flowers, steep 10 min covered): 1–3 cups daily or before bed. Tincture. Topical cream or compress for skin. Essential oil for aromatherapy only (not internal).",
    cautions:
      "⚠️ Ragweed, daisy, and chrysanthemum family allergy — can cause cross-reaction. If you're allergic to any of these, avoid. May cause mild drowsiness.",
    interactions:
      "Blood thinners (warfarin) — mild anticoagulant/antiplatelet effect. Sedatives and benzodiazepines — additive calming. Estrogen therapies — mild phytoestrogenic compounds.",
    thyroidNote:
      "Generally safe for thyroid patients. No direct thyroid interaction. Excellent choice for thyroid-related anxiety and sleep issues.",
    warnLevel: "safe",
  },
  {
    name: "Dandelion",
    latin: "Taraxacum officinale",
    letter: "D",
    emoji: "🌻",
    photo: "https://images.unsplash.com/photo-1558263756-22ba4de71e75?w=400&h=250&fit=crop",
    origin: ["Europe", "Asia", "Now found on every continent"],
    categories: ["Liver Support", "Digestion", "Detox", "Urinary", "Nutrition"],
    benefits: [
      "Liver and gallbladder stimulant — increases bile flow",
      "Natural diuretic that preserves potassium (unlike drug diuretics)",
      "Rich in vitamins A, C, K, and minerals",
      "Prebiotic inulin supports gut microbiome",
      "Antioxidant flavonoids protect liver cells",
      "Modest blood sugar regulation support",
    ],
    compounds: "Taraxacin, taraxacerin, inulin (20%), beta-sitosterol, flavonoids, sesquiterpene lactones",
    howToUse:
      "Leaves: raw in salads (more nutritious than lettuce), sautéed, in green smoothies. Root: roasted root decoction as coffee substitute, tincture, capsules. Tea from leaves or root. Aim for whole plant food first, supplement as needed.",
    cautions:
      "Latex allergy cross-reaction possible. Avoid if you have bile duct obstruction, gallstones, or kidney obstruction without medical supervision. Use caution in pregnancy (diuretic effect).",
    interactions:
      "Diuretics — additive diuretic effect. Lithium — may decrease excretion, raising lithium levels (serious). Ciprofloxacin and other quinolone antibiotics — may reduce antibiotic absorption (space 2+ hours apart). Blood thinners — mild effect.",
    thyroidNote:
      "✅ Safe for thyroid patients. Excellent liver support — the liver is critical for T4→T3 conversion. A healthy liver means better thyroid hormone function.",
    warnLevel: "safe",
  },
  {
    name: "Echinacea",
    latin: "Echinacea purpurea / angustifolia",
    letter: "E",
    emoji: "🌸",
    photo: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=400&h=250&fit=crop",
    origin: ["North American prairies", "Great Plains (USA)", "Now cultivated worldwide"],
    categories: ["Immune", "Anti-Viral", "Cold & Flu"],
    benefits: [
      "Reduces duration and severity of colds and flu",
      "Immune activating — increases white blood cell activity",
      "Antiviral properties (herpes, rhinovirus, influenza)",
      "Anti-inflammatory wound support",
      "Stimulates lymphatic system",
    ],
    compounds: "Alkylamides (immune-active), polysaccharides, caffeic acid derivatives, glycoproteins",
    howToUse:
      "Best used short-term: at first sign of illness for 7–10 days. Tincture (most bioavailable), capsule 300–500mg 3x daily during illness, or tea. Cycle: use for 8 weeks max, then take a 2-week break.",
    cautions:
      "⚠️ DO NOT use if you have autoimmune disease (lupus, RA, multiple sclerosis, Hashimoto's) — immune stimulation can trigger flares. Daisy family allergy. Avoid in immunocompromised patients.",
    interactions:
      "Immunosuppressants (cyclosporine, prednisone, methotrexate) — DIRECTLY OPPOSES their action. Chemotherapy — discuss with oncologist. Hepatotoxic medications — rare concern with long-term high-dose use.",
    thyroidNote:
      "⚠️ CAUTION FOR HASHIMOTO'S: This herb stimulates the immune system. Hashimoto's is already an overactive immune response attacking your thyroid. Echinacea can trigger or worsen flares. Avoid or consult your doctor.",
    warnLevel: "warning",
  },
  {
    name: "Fennel",
    latin: "Foeniculum vulgare",
    letter: "F",
    emoji: "🌿",
    photo: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=250&fit=crop",
    origin: ["Mediterranean", "Southern Europe", "Western Asia"],
    categories: ["Digestion", "Hormonal Balance", "IBS", "Respiratory"],
    benefits: [
      "Powerful digestive anti-spasmodic (IBS, bloating, cramping)",
      "Reduces gas and flatulence",
      "Phytoestrogenic — supports hormonal balance in perimenopause",
      "Antimicrobial and anti-inflammatory",
      "Respiratory support (loosens mucus)",
      "Mild diuretic",
    ],
    compounds: "Anethole (primary — anti-spasmodic, phytoestrogenic), fenchone, estragole, flavonoids",
    howToUse:
      "Fennel seed tea after meals (crush 1 tsp seeds, steep 10 min). Bulb as vegetable — roasted, raw in salads. Essential oil (diluted topically). Tincture or capsule for more targeted use.",
    cautions:
      "Phytoestrogenic — use caution with estrogen-sensitive conditions (ER+ breast cancer, endometriosis, fibroids). Avoid large medicinal amounts during pregnancy (the culinary use is fine). Can cause sun sensitivity (topical oil).",
    interactions:
      "Estrogen therapies (oral contraceptives, HRT) — may augment estrogenic effects. Anticoagulants — mild antiplatelet properties. Quinolone antibiotics — may reduce drug absorption.",
    warnLevel: "caution",
  },
  {
    name: "Ginger",
    latin: "Zingiber officinale",
    letter: "G",
    emoji: "🫚",
    photo: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=250&fit=crop",
    origin: ["Southeast Asia", "South Asia", "Tropical regions worldwide"],
    categories: ["Digestion", "Anti-Inflammatory", "Nausea", "Circulation", "Immunity"],
    benefits: [
      "Potent anti-nausea (pregnancy nausea, chemotherapy, motion sickness)",
      "Anti-inflammatory: inhibits COX-2 (same pathway as ibuprofen, naturally)",
      "Digestive stimulant — improves gastric emptying",
      "Circulation booster — warms extremities",
      "Antimicrobial (ginger shots for immune support)",
      "Blood sugar regulation support",
    ],
    compounds: "Gingerols (anti-inflammatory, anti-nausea), shogaols (from dried ginger — more potent), zingerone",
    howToUse:
      "Fresh grated in hot water with lemon and honey (classic morning tea). Sliced in soups and curries. Capsules 250–500mg with meals for nausea. Ginger shots (fresh-pressed). Powder in golden milk.",
    cautions:
      "High doses (>5g/day) may worsen acid reflux by relaxing the lower esophageal sphincter. Very high doses in late pregnancy (conventional doses fine for nausea). May thin blood — stop before surgery.",
    interactions:
      "Blood thinners (warfarin, NSAIDs, aspirin) — additive antiplatelet effect. Diabetes medications — may lower blood sugar (monitor). Blood pressure medications — mild interaction. Immunosuppressants — may affect activity.",
    thyroidNote:
      "✅ Excellent for thyroid patients. Anti-inflammatory support is especially valuable since thyroid disease is inflammatory. Also supports gut motility, which is often impaired with hypothyroidism.",
    warnLevel: "safe",
  },
  {
    name: "Holy Basil (Tulsi)",
    latin: "Ocimum tenuiflorum",
    letter: "H",
    emoji: "🕉️",
    photo: "https://images.unsplash.com/photo-1563791584609-11f1fae77dc4?w=400&h=250&fit=crop",
    origin: ["Indian subcontinent", "Southeast Asia"],
    categories: ["Stress & Adrenal", "Adaptogen", "Blood Sugar", "Immunity", "Anti-Inflammatory"],
    benefits: [
      "Powerful adaptogen — regulates cortisol and HPA axis stress response",
      "Reduces anxiety and mental fatigue",
      "Blood sugar regulation (anti-diabetic research)",
      "Anti-inflammatory via eugenol (similar mechanism to COX inhibition)",
      "Antimicrobial and antiviral",
      "Supports healthy cholesterol levels",
    ],
    compounds: "Eugenol (anti-inflammatory), ursolic acid, ocimumosides A & B (cortisol-modulating), rosmarinic acid",
    howToUse:
      "Most accessible as tea — 2 tsp fresh or 1 tsp dried steeped 10–15 min, 2–3 cups daily. Capsule: 300–600mg standardized. Fresh leaves in cooking. Tincture for stronger adaptogenic effect.",
    cautions:
      "May have mild antifertility effects (based on animal studies) — avoid if trying to conceive. May slow blood clotting (stop before surgery). Use caution if taking sedative medications.",
    interactions:
      "Blood thinners — mild antiplatelet activity. Diabetes medications — blood sugar lowering effect. Sedatives — mild additive effect. Anesthesia — stop 2 weeks prior to surgery.",
    thyroidNote:
      "✅ Excellent for thyroid patients. Cortisol and thyroid are deeply interconnected — Holy Basil's cortisol-lowering effects directly support thyroid function. Well tolerated in thyroid disease.",
    warnLevel: "safe",
  },
  {
    name: "Irish Moss (Sea Moss)",
    latin: "Chondrus crispus",
    letter: "I",
    emoji: "🌊",
    photo: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd3?w=400&h=250&fit=crop",
    origin: ["Atlantic coasts of Ireland", "Caribbean", "North American Atlantic coast"],
    categories: ["Thyroid Support", "Gut Health", "Immunity", "Minerals", "Skin"],
    benefits: [
      "Contains 92 trace minerals and vitamins",
      "Natural iodine source (thyroid hormone production)",
      "Gut lining soothing and healing (natural gel/carrageenan)",
      "Immune support and antiviral properties",
      "Skin hydration and collagen support",
      "Prebiotic that feeds beneficial gut bacteria",
    ],
    compounds: "Carrageenan (gel-forming, gut-soothing), iodine (significant amount), selenium, zinc, potassium, iron",
    howToUse:
      "Sea moss gel: blend soaked moss into gel, add 1–2 tbsp to smoothies, soups, or beverages. Sea moss pods: blend directly. Capsules: lower iodine content per dose. Start with small amounts.",
    cautions:
      "⚠️ HIGH IODINE — this is a double-edged sword. Iodine deficiency causes hypothyroidism, BUT excess iodine triggers or worsens Hashimoto's flares and hyperthyroidism. Source quality matters — some products are contaminated with heavy metals.",
    interactions:
      "Thyroid medications — iodine affects thyroid hormone levels, requiring closer monitoring. Blood thinners — mild anticoagulant properties.",
    thyroidNote:
      "🚨 IMPORTANT THYROID WARNING: Both too little AND too much iodine harm thyroid health. People with Hashimoto's thyroiditis, Graves' disease, or hyperthyroidism should consult their doctor and test iodine levels BEFORE taking sea moss regularly.",
    warnLevel: "warning",
  },
  {
    name: "Lemon Balm",
    latin: "Melissa officinalis",
    letter: "L",
    emoji: "🍋",
    photo: "https://images.unsplash.com/photo-1628689469838-524a4a973b8e?w=400&h=250&fit=crop",
    origin: ["Southern Europe", "Central Asia", "Mediterranean", "Widely cultivated"],
    categories: ["Anxiety", "Sleep", "Antiviral", "Digestion", "Cognitive"],
    benefits: [
      "Anti-anxiety without significant sedation",
      "Improves sleep quality and onset",
      "Antiviral against herpes simplex (topical and internal)",
      "Digestive anti-spasmodic and gas relief",
      "Mild cognitive improvement (memory, calmness)",
    ],
    compounds: "Rosmarinic acid (antiviral, anti-inflammatory), flavonoids, terpenoids, triterpenoids",
    howToUse:
      "Tea (1–2 tsp dried herb, steep 10 min) — popular as evening tea. Tincture for stronger effect. Topical cream for cold sores (apply at first tingle). Capsule 300–600mg.",
    cautions:
      "⚠️ MAY REDUCE THYROID HORMONE PRODUCTION — known to inhibit TSH receptor binding and reduce thyroid activity. With Graves' disease/hyperthyroidism, this may be intentional therapeutic use. For hypothyroid patients: AVOID or monitor closely.",
    interactions:
      "Thyroid medications — significant interaction with hypothyroid treatment. Sedatives and barbiturates — additive effect. HIV antiretrovirals — may reduce drug effectiveness. Glaucoma medications.",
    thyroidNote:
      "⚠️ CRITICAL FOR THYROID PATIENTS: Lemon balm contains compounds that inhibit TSH binding to the thyroid gland, essentially reducing thyroid hormone production. ✅ May HELP hyperthyroidism or Graves' disease. ❌ Will WORSEN hypothyroidism. Always disclose to your doctor.",
    warnLevel: "warning",
  },
  {
    name: "Licorice Root",
    latin: "Glycyrrhiza glabra",
    letter: "L",
    emoji: "🍬",
    photo: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=250&fit=crop",
    origin: ["Mediterranean", "Central Asia", "Southern Europe", "China (G. uralensis)"],
    categories: ["Adrenal Support", "Gut Health", "Anti-Inflammatory", "Respiratory", "Hormonal"],
    benefits: [
      "Adrenal support — cortisol-sparing effect (extends cortisol half-life)",
      "Gut lining healing — excellent for leaky gut, ulcers, and GERD",
      "Anti-inflammatory via glycyrrhizin",
      "Respiratory mucus-loosening and anti-spasmodic",
      "Antiviral (herpes, influenza)",
      "Supports estrogen metabolism",
    ],
    compounds: "Glycyrrhizin (cortisol-mimicking), glabridin (isoflavone), chalcones, flavonoids",
    howToUse:
      "DGL (deglycyrrhizinated licorice) is safest for gut use — chewable tablets before meals. Standard licorice root tea or supplements for adrenal support — use only for 4–6 weeks. Candy licorice is insufficient dosage.",
    cautions:
      "⚠️ GLYCYRRHIZIN can SIGNIFICANTLY raise blood pressure, cause fluid and sodium retention, and lower potassium with doses >100mg/day or sustained use (>4–6 weeks). Avoid if you have hypertension, heart disease, kidney disease, liver disease, or are pregnant. DGL form is much safer for long-term gut use.",
    interactions:
      "Blood pressure medications — additive or opposing effects. Corticosteroids — additive (potentiates steroid effect). Diuretics — may counter or enhance depending on drug. Digoxin — hypokalemia from licorice raises digoxin toxicity risk. Oral contraceptives and estrogen therapies.",
    thyroidNote:
      "Adrenal and thyroid function are closely linked. For thyroid patients with exhausted adrenals, short-term DGL may help the gut-thyroid axis. Standard licorice (not DGL) should be used very cautiously.",
    warnLevel: "warning",
  },
  {
    name: "Milk Thistle",
    latin: "Silybum marianum",
    letter: "M",
    emoji: "🫧",
    photo: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400&h=250&fit=crop",
    origin: ["Mediterranean", "Europe", "Parts of Asia", "Now cultivated worldwide"],
    categories: ["Liver Support", "Detox", "Antioxidant", "Blood Sugar"],
    benefits: [
      "Protects liver cells from toxins and damage",
      "Promotes liver cell regeneration (cirrhosis, fatty liver)",
      "Powerful antioxidant — higher ORAC than vitamin C or E",
      "Anti-inflammatory for liver and beyond",
      "Modest insulin sensitizing effects",
      "Supports healthy cholesterol levels",
    ],
    compounds: "Silymarin complex (silibinin, silidianin, silicristin — the most studied hepatoprotective compounds)",
    howToUse:
      "Standardized capsule 140–420mg silymarin/day (70–80% silymarin content). Tea is notably less potent (silymarin poorly water-soluble). Best with a fat-containing meal. Phosphatidylcholine complex improves absorption.",
    cautions:
      "Mild estrogenic effects — use caution with hormone-sensitive cancers. Cross-reaction with ragweed and daisy family plants. Rare: mild GI upset at higher doses.",
    interactions:
      "Cytochrome P450 enzymes (CYP3A4, CYP2C9) — milk thistle affects how the liver metabolizes MANY medications including statins, diabetes drugs, HIV antiretrovirals, some antifungals. Review your medication list with a pharmacist.",
    thyroidNote:
      "✅ Liver health is crucial for thyroid function — the liver converts T4 to T3 and removes excess thyroid hormones. Milk thistle supports this process. No direct thyroid interaction. Generally safe and useful for thyroid patients.",
    warnLevel: "caution",
  },
  {
    name: "Nettle Leaf",
    latin: "Urtica dioica",
    letter: "N",
    emoji: "🌿",
    photo: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop",
    origin: ["Europe", "North Africa", "Western Asia", "North America", "Widely naturalized"],
    categories: ["Allergies", "Inflammation", "Nutrition", "Hormonal", "Joint Health", "Urinary"],
    benefits: [
      "Natural antihistamine — blocks histamine without drowsiness",
      "Exceptional nutrient density: iron, calcium, magnesium, vitamin K, silica",
      "Anti-inflammatory for joint pain and arthritis",
      "Supports healthy testosterone (SHBG binding)",
      "Urinary tract and prostate health",
      "Blood sugar regulation",
    ],
    compounds: "Quercetin (antihistamine), iron and calcium (bioavailable), silica, chlorophyll, lectins, formic acid (the sting compound — neutralized when dried/cooked)",
    howToUse:
      "Freeze-dried capsule (best for allergies — preserves antihistamine activity). Cooked or dried nettle tea (delicious, nutritious). Young leaves as spinach substitute (cooking removes the sting). Tincture. Spring nettles are a treasured wild food.",
    cautions:
      "Fresh plant causes severe stinging skin reaction — harvest with gloves. Avoid during pregnancy (uterine stimulant in large amounts). May cause mild GI upset at high doses.",
    interactions:
      "Blood thinners (warfarin) — vitamin K in nettle can reduce anticoagulant effect. Diuretics — additive effect. Blood pressure medications — may potentiate. Diabetes medications — additive blood sugar lowering. Lithium — may reduce clearance, raising levels.",
    thyroidNote:
      "✅ Excellent for thyroid patients. The high iron content addresses a common deficiency in hypothyroid patients (low ferritin is epidemic). Antihistamine action is useful for the allergic tendencies many with Hashimoto's experience.",
    warnLevel: "safe",
  },
  {
    name: "Passionflower",
    latin: "Passiflora incarnata",
    letter: "P",
    emoji: "🌺",
    photo: "https://images.unsplash.com/photo-1597576043567-4f37de12ec79?w=400&h=250&fit=crop",
    origin: ["Southeastern United States", "Central America", "South America"],
    categories: ["Anxiety", "Sleep", "Nervous System", "Menopause"],
    benefits: [
      "Reduces anxiety with a calmer quality than most herbs",
      "Improves sleep without 'hangover' effect",
      "Nervine — calms nervous system tension",
      "Menopausal symptom relief (hot flashes, sleep disruption)",
      "May reduce symptoms of opiate withdrawal (research ongoing)",
    ],
    compounds: "Chrysin (flavonoid — binds GABA receptors), harmane alkaloids, isovitexin, orientin",
    howToUse:
      "Capsule 250–500mg 30–60 min before bed. Tea (1–2 tsp dried herb, steep 15 min). Tincture (most effective — 30 drops in water before bed). Combine with valerian for sleep or lemon balm for anxiety.",
    cautions:
      "Strong sedative effect — do not drive or operate machinery after use. Avoid with CNS depressants. Use in pregnancy only under medical supervision (potential uterine stimulant). Short-term use preferred.",
    interactions:
      "Sedatives and benzodiazepines — ADDITIVE/POTENTIATING effect (significant). MAOIs — potential interaction with alkaloid compounds. SSRIs and antidepressants — discuss with doctor. Blood thinners — mild effect.",
    warnLevel: "caution",
  },
  {
    name: "Peppermint",
    latin: "Mentha × piperita",
    letter: "P",
    emoji: "🌿",
    photo: "https://images.unsplash.com/photo-1628202926206-c63a34b2807c?w=400&h=250&fit=crop",
    origin: ["European hybrid (watermeint × spearmint)", "Middle East", "Now globally cultivated"],
    categories: ["Digestion", "IBS", "Headache", "Cognitive", "Antimicrobial", "Respiratory"],
    benefits: [
      "IBS and digestive spasms — enteric-coated capsules highly effective",
      "Headache and tension: topical menthol equal to 1000mg acetaminophen (research)",
      "Antimicrobial against bacteria, yeast, and some viruses",
      "Cognitive stimulation — improves alertness and memory via inhalation",
      "Respiratory opening — decongestant effect",
    ],
    compounds: "Menthol (analgesic, anti-spasmodic, cooling), menthone, cineole, pulegone",
    howToUse:
      "Tea for digestion (after meals). Enteric-coated capsules for IBS (critical — regular capsules release too early and cause heartburn). Essential oil diluted in carrier oil for tension headaches (temples). Aromatherapy for alertness.",
    cautions:
      "⚠️ Relaxes the lower esophageal sphincter — will WORSEN GERD and acid reflux in tea or non-enteric capsule form. Never apply peppermint essential oil to the face or chest of infants/young children (menthol can slow breathing). Peppermint oil is highly concentrated — do not take internally undiluted.",
    interactions:
      "Cyclosporine (immunosuppressant) — peppermint oil may increase blood levels. Antacids — may release enteric coating prematurely (space 2 hours apart). Drug absorption: menthol may alter intestinal permeability.",
    thyroidNote:
      "⚠️ If you have GERD alongside thyroid disease (common comorbidity), avoid peppermint tea and non-enteric forms. Enteric-coated peppermint capsules are safe and very effective for the constipation and IBS common in hypothyroidism.",
    warnLevel: "caution",
  },
  {
    name: "Rosemary",
    latin: "Salvia rosmarinus",
    letter: "R",
    emoji: "🌿",
    photo: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=250&fit=crop",
    origin: ["Mediterranean basin", "Western Europe", "Canary Islands"],
    categories: ["Cognitive", "Circulation", "Antioxidant", "Hair Growth", "Antimicrobial"],
    benefits: [
      "Cognitive enhancement — improves memory and alertness via cineole",
      "Circulation booster — peripheral blood flow",
      "Hair growth stimulation (topical oil — comparable to minoxidil in research)",
      "Powerful antioxidant and antimicrobial",
      "Mood-lifting aromatic effects",
      "Digestive tonic",
    ],
    compounds: "Rosmarinic acid (antioxidant, anti-inflammatory), carnosic acid, carnosol, 1,8-cineole (cognitive)",
    howToUse:
      "Culinary herb daily (most sustainable). Tea (1 tsp dried, steep 10 min). Rosemary-infused oil topical for scalp massage (hair growth). Essential oil in diffuser or diluted (NEVER internal). Tincture.",
    cautions:
      "Large medicinal doses can raise blood pressure. In epilepsy: some evidence that very high doses may lower seizure threshold. Avoid concentrated oil internally (highly irritating to mucus membranes). Do not use on infants (high cineole content).",
    interactions:
      "Blood thinners — antiplatelet activity. Diuretics — additive. ACE inhibitors/blood pressure medications — may increase or decrease effect. Lithium — may reduce clearance. Seizure medications — discuss high-dose use.",
    thyroidNote:
      "✅ Particularly useful for thyroid patients experiencing hair loss and cognitive fog (hallmark hypothyroid symptoms). Hair loss: topical rosemary oil scalp massage 5x/week shows real results. Memory: aromatic use during work/study.",
    warnLevel: "safe",
  },
  {
    name: "St. John's Wort",
    latin: "Hypericum perforatum",
    letter: "S",
    emoji: "🌟",
    photo: "https://images.unsplash.com/photo-1605021890665-90d3dba3b76d?w=400&h=250&fit=crop",
    origin: ["Europe", "Western Asia", "North Africa", "Now naturalized globally"],
    categories: ["Mental Health", "Depression", "Anxiety", "Neuropathy"],
    benefits: [
      "Mild-to-moderate depression — comparable to SSRIs in multiple clinical trials",
      "Seasonal Affective Disorder (SAD) — effective with light therapy",
      "Anxiety and nervous exhaustion",
      "Neuropathic pain and nerve healing (topical oil)",
    ],
    compounds: "Hypericin and pseudohypericin (reuptake inhibition), hyperforin (serotonin/dopamine/norepinephrine), flavonoids",
    howToUse:
      "Standardized capsule 300mg (0.3% hypericin) 3x daily — takes 4–6 weeks for full effect. Tea is significantly less potent. Must be STANDARDIZED to hypericin content.",
    cautions:
      "⚠️ MAJOR PHOTOSENSITIVITY — avoid strong sun exposure; can cause severe sunburn at standard doses. ⚠️ SEROTONIN SYNDROME risk if combined with serotonergic medications — this can be life-threatening.",
    interactions:
      "🚨 CRITICAL INTERACTIONS — St. John's Wort induces CYP3A4 and P-glycoprotein enzymes, reducing blood levels of 50%+ of all medications: SSRIs and SNRIs (serotonin syndrome risk), birth control pills (pregnancy possible), HIV antiretrovirals (treatment failure), organ transplant medications (cyclosporine — rejection risk), warfarin, some chemotherapy drugs, SYNTHROID/LEVOTHYROXINE — reduces effectiveness.",
    thyroidNote:
      "🚨 Reduces blood levels of levothyroxine (Synthroid). If you take thyroid medication regularly, St. John's Wort will decrease its effectiveness, potentially causing undertreated hypothyroidism. Always disclose to your endocrinologist or prescribing doctor.",
    warnLevel: "warning",
  },
  {
    name: "Turmeric",
    latin: "Curcuma longa",
    letter: "T",
    emoji: "🟡",
    photo: "/recipe-turmeric-rice.png",
    origin: ["South Asia (India, Sri Lanka)", "Southeast Asia", "Tropical regions worldwide"],
    categories: ["Anti-Inflammatory", "Antioxidant", "Gut Health", "Brain Health", "Liver Support"],
    benefits: [
      "One of the most studied natural anti-inflammatory compounds",
      "Inhibits NF-κB — master inflammatory switch",
      "Powerful antioxidant — supports brain health (BDNF)",
      "Liver protection and detoxification support",
      "Gut healing — supports microbiome diversity",
      "Research in autoimmune diseases, pain, cancer prevention",
    ],
    compounds: "Curcumin (primary active — poorly absorbed alone), turmerones, demethoxycurcumin",
    howToUse:
      "⚠️ Curcumin needs black pepper (piperine) to absorb — alone it has <5% bioavailability. Capsule with piperine/bioperine (500–1000mg curcumin + 5–20mg piperine). Golden milk: turmeric + black pepper + warm milk + honey + ginger. Liposomal formulas have highest absorption.",
    cautions:
      "High doses may worsen acid reflux or GERD. Gallstones: turmeric stimulates bile flow — avoid with gallstone obstruction. Interferes with iron absorption — space apart from iron supplements or iron-rich meals. Stop 2 weeks before surgery (antiplatelet).",
    interactions:
      "Blood thinners (warfarin, aspirin, clopidogrel) — significant additive antiplatelet effect. Diabetes medications — additive blood sugar lowering risk. Blood pressure medications — mild interaction. Iron supplements — reduces absorption (take 2+ hours apart). Platinum-based chemotherapy — may interfere.",
    thyroidNote:
      "✅ Powerful anti-inflammatory support for thyroid patients, especially Hashimoto's. Reduces the systemic inflammation that drives autoimmune activity. Important: take iron supplements at least 2 hours APART from turmeric.",
    warnLevel: "caution",
  },
  {
    name: "Valerian Root",
    latin: "Valeriana officinalis",
    letter: "V",
    emoji: "😴",
    photo: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=400&h=250&fit=crop",
    origin: ["Europe", "Asia", "Widely cultivated for medicinal use"],
    categories: ["Sleep", "Anxiety", "Nervous System", "Menopause"],
    benefits: [
      "Reduces time to fall asleep",
      "Improves sleep quality and duration",
      "Reduces anxiety and nervous tension",
      "Menopausal sleep disturbance improvement",
      "Mild muscle relaxant",
    ],
    compounds: "Valerenic acid (GABA-A modulating), isovaleric acid, valeranol, flavonoids, lignans",
    howToUse:
      "Capsule 300–600mg 30–60 min before bedtime. Tea (pungent smell — many prefer capsules). Tincture. Allow 2–4 weeks of consistent use for best results. Don't expect immediate KO effect like a sleeping pill.",
    cautions:
      "Sedating — do not drive or operate machinery. Some people experience paradoxical stimulation (especially children). May cause vivid dreams initially. Morning grogginess possible at higher doses. STOP 2 WEEKS BEFORE SURGERY (affects anesthesia).",
    interactions:
      "Sedatives and benzodiazepines — ADDITIVE (significant). Barbiturates (phenobarbital). Alcohol — avoid combining. Anesthesia — significant interaction (stop preoperatively). Hepatotoxic medications — discuss with doctor for long-term use.",
    thyroidNote:
      "✅ Excellent for thyroid patients. Sleep disturbance is a cardinal symptom of thyroid disease (both hypo and hyper). Valerian provides non-habit-forming sleep support. No known direct thyroid interaction.",
    warnLevel: "caution",
  },
  {
    name: "Yarrow",
    latin: "Achillea millefolium",
    letter: "Y",
    emoji: "🌾",
    photo: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=250&fit=crop",
    origin: ["Northern Hemisphere", "Europe", "Asia", "North America", "Now worldwide"],
    categories: ["Wound Healing", "Digestion", "Fever", "Menstrual", "Antimicrobial"],
    benefits: [
      "Powerful topical wound healing and hemostatic (stops bleeding)",
      "Fever reduction via diaphoresis (promotes sweating)",
      "Digestive bitter — stimulates digestive enzymes",
      "Menstrual flow regulation and cramping reduction",
      "Urinary tract anti-inflammatory",
      "Antimicrobial properties",
    ],
    compounds: "Azulene (from distillation — anti-inflammatory), achillin (bitter), flavonoids, alkaloids, proazulenes",
    howToUse:
      "Tea for digestion and fever (1 tsp dried herb, steep 10 min). Fresh plant poultice for wounds (mash fresh leaves, apply directly). Tincture. Essential oil diluted for topical use. Combines with elderflower and peppermint for fever and cold support.",
    cautions:
      "⚠️ Ragweed, chrysanthemum, marigold allergy — cross-reaction possible. Avoid in pregnancy — historically used to stimulate menstruation (potential abortifacient in large amounts). Sun photosensitivity with topical use.",
    interactions:
      "Blood thinners — antiplatelet/anticoagulant activity. Blood pressure medications — mild interaction. Diuretics. Sedatives — mild CNS activity at higher doses. Lithium — may reduce clearance.",
    warnLevel: "caution",
  },
  {
    name: "Ginger",
    latin: "Zingiber officinale",
    letter: "G",
    emoji: "🫚",
    photo: "https://images.unsplash.com/photo-1573414405995-1d3b71118d5a?w=400&h=250&fit=crop",
    origin: ["South Asia", "Southeast Asia", "Widely cultivated in tropical climates"],
    categories: ["Anti-Inflammatory", "Digestion", "Gut Health", "Circulation"],
    benefits: [
      "Reduces nausea, motion sickness, and pregnancy-related morning sickness",
      "Supports digestion and gastric emptying",
      "Helps reduce inflammatory pain and soreness",
      "May improve circulation and mild menstrual cramping",
      "Provides antioxidant support during immune stress",
    ],
    compounds: "Gingerols, shogaols, zingerone, volatile oils",
    howToUse:
      "Fresh tea, grated into meals, capsules, or tincture. Ginger tea or food-based use is a strong starting point for digestion and daily inflammation support.",
    cautions:
      "Can aggravate reflux in some people. Higher doses may thin the blood slightly and can feel warming if you are already overheated or prone to heartburn.",
    interactions:
      "Blood thinners and antiplatelet medications — additive bleeding risk. Diabetes medications — may mildly lower blood sugar further. Blood pressure medications — possible additive effect.",
    thyroidNote:
      "Generally supportive for thyroid patients dealing with sluggish digestion, inflammation, or feeling cold. Monitor tolerance if reflux is part of your symptom pattern.",
    warnLevel: "caution",
  },
  {
    name: "Moringa",
    latin: "Moringa oleifera",
    letter: "M",
    emoji: "🌿",
    photo: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=250&fit=crop",
    origin: ["India", "East Africa", "Tropical and subtropical regions"],
    categories: ["Nutrition", "Energy", "Antioxidant", "Blood Sugar"],
    benefits: [
      "Dense source of plant nutrients and antioxidants",
      "Supports steady energy and recovery when overall intake is low",
      "May help with blood sugar regulation",
      "Provides polyphenols that support inflammation balance",
      "Useful as a food-forward supplement for nutrient repletion",
    ],
    compounds: "Quercetin, chlorogenic acid, carotenoids, vitamin C, minerals",
    howToUse:
      "Powder in smoothies, soups, or capsules. Start with small amounts because the taste is strong and the fiber can be stimulating at first.",
    cautions:
      "Leaf is generally well tolerated, but concentrated products can be too much for sensitive digestion. Avoid root and bark preparations unless working with a qualified practitioner.",
    interactions:
      "Blood sugar medications — additive glucose lowering. Blood pressure medications — possible additive effect. Thyroid medications — separate by a few hours if using concentrated powders regularly.",
    thyroidNote:
      "Food-like and generally helpful when low energy overlaps with poor nutrition. Keep it separate from thyroid medication until you know how your body responds.",
    warnLevel: "safe",
  },
  {
    name: "Nettle",
    latin: "Urtica dioica",
    letter: "N",
    emoji: "🌱",
    photo: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=400&h=250&fit=crop",
    origin: ["Europe", "North America", "Asia", "Temperate climates worldwide"],
    categories: ["Mineral Support", "Allergy Support", "Energy", "Kidney Support"],
    benefits: [
      "Provides iron, magnesium, calcium, and trace minerals in food form",
      "May reduce seasonal allergy symptoms",
      "Supports energy when mineral intake is low",
      "Helps fluid balance and gentle kidney support",
      "Traditionally used to strengthen hair and nails over time",
    ],
    compounds: "Chlorophyll, silica, carotenoids, minerals, flavonoids",
    howToUse:
      "Tea, infusion, capsules, or cooked greens. Long infusions are especially useful when you want food-like mineral support instead of a stimulant effect.",
    cautions:
      "May increase urination. Use care with severe kidney disease or if dehydration is already an issue. Fresh plant can sting before processing.",
    interactions:
      "Diuretics — additive effect. Blood pressure medications — may enhance lowering. Blood sugar medications — possible mild additive effect. Lithium — monitor closely.",
    thyroidNote:
      "Often a good support herb when thyroid issues overlap with fatigue and low mineral intake. It is supportive, but not a substitute for targeted iron or thyroid treatment when needed.",
    warnLevel: "safe",
  },
  {
    name: "Lavender Essential Oil",
    latin: "Lavandula angustifolia",
    letter: "L",
    emoji: "💜",
    entryType: "Essential Oil",
    photo: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=250&fit=crop",
    origin: ["Mediterranean", "France", "Widely distilled worldwide"],
    categories: ["Sleep", "Anxiety", "Nervous System", "Skin"],
    benefits: [
      "Promotes calm and improves sleep quality",
      "Can reduce mild anxiety and tension when inhaled",
      "Supports topical skin soothing when properly diluted",
      "Useful for bedtime routines, headaches, and stress decompression",
    ],
    compounds: "Linalool, linalyl acetate, terpinen-4-ol",
    howToUse:
      "Diffuse, inhale from hands, or dilute in a carrier oil for topical use. A few drops in a diffuser or on a pillow is often enough.",
    cautions:
      "Do not ingest casually. Undiluted use can irritate skin. Keep away from eyes and use carefully around very young children and pets.",
    interactions:
      "Sedatives, sleep medications, and alcohol — may add to drowsiness. Topical use may irritate highly sensitive skin or eczema-prone areas if not diluted.",
    thyroidNote:
      "Helpful as supportive nervous-system care when thyroid symptoms disturb sleep or increase anxiety. It supports stress regulation but does not replace thyroid treatment.",
    warnLevel: "safe",
  },
  {
    name: "Peppermint Essential Oil",
    latin: "Mentha x piperita",
    letter: "P",
    emoji: "🌿",
    entryType: "Essential Oil",
    photo: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400&h=250&fit=crop",
    origin: ["Europe", "North America", "Widely cultivated worldwide"],
    categories: ["Digestion", "Headache Support", "Focus", "Respiratory"],
    benefits: [
      "Can ease tension headaches when diluted and applied topically",
      "Supports digestive comfort and nausea relief through aroma or diluted topical use",
      "May improve alertness and mental clarity",
      "Can help create an open breathing sensation",
    ],
    compounds: "Menthol, menthone, menthyl acetate",
    howToUse:
      "Dilute in carrier oil for temples or abdomen, or diffuse briefly for aroma support. Use lightly because it is potent.",
    cautions:
      "Can trigger reflux, feel too intense on sensitive skin, and should be kept away from infants' faces. Never apply undiluted near eyes.",
    interactions:
      "Antacids and reflux medications — may worsen reflux if overused. Sensitive skin treatments — may irritate. Certain breathing conditions may react to strong menthol exposure.",
    thyroidNote:
      "Useful for fatigue, headaches, and mental fog, but not ideal if your thyroid symptom pattern includes reflux, palpitations, or feeling overstimulated.",
    warnLevel: "caution",
  },
  {
    name: "Tea Tree Essential Oil",
    latin: "Melaleuca alternifolia",
    letter: "T",
    emoji: "🌲",
    entryType: "Essential Oil",
    photo: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=250&fit=crop",
    origin: ["Australia", "Commercially distilled worldwide"],
    categories: ["Skin", "Antimicrobial", "Scalp Care"],
    benefits: [
      "Supports topical care for acne-prone skin",
      "May reduce fungal burden in minor skin or scalp issues",
      "Useful for scalp hygiene and occasional blemish care",
      "Provides strong cleansing support in diluted topical blends",
    ],
    compounds: "Terpinen-4-ol, gamma-terpinene, alpha-terpinene",
    howToUse:
      "Dilute in carrier oil, shampoo, or a spot-treatment blend. Patch test before broader use.",
    cautions:
      "For external use only. Toxic if swallowed. Strong enough to irritate broken skin or highly sensitive areas if not diluted.",
    interactions:
      "Topical acne acids, retinoids, benzoyl peroxide, or eczema-prone skin — can amplify irritation. Avoid use on pets unless directed by a veterinarian.",
    thyroidNote:
      "No direct thyroid interaction is known. It is most relevant for people managing skin or scalp issues that worsened during hormonal or metabolic stress.",
    warnLevel: "caution",
  },
  {
    name: "Vitamin B12",
    latin: "Cobalamin",
    letter: "V",
    emoji: "🔴",
    entryType: "Vitamin",
    photo: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=250&fit=crop",
    origin: ["Animal foods", "Fortified foods", "Supplement forms such as methylcobalamin and cyanocobalamin"],
    categories: ["Energy", "Nervous System", "Brain Health", "Nutrient Repletion"],
    benefits: [
      "Supports red blood cell production and oxygen delivery",
      "Critical for nerve health and neurological function",
      "Helps address fatigue related to deficiency",
      "Important for mood, cognition, and methylation support",
    ],
    compounds: "Methylcobalamin, adenosylcobalamin, cyanocobalamin, hydroxocobalamin",
    howToUse:
      "Use food, oral supplements, or injections depending on deficiency severity and absorption status. Lab-guided dosing is best if symptoms are significant.",
    cautions:
      "Usually very safe, but a normal serum level does not always rule out functional deficiency. Investigate low stomach acid, pernicious anemia, or absorption problems if symptoms persist.",
    interactions:
      "Metformin and acid-suppressing medications can reduce absorption over time. Nitrous oxide exposure can inactivate B12. Certain antibiotics may affect lab interpretation.",
    thyroidNote:
      "B12 deficiency commonly overlaps with autoimmune thyroid disease and can mimic hypothyroid fatigue, neuropathy, and brain fog. It is worth checking when symptoms feel disproportionate.",
    warnLevel: "safe",
  },
  {
    name: "Magnesium",
    latin: "Magnesium glycinate / citrate / malate",
    letter: "M",
    emoji: "⚪",
    entryType: "Mineral",
    photo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop",
    origin: ["Leafy greens", "Legumes", "Seeds", "Supplemental mineral salts"],
    categories: ["Sleep", "Stress & Adrenal", "Muscle Recovery", "Nervous System"],
    benefits: [
      "Supports sleep quality and nervous-system regulation",
      "Helps with muscle cramps, tension, and constipation depending on form",
      "Useful for stress resilience and recovery",
      "Participates in hundreds of enzymatic reactions tied to energy production",
    ],
    compounds: "Magnesium glycinate, citrate, malate, threonate, oxide",
    howToUse:
      "Choose form based on goal: glycinate for calm and sleep, citrate for constipation, malate for muscles and energy. Start low and increase slowly.",
    cautions:
      "Higher doses can loosen stools. Use care with significant kidney disease because excess magnesium may accumulate.",
    interactions:
      "Levothyroxine, iron, calcium, tetracycline antibiotics, and bisphosphonates — separate by at least 4 hours because magnesium can reduce absorption.",
    thyroidNote:
      "Very useful for thyroid patients dealing with poor sleep, constipation, tension, and stress. Just keep it well separated from thyroid medication.",
    warnLevel: "caution",
  },
  {
    name: "Selenium",
    latin: "Selenomethionine",
    letter: "S",
    emoji: "🟠",
    entryType: "Mineral",
    photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
    origin: ["Brazil nuts", "Seafood", "Eggs", "Supplement forms"],
    categories: ["Thyroid Support", "Antioxidant", "Nutrient Repletion"],
    benefits: [
      "Supports thyroid hormone metabolism and antioxidant protection",
      "May help reduce thyroid antibody activity in some Hashimoto's cases",
      "Protects tissues from oxidative stress",
      "Supports fertility and immune resilience",
    ],
    compounds: "Selenomethionine, selenium yeast, selenite",
    howToUse:
      "Food-first is ideal when possible. If supplementing, use modest doses and avoid stacking multiple selenium products without checking totals.",
    cautions:
      "Too much selenium is a real problem and can cause hair loss, nail changes, GI upset, and fatigue. More is not better.",
    interactions:
      "Chemotherapy plans and high-dose antioxidant protocols should be discussed with a clinician. Multiple multivitamins or thyroid blends can unintentionally double up selenium.",
    thyroidNote:
      "Relevant for thyroid health, especially Hashimoto's, but it needs measured dosing. This is a support mineral, not something to megadose.",
    warnLevel: "caution",
  },
  {
    name: "Zinc",
    latin: "Zinc picolinate / citrate / gluconate",
    letter: "Z",
    emoji: "🔹",
    entryType: "Mineral",
    photo: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop",
    origin: ["Shellfish", "Meat", "Pumpkin seeds", "Supplement forms"],
    categories: ["Immune", "Skin", "Hormonal Balance", "Nutrient Repletion"],
    benefits: [
      "Supports immune defense and wound healing",
      "Important for thyroid hormone conversion and receptor function",
      "Helps skin repair and barrier support",
      "Can support taste, smell, and recovery when deficient",
    ],
    compounds: "Zinc picolinate, zinc citrate, zinc gluconate, zinc carnosine",
    howToUse:
      "Take with food to avoid nausea. Daily use should stay balanced and not ignore copper intake if taken long term.",
    cautions:
      "High doses can cause nausea and long-term overuse can deplete copper. Lozenges and supplements are useful, but not as unlimited daily insurance.",
    interactions:
      "Thyroid medication, iron, calcium, magnesium, and antibiotics such as tetracyclines and quinolones — separate by several hours to protect absorption.",
    thyroidNote:
      "Useful for thyroid support when deficiency is present, but timing matters because it can interfere with levothyroxine absorption.",
    warnLevel: "caution",
  },
  {
    name: "Iron",
    latin: "Ferrous bisglycinate / ferrous sulfate",
    letter: "I",
    emoji: "🩸",
    entryType: "Mineral",
    photo: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    origin: ["Red meat", "Legumes", "Leafy greens", "Supplement forms"],
    categories: ["Energy", "Mineral Support", "Hair Support", "Nutrient Repletion"],
    benefits: [
      "Supports oxygen transport and energy production",
      "Can improve fatigue, hair shedding, and exercise tolerance when deficiency is present",
      "Important for menstruating women and anyone with low ferritin",
      "Works alongside thyroid care because low iron can worsen hypothyroid symptoms",
    ],
    compounds: "Heme iron, ferrous bisglycinate, ferrous sulfate, ferric citrate",
    howToUse:
      "Use based on labs, especially ferritin, hemoglobin, and iron saturation. Pair with vitamin C when appropriate and monitor response over time.",
    cautions:
      "Do not supplement blindly if you have not confirmed need. Iron overload is dangerous. Constipation and nausea are common with some forms.",
    interactions:
      "Levothyroxine — major absorption interference; separate by at least 4 hours. Calcium, magnesium, zinc, coffee, tea, and some medications reduce iron absorption.",
    thyroidNote:
      "Low ferritin can make thyroid recovery feel incomplete. If you are still exhausted, losing hair, or cold despite treatment, iron status is worth checking carefully.",
    warnLevel: "warning",
  },
];

// ─── Category filters ─────────────────────────────────────────────────────
const ALL_CATEGORIES = ["All", ...Array.from(new Set(herbs.flatMap((entry) => entry.categories))).sort()];

const ENTRY_TYPES = ["All", "Herb", "Essential Oil", "Vitamin", "Mineral"] as const;

const LETTERS = ["All", ...Array.from(new Set(herbs.map((h) => h.letter))).sort()];

// ─── Page ─────────────────────────────────────────────────────────────────
export default function HerbDictionary() {
  const [search, setSearch] = useState("");
  const [letter, setLetter] = useState("All");
  const [category, setCategory] = useState("All");
  const [entryType, setEntryType] = useState<(typeof ENTRY_TYPES)[number]>("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return herbs.filter((h) => {
      const normalizedEntryType = h.entryType ?? "Herb";
      const matchesSearch =
        !search ||
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.latin.toLowerCase().includes(search.toLowerCase()) ||
        h.benefits.some((b) => b.toLowerCase().includes(search.toLowerCase())) ||
        h.origin.some((o) => o.toLowerCase().includes(search.toLowerCase())) ||
        h.categories.some((c) => c.toLowerCase().includes(search.toLowerCase()));
      const matchesLetter = letter === "All" || h.letter === letter;
      const matchesCategory =
        category === "All" || h.categories.includes(category);
      const matchesEntryType = entryType === "All" || normalizedEntryType === entryType;
      return matchesSearch && matchesLetter && matchesCategory && matchesEntryType;
    });
  }, [search, letter, category, entryType]);

  const warnColors = {
    safe: "bg-green-50 border-green-200 text-green-800",
    caution: "bg-amber-50 border-amber-200 text-amber-800",
    warning: "bg-red-50 border-red-200 text-red-800",
  };
  const warnBadge = {
    safe: "bg-green-100 text-green-800",
    caution: "bg-amber-100 text-amber-800",
    warning: "bg-red-100 text-red-800",
  };
  const warnLabel = { safe: "Generally Safe", caution: "Use With Care", warning: "Significant Cautions" };

  return (
    <>
      <SEO
        title="A-Z Natural Wellness Reference — Herbs, Oils, Vitamins & Minerals"
        description="Comprehensive guide to herbs, essential oils, vitamins, and minerals with benefits, cautions, drug interactions, and thyroid-specific safety notes."
        keywords={["herb dictionary", "essential oils", "vitamins", "minerals", "natural remedies", "ashwagandha", "turmeric", "thyroid support", "holistic health"]}
        url="/herbs"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Holistic Wellness Library</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
            A–Z Natural Wellness <span className="text-primary">Reference</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Real information about herbs, essential oils, vitamins, and minerals, including{" "}
            <strong>benefits, cautions, and thyroid-aware guidance before you use them</strong>.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            {herbs.length} entries documented · Updated April 2026
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border-y border-amber-200 py-3">
        <div className="container text-center">
          <p className="text-sm text-amber-800 flex items-center justify-center gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>
              <strong>Educational resource only.</strong> This is not medical advice. Always
              consult your healthcare provider, especially if you take prescription medications or
              have thyroid disease.
            </span>
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <section className="py-8 bg-background border-b sticky top-0 z-20 shadow-sm">
        <div className="container space-y-4">
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search herbs, oils, vitamins, minerals, benefits, or region..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {ENTRY_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setEntryType(type)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  entryType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* A-Z letters */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {LETTERS.map((l) => (
              <button
                key={l}
                onClick={() => setLetter(l)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  letter === l
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  category === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            {filtered.length} entr{filtered.length !== 1 ? "ies" : "y"} found
          </p>
        </div>
      </section>

      {/* Herb Cards */}
      <section className="py-12 bg-background">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Leaf className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No entries match your search.</p>
              <Button variant="outline" className="mt-4" onClick={() => { setSearch(""); setLetter("All"); setCategory("All"); setEntryType("All"); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((herb) => {
                const isOpen = expanded === herb.name;
                const normalizedEntryType = herb.entryType ?? "Herb";
                return (
                  <Card
                    key={herb.name}
                    className={`overflow-hidden border-2 transition-all duration-300 ${
                      isOpen ? "border-primary/50 shadow-xl" : "border-border hover:border-primary/30 hover:shadow-lg"
                    }`}
                  >
                    {/* Photo */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={herb.photo}
                        alt={herb.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="400"
                        height="176"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                              {normalizedEntryType}
                            </p>
                            <h2 className="text-white font-bold text-lg leading-tight drop-shadow">
                              {herb.emoji} {herb.name}
                            </h2>
                            <p className="text-white/80 text-xs italic">{herb.latin}</p>
                          </div>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${warnBadge[herb.warnLevel]}`}>
                            {warnLabel[herb.warnLevel]}
                          </span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 space-y-3">
                      {/* Origin */}
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                        <span>{herb.origin.join(" · ")}</span>
                      </div>

                      {/* Category badges */}
                      <div className="flex flex-wrap gap-1">
                        {herb.categories.slice(0, 4).map((cat) => (
                          <Badge key={cat} variant="secondary" className="text-xs font-medium">
                            {cat}
                          </Badge>
                        ))}
                      </div>

                      {/* Top benefits preview */}
                      <ul className="text-sm space-y-1">
                        {herb.benefits.slice(0, isOpen ? undefined : 3).map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Zap className="h-3 w-3 mt-0.5 text-accent shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Thyroid note preview */}
                      {herb.thyroidNote && !isOpen && (
                        <div className={`text-xs p-2 rounded-lg border ${warnColors[herb.warnLevel]}`}>
                          <strong>Thyroid:</strong> {herb.thyroidNote.substring(0, 80)}…
                        </div>
                      )}

                      {/* Expanded details */}
                      {isOpen && (
                        <div className="space-y-4 pt-1 border-t border-border">
                          {/* Active compounds */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                              Active Compounds
                            </h4>
                            <p className="text-sm">{herb.compounds}</p>
                          </div>

                          {/* How to use */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1 flex items-center gap-1">
                              <Leaf className="h-3 w-3" /> How to Use
                            </h4>
                            <p className="text-sm leading-relaxed">{herb.howToUse}</p>
                          </div>

                          {/* Cautions */}
                          <div className={`p-3 rounded-xl border text-sm ${warnColors[herb.warnLevel]}`}>
                            <h4 className="font-bold mb-1 flex items-center gap-1">
                              <AlertTriangle className="h-3.5 w-3.5" /> Cautions
                            </h4>
                            <p>{herb.cautions}</p>
                          </div>

                          {/* Interactions */}
                          <div className="p-3 rounded-xl border border-orange-200 bg-orange-50 text-orange-900 text-sm">
                            <h4 className="font-bold mb-1 flex items-center gap-1">
                              <Info className="h-3.5 w-3.5" /> Drug Interactions
                            </h4>
                            <p>{herb.interactions}</p>
                          </div>

                          {/* Thyroid note */}
                          {herb.thyroidNote && (
                            <div className={`p-3 rounded-xl border text-sm ${warnColors[herb.warnLevel]}`}>
                              <h4 className="font-bold mb-1">🦋 Thyroid Patient Note</h4>
                              <p>{herb.thyroidNote}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Expand/collapse toggle */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setExpanded(isOpen ? null : herb.name)}
                      >
                        {isOpen ? (
                          <><ChevronUp className="h-3.5 w-3.5 mr-1" /> Show Less</>
                        ) : (
                          <><ChevronDown className="h-3.5 w-3.5 mr-1" /> Full Details, Interactions & Thyroid Notes</>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/20 border-t">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Ready to Go Deeper?
          </h2>
          <p className="text-muted-foreground mb-8">
            Understanding herbs is just one piece of holistic thyroid healing. Get the complete
            blueprint in the Thyroid Health Mastery Course.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/course/thyroid-health-mastery">
              <Button size="lg" className="gap-2 rounded-3xl px-8">
                <Leaf className="h-4 w-4" /> Thyroid Health Mastery Course
              </Button>
            </a>
            <a href="/clinical-recipes">
              <Button size="lg" variant="outline" className="gap-2 rounded-3xl px-8">
                Clinical Food RX →
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
