#!/usr/bin/env python3
"""
Social Media Content Generator for AskDoGood Blog Posts

This script generates social media images and copy for blog posts using OpenAI's DALL-E and GPT-4.
Perfect for automating your social media content creation!

Usage:
    python generate_social_media_content.py --post-id "pro-tips-for-giving-tuesday"
    python generate_social_media_content.py --batch 10  # Generate for next 10 posts
    python generate_social_media_content.py --platform instagram  # Instagram-specific
"""

import json
import os
import sys
from pathlib import Path
from datetime import datetime
import requests
from openai import OpenAI
from PIL import Image, ImageDraw, ImageFont

# Configuration
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OUTPUT_DIR = Path("../public/assets/img/social-media")
BLOG_IMAGES_DIR = Path("../public/assets/img/blog/assigned")
CONTENT_FILE = Path("../client/src/content/blogData.ts")
SOCIAL_POSTS_OUTPUT = Path("social_media_posts.json")

# Ensure output directory exists
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Social media image dimensions
SOCIAL_DIMENSIONS = {
    "instagram": (1080, 1080),  # Square
    "facebook": (1200, 630),     # Landscape
    "linkedin": (1200, 627),     # Landscape
    "twitter": (1200, 675),      # Landscape
    "instagram_story": (1080, 1920),  # Vertical
}

# Initialize OpenAI client
client = OpenAI(api_key=OPENAI_API_KEY) if OPENAI_API_KEY else None


def extract_blog_posts_from_ts():
    """Extract blog post data from TypeScript file"""
    print("📖 Reading blog posts from blogData.ts...")
    
    # For simplicity, we'll load the pre-exported JSON
    # In production, you'd parse the TypeScript or use the export_blog_posts.py script
    json_file = Path("blog_posts_export.json")
    
    if json_file.exists():
        with open(json_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    print("⚠️ Warning: blog_posts_export.json not found. Run export_blog_posts.py first.")
    return []


def generate_image_prompt(post):
    """Generate DALL-E prompt for social media image"""
    tags_str = ", ".join(post.get("tags", []))
    
    prompt = f"""Create a vibrant, inspiring social media graphic for a wellness blog post.

Title: {post['title']}
Theme: {tags_str}
Style: Modern, clean, professional with natural wellness aesthetic
Colors: Warm earth tones, sage green, cream, gold accents
Elements: Include subtle botanical elements, abstract shapes
Typography space: Leave center area clear for text overlay
Mood: Empowering, healing, hopeful
Format: Square composition perfect for Instagram/Facebook

The image should feel warm, inviting, and professional - representing a wellness brand focused on thyroid health and chronic illness recovery."""
    
    return prompt


def generate_social_copy(post, platform="instagram"):
    """Generate social media copy using GPT-4"""
    if not client:
        print("⚠️ OpenAI API key not set. Using template copy.")
        return generate_template_copy(post, platform)
    
    platform_specs = {
        "instagram": {
            "max_length": 2200,
            "hashtags": True,
            "emojis": True,
            "tone": "casual and inspiring"
        },
        "facebook": {
            "max_length": 500,
            "hashtags": False,
            "emojis": True,
            "tone": "conversational and warm"
        },
        "linkedin": {
            "max_length": 1300,
            "hashtags": True,
            "emojis": False,
            "tone": "professional yet personal"
        },
        "twitter": {
            "max_length": 280,
            "hashtags": True,
            "emojis": True,
            "tone": "concise and impactful"
        }
    }
    
    specs = platform_specs.get(platform, platform_specs["instagram"])
    
    prompt = f"""Write engaging social media copy for this blog post:

Title: {post['title']}
Excerpt: {post['excerpt']}
Tags: {', '.join(post.get('tags', []))}

Platform: {platform.capitalize()}
Max Length: {specs['max_length']} characters
Include Hashtags: {specs['hashtags']}
Include Emojis: {specs['emojis']}
Tone: {specs['tone']}

The copy should:
1. Start with a hook that grabs attention
2. Share a key insight or value from the post
3. Include a call-to-action to read the full article
4. Feel authentic and personal (written by RoSeé Murphy, wellness advocate & thyroid warrior)
5. Use storytelling where appropriate
6. Include relevant hashtags at the end (if applicable)
7. End with: "Link in bio to read the full post 🔗"

Brand Voice: Real, vulnerable, empowering, evidence-based but accessible, faith-infused, community-focused.
"""
    
    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a social media expert specializing in wellness and health content for Black women with chronic illnesses. You write authentic, engaging copy that converts."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.8,
            max_tokens=600
        )
        
        return response.choices[0].message.content.strip()
    
    except Exception as e:
        print(f"❌ Error generating copy with GPT-4: {e}")
        return generate_template_copy(post, platform)


