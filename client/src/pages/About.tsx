import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Shield, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "No filters, no pretense. Just real talk about real experiences."
    },
    {
      icon: Users,
      title: "Community",
      description: "We heal together. Our stories matter, and so do our voices."
    },
    {
      icon: Shield,
      title: "Advocacy",
      description: "Fighting for better healthcare, better outcomes, and better treatment for all of us."
    },
    {
      icon: Lightbulb,
      title: "Empowerment",
      description: "Knowledge is power. I'm here to share what I've learned so you can advocate for yourself."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/thyroid-awareness-black-woman.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Thyroid cancer survivor. Balanced-Living Health advocate. Black, disabled, veteran woman. Truth-teller.
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
            My Story
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I'm a black, disabled veteran woman who spent 22 years navigating a broken healthcare system before finally getting the diagnosis that changed everything: thyroid cancer.
            </p>

            <p className="text-lg leading-relaxed">
              For over two decades, I dealt with symptoms that were dismissed, minimized, or misdiagnosed. Because my family's history with thyroid issues, I would get my thyroid 
              checked annually, and even though it would abnormal every time, the doctor's would always suggest to 
              just 'monitor' my thyroid.  Meanwhile, I was falling apart internally.  At my lowest, I would not even
              drive on the highway. I could not walk outside to go to the mailbox or even the sidewalk in front of my home.  I would palpitate just watching a highway on the television. All I heard was...
              Brain fog? "Maybe it's depression." <br/>
              Hair loss? "That's just aging." <br/>
              The constant feeling that something was wrong with my body? <br/>
              "It's all in your head."  And to be fair, it was all in my head.<br/><br/>
              But why? <br/>Because no one was willing to dig deeper. No one was willing to listen.  
              My thyroid was failing, and no one was willing to do the proper testing to find out why.   
            </p>

            <p className="text-lg leading-relaxed">
              I can't tell you how many times I was told to see a psychiatrist instead of getting proper thyroid testing. How many times my symptoms were attributed to being a 
              black woman who "just needs to manage stress better." How many times I left a doctor's office feeling gaslit, unheard, and defeated. We are largely classified as being b*****s and crazy 
              when our hormones are out of whack. But it is just assumed that we are angry and emotional beings.  So, we just accept it and move on.  All the while, depriving ourselves of thyroid stabilizing treatments 
              like vitamin D, iodine, and proper thyroid medication. Please. Take care of yourself.
            </p>

            <p className="text-lg leading-relaxed">
              The truth is, thyroid issues—especially in black women—are chronically overlooked. Our symptoms get dismissed as mental health issues. 
              We're told we're exaggerating. We're prescribed antidepressants when what we really need is proper thyroid testing, vitamin D levels checked, and doctors who actually listen.
            </p>

            <p className="text-lg leading-relaxed">
              When I finally got diagnosed with thyroid cancer, it was both devastating and validating. I wasn't crazy. I wasn't making it up. 
              My body had been trying to tell me something for 22 years, and the medical system had failed to listen.
            </p>

            <p className="text-lg leading-relaxed">
              Now, I'm cancer-free and committed to using my voice to advocate for better healthcare for black and brown communities. I share my story not for sympathy, but to empower others to trust their bodies, 
              demand better care, and know they're not alone.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
            Why This Work Matters
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Black women face significant health disparities. We're more likely to have our pain dismissed, 
              our symptoms minimized, and our concerns ignored. We die at higher rates from preventable 
              conditions because we're not getting the care we deserve.
            </p>

            <p className="text-lg leading-relaxed">
              This platform is my way of fighting back. I talk about the hard stuff—thyroid health, 
              addiction and vices, smoking in our community, the impact of marijuana on our youth—because these 
              conversations save lives.
            </p>

            <p className="text-lg leading-relaxed">
              I'm not a doctor, but I am someone who's been through endless challenges that strengthened me. Someone who knows what it's like 
              to be dismissed, to fight for answers, and to finally find healing. If my story helps even one 
              person advocate for themselves, demand better care, or recognize their symptoms earlier, then 
              this work is worth it.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              What I Stand For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These values guide everything I do and every conversation I have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beyond Health Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
            Beyond Health
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              While health advocacy is at the core of what I do, I'm also passionate about restoration, 
              personal growth, and living authentically. I'm in healing mode myself, and I know firsthand how 
              hard it is to break free from depression and anxiety—especially in a community where choosing to 
              respect yourself and communicate the truth is abnormalized.
            </p>

            <p className="text-lg leading-relaxed">
              I talk about these things not to judge, but to share what I've learned. To be real about the 
              struggles, the setbacks, and the victories. To create a space where we can have honest conversations 
              about our health, our habits, and our futures.
            </p>

            <p className="text-lg leading-relaxed">
              I'm a professional, a survivor, a work in progress, and someone who believes in the power of community. 
              I'm here to share my journey, learn from yours, and build something meaningful together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Let's Connect
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Have questions? Want to share your story? I'm here to listen.
          </p>
          <a href="/contact" className="inline-block">
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
