import { useEffect } from 'react';
import { blogPosts } from '@/content/blogData';

export default function BlogRSS() {
  useEffect(() => {
    const rss = generateRSS();
    const blob = new Blob([rss], { type: 'application/rss+xml' });
    const url = URL.createObjectURL(blob);
    
    // Set the page content type and download the RSS
    const link = document.createElement('a');
    link.href = url;
    link.download = 'feed.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="container py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Generating RSS Feed...</h1>
      <p className="text-muted-foreground">
        Your RSS feed is being generated. If download doesn't start automatically,{' '}
        <button 
          onClick={() => {
            const rss = generateRSS();
            const blob = new Blob([rss], { type: 'application/rss+xml' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'feed.xml';
            link.click();
            URL.revokeObjectURL(url);
          }}
          className="text-primary hover:underline"
        >
          click here
        </button>.
      </p>
    </div>
  );
}

function generateRSS(): string {
  const baseUrl = 'https://askdogood.com';
  const now = new Date().toUTCString();
  
  // Sort posts by date descending and take the most recent 100
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date || '2023-01-01');
    const dateB = new Date(b.date || '2023-01-01');
    return dateB.getTime() - dateA.getTime();
  });
  
  const items = sortedPosts.slice(0, 100).map(post => {
    // Clean up content for RSS (remove markdown, limit length)
    const cleanExcerpt = post.excerpt
      ?.replace(/<[^>]*>/g, '') // Remove HTML tags
      ?.replace(/\n/g, ' ') // Remove newlines
      ?.trim()
      ?.substring(0, 500) || '';
    
    const cleanContent = post.content
      ?.replace(/\\n/g, '\n') // Convert escaped newlines
      ?.replace(/\*\*/g, '') // Remove markdown bold
      ?.replace(/\*/g, '') // Remove markdown italic
      ?.replace(/#{1,6}\s/g, '') // Remove markdown headers
      ?.trim()
      ?.substring(0, 2000) || cleanExcerpt;
    
    const postDate = post.date ? new Date(post.date) : new Date('2023-01-01');
    
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.id}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.id}</guid>
      <pubDate>${postDate.toUTCString()}</pubDate>
      <description><![CDATA[${cleanExcerpt}]]></description>
      <content:encoded><![CDATA[${cleanContent}]]></content:encoded>
      <author>askdogood@gmail.com (RoSeé Murphy)</author>
      ${post.tags?.map(tag => `<category>${tag}</category>`).join('\n      ')}
    </item>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AskDoGood - Wellness &amp; Thyroid Health Blog</title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
    <description>Real talk about thyroid health, chronic illness recovery, and wellness from RoSeé Murphy. Authentic advice from a thyroid cancer survivor who's been through it all.</description>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getFullYear()} AskDoGood.com</copyright>
    <managingEditor>askdogood@gmail.com (RoSeé Murphy)</managingEditor>
    <webMaster>askdogood@gmail.com (RoSeé Murphy)</webMaster>
    <pubDate>${now}</pubDate>
    <lastBuildDate>${now}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>https://askdogoodassets.blob.core.windows.net/images/brand/logo-flower-circle.webp</url>
      <title>AskDoGood</title>
      <link>${baseUrl}</link>
    </image>
    ${items}
  </channel>
</rss>`;
}
