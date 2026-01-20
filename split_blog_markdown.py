#!/usr/bin/env python3
"""
Split a single markdown file containing multiple blog posts into individual files.
Expects posts to be separated by frontmatter (---) or heading markers.
"""

import os
import sys
import re
from pathlib import Path


def slugify(text):
    """Convert text to a URL-friendly slug"""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')


def split_blog_posts(input_file, output_dir):
    """Split a markdown file into individual blog post files"""
    
    input_path = Path(input_file)
    output_path = Path(output_dir)
    
    # Validate input file
    if not input_path.exists():
        print(f"❌ Error: Input file '{input_file}' not found")
        return False
    
    # Create output directory if it doesn't exist
    output_path.mkdir(parents=True, exist_ok=True)
    
    # Read the entire file
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by frontmatter markers (---) or markdown h1 headers
    # Try frontmatter first
    posts = re.split(r'\n---\n(?=title:|\w+:)', content)
    
    if len(posts) <= 1:
        # Try splitting by h1 headers
        posts = re.split(r'\n# ', content)
        posts = ['# ' + post if i > 0 else post for i, post in enumerate(posts)]
    
    print(f"📄 Found {len(posts)} potential blog posts")
    
    created_count = 0
    for i, post in enumerate(posts, 1):
        post = post.strip()
        if not post:
            continue
        
        # Extract title from frontmatter or first heading
        title_match = re.search(r'^title:\s*["\']?([^"\'\n]+)["\']?', post, re.MULTILINE)
        if not title_match:
            title_match = re.search(r'^#\s+(.+)$', post, re.MULTILINE)
        
        if title_match:
            title = title_match.group(1).strip()
            slug = slugify(title)
        else:
            slug = f"post-{i}"
            title = f"Post {i}"
        
        # Determine category from tags or default to 'general'
        category = 'general'
        tags_match = re.search(r'^tags:\s*\[?([^\]\n]+)\]?', post, re.MULTILINE)
        if tags_match:
            tags = tags_match.group(1).split(',')
            if tags:
                category = slugify(tags[0].strip())
        
        # Create category directory
        category_dir = output_path / category
        category_dir.mkdir(exist_ok=True)
        
        # Write the post to a file
        output_file = category_dir / f"{slug}.md"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(post)
        
        print(f"✅ Created: {output_file.relative_to(output_path.parent)}")
        created_count += 1
    
    print(f"\n🎉 Successfully split {created_count} blog posts!")
    print(f"📁 Output directory: {output_path}")
    return True


def main():
    if len(sys.argv) != 3:
        print("Usage: python split_blog_markdown.py <input_file.md> <output_directory>")
        print("\nExample:")
        print("  python split_blog_markdown.py all-posts.md client/src/content/blog")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_dir = sys.argv[2]
    
    success = split_blog_posts(input_file, output_dir)
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
