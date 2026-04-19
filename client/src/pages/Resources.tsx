import { ExternalLink, Mail, Globe, Download, Smartphone, Camera, UtensilsCrossed, ClipboardList, Leaf, Brain, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { trackEvent, trackLeadMagnetDownload } from '@/lib/analytics';
import { catalogById, hasLiveCheckout } from '@/data/catalog';
import ResourcesHeader from '@/components/ResourcesHeader';

type ResourceVisual = {
  backgroundImage?: string;
  logo?: string;
  logoAlt?: string;
  watermark?: string;
  accentClass: string;
  overlayClass: string;
};

const Resources = () => {
  const freeResources = [
    {
      title: '21-Day Plant-Based Reset Guide',
      description: 'A structured PDF guide with a 21-day plant-based meal plan, grocery lists, and daily prompts you can actually follow week by week.',
      downloadLink: 'https://askdogoodassets.blob.core.windows.net/downloads/21-day-reset-guide.pdf',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
      badge: 'Most Popular',
      visual: {
        watermark: '21-Day Reset',
        accentClass: 'from-emerald-600/18 via-emerald-500/6 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_32%)]',
      } as ResourceVisual,
    },
    {
      title: 'Thyroid Lab Reference Sheet',
      description: 'A print-friendly lab reference covering common thyroid markers like TSH, T3, T4, and antibodies so appointments are easier to follow.',
      downloadLink: 'https://askdogoodassets.blob.core.windows.net/downloads/thyroid-lab-reference.pdf',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400',
      badge: 'Essential',
      visual: {
        watermark: 'Lab Guide',
        accentClass: 'from-sky-600/18 via-sky-500/6 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.2),_transparent_32%)]',
      } as ResourceVisual,
    },
    {
      title: 'Anti-Inflammatory Foods Cheat Sheet',
      description: 'A quick food list focused on anti-inflammatory staples, simple swaps, and ingredient categories that support day-to-day meal planning.',
      downloadLink: 'https://askdogoodassets.blob.core.windows.net/downloads/anti-inflammatory-foods.pdf',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400',
      badge: 'Free',
      visual: {
        watermark: 'Food Cheat Sheet',
        accentClass: 'from-orange-500/20 via-orange-400/6 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.2),_transparent_32%)]',
      } as ResourceVisual,
    }
  ];

  const partners = [
    {
      name: 'PG Parks & Planning',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/pg-parks.png',
      image: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=800',
      mission: 'The Maryland-National Capital Park and Planning Commission enriches lives by creating exceptional parks and planning vibrant communities.',
      myConnection: "I'm honored to teach with PG Parks & Planning, sharing my passion for wellness and technology with our community. Their commitment to accessible recreation and education aligns perfectly with my mission to make health and tech knowledge available to everyone.",
      website: 'https://www.pgparks.com',
      contact: 'https://www.pgparks.com/contact',
    },
    {
      name: 'Microsoft',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/microsoft.png',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      mission: 'Microsoft empowers every person and every organization on the planet to achieve more through innovative technology solutions.',
      myConnection: 'My journey with Microsoft shaped my career in cloud technologies. As a Customer Engineer supporting clients like Phillips 66, Goldman Sachs, and Fidelity, I learned the power of technology to transform businesses and lives. This experience fuels my passion for teaching Azure and cloud solutions.',
      website: 'https://www.microsoft.com',
      contact: 'https://www.microsoft.com/contact',
    },
    {
      name: 'Johns Hopkins University',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/johns-hopkins.png',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
      mission: 'Johns Hopkins University is dedicated to educating students and cultivating their capacity for life-long learning, fostering independent and original research, and bringing the benefits of discovery to the world.',
      myConnection: "Currently expanding my expertise through Johns Hopkins' Agentic AI course, I'm exploring how artificial intelligence can revolutionize healthcare and wellness. This cutting-edge knowledge will enhance the Clinical Food RX app and future wellness technology solutions.",
      website: 'https://www.jhu.edu',
      contact: 'https://www.jhu.edu/contact',
    },
    {
      name: 'University of Maryland Global Campus (UMGC)',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/umgc.png',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      mission: 'UMGC transforms lives through innovative and affordable educational opportunities that connect a diverse global community to credible, relevant knowledge.',
      myConnection: "Just one semester away from completing my BS in Web Design at UMGC! This journey has been about more than credentials—it's about mastering the craft of creating accessible, beautiful digital experiences that serve my community. Every lesson learned goes directly into building better wellness platforms.",
      website: 'https://www.umgc.edu',
      contact: 'https://www.umgc.edu/contact',
    },
    {
      name: 'Food 4 Families',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/food4families.png',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      mission: 'Food 4 Families works to end hunger by providing nutritious food and resources to families in need throughout the DMV area.',
      myConnection: "Food security is health security. I'm passionate about partnering with Food 4 Families because wellness starts with access to nutritious food. Their work in our community directly supports the holistic health approach I advocate for—you can't heal if you can't eat well.",
      website: 'https://www.food4families.org',
      contact: 'mailto:info@food4families.org',
    },
    {
      name: 'FRESHFARM FoodPrints',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/freshfarm.png',
      image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=800',
      mission: 'FRESHFARM FoodPrints connects students to healthy food and the natural world through hands-on learning experiences in gardens, kitchens, and classrooms.',
      myConnection: "As someone who finds healing in gardening, I deeply appreciate FRESHFARM's mission to teach children where their food comes from. Their grow-cook-eat-learn approach mirrors my own wellness philosophy: understanding and connecting with our food is fundamental to health and healing.",
      website: 'https://www.freshfarm.org/foodprints',
      contact: 'https://www.freshfarm.org/contact',
    },
    {
      name: 'Washington Association of Black Journalists (WABJ)',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/wabj.png',
      image: 'https://images.unsplash.com/photo-1595503240812-7286dafaddc1?w=800',
      mission: 'The Washington Association of Black Journalists (WABJ) is dedicated to strengthening the ties among African American journalists and increasing diversity in newsrooms through programs like the Urban Journalism Workshop.',
      myConnection: "The Urban Journalism Workshop represents everything I believe about creating pipelines for the next generation. As someone who mentors and teaches, I'm passionate about programs that give high school students hands-on journalism experience and open doors to media careers. Their 40th anniversary in 2026 is a testament to building lasting impact—the kind of legacy work that inspires my own mission.",
      website: 'https://www.wabjdc.org',
      contact: 'https://www.wabjdc.org/contact',
    },
  ];

  const premiumProducts = [
    catalogById['thyroid-health-mastery'],
    catalogById['21-day-plant-based-reset'],
  ].filter(Boolean);

  const dmvResources = [
    {
      title: 'PG Parks Classes and Community Programs',
      description: 'Explore Prince George\'s County classes, recreation, family activities, nature programming, and community wellness opportunities.',
      url: 'https://www.pgparks.com',
      badge: 'Prince George\'s County',
      visual: {
        logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/pg-parks.png',
        logoAlt: 'PG Parks & Planning logo',
        accentClass: 'from-emerald-700/18 via-emerald-600/6 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(5,150,105,0.22),_transparent_34%)]',
      } as ResourceVisual,
    },
    {
      title: 'Prince George\'s County Health Department',
      description: 'Local health information, prevention resources, clinics, and public-health updates for county residents.',
      url: 'https://www.princegeorgescountymd.gov/departments-offices/health',
      badge: 'Health Access',
      visual: {
        watermark: 'PGC Health',
        accentClass: 'from-cyan-700/18 via-cyan-500/6 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(8,145,178,0.2),_transparent_34%)]',
      } as ResourceVisual,
    },
    {
      title: 'NBC4 Washington Find Help',
      description: 'A practical NBC4 resource hub that points residents toward food, housing, legal, and family-support help across the DMV.',
      url: 'https://www.nbcwashington.com/community/in-the-community/working-4-you-to-find-help/4057895/',
      badge: 'NBC4 Community',
      visual: {
        watermark: 'NBC4 Washington',
        accentClass: 'from-amber-500/15 via-blue-600/10 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.14),_transparent_28%)]',
      } as ResourceVisual,
    },
    {
      title: 'NBCUniversal Local Impact Grants',
      description: 'Funding visibility for nonprofits and community builders doing meaningful work in DC, Maryland, and Virginia.',
      url: 'https://www.nbcwashington.com/community/nbcuniversal-local-impact-grants/',
      badge: 'Funding',
      visual: {
        watermark: 'Local Impact Grants',
        accentClass: 'from-violet-600/16 via-sky-500/8 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_36%)]',
      } as ResourceVisual,
    },
    {
      title: 'Food 4 Families',
      description: 'Food-access support and hunger-relief work that lines up closely with Ask DoGood\'s food-as-healing mission.',
      url: 'https://www.food4families.org/',
      badge: 'Food Support',
      visual: {
        logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/food4families.png',
        logoAlt: 'Food 4 Families logo',
        accentClass: 'from-orange-500/18 via-red-500/6 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.2),_transparent_34%)]',
      } as ResourceVisual,
    },
    {
      title: 'Fort Washington Food Pantry',
      description: 'Local pantry support and volunteer opportunities for families in and around Fort Washington and Prince George\'s County.',
      url: 'https://fortwashingtonfoodpantry.net/',
      badge: 'Local Pantry',
      visual: {
        watermark: 'Fort Washington Pantry',
        accentClass: 'from-rose-500/18 via-orange-500/6 to-transparent',
        overlayClass: 'bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.18),_transparent_34%)]',
      } as ResourceVisual,
    },
  ];

  const handleDownloadClick = (resourceTitle: string) => {
    trackLeadMagnetDownload(resourceTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'), '/resources');
  };

  const handleResourceClick = (resourceTitle: string, resourceUrl: string) => {
    trackEvent('dmv_resource_click', {
      resource_name: resourceTitle,
      resource_url: resourceUrl,
      page_path: '/resources',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <ResourcesHeader />
        </div>
      </section>

      {/* Free Lead Magnets Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div id="start-here" className="mb-12 rounded-[2rem] border border-primary/15 bg-gradient-to-r from-primary/5 via-white to-secondary/10 p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
                <div>
                  <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary mb-4">
                    AskDoGood Digital Library
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Tools that actually help you live better.
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    This is where I put real tools I've used, built, or stand behind. No fluff-just resources to help you move better, eat better, and take control of your life in a way that actually works.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/resources/start" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                      Start Here
                    </Link>
                    <Link href="/resources/library" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                      Browse All
                    </Link>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a href="/flipbooks/patuxent-river-blue-trail.html" className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary mb-2">New trail essay</p>
                    <h3 className="text-xl font-bold text-gray-900">Patuxent River Blue Trail</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">A longer article-style flipbook built from Blue Trail photos, river views, and grounded recovery language.</p>
                  </a>
                  <a href="/flipbooks/keep-moving.html" className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary mb-2">Series cover</p>
                    <h3 className="text-xl font-bold text-gray-900">Keep Moving</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">The editorial cover piece that frames why trails, movement, and public space matter inside this library.</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="inline-block bg-teal-100 px-4 py-2 rounded-full text-sm font-medium text-teal-700 mb-4">
                100% Free Downloads
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Free Guides Already Hosted Here
              </h2>
              <p className="text-xl text-gray-600">
                Downloadable PDFs focused on food, thyroid labs, and simple planning tools you can keep and print.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {freeResources.map((resource, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-shadow hover:shadow-xl">
                  <div className={`absolute inset-0 opacity-90 ${resource.visual.overlayClass}`} aria-hidden="true" />
                  <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${resource.visual.accentClass}`} aria-hidden="true" />
                  {resource.visual.watermark ? (
                    <div className="pointer-events-none absolute right-4 top-4 text-right text-[0.7rem] font-bold uppercase tracking-[0.32em] text-gray-300/80">
                      {resource.visual.watermark}
                    </div>
                  ) : null}
                  <div className="relative">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {resource.badge}
                      </span>
                    </div>
                  </div>
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    <a 
                      href={resource.downloadLink}
                      download
                      onClick={() => handleDownloadClick(resource.title)}
                      className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                    >
                      <Download className="w-5 h-5" />
                      Download Free
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                📧 <strong>Want more free resources?</strong> Join my email list for weekly healing tips and exclusive downloads.
              </p>
              <a 
                href="mailto:askdogood@gmail.com?subject=Free Resources"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5" />
                Get Weekly Tips
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Health Apps & Tools Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4 text-primary">
                <Smartphone className="w-4 h-4 inline mr-2" />
                Digital Health Apps
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Healing Tools in Your Pocket</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browser-based AskDoGood tools for label checks, meal planning, recipes, and symptom logging. These are working site features, not app-store downloads.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* LabelScanner App */}
              <div className="group relative overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.16),_transparent_34%)]" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 overflow-hidden rounded-3xl opacity-[0.14] transition-opacity duration-300 group-hover:opacity-[0.22]" aria-hidden="true">
                  <img src="/images/personal/food/vegetables-fresh.jpg" alt="" className="h-28 w-24 object-cover" />
                </div>
                <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 p-8 text-white text-center">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_transparent_55%)]" aria-hidden="true" />
                  <div className="absolute right-4 top-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/45">Scanner</div>
                  <Camera className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">LabelScanner</h3>
                  <p className="text-teal-100 text-sm">AI-Powered Food Analysis</p>
                </div>
                <div className="relative p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Use the site tool to review ingredient labels and flag additives or patterns you may want to avoid while shopping.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Instant ingredient analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Flags inflammatory ingredients</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Thyroid-safe alternatives</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Works in-store, no app needed</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 italic">
                    Best for: Grocery store decisions, pantry checks, and comparing packaged foods.
                  </p>
                  <Link href="/label-scanner" className="block">
                    <button className="w-full bg-teal-600 text-white rounded-xl py-3 font-semibold hover:bg-teal-700 transition">
                      Try Now - It's Free
                    </button>
                  </Link>
                </div>
              </div>

              {/* MealPrep App */}
              <div className="group relative overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.14),_transparent_34%)]" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 overflow-hidden rounded-3xl opacity-[0.14] transition-opacity duration-300 group-hover:opacity-[0.22]" aria-hidden="true">
                  <img src="/images/personal/food/meal-prep.jpg" alt="" className="h-28 w-24 object-cover" />
                </div>
                <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 p-8 text-white text-center">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_transparent_55%)]" aria-hidden="true" />
                  <div className="absolute right-4 top-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/45">Prep</div>
                  <UtensilsCrossed className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">MealPrep</h3>
                  <p className="text-pink-100 text-sm">Smart Meal Planning</p>
                </div>
                <div className="relative p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Build simple meal-prep plans from the browser with reusable weekly structure, shopping support, and batch-cooking prompts.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-pink-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Weekly meal plans</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-pink-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Auto-generated shopping lists</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-pink-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Batch cooking tips</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-pink-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Budget-friendly options</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 italic">
                    Best for: Busy weeks, repeat grocery lists, and planning food before the week starts.
                  </p>
                  <Link href="/meal-prep" className="block">
                    <button className="w-full bg-pink-600 text-white rounded-xl py-3 font-semibold hover:bg-pink-700 transition">
                      Try Now - It's Free
                    </button>
                  </Link>
                </div>
              </div>

              {/* Clinical Recipes App */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-orange-300 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_34%)]" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 overflow-hidden rounded-3xl opacity-[0.14] transition-opacity duration-300 group-hover:opacity-[0.22]" aria-hidden="true">
                  <img src="/images/personal/food/vegetables-roasted.jpg" alt="" className="h-28 w-24 object-cover" />
                </div>
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white text-center">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_transparent_55%)]" aria-hidden="true" />
                  <div className="absolute right-4 top-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/45">Recipes</div>
                  <Leaf className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Clinical Recipes</h3>
                  <p className="text-orange-100 text-sm">Food as Medicine</p>
                </div>
                <div className="relative p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Browse the recipe tool for food ideas organized around thyroid-friendly and anti-inflammatory eating patterns.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">100+ anti-inflammatory recipes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Nutrition breakdown per serving</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Filter by health condition</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Save your favorites</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 italic">
                    Best for: Finding meals to cook, browsing ingredients, and saving food ideas in one place.
                  </p>
                  <Link href="/clinical-recipes" className="block">
                    <button className="w-full bg-orange-600 text-white rounded-xl py-3 font-semibold hover:bg-orange-700 transition">
                      Explore Recipes
                    </button>
                  </Link>
                </div>
              </div>

              {/* Symptom Tracker + Herbs */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,83,45,0.15),_transparent_34%)]" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 overflow-hidden rounded-3xl opacity-[0.14] transition-opacity duration-300 group-hover:opacity-[0.22]" aria-hidden="true">
                  <img src="/images/personal/professional/clay-banks-hands-together.jpg" alt="" className="h-28 w-24 object-cover" />
                </div>
                <div className="relative bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground text-center">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.1),_transparent_55%)]" aria-hidden="true" />
                  <div className="absolute right-4 top-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary-foreground/40">Tracker</div>
                  <ClipboardList className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Symptom Tracker + Herbs</h3>
                  <p className="text-primary-foreground/80 text-sm">Track + Learn</p>
                </div>
                <div className="relative p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Track daily symptoms in the browser, then cross-check herb notes and safety guidance before trying something new.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Interactive in-browser symptom log</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Average trend snapshots for doctor visits</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">A-Z herb safety + interaction guidance</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/symptom-tracker" className="block">
                      <button className="w-full bg-primary text-primary-foreground rounded-xl py-3 font-semibold hover:bg-primary/90 transition">
                        Track Now
                      </button>
                    </Link>
                    <Link href="/herbs" className="block">
                      <button className="w-full bg-secondary text-foreground rounded-xl py-3 font-semibold hover:bg-secondary/80 transition border border-border">
                        Browse Herbs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                <span>Browser-based tools</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
                <span>Free to explore on site</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm">
                <span>No app store required</span>
              </div>
            </div>

            {/* Why AskDoGood Tools? */}
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-teal-100/10 rounded-xl p-8">
              <h4 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Why these tools fit the site
              </h4>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">•</span>
                  <span>They connect directly to the guides, flipbooks, and health topics already on AskDoGood.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">•</span>
                  <span>They are browser tools, so visitors can use them immediately without downloading anything first.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">•</span>
                  <span>They stay focused on practical food, symptom, and planning tasks instead of generic lifestyle prompts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">•</span>
                  <span>They extend the site's thyroid, food, and recovery content into something a visitor can actually use.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">•</span>
                  <span>No downloads, no app stores, and no extra platform switch just to get started.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DMV Resource Hub */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary mb-4">
                DMV Community Resource Hub
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Useful Local Support, Not Just Content
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Inspired by NBC4 Washington coverage of local community builders, small businesses, food-access work, and public resources, this section gives visitors practical next steps in the DMV.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
              {dmvResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleResourceClick(resource.title, resource.url)}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`absolute inset-0 ${resource.visual.overlayClass}`} aria-hidden="true" />
                  <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${resource.visual.accentClass}`} aria-hidden="true" />
                  {resource.visual.logo ? (
                    <div className="pointer-events-none absolute bottom-4 right-4 opacity-[0.16] transition-opacity duration-300 group-hover:opacity-[0.24]">
                      <img src={resource.visual.logo} alt={resource.visual.logoAlt || `${resource.title} logo`} className="h-20 w-auto object-contain" />
                    </div>
                  ) : null}
                  {resource.visual.watermark ? (
                    <div className="pointer-events-none absolute bottom-5 right-5 max-w-[11rem] text-right text-[0.78rem] font-bold uppercase tracking-[0.28em] text-gray-300">
                      {resource.visual.watermark}
                    </div>
                  ) : null}
                  <div className="relative flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                      {resource.badge}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 transition-colors group-hover:text-teal-600" />
                  </div>
                  <h3 className="relative text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="relative text-gray-600 leading-relaxed">{resource.description}</p>
                  <div className="relative mt-5 text-sm font-semibold text-teal-700">
                    Open Resource
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-gradient-to-r from-primary/5 via-white to-secondary/10 p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    What NBC4 community coverage reinforced
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The strongest local stories were not generic wellness stories. They were about food access, Prince George\'s County support systems, minority-owned businesses, grants, youth opportunity, and everyday people building healthier communities. That aligns directly with Ask DoGood's mission.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Food access and pantry support matter as much as inspiration.</li>
                    <li>Community wellness includes economic opportunity and education.</li>
                    <li>External resources should help visitors take a useful next step today.</li>
                  </ul>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
                  <p className="text-sm uppercase tracking-[0.22em] text-teal-700 font-semibold mb-3">Suggested next clicks</p>
                  <div className="space-y-3">
                    <a href="https://www.nbcwashington.com/tag/community/" target="_blank" rel="noopener noreferrer" onClick={() => handleResourceClick('NBC4 Community Stories', 'https://www.nbcwashington.com/tag/community/')} className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 px-4 py-3 hover:border-teal-200 hover:bg-teal-50 transition-colors">
                      <span className="font-medium text-gray-800">NBC4 Community Stories</span>
                      <ExternalLink className="w-4 h-4 text-teal-700" />
                    </a>
                    <a href="https://www.nbcwashington.com/tag/small-business/" target="_blank" rel="noopener noreferrer" onClick={() => handleResourceClick('NBC4 Small Business Stories', 'https://www.nbcwashington.com/tag/small-business/')} className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 px-4 py-3 hover:border-teal-200 hover:bg-teal-50 transition-colors">
                      <span className="font-medium text-gray-800">NBC4 Small Business Stories</span>
                      <ExternalLink className="w-4 h-4 text-teal-700" />
                    </a>
                    <a href="https://www.nbcwashington.com/tag/prince-georges-county/" target="_blank" rel="noopener noreferrer" onClick={() => handleResourceClick('NBC4 Prince George\'s County Stories', 'https://www.nbcwashington.com/tag/prince-georges-county/')} className="flex items-center justify-between gap-3 rounded-2xl border border-gray-100 px-4 py-3 hover:border-teal-200 hover:bg-teal-50 transition-colors">
                      <span className="font-medium text-gray-800">NBC4 Prince George's County Stories</span>
                      <ExternalLink className="w-4 h-4 text-teal-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Wellness Products Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-orange-100 px-4 py-2 rounded-full text-sm font-medium text-orange-700 mb-4">
                Premium Wellness Products
              </div>
              <h3 className="text-4xl font-bold mb-4 text-gray-900">
                Paid Programs And Digital Products
              </h3>
              <p className="text-xl text-gray-600">
                The current paid offers linked from the site for visitors who want more structure than the free library and tools provide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {premiumProducts.map((product) => (
                <div key={product.id} className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white shadow-lg transition-all hover:shadow-2xl h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.08),_transparent_34%)]" aria-hidden="true" />
                    <div className="absolute bottom-4 right-4 opacity-[0.1] transition-opacity duration-300 group-hover:opacity-[0.18]" aria-hidden="true">
                      <img
                        src={product.image}
                        alt=""
                        className="h-28 w-28 rounded-3xl object-cover"
                      />
                    </div>
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {product.status}
                        </span>
                      </div>
                    </div>
                    <div className="relative p-6">
                      <div className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal-700">
                        {product.category}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <ClipboardList className="w-4 h-4 text-teal-600" />
                          <span>{product.shortSummary}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <ClipboardList className="w-4 h-4 text-teal-600" />
                          <span>{product.category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <ClipboardList className="w-4 h-4 text-teal-600" />
                          <span>{product.cta}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-3xl font-bold text-teal-600">{product.priceLabel}</span>
                        {hasLiveCheckout(product) ? (
                          <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition">
                            View offer
                          </a>
                        ) : (
                          <Link href={product.internalPath || '/shop'} className="border border-teal-200 px-6 py-3 rounded-xl font-semibold text-teal-800 hover:bg-teal-50 transition">
                            Learn more
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <strong>30-Day Money-Back Guarantee</strong> · Core digital products include clear checkout and ongoing access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-teal-100 px-4 py-2 rounded-full text-sm font-medium text-teal-700 mb-4">
                Community & Collaboration
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Partners & Organizations
              </h2>
              <p className="text-xl text-gray-600">
                Building wellness together through education, technology, and community support
              </p>
            </div>

            <div className="space-y-12">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col md:flex`}
                >
                  {/* Image Section */}
                  {partner.image && (
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <img
                        src={partner.image}
                        alt={`${partner.name} community`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-w-[120px] h-auto bg-white/90 p-2 rounded"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Fallback Logo Section */}
                  {!partner.image && (
                    <div className="md:w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-w-full h-auto max-h-40 object-contain"
                      />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {partner.name}
                    </h2>

                    {/* Mission */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
                        Their Mission
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {partner.mission}
                      </p>
                    </div>

                    {/* My Connection */}
                    <div className="mb-6 bg-gradient-to-r from-teal-50 to-pink-50 p-4 rounded-lg border-l-4 border-teal-500">
                      <h3 className="text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                        My Connection
                      </h3>
                      <p className="text-gray-800 leading-relaxed italic">
                        {partner.myConnection}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
                      >
                        <Globe className="w-5 h-5" />
                        Visit Website
                      </a>
                      <a
                        href={partner.contact}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition-colors duration-200 font-medium"
                      >
                        {partner.contact.startsWith('mailto:') ? (
                          <Mail className="w-5 h-5" />
                        ) : (
                          <ExternalLink className="w-5 h-5" />
                        )}
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Style & Survival Resources Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-pink-100 px-4 py-2 rounded-full text-sm font-medium text-pink-700 mb-4">
                Thrift, Style & Survival
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Where I Find My Style
              </h2>
            </div>

            {/* Personal Style Story */}
            <div className="bg-gradient-to-r from-teal-50 to-pink-50 rounded-2xl p-8 mb-12 border-l-4 border-teal-500">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                My daughter says I'm a "very hip dresser"—and honestly, I'll take it! My style is uniquely mine: not necessarily dressy, but always intentional. I can be primp and proper, or tomboy with a splash of hood. You name it, I can pull it off.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Having always done hair, I keep mine perfectly <em>undone</em>—there's an art to that controlled chaos. And my wardrobe? It's built on thrift finds, second-hand treasures, and survival sources that prove you don't need a big budget to have big style.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Here are some of my go-to spots across DC, Maryland, Virginia, North Carolina, South Carolina, and New York—where I find pieces that tell a story and keep my look fresh without breaking the bank.
              </p>
            </div>

            {/* Thrift & Second-Hand Spots by Region */}
            <div className="space-y-8">
              {/* DC */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🏛️</span> Washington, DC
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100" alt="Goodwill" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.dcgoodwill.org" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Goodwill of Greater Washington
                      </a>
                      <p className="text-sm">Multiple locations, great for professional pieces and hidden gems</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=100" alt="Value Village" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://stores.savers.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Value Village (Wheaton)
                      </a>
                      <p className="text-sm">Huge selection, organized by color—makes thrifting easy</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1558769132-cb1aea2f1d12?w=100" alt="Friendship Thrift" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.friendshipplace.org" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Friendship Thrift (multiple locations)
                      </a>
                      <p className="text-sm">Supports community programs, clean and curated</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100" alt="Annie's Boutique" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.google.com/maps/search/Annie's+Boutique+Capitol+Hill" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Annie's Boutique (Capitol Hill)
                      </a>
                      <p className="text-sm">Designer consignment, when you want to splurge smart</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Maryland */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🦀</span> Maryland
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=100" alt="Unique Thrift" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.uniquethriftstore.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Unique Thrift Store (Hyattsville, Laurel)
                      </a>
                      <p className="text-sm">My go-to for everyday finds</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100" alt="Plato's Closet" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.platoscloset.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Plato's Closet (multiple locations)
                      </a>
                      <p className="text-sm">Name brands at thrift prices, perfect for streetwear</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100" alt="Second Chance" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.secondchanceinc.org" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Second Chance (Baltimore)
                      </a>
                      <p className="text-sm">Not just clothes—furniture, home goods, creative finds</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=100" alt="Online Thrifting" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.poshmark.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Poshmark
                      </a>
                      <span className="text-sm"> / </span>
                      <a href="https://www.mercari.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Mercari
                      </a>
                      <p className="text-sm">Online thrifting from Maryland sellers—shop from the couch</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Virginia */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🌳</span> Virginia
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=100" alt="Goodwill Virginia" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.dcgoodwill.org" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Goodwill of Greater Washington (Alexandria, Arlington)
                      </a>
                      <p className="text-sm">Professional wear heaven</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=100" alt="Boutique" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.google.com/maps/search/Clarendon+Poshmark+Boutique" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Clarendon Poshmark Boutique
                      </a>
                      <p className="text-sm">Curated secondhand, Instagram-worthy finds</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=100" alt="Unique Thrift Fairfax" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.uniquethriftstore.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Unique Thrift (Fairfax)
                      </a>
                      <p className="text-sm">Large selection, organized racks</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* North Carolina */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🌲</span> North Carolina
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100" alt="Buffalo Exchange" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.buffaloexchange.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Buffalo Exchange (Durham, Chapel Hill)
                      </a>
                      <p className="text-sm">Buy-sell-trade, great for trendy pieces</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=100" alt="Vintage Antiques" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.google.com/maps/search/Father+Son+Antiques+Asheville" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Father & Son Antiques (Asheville)
                      </a>
                      <p className="text-sm">Vintage clothing and unique statement pieces</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100" alt="Goodwill NC" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.goodwillnc.org" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Goodwill (Charlotte, Raleigh)
                      </a>
                      <p className="text-sm">Multiple locations with rotating stock</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* South Carolina */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🌊</span> South Carolina
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100" alt="Palmetto Goodwill" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.palmettogoodwill.org" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Palmetto Goodwill (Charleston, Columbia)
                      </a>
                      <p className="text-sm">Southern style meets thrift prices</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1488632276898-8d3f0c0b1c6c?w=100" alt="Beach Thrift" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.google.com/maps/search/Its+a+New+Beginning+Thrift+Myrtle+Beach" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        It's a New Beginning Thrift (Myrtle Beach)
                      </a>
                      <p className="text-sm">Beach vibes, affordable finds</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=100" alt="Southern Thrift" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.google.com/maps/search/Southern+Thrift+Greenville" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Southern Thrift (Greenville)
                      </a>
                      <p className="text-sm">Family-friendly, great for basics</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* New York */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🗽</span> New York
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=100" alt="Housing Works" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.housingworks.org" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Housing Works (Manhattan, Brooklyn)
                      </a>
                      <p className="text-sm">Designer pieces, supports housing + HIV/AIDS services</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100" alt="Beacon's Closet" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.beaconscloset.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Beacon's Closet (Brooklyn, Queens)
                      </a>
                      <p className="text-sm">Trendsetter central, curated vintage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100" alt="L Train Vintage" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.ltrainvintage.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        L Train Vintage (Brooklyn)
                      </a>
                      <p className="text-sm">Instagram-famous for a reason</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=100" alt="Buffalo Exchange NYC" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <a href="https://www.buffaloexchange.com" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline">
                        Buffalo Exchange (Manhattan)
                      </a>
                      <p className="text-sm">Affordable, always rotating stock</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="mt-12 bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💎 My Thrifting Pro Tips</h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Shop weekdays for less crowded racks and better finds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Look in the men's section for oversized tees, blazers, and vintage pieces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Check tags for quality fabrics: silk, linen, 100% cotton, wool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Don't skip the jewelry and accessories sections—that's where magic happens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>If you love it but it doesn't fit perfectly, consider tailoring—it's worth it</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Partner with Ask DoGood?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              I'm always looking to collaborate with organizations that share my commitment to wellness, education, and community empowerment.
            </p>
            <a
              href="mailto:askdogood@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg"
            >
              <Mail className="w-6 h-6" />
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
