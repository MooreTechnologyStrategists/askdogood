import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp } from 'lucide-react';

export default function ExternalNewsFeeds() {
  // These would normally come from RSS feeds, but we'll use placeholders
  // You can integrate actual RSS feeds using a service like RSS2JSON or Feedly API
  
  const newsItems = [
    {
      source: "Meidastouch",
      title: "Latest Political Commentary",
      description: "Progressive news and commentary you can trust",
      url: "https://www.youtube.com/@MeidasTouch",
      color: "from-blue-600 to-blue-800",
      icon: "📰"
    },
    {
      source: "MSNBC",
      title: "Breaking News & Analysis",
      description: "Stay informed with the latest headlines",
      url: "https://www.msnbc.com/",
      color: "from-purple-600 to-purple-800",
      icon: "🎥"
    },
    {
      source: "TheGrio",
      title: "Black News & Culture",
      description: "Stories that matter to our community",
      url: "https://thegrio.com/",
      color: "from-green-600 to-green-800",
      icon: "✊🏾"
    },
    {
      source: "Essence",
      title: "Black Women's Lifestyle",
      description: "Beauty, wellness, and culture for Black women",
      url: "https://www.essence.com/",
      color: "from-pink-600 to-pink-800",
      icon: "👑"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Stay Connected</h2>
          </div>
          <p className="text-muted-foreground">
            News, culture, and commentary we're following
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-4xl">{item.icon}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">
                    {item.source}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> Follow these sources for diverse perspectives and stay informed on what matters most
          </p>
        </div>
      </div>
    </section>
  );
}
