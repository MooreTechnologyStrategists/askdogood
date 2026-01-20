#!/usr/bin/env python3
"""
Generate RSS Feed for Blog Posts
Creates an RSS XML file that Mailchimp can use for RSS-to-Email campaigns
"""

import json
from pathlib import Path
from datetime import datetime
import html

# Configuration
BLOG_DATA_FILE = Path("blog_posts_export.json")
OUTPUT_FILE = Path("../public/blog-rss.xml")
SITE_URL = "https://askdogood.com"
SITE_TITLE = "AskDoGood - Wellness & Thyroid Health Blog"
SITE_DESCRIPTION = "Real talk about thyroid health, chronic illness recovery, and wellness from RoSeé Murphy"
AUTHOR_EMAIL = "askdogood@gmail.com"
AUTHOR_NAME = "RoSeé Murphy"

def load_blog_posts():
    """Load blog posts from exported JSON"""
    if not BLOG_DATA_FILE.exists():
        print(f"❌ Error: {BLOG_DATA_FILE} not found!")
        print("Run: python export_blog_posts.py first")
        return []
    
    with open(BLOG_DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def escape_xml(text):
    """Escape text for XML"""
    return html.escape(str(text))

def format_date_rfc822(date_str):
    """Convert date string to RFC 822 format for RSS"""
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        return dt.strftime("%a, %d %b %Y 00:00:00 GMT")
    except:
        return datetime.now().strftime("%a, %d %b %Y 00:00:00 GMT")

def generate_rss_item(post):
    """Generate RSS item XML for a single post"""
    post_url = f"{SITE_URL}/blog/{post['id']}"
    pub_date = format_date_rfc822(post.get('date', ''))
    
    # Clean up content - remove any HTML that might break RSS
    content = post.get('content', post.get('excerpt', ''))
    excerpt = post.get('excerpt', '')[:200] + "..."
    
    # Get image URL
    image_url = f"{SITE_URL}{post.get('image', '/assets/img/blog/_fallback/blog.webp')}"
    
    item = f"""
    <item>
      <title><![CDATA[{escape_xml(post['title'])}]]></title>
      <link>{post_url}</link>
      <guid isPermaLink="true">{post_url}</guid>
      <pubDate>{pub_date}</pubDate>
      <description><![CDATA[{escape_xml(excerpt)}]]></description>
      <content:encoded><![CDATA[
        <img src="{image_url}" alt="{escape_xml(post['title'])}" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
        <p>{escape_xml(excerpt)}</p>
        <p><a href="{post_url}" style="background-color: #8B5CF6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 20px;">Read Full Article →</a></p>
      ]]></content:encoded>
      <author>{AUTHOR_EMAIL} ({AUTHOR_NAME})</author>
      <category><![CDATA[{', '.join(post.get('tags', [])[:3])}]]></category>
      <enclosure url="{image_url}" type="image/webp" />
    </item>"""
    
    return item

def generate_rss_feed(posts):
    """Generate complete RSS feed XML"""
    now = datetime.now().strftime("%a, %d %b %Y %H:%M:%S GMT")
    
    # Sort posts by date (newest first)
    sorted_posts = sorted(posts, key=lambda x: x.get('date', ''), reverse=True)
    
    # Generate all items
    items = '\n'.join([generate_rss_item(post) for post in sorted_posts])
    
    rss = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{escape_xml(SITE_TITLE)}</title>
    <link>{SITE_URL}</link>
    <atom:link href="{SITE_URL}/blog-rss.xml" rel="self" type="application/rss+xml" />
    <description>{escape_xml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <pubDate>{now}</pubDate>
    <lastBuildDate>{now}</lastBuildDate>
    <ttl>60</ttl>
    <managingEditor>{AUTHOR_EMAIL} ({AUTHOR_NAME})</managingEditor>
    <webMaster>{AUTHOR_EMAIL} ({AUTHOR_NAME})</webMaster>
    <image>
      <url>{SITE_URL}/assets/img/brand/logo-flower-circle.webp</url>
      <title>{escape_xml(SITE_TITLE)}</title>
      <link>{SITE_URL}</link>
    </image>
    {items}
  </channel>
</rss>"""
    
    return rss

def main():
    print("🔄 Generating RSS Feed for Blog Posts")
    print("=" * 60)
    
    # Load blog posts
    posts = load_blog_posts()
    if not posts:
        return
    
    print(f"📚 Found {len(posts)} blog posts")
    
    # Generate RSS feed
    print("🛠️ Generating RSS XML...")
    rss_xml = generate_rss_feed(posts)
    
    # Save to file
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(rss_xml)
    
    print(f"✅ RSS feed saved to: {OUTPUT_FILE}")
    print(f"\n📍 RSS Feed URL: {SITE_URL}/blog-rss.xml")
    print("\n" + "=" * 60)
    print("Next Steps:")
    print("1. Deploy this file to your web server")
    print("2. Test the feed: https://validator.w3.org/feed/")
    print("3. Copy the URL into Mailchimp RSS-to-Email campaign")
    print("=" * 60)

if __name__ == "__main__":
    main()
