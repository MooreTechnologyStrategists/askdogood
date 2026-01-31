import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Flame, Clock } from 'lucide-react';
import Chatbot from '@/components/Chatbot';

export default function ChinaWhiteSeries() {
  const episodes = [
    {
      id: 1,
      title: 'The Setup',
      description: 'Meet Chyna White. Former rapper. Ex-street pharmacist. Reformed corporate drone. Current boss.',
      readTime: 12,
      spiceLevel: 2,
      published: true,
      excerpt: 'The conference room smelled like expensive cologne and desperation...'
    },
    {
      id: 2,
      title: 'Verse One: The Rap Game',
      description: 'Before the suits and boardrooms, there was a mic, a dream, and a girl who could spit fire.',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/80 to-black text-white font-serif relative tracking-wide">
      {/* Dimmer overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-red-700/40 bg-black/80 backdrop-blur relative z-10">
        <div className="container py-4">
          <Button asChild className="text-red-300 hover:text-white text-sm font-medium">
            <Link href="/stories">
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Stories
            </Link>
          </Button>
        </div>
      </div>

      {/* Series Hero */}
      <section className="py-20 bg-gradient-to-br from-black via-red-900/80 to-black relative z-10 shadow-2xl">
        <div className="container max-w-6xl">
          {/* Character Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-red-700/40 group shadow-lg">
              <img
                src="https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-1.jpg"
                alt="Chyna White - Boss Mode"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
                      <div class="text-center p-6">
                        <div class="text-6xl mb-3 animate-bounce">👑</div>
                        <p class="text-white font-bold">Boss Mode</p>
                        <p class="text-white/60 text-xs mt-2">Coming Soon</p>
                      </div>
                    </div>
                  `;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-red-200 font-bold text-sm">Boss Mode</p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-red-700/40 group shadow-lg">
              <img
                src="https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-2.jpg"
                alt="Chyna White - Corporate"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
                      <div class="text-center p-6">
                        <div class="text-4xl mb-2">💼</div>
                        <p class="text-sm text-white">Corporate</p>
                      </div>
                    </div>
                  `;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-red-200 font-bold text-sm">Corporate</p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-red-700/40 group col-span-2 md:col-span-1 shadow-lg">
              <img
                src="https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-3.jpg"
                alt="Chyna White - Artistic"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                      <div class="text-center p-4">
                        <div class="text-4xl mb-2">🎨</div>
                        <p class="text-sm text-white">Artistic Vision</p>
                      </div>
                    </div>
                  `;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-red-200 font-bold text-sm">Artistic Vision</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Character Description */}
            <div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-black via-red-900/80 to-black border-2 border-red-700/40 shadow-xl">
                <img
                  src="https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-cover.jpg"
                  alt="Chyna White"
                  className="w-full h-full object-cover opacity-90"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <div class="text-center p-8">
                          <div class="text-6xl mb-4">👑</div>
                          <p class="text-2xl font-bold text-red-200">Chyna White</p>
                          <p class="text-sm text-gray-400 mt-2">Character art coming soon</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>

            {/* Series Info */}
            <div>
              <Badge className="mb-4 bg-red-900/60 border-red-700/70 text-lg px-4 py-2 text-red-200">
                <Flame className="w-4 h-4 mr-2 text-red-400" />
                Featured Series
              </Badge>
              
              <h1 className="text-5xl font-bold mb-4 text-red-200 tracking-wide">Chyna White</h1>
              <p className="text-2xl text-red-400 mb-6 italic">
                The Chronicles of a Beautiful Contradiction
              </p>
              <p className="text-lg text-red-100 mb-8 leading-relaxed">
                Follow Chyna as she navigates the impossibilities of being a former rapper, street pharmacist, 
                corporate escapee, and current business owner. Smart, gorgeous, tattooed, and unapologetically 
                herself—she's the kind of Black woman who makes you rethink everything you thought you knew.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="outline" className="border-red-700/70 text-red-300">
                  Contemporary Fiction
                </Badge>
                <Badge variant="outline" className="border-red-700/70 text-red-400">
                  Drama
                </Badge>
                <Badge variant="outline" className="border-red-700/70 text-red-200">
                  Romance
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-black/70 rounded-lg border border-red-700/40">
                <div>
                  <p className="text-2xl font-bold text-red-400">4</p>
                  <p className="text-xs text-gray-400">Episodes Planned</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-200">1</p>
                  <p className="text-xs text-gray-400">Published</p>
                </div>
                <div>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Flame key={i} className="w-4 h-4 text-red-600 fill-red-600" />
                    ))}
                  </div>
                  <p className="text-xs text-red-400">Max Heat</p>
                </div>
              </div>

              <Button className="w-full md:w-auto text-lg px-8 bg-gradient-to-br from-red-700 to-black border-red-700 text-red-100 hover:text-white" asChild>
                <Link href="/stories/chyna-white/episode-1">
                  Start Reading Episode 1
                  <BookOpen className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-20">
        {/* AI Chatbot */}
        <Chatbot />
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-200 tracking-wide">All Episodes</h2>
          <div className="space-y-6">
            {episodes.map((episode) => (
              <Card 
                key={episode.id}
                className="bg-black/70 backdrop-blur border-red-700/40 hover:border-red-700/70 transition-all shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="border-purple-500/50 text-purple-300 mb-2">
                        Episode {episode.id}
                      </Badge>
                      <CardTitle className="text-2xl">{episode.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-400" />
                      <span className="text-sm text-red-300">{episode.readTime} min</span>
                      <div className="flex ml-2">
                        {[...Array(episode.spiceLevel)].map((_, i) => (
                          <Flame key={i} className="w-4 h-4 text-red-600 fill-red-600" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-red-100 mb-4">{episode.description}</p>
                  <p className="text-sm text-red-400 italic mb-6">
                    "{episode.excerpt}"
                  </p>
                  {episode.published ? (
                    <Button asChild className="w-full sm:w-auto bg-gradient-to-br from-red-700 to-black border-red-700 text-red-100 hover:text-white">
                      <Link href={`/stories/chyna-white/episode-${episode.id}`}>
                        Read Now
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full sm:w-auto bg-black/60 border-red-700 text-red-400">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-red-900/80 to-black relative z-10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-200">Get New Episodes First</h2>
          <p className="text-xl text-red-100 mb-8">Subscribe to get notified when new Chyna White episodes drop.</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-black/60 border border-red-700 text-red-100 placeholder:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              <Button className="bg-gradient-to-br from-red-700 to-black border-red-700 text-red-100 hover:text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
