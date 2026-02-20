import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp } from 'lucide-react';

export default function ExternalNewsFeeds() {
  const newsItems = [
    {
      source: "MeidasTouch",
      title: "Progressive Political News",
      description: "Bold progressive commentary and breaking political news",
      url: "https://www.youtube.com/@MeidasTouch",
      logo: "https://yt3.googleusercontent.com/NPZGgxYJeZ2Z8F8Sf7-PGc8x_iJBt6TLKy8qLJLKUvJl8tQj7b8-jJEwAYW4ZF5Q2qJZLJEwAYW=s900-c-k-c0x00ffffff-no-rj",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50"
    },
    {
      source: "MSNBC",
      title: "Breaking News & Analysis",
      description: "Stay informed with in-depth reporting and expert analysis",
      url: "https://www.msnbc.com/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/MSNBC_2021.svg/1200px-MSNBC_2021.svg.png",
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50"
    },
    {
      source: "TheGrio",
      title: "Black News & Culture",
      description: "Stories that matter to our community and amplify Black voices",
      url: "https://thegrio.com/",
      logo: "https://thegrio.com/wp-content/uploads/2021/07/thegrio-logo-2021.png",
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50"
    },
    {
      source: "Essence",
      title: "Black Women's Lifestyle",
      description: "Beauty, wellness, and culture celebrating Black women",
      url: "https://www.essence.com/",
      logo: "https://www.essence.com/wp-content/themes/essence-pub/assets/img/logo.svg",
      color: "from-pink-600 to-pink-800",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full mb-6 shadow-xl">
            <TrendingUp className="h-5 w-5 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Stay Connected
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            News & Culture <span className="text-primary">We Follow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diverse perspectives and trusted sources for what matters most to our community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 hover:border-primary/50 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardHeader className="pb-4">
                  <div className={`flex items-center justify-center h-24 mb-4 ${item.bgColor} rounded-lg p-4`}>
                    <img 
                      src={item.logo} 
                      alt={`${item.source} logo`}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-4xl">📰</span>`;
                      }}
                    />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">
                    {item.source}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Visit Site</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-10 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-2">
              <strong className="text-foreground">💡 Why These Sources?</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              I believe in staying informed from diverse, trusted voices that amplify our community and challenge the status quo. These are the platforms I follow daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
