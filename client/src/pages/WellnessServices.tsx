import {PageIntro} from '@/components/Experience';
import WellnessPaths from '@/components/WellnessPaths';
import {DERSFoundation, EverydayWellnessOffer, WellnessPlanStarter} from '@/components/EverydayWellness';
export default function WellnessServices(){return <div className="adg-page"><PageIntro eyebrow="Eat Well · Spend Less · Find Your Next Step" title="A healthier week starts with a workable plan." text="Practical wellness education built around Diet, Exercise, Rest, and Spiritual practice. Choose a guided workshop, try a free plan starter, or explore a self-paced toolkit." /><EverydayWellnessOffer /><DERSFoundation /><WellnessPlanStarter /><div className="container"><WellnessPaths /></div></div>;}
