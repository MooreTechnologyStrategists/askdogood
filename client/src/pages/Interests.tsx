import { Card, CardContent } from "@/components/ui/card";
import { Flower2, Music, Laptop, Scissors, Sprout, Sun, Droplets } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function Interests() {
  const [selectedImage, setSelectedImage] = useState(0);

  const gardenImages = [
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/rosee-in-garden.webp", caption: "Tending the garden - where healing meets growth" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/full-patio-garden.webp", caption: "My patio garden oasis" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/garden-walkway-daytime.webp", caption: "Garden walkway with apple trees and raised beds" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/patio-garden-night.webp", caption: "Evening garden vibes with string lights" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/night-garden-setup.webp", caption: "Night garden setup with grow lights" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/red-peppers-closeup.webp", caption: "Fresh peppers ready for harvest" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/jalapenos-mixed-veg.webp", caption: "Jalapeños and mixed vegetables" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/raised-bed-greens.webp", caption: "Raised bed with fresh greens" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/vertical-garden-coleus.webp", caption: "Vertical garden with colorful coleus" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/rhubarb-plant.webp", caption: "Rhubarb growing strong" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/raised-bed-evening.webp", caption: "Evening harvest time" },
    { url: "https://askdogoodassets.blob.core.windows.net/images/garden/seedlings-starting.webp", caption: "Starting from seed - the beginning of growth" },
  ];

  const interests = [
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
    <>
      <SEO
        title="Interests & Hobbies | Ask DoGood"
        description="Explore RoSeé's passions beyond wellness: gardening, music, technology, and self-care. Healing isn't one-dimensional—it's creating a life you love."
        keywords={['gardening', 'urban gardening', 'music', 'technology', 'self-care', 'hobbies', 'holistic wellness']}
        url="/interests"
      />
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

      {/* Gardening Section - Expanded */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Flower2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Gardening: Growing Wellness</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From my grandfather's garden to empty nester experiments across multiple states—gardening has been my constant companion, teacher, and healer.
              </p>
            </div>

            {/* Story */}
            <Card className="mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    My love for gardening started with my grandfather. Watching him work the soil, tend to plants, and harvest food taught me that growth takes time, patience, and consistent care. Those early lessons stayed with me through every season of life.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    As an empty nester, I've taken those lessons and run with them—literally across state lines. I've gardened in North Carolina, Maryland, and Virginia, adapting to different climates, soils, and growing seasons. Each location taught me something new about resilience, adaptation, and the power of starting fresh.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    I grow everything from peppers and tomatoes to greens, herbs, and even fruit trees in containers. My patio garden is a mix of raised beds, grow bags, and creative vertical setups. I've learned from YouTube gardeners like <strong>James Prigioni</strong>, <strong>MIgardener</strong>, and <strong>Epic Gardening</strong>—their no-fluff, practical advice has been invaluable.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Gardening isn't just about food—it's about healing. It's about creating beauty, practicing patience, and remembering that even in the hardest seasons, growth is possible. Every seed planted is an act of faith. Every harvest is a reminder that consistency pays off.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Garden Gallery */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">My Garden Journey</h3>
              
              {/* Main Image */}
              <div className="mb-6 relative">
                <img
                  src={gardenImages[selectedImage].url}
                  alt={gardenImages[selectedImage].caption}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                  <p className="text-white text-lg font-medium">{gardenImages[selectedImage].caption}</p>
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {gardenImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index
                        ? "ring-4 ring-primary scale-105"
                        : "hover:scale-105 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Garden thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Garden Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Sprout className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Multi-State Gardener</h4>
                  <p className="text-sm text-muted-foreground">NC, MD, VA - adapting to every climate</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Sun className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Year-Round Growing</h4>
                  <p className="text-sm text-muted-foreground">Patio garden with grow lights & raised beds</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Droplets className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">From Seed to Harvest</h4>
                  <p className="text-sm text-muted-foreground">Peppers, greens, herbs, tomatoes & more</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Interests Grid */}
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
    </>
  );
}
