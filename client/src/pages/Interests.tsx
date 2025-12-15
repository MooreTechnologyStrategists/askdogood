import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower2, Music, Laptop, Scissors } from "lucide-react";

export default function Interests() {
  const interests = [
    {
      title: "Gardening",
      subtitle: "Growing Wellness",
      description: "There's something deeply healing about working with soil, watching seeds transform into life, and creating beauty from the ground up. Gardening teaches patience, consistency, and the power of small daily actions—lessons that apply to every area of healing and growth.",
      image: "https://askdogoodassets.blob.core.windows.net/images/personal/gardening.webp",
      icon: Flower2,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Music",
      subtitle: "Creative Expression",
      description: "Music is my creative outlet, my therapy, and my joy. Whether I'm listening, creating playlists, or just vibing to the rhythm, music helps me process emotions, celebrate wins, and stay grounded. It's the soundtrack to my healing journey.",
      image: "https://askdogoodassets.blob.core.windows.net/images/personal/Music.webp",
      icon: Music,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Tech",
      subtitle: "Building & Problem-Solving",
      description: "From Azure security to building AskDoGood, technology is where I combine creativity with structure. It's about solving real problems, creating systems that work, and empowering others through tools and platforms. Tech isn't just my career—it's how I build legacy.",
      image: "https://askdogoodassets.blob.core.windows.net/images/journey/microsoft-azure-career.webp",
      icon: Laptop,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Hair",
      subtitle: "Self-Care & Confidence",
      description: "Doing hair is an art form, a ritual of self-care, and a way to express identity. Whether it's my own locs or helping others feel confident, hair care is about more than aesthetics—it's about honoring yourself, taking time for self-love, and showing up as your authentic self.",
      image: "https://askdogoodassets.blob.core.windows.net/images/personal/outdoor-photoshoot.webp",
      icon: Scissors,
      color: "from-orange-500/20 to-rose-500/20",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">More Than Wellness</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Healing isn't one-dimensional. It's gardening, music, tech, and self-care. It's creating, building, and showing up fully in every area of life.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Image */}
                    <div className={`relative h-[300px] md:h-auto ${isEven ? '' : 'md:col-start-2'}`}>
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${interest.image})` }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${interest.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                      <div className="mb-6">
                        <Icon className="h-12 w-12 text-primary mb-4" />
                        <h2 className="text-3xl font-bold mb-2">{interest.title}</h2>
                        <p className="text-lg text-primary font-medium">{interest.subtitle}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Healing is Holistic</h2>
            <p className="text-xl text-muted-foreground mb-8">
              It's not just about health—it's about creating a life you love, with purpose, creativity, and joy in every corner.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're here for wellness tips, tech insights, or just to see what I'm growing in the garden, welcome. Let's build something beautiful together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
