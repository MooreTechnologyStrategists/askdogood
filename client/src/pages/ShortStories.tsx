import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
      excerpt: 'The conference room smelled like expensive cologne and desperation. Chyna leaned back in her Eames chair, her tattooed fingers drumming a beat on the mahogany table...'
    },
    {
      id: 2,
      title: 'Verse One: The Rap Game',
      description: 'Before the suits and boardrooms, there was a mic, a dream, and a girl who could spit fire. This is where it all started.',
      readTime: 15,
      spiceLevel: 3,
      published: false,
      excerpt: 'Coming soon...'
    },
    {
      id: 3,
      title: 'Corporate Chyna',
      description: 'She tried the 9-to-5. They tried to break her. One of them failed.',
      readTime: 14,
      spiceLevel: 2,
      published: false,
      excerpt: 'Coming soon...'
    },
    {
      id: 4,
      title: 'The Business',
      description: 'When you\'ve been everywhere, done everything, what do you build? Everything.',
      readTime: 16,
      spiceLevel: 3,
      published: false,
      excerpt: 'Coming soon...'
    }
  ];

  if (!isOver18) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900 text-white flex items-center justify-center">
        <Card className="max-w-md mx-4 bg-black/50 backdrop-blur border-purple-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Age Verification</CardTitle>
            <CardDescription className="text-gray-300">
              Our stories contain mature themes, language, and situations.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-400">
              You must be 18 or older to access this content.
            </p>
            <div className="flex flex-col gap-2">
              <Button 
                onClick={() => setIsOver18(true)}
                size="lg"
                className="w-full"
              >
                I am 18 or older
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="w-full"
                asChild
              >
                <Link href="/">Go Back</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900 text-white">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 bg-purple-600/30 border-purple-500/50 hover:bg-purple-600/40">
              <Flame className="w-4 h-4 mr-2" />
              Short Stories
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Raw. Real. Unapologetic.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Fiction that feels like truth. Stories about Black women who refuse to fit in anyone's box.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
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
            <Badge className="mb-4 text-base px-4 py-2 bg-pink-600/30 border-pink-500/50">
              <Star className="w-4 h-4 mr-2" />
              Featured Series
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Introducing: Chyna White</h2>
            <p className="text-xl text-gray-400">The Chronicles of a Beautiful Contradiction</p>
          </div>

          {series.map((s) => (
            <div key={s.id} className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Character Image */}
              <div className="relative group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900/50 to-purple-900 border-2 border-purple-500/50 shadow-2xl">
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
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-red-500/50">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-red-400">SPICE</span>
                    {[...Array(5)].map((_, i) => (
                      <Flame 
                        key={i} 
                        className={`w-3 h-3 ${i < s.spiceLevel ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Series Info */}
              <div>
                <h3 className="text-4xl font-bold mb-4">{s.title}</h3>
                <p className="text-xl text-purple-400 mb-6 italic">{s.tagline}</p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
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

                <Button size="lg" className="w-full md:w-auto text-lg px-8" asChild>
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
                  className="bg-black/40 backdrop-blur border-purple-500/30 hover:border-purple-500/60 transition-all group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant="outline" 
                        className="border-purple-500/50 text-purple-300"
                      >
                        Episode {episode.id}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(episode.spiceLevel)].map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-red-500 fill-red-500" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                      {episode.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {episode.readTime} min read
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">{episode.description}</p>
                    <p className="text-sm text-gray-500 italic mb-4">
                      "{episode.excerpt}"
                    </p>
                    {episode.published ? (
                      <Button variant="outline" size="sm" asChild className="w-full border-purple-500/50 hover:bg-purple-500/20">
                        <Link href={`/stories/chyna-white/episode-${episode.id}`}>
                          Read Now
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Lead Magnet CTA */}
            <div className="mt-16 mb-12 text-center bg-gradient-to-r from-purple-700/80 via-pink-600/80 to-purple-700/80 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Get the Real-Life Healing Guide Behind These Stories</h3>
              <p className="text-lg text-pink-100 mb-4">Download your free Thyroid Symptom Checklist & 3-Day Meal Plan—start your own transformation today.</p>
              <a href="https://gumroad.com/l/thyroid-checklist" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-3xl text-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-300">
                  Download Free Guide
                </Button>
              </a>
            </div>

            {/* Shop the Story Bar */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Shop the Story</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {/* Example featured products */}
                <a href="https://gumroad.com/l/thyroid-health-mastery" target="_blank" rel="noopener noreferrer" className="max-w-xs w-full">
                  <Card className="bg-white/90 text-black hover:shadow-2xl transition-all">
                    <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400" alt="Thyroid Health Mastery Course" className="w-full h-40 object-cover rounded-t-lg" />
                    <CardContent className="p-4">
                      <h4 className="font-bold text-lg mb-1">Thyroid Health Mastery Course</h4>
                      <p className="text-sm mb-2">$97</p>
                      <Button size="sm" className="w-full bg-primary text-white rounded-2xl">Buy Now</Button>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://gumroad.com/l/21-day-plant-based-reset" target="_blank" rel="noopener noreferrer" className="max-w-xs w-full">
                  <Card className="bg-white/90 text-black hover:shadow-2xl transition-all">
                    <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400" alt="21-Day Plant-Based Reset" className="w-full h-40 object-cover rounded-t-lg" />
                    <CardContent className="p-4">
                      <h4 className="font-bold text-lg mb-1">21-Day Plant-Based Reset</h4>
                      <p className="text-sm mb-2">$47</p>
                      <Button size="sm" className="w-full bg-primary text-white rounded-2xl">Buy Now</Button>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>

            {/* Testimonial Carousel */}
            <div className="mb-20 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center text-white">Real Results</h3>
              <div className="bg-black/60 rounded-2xl p-6 text-center text-white shadow-lg">
                <p className="italic mb-2">“This course changed everything. I finally understand my body and how to advocate for myself. Within 3 months, my energy returned and I feel like ME again.”</p>
                <p className="text-sm text-pink-200">— Maya T., Washington, DC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Improved */}
      <section className="py-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 sticky bottom-0 z-50">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock New Episodes + Healing Tools
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get new stories, exclusive healing resources, and special offers delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-purple-500/30 text-white placeholder:text-gray-500"
              />
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold">
                Subscribe Free
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="bg-black/40 backdrop-blur border-purple-500/30 overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">From the Author</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-purple-500/50">
                <img
                  src="https://askdogoodassets.blob.core.windows.net/images/personal/rosee-author.webp"
                  alt="RoSeé Murphy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://askdogoodassets.blob.core.windows.net/images/hero-home.webp';
                  }}
                />
              </div>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                "I've lived a thousand lives in one. These stories are fiction, but they're built on truths I've witnessed, experienced, and survived. 
                Chyna White is every Black woman I've known who refused to choose just one identity. 
                She's the parts of us we hide at work, unleash at home, and pray about at night."
              </p>
              <p className="text-gray-400 font-semibold">— RoSeé Murphy</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
