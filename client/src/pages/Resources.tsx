import { ExternalLink, Mail, Globe } from 'lucide-react';

const Resources = () => {
  const partners = [
    {
      name: 'PG Parks & Planning',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/pg-parks.webp',
      mission: 'The Maryland-National Capital Park and Planning Commission enriches lives by creating exceptional parks and planning vibrant communities.',
      myConnection: "I'm honored to teach with PG Parks & Planning, sharing my passion for wellness and technology with our community. Their commitment to accessible recreation and education aligns perfectly with my mission to make health and tech knowledge available to everyone.",
      website: 'https://www.pgparks.com',
      contact: 'https://www.pgparks.com/contact',
    },
    {
      name: 'Microsoft',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/microsoft.webp',
      mission: 'Microsoft empowers every person and every organization on the planet to achieve more through innovative technology solutions.',
      myConnection: "My journey with Microsoft shaped my career in cloud technologies. As a Customer Engineer supporting clients like Phillips 66, Goldman Sachs, and Fidelity, I learned the power of technology to transform businesses and lives. This experience fuels my passion for teaching Azure and cloud solutions.",
      website: 'https://www.microsoft.com',
      contact: 'https://www.microsoft.com/contact',
    },
    {
      name: 'Johns Hopkins University',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/johns-hopkins.webp',
      mission: 'Johns Hopkins University is dedicated to educating students and cultivating their capacity for life-long learning, fostering independent and original research, and bringing the benefits of discovery to the world.',
      myConnection: "Currently expanding my expertise through Johns Hopkins' Agentic AI course, I'm exploring how artificial intelligence can revolutionize healthcare and wellness. This cutting-edge knowledge will enhance the Clinical Food RX app and future wellness technology solutions.",
      website: 'https://www.jhu.edu',
      contact: 'https://www.jhu.edu/contact',
    },
    {
      name: 'University of Maryland Global Campus (UMGC)',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/umgc.webp',
      mission: 'UMGC transforms lives through innovative and affordable educational opportunities that connect a diverse global community to credible, relevant knowledge.',
      myConnection: "Just one semester away from completing my BS in Web Design at UMGC! This journey has been about more than credentials—it's about mastering the craft of creating accessible, beautiful digital experiences that serve my community. Every lesson learned goes directly into building better wellness platforms.",
      website: 'https://www.umgc.edu',
      contact: 'https://www.umgc.edu/contact',
    },
    {
      name: 'Food 4 Families',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/food4families.webp',
      mission: 'Food 4 Families works to end hunger by providing nutritious food and resources to families in need throughout the DMV area.',
      myConnection: "Food security is health security. I'm passionate about partnering with Food 4 Families because wellness starts with access to nutritious food. Their work in our community directly supports the holistic health approach I advocate for—you can't heal if you can't eat well.",
      website: 'https://www.food4families.org',
      contact: 'mailto:info@food4families.org',
    },
    {
      name: 'FRESHFARM FoodPrints',
      logo: 'https://askdogoodassets.blob.core.windows.net/images/partners/freshfarm.webp',
      mission: 'FRESHFARM FoodPrints connects students to healthy food and the natural world through hands-on learning experiences in gardens, kitchens, and classrooms.',
      myConnection: "As someone who finds healing in gardening, I deeply appreciate FRESHFARM's mission to teach children where their food comes from. Their grow-cook-eat-learn approach mirrors my own wellness philosophy: understanding and connecting with our food is fundamental to health and healing.",
      website: 'https://www.freshfarm.org/foodprints',
      contact: 'https://www.freshfarm.org/contact',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
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
                {/* Logo Section */}
                <div className="md:w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full h-auto max-h-40 object-contain"
                  />
                </div>

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
              href="mailto:rosee@askdogood.com"
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
