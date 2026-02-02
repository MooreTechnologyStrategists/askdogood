import { Link } from 'wouter';

// Glitter effect global styles
if (typeof document !== 'undefined' && !document.getElementById('glitter-global-style')) {
  const style = document.createElement('style');
  style.id = 'glitter-global-style';
  style.innerHTML = `
    .glitter-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      background: repeating-linear-gradient(135deg,rgba(255,255,255,0.04) 0 2px,transparent 2px 8px),
        repeating-linear-gradient(45deg,rgba(255,255,255,0.03) 0 1px,transparent 1px 7px),
        radial-gradient(circle at 20% 40%,rgba(255,255,255,0.08) 0 2px,transparent 2px 100%),
        radial-gradient(circle at 80% 60%,rgba(255,255,255,0.06) 0 2px,transparent 2px 100%);
      animation: glitter-move 8s linear infinite;
    }
    @keyframes glitter-move {
      0% { background-position: 0 0, 0 0, 0 0, 0 0; }
      100% { background-position: 100px 100px, 80px 120px, 60px 40px, 120px 80px; }
    }
    .drop-shadow-glitter {
      filter: drop-shadow(0 0 6px #fff8) drop-shadow(0 0 2px #fff4);
    }
  `;
  document.head.appendChild(style);
}
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BeehiivSubscribe from '@/components/BeehiivSubscribe';
import { BookOpen, Flame, Clock, TrendingUp, Star, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ShortStories() {
  const [isOver18, setIsOver18] = useState(false);

  const series = [
    {
      id: 'chyna-white',
      title: 'Chyna White',
      tagline: 'The Chronicles of a Beautiful Contradiction',
      description: 'Follow Chyna as she navigates the impossibilities of being a former rapper, street pharmacist, corporate escapee, and current business owner. Smart, gorgeous, tattooed, and unapologetically herself—she\'s the kind of Black woman who makes you rethink everything you thought you knew.',
      coverImage: 'https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-cover.jpg',
      spiceLevel: 4,
      episodes: 8,
      status: 'ongoing',
      genre: ['Contemporary Fiction', 'Drama', 'Romance'],
      themes: ['Redemption', 'Identity', 'Success', 'Love', 'Hustle'],
      featured: true,
      comingSoon: false
    }
  ];

  const episodes = [
    {
      id: 1,
      title: 'The Setup',
      description: 'Meet Chyna White. Former rapper. Ex-street pharmacist. Reformed corporate drone. Current boss. And she\'s about to blow up your assumptions.',
      readTime: 12,
      spiceLevel: 2,
      published: true,
      excerpt: 'The conference room smelled like expensive cologne and desperation. Chyna leaned back in her Eames chair, her tattooed fingers drumming a beat on the mahogany table...',
      image: 'https://askdogoodassets.blob.core.windows.net/images/stories/episode1_the_setup.png'
    },
    {
      id: 2,
      title: 'Verse One: The Rap Game',
      description: 'Before the suits and boardrooms, there was a mic, a dream, and a girl who could spit fire. This is where it all started.',
      readTime: 15,
      spiceLevel: 3,
      published: false,
      excerpt: 'Coming soon...',
      image: 'https://askdogoodassets.blob.core.windows.net/images/stories/episode2_verse_one.webp'
    },
    {
      id: 3,
      title: 'Corporate Chyna',
      description: 'She tried the 9-to-5. They tried to break her. One of them failed.',
      readTime: 14,
      spiceLevel: 2,
      published: false,
      excerpt: 'Coming soon...',
      image: 'https://askdogoodassets.blob.core.windows.net/images/stories/episode3_corporate_chyna.webp'
    },
    {
      id: 4,
      title: 'The Business',
      description: 'When you\'ve been everywhere, done everything, what do you build? Everything.',
      readTime: 16,
      spiceLevel: 3,
      published: false,
      excerpt: 'Coming soon...',
      image: 'https://askdogoodassets.blob.core.windows.net/images/stories/episode4_the_business.webp'
    }
  ];

  if (!isOver18) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background text-foreground flex items-center justify-center relative">
        <Card className="max-w-md mx-4 bg-card border border-primary/20 text-foreground relative z-10 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Age Verification</CardTitle>
            <CardDescription className="text-muted-foreground">
              Our stories contain mature themes, language, and situations.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              You must be 18 or older to access this content.
            </p>
            <div className="flex flex-col gap-2">
              <Button onClick={() => setIsOver18(true)} className="w-full py-3 text-lg font-semibold">
                I am 18 or older
              </Button>
              <Button className="w-full py-3 text-lg font-semibold" variant="outline" asChild>
                <Link href="/">Go Back</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
      {/* Glitter overlay */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="w-full h-full glitter-bg" />
      </div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 border border-primary/20 text-primary shadow-lg backdrop-blur">
              <Flame className="w-4 h-4 mr-2 text-primary" />
              Short Stories
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text text-transparent drop-shadow-glitter">
              Raw. Real. Unapologetic.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Fiction that feels like truth. Stories about Black women who refuse to fit in anyone's box.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Multiple Series</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>New Episodes Weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Community Discussion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Series: Chyna White */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="mb-16 text-center">
            <Badge className="mb-4 text-base px-4 py-2 bg-primary/10 border border-primary/20 text-primary shadow-lg backdrop-blur">
              <Star className="w-4 h-4 mr-2 text-primary" />
              Featured Series
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground drop-shadow-glitter">Introducing: Chyna White</h2>
            <p className="text-xl text-muted-foreground">The Chronicles of a Beautiful Contradiction</p>
          </div>

          {series.map((s) => (
            <div key={s.id} className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Character Image */}
              <div className="relative group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background border-2 border-primary/20 shadow-2xl">
                  <img
                    src={s.coverImage}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      // Professional fallback placeholder
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center relative overflow-hidden">
                          <!-- Animated background -->
                          <div class="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-purple-600/30 animate-pulse"></div>
                          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzljMjdmMCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
                          
                          <!-- Content -->
                          <div class="text-center relative z-10 px-8">
                            <div class="text-8xl mb-6 animate-bounce">👑</div>
                            <div class="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                              <p class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">${s.title}</p>
                              <p class="text-base text-purple-300 mb-4">Character Reveal Coming Soon</p>
                              <div class="flex items-center justify-center gap-2 text-xs text-gray-400">
                                <span class="inline-block w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                                <span>Art in Development</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Spice Level Indicator */}
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur px-4 py-2 rounded-full border border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">SPICE</span>
                    {[...Array(5)].map((_, i) => (
                      <Flame 
                        key={i} 
                        className={`w-3 h-3 ${i < s.spiceLevel ? 'text-primary fill-primary drop-shadow-glitter' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Series Info */}
              <div>
                <h3 className="text-4xl font-bold mb-4">{s.title}</h3>
                <p className="text-xl text-primary mb-6 italic">{s.tagline}</p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {s.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">GENRES</h4>
                    <div className="flex flex-wrap gap-2">
                      {s.genre.map((g) => (
                        <Badge key={g} variant="outline" className="border-purple-500/50 text-purple-300">
                          {g}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">THEMES</h4>
                    <div className="flex flex-wrap gap-2">
                      {s.themes.map((t) => (
                        <Badge key={t} variant="outline" className="border-pink-500/50 text-pink-300">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div>
                      <p className="text-2xl font-bold text-purple-400">{s.episodes}</p>
                      <p className="text-xs text-gray-400">Episodes</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-pink-400">{s.status}</p>
                      <p className="text-xs text-gray-400">Status</p>
                    </div>
                    <div>
                      <div className="flex">
                        {[...Array(s.spiceLevel)].map((_, i) => (
                          <Flame key={i} className="w-5 h-5 text-red-500 fill-red-500" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">Heat Level</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full md:w-auto text-lg px-8 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 rounded-2xl" asChild>
                  <Link href={`/stories/chyna-white`}>
                    Start Reading
                    <BookOpen className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}

          {/* Episodes Preview */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold mb-8 text-center">Episode Guide</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {episodes.map((episode) => (
                <Card 
                  key={episode.id}
                  className="relative overflow-hidden bg-black/60 backdrop-blur border-red-700/40 hover:border-red-500/60 transition-all group drop-shadow-glitter"
                >
                  {/* Background Image */}
                  {episode.image && (
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>
                  )}
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant="outline" 
                        className="border-red-700/50 text-red-300 bg-black/50"
                      >
                        Episode {episode.id}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(episode.spiceLevel)].map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-red-500 fill-red-500" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-red-100 group-hover:text-white transition-colors drop-shadow-glitter">
                      {episode.title}
                    </CardTitle>
                    <CardDescription className="text-red-200/80">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {episode.readTime} min read
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-red-100/90 mb-4">{episode.description}</p>
                    <p className="text-sm text-red-200/70 italic mb-4">
                      "{episode.excerpt}"
                    </p>
                    {episode.published ? (
                      <Button asChild className="w-full border-red-700/40 hover:bg-red-700/40 py-2 text-sm font-semibold bg-red-900/40 text-red-100 border rounded-xl">
                        <Link href={`/stories/chyna-white/episode-${episode.id}`}>
                          Read Now
                        </Link>
                      </Button>
                    ) : (
                      <Button disabled className="w-full py-2 text-sm font-semibold bg-black/60 border border-red-700/40 text-red-300/50 rounded-xl">
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Lead Magnet CTA */}
            <div className="mt-16 mb-12 text-center bg-gradient-to-r from-white/10 via-zinc-800/80 to-white/10 rounded-2xl p-8 shadow-xl drop-shadow-glitter">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-glitter">Get the Real-Life Healing Guide Behind These Stories</h3>
              <p className="text-lg text-white/80 mb-4">Download your free Thyroid Symptom Checklist & 3-Day Meal Plan—start your own transformation today.</p>
              <a href="https://gumroad.com/l/thyroid-checklist" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-3xl text-lg font-semibold bg-white/80 text-black hover:bg-white py-3 px-8 drop-shadow-glitter">
                  Download Free Guide
                </Button>
              </a>
            </div>

            {/* Shop the Story Bar */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Shop the Story</h3>
              <div className="grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
                <a href="https://gumroad.com/l/thyroid-health-mastery" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="h-full bg-black/70 border border-red-700/40 text-white hover:shadow-2xl transition-all">
                    <div className="flex items-center justify-center h-48 bg-black/60 rounded-t-lg">
                      <img
                        src="https://askdogoodassets.blob.core.windows.net/images/products/Thyroid_Health_Mastery_Cover.png"
                        alt="Thyroid Health Mastery Course"
                        className="max-h-40 w-auto object-contain"
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col gap-2">
                      <h4 className="font-bold text-lg">Thyroid Health Mastery Course</h4>
                      <p className="text-sm text-red-100/80">$97</p>
                      <Button className="w-full bg-red-700 hover:bg-red-600 text-white rounded-2xl py-2 text-sm font-semibold">Buy Now</Button>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://gumroad.com/l/21-day-plant-based-reset" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="h-full bg-black/70 border border-red-700/40 text-white hover:shadow-2xl transition-all">
                    <div className="flex items-center justify-center h-48 bg-black/60 rounded-t-lg">
                      <img
                        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=800&fit=crop"
                        alt="21-Day Plant-Based Reset"
                        className="max-h-40 w-auto object-contain"
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col gap-2">
                      <h4 className="font-bold text-lg">21-Day Plant-Based Reset</h4>
                      <p className="text-sm text-red-100/80">$47</p>
                      <Button className="w-full bg-red-700 hover:bg-red-600 text-white rounded-2xl py-2 text-sm font-semibold">Buy Now</Button>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>

            {/* Testimonial Carousel */}
            <div className="mb-20 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center text-white drop-shadow-glitter">Real Results</h3>
              <div className="bg-black/80 rounded-2xl p-6 text-center text-white shadow-lg drop-shadow-glitter">
                <p className="italic mb-2">“This course changed everything. I finally understand my body and how to advocate for myself. Within 3 months, my energy returned and I feel like ME again.”</p>
                <p className="text-sm text-white/60">— Maya T., Washington, DC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Improved */}
      <section className="py-20 bg-gradient-to-br from-black/90 via-zinc-900/80 to-black/90 sticky bottom-0 z-50">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-glitter">
            Unlock New Episodes + Healing Tools
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get new stories, exclusive healing resources, and special offers delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <BeehiivSubscribe
              variant="minimal"
              buttonText="Subscribe Free"
              className="drop-shadow-glitter"
            />
            <p className="text-xs text-white/60 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="bg-black/80 backdrop-blur border-white/10 overflow-hidden drop-shadow-glitter">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl drop-shadow-glitter">From the Author</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20">
                <img
                  src="https://askdogoodassets.blob.core.windows.net/images/personal/rosee-author.webp"
                  alt="RoSeé Murphy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://askdogoodassets.blob.core.windows.net/images/hero-home.webp';
                  }}
                />
              </div>
              <p className="text-lg text-white/80 mb-4 leading-relaxed">
                "I've lived a thousand lives in one. These stories are fiction, but they're built on truths I've witnessed, experienced, and survived. 
                Chyna White is every Black woman I've known who refused to choose just one identity. 
                She's the parts of us we hide at work, unleash at home, and pray about at night."
              </p>
              <p className="text-white/60 font-semibold">— RoSeé Murphy</p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