def generate_template_copy(post, platform="instagram"):
    """Generate template social media copy (fallback)"""
    title = post['title']
    excerpt = post['excerpt'][:200] + "..." if len(post['excerpt']) > 200 else post['excerpt']
    tags = post.get('tags', [])
    
    if platform == "instagram":
        copy = f"""✨ {title}

{excerpt}

I poured my heart into this one because I've been there—struggling, searching for answers, and learning to heal.

This is for anyone who needs to hear it today. 💜

Link in bio to read the full post 🔗

---
#{' #'.join(tags).replace(' ', '').replace(',', '')} #ThyroidHealth #ChronicIllness #WellnessJourney #HealingJourney #BlackWellness #HealthyLiving #SelfCare #Wellness #AskDoGood"""
    
    elif platform == "facebook":
        copy = f"""📖 {title}

{excerpt}

I wrote this because it's something I needed to read when I was in the thick of my healing journey.

If this resonates with you, click the link to read more. And if it helps you, share it with someone who needs it too. 💚

Read full article: [Link in comments]"""
    
    elif platform == "linkedin":
        copy = f"""{title}

{excerpt}

As someone who's navigated 5 autoimmune diagnoses while building a tech career, I've learned that healing isn't linear—but it IS possible.

This article breaks down practical strategies that made a difference for me, backed by both lived experience and evidence-based research.

Read the full post: [Link in comments]

#{', #'.join(tags).replace(' ', '')}"""
    
    else:  # twitter
        copy = f"""{title}

{excerpt[:180]}...

Full post 👇
[link]"""
    
    return copy


def format_image_for_social(source_image_path, post_id, platform="instagram"):
    """Format existing blog image for social media platform"""
    try:
        # Try to open the existing blog image
        source_path = BLOG_IMAGES_DIR / f"{post_id}.webp"
        
        # Fallback to other extensions if webp doesn't exist
        if not source_path.exists():
            for ext in ['.jpg', '.jpeg', '.png']:
                alt_path = BLOG_IMAGES_DIR / f"{post_id}{ext}"
                if alt_path.exists():
                    source_path = alt_path
                    break
        
        if not source_path.exists():
            print(f"⚠️ Blog image not found for {post_id}, trying fallback...")
            # Try fallback image
            fallback_path = Path("../public/assets/img/blog/_fallback/blog.webp")
            if fallback_path.exists():
                source_path = fallback_path
            else:
                return None
        
        # Open and process image
        img = Image.open(source_path)
        
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        
        # Get target dimensions
        target_width, target_height = SOCIAL_DIMENSIONS.get(platform, SOCIAL_DIMENSIONS["instagram"])
        target_ratio = target_width / target_height
        
        # Calculate current ratio
        current_ratio = img.width / img.height
        
        # Crop to target ratio (center crop)
        if current_ratio > target_ratio:
            # Image is wider, crop width
            new_width = int(img.height * target_ratio)
            left = (img.width - new_width) // 2
            img = img.crop((left, 0, left + new_width, img.height))
        elif current_ratio < target_ratio:
            # Image is taller, crop height
            new_height = int(img.width / target_ratio)
            top = (img.height - new_height) // 2
            img = img.crop((0, top, img.width, top + new_height))
        
        # Resize to target dimensions
        img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        # Save formatted image
        output_path = OUTPUT_DIR / f"{post_id}_{platform}.webp"
        img.save(output_path, 'WEBP', quality=90)
        
        return str(output_path.relative_to(Path("..")))
    
    except Exception as e:
        print(f"❌ Error formatting image: {e}")
        return None


