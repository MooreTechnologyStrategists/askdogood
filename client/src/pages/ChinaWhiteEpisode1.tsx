import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Flame, Clock, MessageCircle, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function ChinaWhiteEpisode1() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900 text-white">
      {/* Header */}
      <div className="border-b border-purple-500/30 bg-black/40 backdrop-blur sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/stories/chyna-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Series
            </Link>
          </Button>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setLiked(!liked)}
            >
              <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
              {liked ? 'Liked' : 'Like'}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Episode Hero */}
      <section className="py-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20">
        <div className="container max-w-4xl">
          <Badge className="mb-4 bg-purple-600/30 border-purple-500/50">
            Chyna White • Episode 1
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The Setup
          </h1>
          
          <p className="text-xl text-gray-300 mb-6">
            Meet Chyna White. Former rapper. Ex-street pharmacist. Reformed corporate drone. Current boss. 
            And she's about to blow up your assumptions.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500" />
              <Flame className="w-4 h-4 text-red-500 fill-red-500" />
              <Flame className="w-4 h-4 text-red-500 fill-red-500" />
              <Flame className="w-4 h-4 text-gray-600" />
              <Flame className="w-4 h-4 text-gray-600" />
              <span className="ml-1">Moderate Heat</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>24 comments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Story Text */}
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <p className="text-xl first-letter:text-7xl first-letter:font-bold first-letter:text-purple-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-2">
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

              <div className="my-8 border-l-4 border-purple-500 pl-6 italic text-gray-400">
                "See, that's the thing about Chyna. She moved through the world like she owned it, because in the ways that mattered, she did."
              </div>

              <p>
                Outside, the DMV winter hit different—cold but not brutal, the kind of afternoon where the sun pretended to care. Chyna pushed through the revolving door of the high-rise, her cane (custom, black carbon fiber with gold accents, because fuck pity) clicking against marble floors that tried too hard to look expensive.
              </p>

              <p>
                Her phone buzzed. A text from Simone, her business partner and the only person alive who could tell her about herself without catching hands.
              </p>

              <p className="font-mono text-sm bg-black/40 p-4 rounded">
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

              <p className="italic">
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

              <p className="text-center text-gray-500 italic mt-12">
                [To be continued...]
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Episode Nav */}
      <section className="py-12 bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-t border-purple-500/30">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between">
            <Button variant="outline" disabled className="border-purple-500/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Episode
            </Button>
            
            <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Reader Comments
          </h2>
          
          <Card className="bg-black/40 backdrop-blur border-purple-500/30 p-6">
            <p className="text-gray-400 text-center">
              Comments coming soon! For now, share your thoughts via email or social media.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
