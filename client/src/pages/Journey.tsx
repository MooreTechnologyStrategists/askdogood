import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function Journey() {
  const milestones = [
    {
      date: "1997–1998",
      title: "NCAT: The Early Foundation",
      description:
        "My first chapter of higher education—learning independence, pressure, and possibility before life got real loud.",
      image: "/hero-journey.png",
    },
    {
      date: "2001–2003",
      title: "The Storm Years",
      description:
        "A nervous breakdown period that forced a hard reset. Not the end—just the system reboot before the comeback.",
      image: "/transparency-authenticity.png",
    },
    {
      date: "2003",
      title: "Re-Entry & Re-Alignment",
      description:
        "Returned to NCAT and started making intentional moves. I wasn’t done—I was recalibrating.",
      image: "/health-wellness.png",
    },
    {
      date: "October 2003",
      title: "TechSkills: The Comeback Blueprint",
      description:
        "Enrolled at TechSkills and focused on skill-building, structure, and a future I could actually control.",
      image: "/hero-journey.png",
    },
    {
      date: "February 2004",
      title: "CompTIA A+ Certified",
      description:
        "Earned my A+ certification—proof I could learn fast, build real skills, and deliver under pressure.",
      image: "/recovery-strength.png",
    },
    {
      date: "August 2004",
      title: "Joined the Army National Guard",
      description:
        "Stepped into service, discipline, and resilience—skills that shaped my leadership for life.",
      image: "/hero-journey.png",
    },
    {
      date: "2007",
      title: "Transitioned to the U.S. Army",
      description:
        "Leveled up from Guard to Army—more responsibility, more grit, and more growth.",
      image: "/health-wellness.png",
    },
    {
      date: "August 2008",
      title: "Quit Smoking Cigarettes",
      description:
        "A personal upgrade: choosing longevity, clarity, and self-respect. No applause needed—just results.",
      image: "/transparency-authenticity.png",
    },
    {
      date: "2016",
      title: "Something Was Off",
      description:
        "I first sensed something wasn’t right. It started a long journey of listening to my body and advocating for myself.",
      image: "/health-wellness.png",
    },
    {
      date: "September 13, 2021",
      title: "Thyroid Removed",
      description:
        "The turning point. A major health decision that became the start of a new era of clarity and rebuilding.",
      image: "/recovery-strength.png",
    },
    {
      date: "2021 (Post-Surgery)",
      title: "Cancer Identified (In Situ)",
      description:
        "The diagnosis was confirmed after surgery. I chose strategy, monitoring, and forward motion—not fear.",
      image: "/hero-journey.png",
    },
    {
      date: "2024–2025",
      title: "Structure, Study, and Momentum",
      description:
        "Re-centered around consistency: education, healing, and building a mission-driven platform that uplifts others.",
      image: "/transparency-authenticity.png",
    },
    {
      date: "October 2025",
      title: "Back at Microsoft",
      description:
        "Returned in a high-impact Azure role: ADO, compliance work, CodeQL scanning, Entra ID app registrations, and threat modeling to strengthen secure environments.",
      image: "/recovery-strength.png",
    },
    {
      date: "Now → March 2026",
      title: "Legacy Mode",
      description:
        "Writing “Starting From Scratch in the Basement” and building AskDoGood with positivity, structure, and encouragement—because healing should create impact.",
      image: "/hero-journey.png",
    },
  ];

  const achievements = [
    "NCAT student (1997–1998; returned 2003)",
    "Resilience through the 2001–2003 reset",
    "TechSkills enrollment (Oct 2003)",
    "CompTIA A+ earned (Feb 2004)",
    "Army National Guard service began (Aug 2004)",
    "Transitioned to U.S. Army (2007)",
    "Quit smoking (Aug 2008)",
    "First sensed health issues (2016)",
    "Thyroidectomy (9/13/2021)",
    "Cancer identified (in situ) + rebuilt with strategy",
    "UMGC progress + portfolio-ready outcomes",
    "Returned to Microsoft (Oct 2025) in Azure compliance/security focus",
    "Building AskDoGood + writing the book with purpose",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-journey.png)" }}
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

      {/* Achievements Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Not a highlight reel — a real-life rebuild with receipts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turning points that shaped who I am — and where I’m going next.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-border hidden md:block" />
                )}

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="flex items-start gap-4">
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-primary flex-shrink-0 items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-primary font-semibold mb-2">
                          {milestone.date}
                        </p>
                        <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What’s Next?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            The plan now: protect the health, elevate the career, build the legacy — and
            keep the message rooted in positivity and encouragement.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-2">Health</h3>
              <p className="opacity-90">
                Consistency over chaos — habits that keep me grounded and energized.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Career</h3>
              <p className="opacity-90">
                Keep sharpening Azure security/compliance depth and delivering high-trust systems.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Legacy</h3>
              <p className="opacity-90">
                Build AskDoGood and finish “Starting From Scratch in the Basement” with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