def generate_all_social_images(post_id):
    """Generate formatted images for all social platforms"""
    print(f"🎨 Formatting images for all platforms...")
    Format images for all social platforms
        social_images = generate_all_social_images(post['id'])
        
        # Generate copy for all platforms
        platforms = ["instagram", "facebook", "linkedin", "twitter"]
        platform_copy = {}
        
        for plat in platforms:
            print(f"✍️ Generating {plat} copy...")
            platform_copy[plat] = generate_social_copy(post, plat)
        
        social_post = {
            "post_id": post['id'],
            "title": post['title'],
            "blog_url": f"https://askdogood.com/blog/{post['id']}",
            "images": social_images,  # Multiple images, one per platforma Content Generator")
    print("=" * 60)
    
    # Load blog posts
    blog_posts = extract_blog_posts_from_ts()
    if not blog_posts:
        print("❌ No blog posts found!")
        return
    
    print(f"📚 Found {len(blog_posts)} blog posts")
    
    # Filter posts
    if post_ids:
        posts_to_process = [p for p in blog_posts if p['id'] in post_ids]
    elif batch_size:
        posts_to_process = blog_posts[:batch_size]
    else:
        posts_to_process = blog_posts[:10]  # Default: first 10
    
    print(f"🎯 Processing {len(posts_to_process)} posts for {platform}")
    
    # Generate content
    social_posts = []
    
    for i, post in enumerate(posts_to_process, 1):
        print(f"\n--- Post {i}/{len(posts_to_process)} ---")
        print(f"📝 {post['title']}")
        
        # Generate image
        image_path = generate_image(post, post['id'])
        
        # Generate copy for all platforms
        platforms = ["instagram", "facebook", "linkedin", "twitter"]
        platform_copy = {}
        
        for plat in platforms:
            print(f"✍️ Generating {plat} copy...")
            platform_copy[plat] = generate_social_copy(post, plat)
        
        social_post = {
            "post_id": post['id'],
            "title": post['title'],
            "blog_url": f"https://askdogood.com/blog/{post['id']}",
            "image_path": image_path,
            "date_generated": datetime.now().isoformat(),
            "platforms": platform_copy
        }
        
        social_posts.append(social_post)
        print(f"✅ Complete!")
    
    # Save to JSON
    with open(SOCIAL_POSTS_OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(social_posts, f, indent=2, ensure_ascii=False)
    
    print(f"\n📦 Social media content saved to: {SOCIAL_POSTS_OUTPUT}")
    print(f"🎨 Images saved to: {OUTPUT_DIR}")
    
    # Print summary
    print("\n" + "=" * 60)
    print("📊 GENERATION COMPLETE")
    print("=" * 60)
    print(f"✅ {len(social_posts)} posts processed")
    print(f"📸 Images: {sum(len(p.get('images', {})) for p in social_posts)} total (4 per post)")
    print(f"   • Instagram (1080×1080 square)")
    print(f"   • Facebook (1200×630 landscape)")
    print(f"   • LinkedIn (1200×627 landscape)")
    print(f"   • Twitter (1200×675 landscape)")
    print(f"📝 Copy: {len(social_posts) * len(platforms)} platform variants")
    print("\nNext steps:")
    print("1. Review generated content in social_media_posts.json")
    print("2. Each post has platform-specific images already formatted")
    print("3. Schedule posts using a tool like Buffer, Hootsuite, or Later")
    print("4. Upload the correct image for each platform")
    print("5. Post and engage with your audience!")


if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Generate social media content for blog posts")
    parser.add_argument("--post-id", type=str, help="Specific post ID to generate content for")
    parser.add_argument("--batch", type=int, help="Generate for next N posts")
    # Check for required packages
    try:
        from PIL import Image
    except ImportError:
        print("\n❌ ERROR: Pillow library not installed!")
        print("Install it with: pip install Pillow")
        sys.exit(1)
    
    if not OPENAI_API_KEY:
        print("\n⚠️ WARNING: OPENAI_API_KEY environment variable not set!")
        print("Set it with: $env:OPENAI_API_KEY='your-key-here'  (PowerShell)")
        print("or: export OPENAI_API_KEY='your-key-here'  (Bash)")
        print("\nTemplate copy will be used instead of AI-generated content.")
        print("Images will still be formatted from existing blog images
    if not OPENAI_API_KEY:
        print("\n⚠️ WARNING: OPENAI_API_KEY environment variable not set!")
        print("Set it with: $env:OPENAI_API_KEY='your-key-here'  (PowerShell)")
        print("or: export OPENAI_API_KEY='your-key-here'  (Bash)")
        print("\nTemplate copy will be used instead of AI-generated content.\n")
    
    post_ids = [args.post_id] if args.post_id else None
    batch_size = len(extract_blog_posts_from_ts()) if args.all else args.batch
    
    generate_social_media_posts(post_ids, batch_size, args.platform)
