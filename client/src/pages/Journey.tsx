import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function Journey() {
  const milestones = [
    {
      date: "September 2021",
      title: "The Miracle Moment",
      description: "The long awaited decision to remove my troubled thyroid and restore my sanity",
      image: "/recovery-strength.png"
    },
    {
      date: "December 2023",
      title: "First 30 Days",
      description: "Completed my first month sober. Joined support groups and established new routines.",
      image: "/transparency-authenticity.png"
    },
    {
      date: "February 2024",
      title: "Fitness Journey Begins",
      description: "Started working out regularly and focusing on nutrition. Lost first 10 pounds.",
      image: "/health-wellness.png"
    },
    {
      date: "May 2024",
      title: "6 Months Sober",
      description: "Celebrated half a year of sobriety. Ran my first 5K race.",
      image: "/hero-journey.png"
    },
    {
      date: "August 2024",
      title: "Mental Health Focus",
      description: "Started therapy and developed a consistent meditation practice.",
      image: "/transparency-authenticity.png"
    },
    {
      date: "November 2024",
      title: "One Year Milestone",
      description: "Celebrated one year of sobriety. Launched this blog to share my journey.",
      image: "/recovery-strength.png"
    }
  ];

  const achievements = [
    "1 Year Sober",
    "30+ Pounds Lost",
    "First 5K Completed",
    "Consistent Meditation Practice",
    "Improved Professional Performance",
    "Rebuilt Family Relationships",
    "Started Public Speaking",
    "Launched This Blog"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-journey.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              A timeline of transformation, growth, and the milestones that shaped who I am today.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These milestones represent more than numbers—they represent commitment, resilience, and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
            <h2 className="text-4xl font-bold mb-4">
              The Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every journey has its turning points. Here are mine.
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
                        <p className="text-sm text-primary font-semibold mb-2">{milestone.date}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What's Next?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            The journey doesn't end here. I'm committed to continuous growth, learning, and sharing 
            my experiences to help others on their own paths.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-2">Health</h3>
              <p className="opacity-90">Continue fitness journey and maintain healthy habits</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Recovery</h3>
              <p className="opacity-90">Support others in their recovery and stay committed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="opacity-90">Keep learning, evolving, and challenging myself</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
