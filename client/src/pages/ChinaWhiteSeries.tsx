import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Flame, Clock } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900 text-white">
      {/* Header */}
      <div className="border-b border-purple-500/30 bg-black/40 backdrop-blur">
        <div className="container py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/stories">
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Stories
            </Link>
          </Button>
        </div>
      </div>

      {/* Series Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Character Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/30">
                <img
                  src="https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-cover.webp"
                  alt="Chyna White"
                  className="w-full h-full object-cover opacity-90"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <div class="text-center p-8">
                          <div class="text-6xl mb-4">👑</div>
                          <p class="text-2xl font-bold text-white">Chyna White</p>
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
              <Badge className="mb-4 bg-purple-600/30 border-purple-500/50 text-lg px-4 py-2">
                <Flame className="w-4 h-4 mr-2" />
                Featured Series
              </Badge>
              
              <h1 className="text-5xl font-bold mb-4">Chyna White</h1>
              <p className="text-2xl text-purple-400 mb-6 italic">
                The Chronicles of a Beautiful Contradiction
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Follow Chyna as she navigates the impossibilities of being a former rapper, street pharmacist, 
                corporate escapee, and current business owner. Smart, gorgeous, tattooed, and unapologetically 
                herself—she's the kind of Black woman who makes you rethink everything you thought you knew.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                  Contemporary Fiction
                </Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300">
                  Drama
                </Badge>
                <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                  Romance
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-black/40 rounded-lg border border-purple-500/30">
                <div>
                  <p className="text-2xl font-bold text-purple-400">4</p>
                  <p className="text-xs text-gray-400">Episodes Planned</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-pink-400">1</p>
                  <p className="text-xs text-gray-400">Published</p>
                </div>
                <div>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Flame key={i} className="w-4 h-4 text-red-500 fill-red-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">Max Heat</p>
                </div>
              </div>

              <Button size="lg" className="w-full md:w-auto text-lg px-8" asChild>
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
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">All Episodes</h2>
          <div className="space-y-6">
            {episodes.map((episode) => (
              <Card 
                key={episode.id}
                className="bg-black/40 backdrop-blur border-purple-500/30 hover:border-purple-500/60 transition-all"
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
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{episode.readTime} min</span>
                      <div className="flex ml-2">
                        {[...Array(episode.spiceLevel)].map((_, i) => (
                          <Flame key={i} className="w-4 h-4 text-red-500 fill-red-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{episode.description}</p>
                  <p className="text-sm text-gray-500 italic mb-6">
                    "{episode.excerpt}"
                  </p>
                  {episode.published ? (
                    <Button asChild className="w-full sm:w-auto">
                      <Link href={`/stories/chyna-white/episode-${episode.id}`}>
                        Read Now
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full sm:w-auto">
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
      <section className="py-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get New Episodes First
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to get notified when new Chyna White episodes drop.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-purple-500/30 text-white placeholder:text-gray-500"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
