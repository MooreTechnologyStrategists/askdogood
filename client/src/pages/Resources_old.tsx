import { ExternalLink, Mail, Globe, Download, Smartphone, Camera, UtensilsCrossed, ClipboardList, Leaf, Brain, Zap } from 'lucide-react';

const Resources = () => {
  const freeResources = [
    {
      title: '21-Day Plant-Based Reset Guide',
      description: 'Kickstart your healing journey with a comprehensive meal plan, shopping lists, and daily wellness tips.',
      downloadLink: 'https://askdogoodassets.blob.core.windows.net/downloads/21-day-reset-guide.pdf',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
      badge: 'Most Popular'
    },
    {
      title: 'Thyroid Lab Reference Sheet',
      description: 'Understand your thyroid labs like a pro. Print-friendly guide to TSH, T3, T4, and antibodies.',
      downloadLink: 'https://askdogoodassets.blob.core.windows.net/downloads/thyroid-lab-reference.pdf',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400',
      badge: 'Essential'
    },
    {
      title: 'Anti-Inflammatory Foods Cheat Sheet',
      description: 'Quick-reference guide to the best foods for reducing inflammation and supporting thyroid health.',
      downloadLink: 'https://askdogoodassets.blob.core.windows.net/downloads/anti-inflammatory-foods.pdf',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400',
      badge: 'Free'
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Health Apps & Tools Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-teal-100/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="inline-block bg-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-4 text-primary">
              Digital Health Apps & Tools
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Empower Your Healing Journey</h2>
            <p className="text-xl text-gray-700 mb-6">
              Free and premium digital tools designed for real-life healing, habit change, and wellness tracking. Built by a thyroid cancer survivor for women who want results, not just inspiration.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {/* LabelScanner App */}
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xs w-full flex flex-col items-center">
                <img src="/images/apps/labelscanner.png" alt="LabelScanner App" className="w-20 h-20 mb-3" />
                <h3 className="font-bold text-lg mb-1">LabelScanner</h3>
                <p className="text-sm text-gray-600 mb-3">Scan food labels, spot hidden ingredients, and make smarter choices in seconds.</p>
                <a href="/labelscanner" className="w-full">
                  <button className="w-full bg-primary text-white rounded-xl py-2 font-semibold hover:bg-primary/90 transition">Try Now</button>
                </a>
              </div>
              {/* MealPrep App */}
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xs w-full flex flex-col items-center">
                <img src="/images/apps/mealprep.png" alt="MealPrep App" className="w-20 h-20 mb-3" />
                <h3 className="font-bold text-lg mb-1">MealPrep</h3>
                <p className="text-sm text-gray-600 mb-3">Plan, prep, and track thyroid-friendly meals with ease. Includes shopping lists and batch cooking tips.</p>
                <a href="/mealprep" className="w-full">
                  <button className="w-full bg-primary text-white rounded-xl py-2 font-semibold hover:bg-primary/90 transition">Try Now</button>
                </a>
              </div>
              {/* Add more tools as needed */}
            </div>
            {/* Trust Badges & Social Proof */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                <span>4.9/5 User Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
                <span>3,500+ Women Helped</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm">
                <span>Evidence-Based & Tested</span>
              </div>
            </div>
            {/* Why AskDoGood Tools? */}
            <div className="mt-10 max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-teal-100/10 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-2 text-primary">Why AskDoGood vs. Generic Apps?</h4>
              <ul className="text-left text-gray-700 text-sm space-y-2">
                <li>• Built for Black women, by a thyroid cancer survivor who’s lived it</li>
                <li>• Focused on real results, not just tracking</li>
                <li>• Integrates with your healing journey and community</li>
                <li>• 100% privacy—your data is never sold</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Wellness Tools Bar */}
      <section className="py-12 bg-gradient-to-r from-teal-100/30 to-pink-100/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">Shop Wellness Tools</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="https://gumroad.com/l/thyroid-health-mastery" target="_blank" rel="noopener noreferrer" className="max-w-xs w-full">
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition">
                  <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400" alt="Thyroid Health Mastery Course" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <h4 className="font-bold text-lg mb-1">Thyroid Health Mastery Course</h4>
                  <p className="text-sm mb-2">$97</p>
                  <button className="w-full bg-primary text-white rounded-xl py-2 font-semibold hover:bg-primary/90 transition">Buy Now</button>
                </div>
              </a>
              <a href="https://gumroad.com/l/21-day-plant-based-reset" target="_blank" rel="noopener noreferrer" className="max-w-xs w-full">
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition">
                  <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400" alt="21-Day Plant-Based Reset" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <h4 className="font-bold text-lg mb-1">21-Day Plant-Based Reset</h4>
                  <p className="text-sm mb-2">$47</p>
                  <button className="w-full bg-primary text-white rounded-xl py-2 font-semibold hover:bg-primary/90 transition">Buy Now</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20"
        style={{
          backgroundImage: 'url(https://askdogoodassets.blob.core.windows.net/images/hero/resources-hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Community & Collaboration
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Resources & Partners
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 leading-relaxed">
              Building wellness together through education, technology, and community support
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}
              >
                {/* Image Section - Community in Action */}
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
                
                {/* Fallback Logo Section if no image */}
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
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Goodwill of Greater Washington:</strong> Multiple locations, great for professional pieces and hidden gems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Value Village (Wheaton):</strong> Huge selection, organized by color—makes thrifting easy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Friendship Thrift (multiple locations):</strong> Supports community programs, clean and curated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Annie's Boutique (Capitol Hill):</strong> Designer consignment, when you want to splurge smart</span>
                  </li>
                </ul>
              </div>

              {/* Maryland */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🦀</span> Maryland
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Unique Thrift Store (Hyattsville, Laurel):</strong> My go-to for everyday finds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Plato's Closet (multiple locations):</strong> Name brands at thrift prices, perfect for streetwear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Second Chance (Baltimore):</strong> Not just clothes—furniture, home goods, creative finds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Poshmark/Mercari:</strong> Online thrifting from Maryland sellers—shop from the couch</span>
                  </li>
                </ul>
              </div>

              {/* Virginia */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🌳</span> Virginia
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Goodwill of Greater Washington (Alexandria, Arlington):</strong> Professional wear heaven</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Clarendon Poshmark Boutique:</strong> Curated secondhand, Instagram-worthy finds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Unique Thrift (Fairfax):</strong> Large selection, organized racks</span>
                  </li>
                </ul>
              </div>

              {/* North Carolina */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🌲</span> North Carolina
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Buffalo Exchange (Durham, Chapel Hill):</strong> Buy-sell-trade, great for trendy pieces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Father & Son Antiques (Asheville):</strong> Vintage clothing and unique statement pieces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Goodwill (Charlotte, Raleigh):</strong> Multiple locations with rotating stock</span>
                  </li>
                </ul>
              </div>

              {/* South Carolina */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🌊</span> South Carolina
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Palmetto Goodwill (Charleston, Columbia):</strong> Southern style meets thrift prices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>It's a New Beginning Thrift (Myrtle Beach):</strong> Beach vibes, affordable finds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Southern Thrift (Greenville):</strong> Family-friendly, great for basics</span>
                  </li>
                </ul>
              </div>

              {/* New York */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-teal-600">🗽</span> New York
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Housing Works (Manhattan, Brooklyn):</strong> Designer pieces, supports housing + HIV/AIDS services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Beacon's Closet (Brooklyn, Queens):</strong> Trendsetter central, curated vintage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>L Train Vintage (Brooklyn):</strong> Instagram-famous for a reason</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span><strong>Buffalo Exchange (Manhattan):</strong> Affordable, always rotating stock</span>
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
