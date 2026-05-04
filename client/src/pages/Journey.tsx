import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, GraduationCap, Shield, Heart, Rocket } from "lucide-react";
import PersistentCTABanner from '../components/PersistentCTABanner';

export default function Journey() {
  const phases = [
    {
      phase: "Phase 1: Foundation & Fracture",
      years: "1997–2004",
      title: "Building the Base",
      description:
        "My technical journey took off at North Carolina A&T in 1997, where the dream of working in technology became real. After facing mental health challenges during 2001-2003, I made a strategic reset—enrolling at TechSkills and earning my CompTIA A+ certification in 2004. This wasn't just recovery; it was recalibration with purpose. I also completed my AAIT at University of Phoenix, building the foundation for a career that would span government, finance, and enterprise tech.",
      image: "https://askdogoodassets.blob.core.windows.net/images/journey/ncat-foundation.webp",
      milestones: [
        "NCAT - where the technical dream started (1997–1998)",
        "Resilience through the 2001–2003 reset",
        "CompTIA A+ certified via TechSkills (2004)",
        "AAIT completed at University of Phoenix",
      ],
      icon: GraduationCap,
      certificationLogo: "https://askdogoodassets.blob.core.windows.net/images/certifications/comptia-aplus.png",
    },
    {
      phase: "Phase 2: Service & Discipline",
      years: "2004–2008",
      title: "Military Service & Personal Growth",
      description:
        "In August 2004, I joined the Army National Guard, 113th Battalion of North Carolina--stepping into a world of what I wanted to believe was discipline, resilience, and leadership. By 2007, I transitioned to the U.S. Army, attempting to take on more responsibility and deepening my commitment to service. I ended up with an Honorable Medical Discharge.  So in 2008, I quit smoking—-a personal upgrade that reflected my growing commitment to longevity, clarity, and self-respect.",
      image: "https://askdogoodassets.blob.core.windows.net/images/journey/military-service.webp",
      milestones: [
        "Army National Guard service (2004)",
        "U.S. Army transition (2007)",
        "Quit smoking for health (2008)",
      ],
      icon: Shield,
    },
    {
      phase: "Phase 3: Health Journey",
      years: "2016–2021",
      title: "Advocacy, Surgery & Survival",
      description:
        "In 2016, I first sensed something wasn't right with my health. It started a long journey of self-advocacy and listening to my body. On September 13, 2021, I had my thyroid removed—a major turning point. Post-surgery, cancer was identified (in situ), and I chose strategy, monitoring, and forward motion over fear. This chapter taught me the power of advocating for yourself when it matters most.",
      image: "https://askdogoodassets.blob.core.windows.net/images/journey/health-journey-thyroid.webp",
      milestones: [
        "First sensed health issues (2016)",
        "Thyroidectomy surgery (Sept 13, 2021)",
        "Cancer identified & strategic recovery",
      ],
      icon: Heart,
    },
    {
      phase: "Phase 4: Rebuilding & Legacy",
      years: "2024–Present",
      title: "Structure, Career & Mission",
      description:
        "Between 2024 and 2025, I re-centered around consistency: education, healing, and building a mission-driven platform. Currently pursuing Agentic AI at Johns Hopkins University and one semester away from my BS in Web Design at UMGC. In October 2025, I returned to Microsoft in a high-impact Azure security role—working on ADO, compliance, CodeQL scanning, Entra ID, and threat modeling. My career has spanned US Census Bureau, US Department of Energy, Synchrony Financial, LPL Financial, Kyndryl, and consulting for Goldman Sachs, Fidelity, M&T Bank, and Phillips 66. Now I teach at PG Parks & Planning and online at TheDopeCloudTeacher, while writing 'Starting From Scratch in the Basement' and building AskDoGood. I'm also an active member of NSBE (National Society of Black Engineers, originally joined at NCAT in 1997, reconnected in 2026) and serve with Blacks in Government, Region XI, Energy Chapter—because healing should create impact and community matters.",
      image: "https://askdogoodassets.blob.core.windows.net/images/journey/microsoft-azure-career.webp",
      milestones: [
        "Returned to Microsoft (Oct 2025)",
        "Teaching at PG Parks & Planning + TheDopeCloudTeacher",
        "Agentic AI at Johns Hopkins (current)",
        "BS Web Design - one semester away",
        "Writing book & building AskDoGood",
        "NSBE member (1997–present, reconnected 2026)",
        "Blacks in Government, Region XI, Energy Chapter",
      ],
      icon: Rocket,
      certificationLogos: [
        { name: "Azure Solutions Architect", logo: "https://askdogoodassets.blob.core.windows.net/images/certifications/azure-solutions-architect.png" },
        { name: "AWS Cloud Practitioner", logo: "https://askdogoodassets.blob.core.windows.net/images/certifications/aws-cloud-practitioner.png" },
        { name: "CompTIA Project+", logo: "https://askdogoodassets.blob.core.windows.net/images/certifications/comptia-project-plus.png" },
      ],
    },
  ];

  const keyAchievements = [
    {
      title: "Multi-Cloud Certified",
      description: "Azure Solutions Architect, AWS Cloud Practitioner, CompTIA A+ & Project+",
      icon: CheckCircle2,
      certifications: [
        { name: "Azure Solutions Architect", logo: "https://askdogoodassets.blob.core.windows.net/images/certifications/azure-solutions-architect.png" },
        { name: "AWS Cloud Practitioner", logo: "https://askdogoodassets.blob.core.windows.net/images/certifications/aws-cloud-practitioner.png" },
        { name: "CompTIA A+", logo: "https://askdogoodassets.blob.core.windows.net/images/certifications/comptia-aplus.png" },
        { name: "CompTIA Project+", logo: "https://askdogoodassets.blob.core.windows.net/images/certifications/comptia-project-plus.png" },
      ],
    },
    {
      title: "U.S. Army Veteran",
      description: "Service & discipline",
      icon: Shield,
    },
    {
      title: "Educator & Mentor",
      description: "Teaching at PG Parks & Planning + TheDopeCloudTeacher",
      icon: GraduationCap,
    },
    {
      title: "Thyroid Cancer Survivor",
      description: "Health advocacy & resilience",
      icon: Heart,
    },
    {
      title: "Microsoft Azure Professional",
      description: "Security & compliance expert",
      icon: Rocket,
    },
    {
      title: "AskDoGood Founder",
      description: "Author & platform builder",
      icon: TrendingUp,
    },
  ];

  const platformSnapshot = [
    {
      label: "AskDoGood",
      title: "Wellness education platform",
      summary:
        "A content and product ecosystem built around thyroid health, structured healing, practical food systems, and self-advocacy.",
      currentWork:
        "Expanding evergreen articles, digital guides, lead magnets, and commerce pathways that convert trust into clear offers.",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68352fc?w=600&h=400&fit=crop",
      imageAlt: "Wellness education platform representing health knowledge",
    },
    {
      label: "Technical Leadership",
      title: "Security and cloud execution",
      summary:
        "Enterprise work focused on Azure security, compliance, identity, threat modeling, and high-trust delivery across complex environments.",
      currentWork:
        "Deepening security architecture depth while pairing hands-on engineering with stronger platform storytelling.",
      image: "https://images.unsplash.com/photo-1676145629385-9c1f7186b8d8?w=600&h=400&fit=crop",
      imageAlt: "Cloud security and digital infrastructure",
    },
    {
      label: "Education",
      title: "Teaching across multiple audiences",
      summary:
        "Instruction through PG Parks & Planning and TheDopeCloudTeacher, translating experience into practical lessons people can use.",
      currentWork:
        "Developing coursework and publishable educational material that serve both technical and wellness audiences.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      imageAlt: "Education and teaching across multiple audiences",
    },
    {
      label: "Writing",
      title: "Personal story with business intent",
      summary:
        "Long-form writing that connects lived experience, health advocacy, reinvention, and disciplined rebuilding.",
      currentWork:
        "Advancing Starting From Scratch in the Basement while sharpening the founder narrative behind AskDoGood.",
      image: "https://images.unsplash.com/photo-1455390883262-51205f4193e7?w=600&h=400&fit=crop",
      imageAlt: "Writing, storytelling, and personal narrative",
    },
  ];

  const currentPriorities = [
    {
      title: "Health systems",
      detail:
        "Protect energy, maintain thyroid-supportive routines, and keep healing practical enough to survive real life.",
    },
    {
      title: "Brand authority",
      detail:
        "Turn AskDoGood into a trusted destination through cleaner positioning, stronger products, and disciplined publishing.",
    },
    {
      title: "Career depth",
      detail:
        "Continue advancing in cloud security and compliance while keeping the work aligned with long-term independence.",
    },
  ];

  return (
    <>
      <PersistentCTABanner />
      <div className="min-h-screen">
      <SEO
        title="My Journey"
        description="A structured look at RoSee Murphy's path across technology, military service, health advocacy, teaching, and the growth of AskDoGood."
        url="/journey"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://askdogoodassets.blob.core.windows.net/images/hero/journey-hero-new.webp)" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">My Journey</h1>
            <p className="text-xl md:text-2xl text-white/90">
              A record of technical growth, service, health advocacy, reinvention, and deliberate platform building.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Snapshot */}
      <section className="py-20 border-b bg-background">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Platform Snapshot
            </p>
            <h2 className="text-4xl font-bold mb-4">What I am building now</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This page is more than a personal timeline. It is also the operating context behind the work: wellness education, technical credibility, teaching, and long-form writing built to last.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {platformSnapshot.map((item) => (
              <Card key={item.title} className="border-border/70 shadow-sm overflow-hidden">
                {item.image && (
                  <div className="h-40 w-full overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="pt-6 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {item.label}
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.summary}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      Current focus
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.currentWork}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A concise view of the credentials, turning points, and commitments behind the work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {keyAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    
                    {/* Certification Logos */}
                    {achievement.certifications && (
                      <div className="mt-4 flex flex-wrap justify-center gap-3">
                        {achievement.certifications.map((cert, certIdx) => (
                          <img
                            key={certIdx}
                            src={cert.logo}
                            alt={cert.name}
                            title={cert.name}
                            className="h-16 w-16 object-contain hover:scale-110 transition-transform"
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The major phases that shaped the perspective, discipline, and mission behind the platform.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== phases.length - 1 && (
                    <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-border hidden lg:block transform -translate-x-1/2" />
                  )}

                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex w-14 h-14 rounded-full bg-primary flex-shrink-0 items-center justify-center">
                            <Icon className="h-7 w-7 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                              {phase.phase}
                            </p>
                            <p className="text-lg font-bold text-muted-foreground">{phase.years}</p>
                          </div>
                        </div>

                        <h3 className="text-3xl font-bold">{phase.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {phase.description}
                        </p>

                        <div className="pt-4 space-y-2">
                          <p className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                            Key Moments:
                          </p>
                          <ul className="space-y-2">
                            {phase.milestones.map((milestone, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{milestone}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Certification Logos - Single Logo */}
                        {phase.certificationLogo && (
                          <div className="mt-6 flex justify-start">
                            <img
                              src={phase.certificationLogo}
                              alt="CompTIA A+ Certification"
                              className="h-20 w-20 object-contain hover:scale-110 transition-transform"
                            />
                          </div>
                        )}

                        {/* Certification Logos - Multiple Logos */}
                        {phase.certificationLogos && (
                          <div className="mt-6">
                            <p className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                              Certifications:
                            </p>
                            <div className="flex flex-wrap gap-4">
                              {phase.certificationLogos.map((cert, certIdx) => (
                                <img
                                  key={certIdx}
                                  src={cert.logo}
                                  alt={cert.name}
                                  title={cert.name}
                                  className="h-20 w-20 object-contain hover:scale-110 transition-transform"
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Image */}
                    <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                      <div className="relative">
                        <img
                          src={phase.image}
                          alt={phase.title}
                          className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Career Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than two decades across government, finance, consulting, education, and enterprise technology.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Government Sector */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Government</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>US Census Bureau (USCB)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>US Department of Energy (DOE)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Forsyth County DSS, Winston-Salem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>CATS of Charlotte, NC</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Financial Services */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Financial Services</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Synchrony Financial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>LPL Financial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Goldman Sachs (client)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fidelity Investments (client)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>M&T Bank (client)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Tech & Consulting */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Tech & Consulting</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Microsoft (Customer Engineer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Kyndryl</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>NewBreed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Phillips 66 (customer engineer)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Education & Teaching */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Education & Teaching</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>PG Parks & Planning (Instructor)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>TheDopeCloudTeacher (Online)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Johns Hopkins - Agentic AI (current)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>BS Web Design at UMGC - one semester away</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Certifications Highlight */}
            <Card className="mt-8 bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
                  <div className="flex flex-wrap justify-center gap-4 text-lg">
                    <span className="px-4 py-2 bg-primary-foreground/10 rounded-lg">Azure Solutions Architect</span>
                    <span className="px-4 py-2 bg-primary-foreground/10 rounded-lg">AWS Cloud Practitioner</span>
                    <span className="px-4 py-2 bg-primary-foreground/10 rounded-lg">CompTIA A+</span>
                    <span className="px-4 py-2 bg-primary-foreground/10 rounded-lg">CompTIA Project+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80 mb-4">
              Current Priorities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Where the work is headed</h2>
            <p className="text-xl max-w-2xl opacity-90 leading-relaxed">
              The next chapter is about disciplined execution: stronger health systems, sharper authority, deeper technical work, and a platform that can compete at a national level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            {currentPriorities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-90 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/blog">
              <Button variant="secondary">Read the journal</Button>
            </Link>
            <Link href="/contact">
              <Button className="border border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                Start a conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
      </div>
    </>
  );
}
