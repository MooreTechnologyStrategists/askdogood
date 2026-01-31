import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Flame, Clock, MessageCircle, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function ChinaWhiteEpisode1() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/80 to-black text-white font-serif relative tracking-wide overflow-x-hidden">
      {/* Subtle background pattern overlay */}
      {/* No extra pattern overlay, keep it clean for the red/black theme */}
      {/* Header */}
      <div className="border-b border-red-700/40 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Button asChild className="text-red-300 hover:text-white text-sm font-medium">
            <Link href="/stories/chyna-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Series
            </Link>
          </Button>
          <div className="flex items-center gap-4">
            <Button className="text-red-400 hover:text-white text-sm font-medium bg-transparent border-none shadow-none" onClick={() => setLiked(!liked)}>
              <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
              {liked ? 'Liked' : 'Like'}
            </Button>
            <Button className="text-red-400 hover:text-white text-sm font-medium bg-transparent border-none shadow-none">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image & Character Intro */}
      <section className="relative py-20 bg-gradient-to-br from-black via-red-900/80 to-black flex flex-col items-center shadow-xl">
        <div className="relative w-full max-w-2xl mb-10">
          <img
            src="https://askdogoodassets.blob.core.windows.net/images/stories/episode1_the_setup.png"
            alt="Chyna White Hero"
            className="rounded-2xl shadow-2xl w-full object-cover object-top border-4 border-red-700/40"
            style={{ maxHeight: 420 }}
          />
          {/* Soft overlay for text readability */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="inline-block bg-black/60 text-red-100 px-4 py-2 rounded-full text-base font-medium shadow-lg mx-auto">
              Chyna White, the legend in the making
            </span>
          </div>
        </div>
        <div className="container max-w-3xl text-center">
          <Badge className="mb-4 bg-red-900/60 border-red-700/70 text-lg px-4 py-2 text-red-200 shadow-md">
            Chyna White • Episode 1
          </Badge>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-red-200 drop-shadow-2xl font-serif">
            The Setup
          </h1>
          {/* Character intro highlight card */}
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-br from-black via-red-900/80 to-black border border-red-700/40 rounded-2xl px-8 py-6 shadow-2xl max-w-2xl">
              <span className="block text-red-200 font-semibold text-xl md:text-2xl leading-relaxed">
                Meet <span className="text-red-400 font-bold">Chyna White</span>: former rapper, ex-street pharmacist, reformed corporate drone, and current boss. Smart, gorgeous, tattooed, and unapologetically herself—she's the kind of Black woman who makes you rethink everything you thought you knew.
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-red-100 justify-center mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-600" />
              <Flame className="w-4 h-4 text-red-600 fill-red-600" />
              <Flame className="w-4 h-4 text-red-600 fill-red-600" />
              <Flame className="w-4 h-4 text-red-900" />
              <Flame className="w-4 h-4 text-red-900" />
              <span className="ml-1">Moderate Heat</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-red-400" />
              <span>24 comments</span>
            </div>
          </div>
        </div>
        {/* Accent divider */}
        <div className="w-24 h-2 rounded-full bg-gradient-to-r from-red-700 via-red-400 to-red-900 opacity-70 mt-10 mb-2 mx-auto shadow-lg" />
      </section>

      {/* Story Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg prose-invert max-w-none font-serif">
            {/* In-article visual break with overlay and caption */}
            <div className="flex justify-center my-14 relative">
              <img
                src="https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-1.jpg"
                alt="Chyna White in the boardroom"
                className="rounded-xl shadow-2xl border-2 border-red-700/40 max-h-72 object-cover w-full max-w-2xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-red-100 px-4 py-2 rounded-full text-base font-medium shadow-lg">
                "She moved through the world like she owned it."
              </div>
            </div>
            {/* Story Text */}
            <div className="space-y-10 text-gray-200 leading-relaxed text-xl">
              <p className="text-3xl font-serif first-letter:text-8xl first-letter:font-extrabold first-letter:text-purple-400 first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:mt-2 drop-shadow-xl">
                The conference room smelled like expensive cologne and desperation. Chyna leaned back in her Eames chair, her tattooed fingers drumming a beat on the mahogany table that probably cost more than her first car. The three men across from her—crisp suits, carefully maintained five o'clock shadows, the kind of confidence that comes from never being told "no"—were still talking.
              </p>

              <p>
                She'd stopped listening about five minutes ago.
              </p>

              <p>
                "...and that's why we think this partnership would be mutually beneficial," the one in the middle—Marcus? Martin? She'd already forgotten—concluded with a smile that probably worked on whoever he married right out of undergrad.
              </p>

              <p>
                Chyna let the silence stretch. One second. Two. Just long enough for them to get uncomfortable. Then she smiled, slow and deliberate, the same smile that used to make rival crews think twice.
              </p>

              <p className="italic">
                "Nah."
              </p>

              <p>
                The word landed like a brick through a window.
              </p>

              <p>
                Marcus-Martin blinked. "I'm sorry?"
              </p>

              <p>
                "I said nah. N-A-H. Nah." Chyna stood, smooth as silk despite the slight hitch in her left leg—a souvenir from a life she didn't talk about in rooms like this. She was five-foot-six in her custom Jordans, curves that made even tailored business casual look like a threat, and an aura that took up all the oxygen.
              </p>

              <p>
                "Your offer's weak, your projections are based on outdated market research, and—" she paused, picking up her leather portfolio, "—you clearly didn't do your homework on who you're trying to impress. I don't need your money. I don't need your connections. And I damn sure don't need three finance bros who couldn't find their way out of an Excel spreadsheet telling me how to run my business."
              </p>

              <p>
                The one on the left—younger, hungrier—had the nerve to smirk. "With all due respect, Ms. White—"
              </p>

              <p>
                "It's just Chyna. And you can keep your respect. I bought my own." She was already walking toward the door. "Y'all have a blessed day."
              </p>

              <div className="my-14 border-l-4 border-red-700/80 pl-10 italic text-red-200 text-2xl bg-black/30 rounded-r-2xl shadow-lg font-serif">
                "See, that's the thing about Chyna. She moved through the world like she owned it, because in the ways that mattered, she did."
              </div>

              <p>
                Outside, the DMV winter hit different—cold but not brutal, the kind of afternoon where the sun pretended to care. Chyna pushed through the revolving door of the high-rise, her cane (custom, black carbon fiber with gold accents, because fuck pity) clicking against marble floors that tried too hard to look expensive.
              </p>

              <p>
                Her phone buzzed. A text from Simone, her business partner and the only person alive who could tell her about herself without catching hands.
              </p>

              <p className="font-mono text-base bg-black/60 p-5 rounded-xl border border-purple-700/40 shadow-inner">
                <span className="text-purple-400">SIMONE:</span> How'd it go?<br/>
                <span className="text-pink-400">CHYNA:</span> Told them to kick rocks in flip flops<br/>
                <span className="text-purple-400">SIMONE:</span> 😂 That's my girl. Come to the office. We need to talk about the NYC contract<br/>
                <span className="text-pink-400">CHYNA:</span> On my way. Lemme grab coffee first<br/>
                <span className="text-purple-400">SIMONE:</span> Make it a double. This one's complicated
              </p>

              <p>
                Everything was always complicated. That was life when you built an empire from scratch with nothing but nerve, talent, and a past you'd rather forget.
              </p>

              <p>
                The coffee shop—her coffee shop, actually, one of three she owned across the city—was buzzing with the late lunch crowd. The kid behind the counter, Darius, lit up when she walked in.
              </p>

              <p>
                "Yo, Ms. C! The usual?"
              </p>

              <p>
                "You know it. Extra shot. I got business to handle."
              </p>

              <p>
                While Darius worked the espresso machine like he was conducting a symphony, Chyna scanned the room. This was her meditation—watching the ecosystem she'd built. College students cramming for exams. A couple on what looked like a first date. A group of artists sketching in the corner.
              </p>

              <p>
                None of them knew her story. The nights sleeping in her car after her music career crashed and burned. The years hustling products she couldn't get a prescription for, watching her back every second. The soul-crushing months in corporate America where she learned the game just to burn it down and build her own.
              </p>

              <p>
                They saw a stylish Black woman with tattoos and confidence. They didn't see the scars.
              </p>

              <p>
                Good.
              </p>

              <p>
                "Ms. C?" Darius slid her oat milk latte across the counter. "You good? You looked mad far away just now."
              </p>

              <p>
                Chyna smiled—genuine this time, the kind she saved for people who actually mattered. "I'm perfect, baby. Just thinking about my next move."
              </p>

              <p>
                "That's what I'm talking about! Chess, not checkers."
              </p>

              <p>
                "Always."
              </p>

              <p>
                She dropped a twenty in the tip jar, ignored his protests, and headed back into the cold.
              </p>

              <p>
                The walk to her office was only three blocks, but in that distance, Chyna slipped through three different versions of herself. Past the barbershop where old heads still remembered her from the block—quick nod, keep it moving. Through the renovated arts district where gallery owners waved like they'd always believed in her—smile, wave back, don't stop. Into the building where her company, White Enterprises, occupied the entire third floor.
              </p>

              <p className="italic text-red-300 text-2xl font-serif">
                From the streets to the suites, and she'd earned every damn step.
              </p>

              <p>
                Simone was waiting in their shared office, feet up on her desk, natural hair piled in a top knot that defied physics and gravity.
              </p>

              <p>
                "So," Simone said without preamble, because that's how they worked—no small talk, just business and love in equal measure. "New York wants us. Like, <em>really</em> wants us."
              </p>

              <p>
                Chyna sank into her chair, the one that faced the window overlooking the city she'd conquered one deal at a time. "How bad?"
              </p>

              <p>
                "Bad enough to offer triple our usual consulting fee. But there's a catch."
              </p>

              <p>
                "There's always a catch."
              </p>

              <p>
                "The project lead..." Simone paused, and Chyna knew immediately this was about to be some bullshit. "It's Marcus."
              </p>

              <p>
                And just like that, the past came knocking.
              </p>

              <p>
                Not conference room Marcus. <em>Marcus</em> Marcus. Six-two, skin like midnight, smile that used to make her forget her own name. The man she'd loved back when she was still rapping, before everything went sideways. Before she had to choose between the music and survival.
              </p>

              <p>
                The man who'd left when she needed him most.
              </p>

              <p>
                "Fuck," Chyna said, which was both a statement and a complete sentence.
              </p>

              <p>
                "Yeah," Simone agreed. "So what are we doing?"
              </p>

              <p>
                Chyna took a long sip of her coffee, feeling the caffeine hit her system, sharpening her edges. She looked at her reflection in the window—tattooed arms, styled locs, designer fit, cane leaning against her desk. She'd survived worse than an ex with a job offer.
              </p>

              <p>
                "We're doing what we always do," she said finally. "We're getting that bag. And if Marcus has a problem with who I became, that's his cross to carry."
              </p>

              <p>
                Simone grinned. "That's my girl."
              </p>

              <p>
                "Besides," Chyna added, pulling up the contract on her laptop, "I want him to see exactly who I am now. Let him choke on it."
              </p>

              <p className="text-center text-red-400 italic mt-16 text-xl font-serif">
                [To be continued...]
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Episode Nav */}
      <section className="py-12 bg-gradient-to-br from-black via-red-900/80 to-black border-t border-red-700/40">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between">
            <Button disabled className="border-red-700/40 bg-black/60 text-red-400">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Episode
            </Button>
            <Button asChild className="bg-gradient-to-r from-red-700 to-black hover:from-red-800 hover:to-black border-red-700 text-red-100">
              <Link href="/stories/chyna-white">
                <ArrowRight className="w-4 h-4 mr-2" />
                Next Episode (Coming Soon)
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-red-200">
            <MessageCircle className="w-6 h-6 text-red-400" />
            Reader Comments
          </h2>
          <Card className="bg-black/40 backdrop-blur border-red-700/40 p-6">
            <p className="text-red-400 text-center">
              Comments coming soon! For now, share your thoughts via email or social media.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
