import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, GraduationCap, Shield, Heart, Rocket } from "lucide-react";

export default function Journey() {
  const phases = [
    {
      phase: "Phase 1: Foundation",
      years: "1997–2004",
      title: "Building the Base",
      description:
        "My journey began at North Carolina A&T, where I learned independence and possibility. After facing mental health challenges during 2001-2003, I made a strategic reset—returning to education, enrolling at TechSkills, and earning my CompTIA A+ certification. This wasn't just recovery; it was recalibration with purpose.",
      image: "https://askdogoodassets.blob.core.windows.net/images/journey/ncat-foundation.webp",
      milestones: [
        "NCAT student (1997–1998)",
        "Resilience through the 2001–2003 reset",
        "TechSkills enrollment & CompTIA A+ certified (2004)",
      ],
      icon: GraduationCap,
    },
    {
      phase: "Phase 2: Service & Discipline",
      years: "2004–2008",
      title: "Military Service & Personal Growth",
      description:
        "In August 2004, I joined the Army National Guard, stepping into a world of discipline, resilience, and leadership. By 2007, I transitioned to the U.S. Army, taking on more responsibility and deepening my commitment to service. In 2008, I quit smoking—a personal upgrade that reflected my growing commitment to longevity, clarity, and self-respect.",
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
        "Between 2024 and 2025, I re-centered around consistency: education, healing, and building a mission-driven platform. In October 2025, I returned to Microsoft in a high-impact Azure security role—working on ADO, compliance, CodeQL scanning, Entra ID, and threat modeling. Now, I'm writing 'Starting From Scratch in the Basement' and building AskDoGood with positivity, structure, and encouragement—because healing should create impact.",
      image: "https://askdogoodassets.blob.core.windows.net/images/journey/microsoft-azure-career.webp",
      milestones: [
        "Returned to Microsoft (Oct 2025)",
        "Azure security & compliance focus",
        "Writing book & building AskDoGood",
      ],
      icon: Rocket,
    },
  ];

  const keyAchievements = [
    {
      title: "NCAT Graduate",
      description: "HBCU education foundation",
      icon: GraduationCap,
    },
    {
      title: "U.S. Army Veteran",
      description: "Service & discipline",
      icon: Shield,
    },
    {
      title: "CompTIA A+ Certified",
      description: "Technical foundation",
      icon: CheckCircle2,
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://askdogoodassets.blob.core.windows.net/images/journey/hero-journey.webp)" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">My Journey</h1>
            <p className="text-xl md:text-2xl text-white/90">
              A timeline of resilience, reinvention, healing, and building a legacy on purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Not a highlight reel — a real-life rebuild with receipts.
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
              Four phases that shaped who I am — and where I'm going next.
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

      {/* Current Focus Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What's Next?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            The plan now: protect the health, elevate the career, build the legacy — and
            keep the message rooted in positivity and encouragement.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="space-y-3">
              <Heart className="h-12 w-12 mx-auto opacity-90" />
              <h3 className="text-2xl font-bold">Health</h3>
              <p className="opacity-90">
                Consistency over chaos — habits that keep me grounded and energized.
              </p>
            </div>
            <div className="space-y-3">
              <Rocket className="h-12 w-12 mx-auto opacity-90" />
              <h3 className="text-2xl font-bold">Career</h3>
              <p className="opacity-90">
                Keep sharpening Azure security/compliance depth and delivering high-trust systems.
              </p>
            </div>
            <div className="space-y-3">
              <TrendingUp className="h-12 w-12 mx-auto opacity-90" />
              <h3 className="text-2xl font-bold">Legacy</h3>
              <p className="opacity-90">
                Build AskDoGood and finish "Starting From Scratch in the Basement" with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
