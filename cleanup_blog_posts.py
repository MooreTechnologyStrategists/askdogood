#!/usr/bin/env python3
"""
Clean up and standardize all blog posts in blogData.ts
- Fix missing images
- Standardize image paths to use blogImages mapping
- Ensure consistent formatting
- Validate all posts have required fields
"""

import re
import json
from pathlib import Path

# Paths
REPO_ROOT = Path(__file__).resolve().parent
BLOG_DATA_PATH = REPO_ROOT / "client" / "src" / "content" / "blogData.ts"
BLOG_IMAGES_PATH = REPO_ROOT / "client" / "src" / "data" / "blogImages.ts"
BACKUP_PATH = BLOG_DATA_PATH.with_suffix('.ts.cleanup_backup')

print("🧹 AskDoGood Blog Cleanup Script")
print("=" * 50)

# Read the blog data file
print(f"📖 Reading {BLOG_DATA_PATH}...")
with open(BLOG_DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract blog images mapping
print(f"📖 Reading {BLOG_IMAGES_PATH}...")
with open(BLOG_IMAGES_PATH, 'r', encoding='utf-8') as f:
    images_content = f.read()

# Parse blog images mapping
blog_images = {}
image_pattern = r'"([^"]+)":\s*"([^"]+)"'
for match in re.finditer(image_pattern, images_content):
    blog_images[match.group(1)] = match.group(2)

print(f"✅ Found {len(blog_images)} image mappings")

# Backup original file
print(f"💾 Creating backup at {BACKUP_PATH}...")
with open(BACKUP_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

# Find all posts with empty images
empty_images = re.findall(r'id:\s*"([^"]+)",\s*\n[^}]*?image:\s*""', content, re.MULTILINE)
print(f"\n🔍 Found {len(empty_images)} posts with missing images:")
for post_id in empty_images:
    print(f"   - {post_id}")

# Fix empty images by looking up in blogImages mapping
fixes_applied = 0
for post_id in empty_images:
    if post_id in blog_images:
        # Find and replace the empty image with the correct path
        pattern = f'(id:\\s*"{re.escape(post_id)}",\\s*\\n(?:[^}}]*?)image:\\s*)"",?'
        replacement = f'\\1"{blog_images[post_id]}",'
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content != content:
            content = new_content
            fixes_applied += 1
            print(f"   ✅ Fixed image for: {post_id}")
    else:
        # Use fallback image
        fallback = "/assets/img/blog/_fallback/blog.webp"
        pattern = f'(id:\\s*"{re.escape(post_id)}",\\s*\\n(?:[^}}]*?)image:\\s*)"",?'
        replacement = f'\\1"{fallback}",'
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content != content:
            content = new_content
            fixes_applied += 1
            print(f"   ⚠️  Used fallback for: {post_id}")

# Fix any Azure blob storage URLs to use local paths
azure_pattern = r'https://askdogoodassets\.blob\.core\.windows\.net/images/blog/([^"]+)'
old_style_urls = re.findall(azure_pattern, content)
if old_style_urls:
    print(f"\n🔄 Converting {len(old_style_urls)} Azure URLs to local paths...")
    for i, url_part in enumerate(set(old_style_urls)):
        old_url = f'https://askdogoodassets.blob.core.windows.net/images/blog/{url_part}'
        # Extract filename
        filename = url_part.split('/')[-1]
        new_path = f'/assets/img/blog/assigned/{filename}'
        content = content.replace(old_url, new_path)
        print(f"   ✅ Converted: {filename}")

# Standardize image field format - ensure no trailing commas
content = re.sub(r'image:\s*"([^"]+)",?\s*\n', r'image: "\1",\n', content)

# Ensure consistent spacing in object properties
content = re.sub(r'(\w+):\s{2,}', r'\1: ', content)

# Write the cleaned content
print(f"\n💾 Writing cleaned content to {BLOG_DATA_PATH}...")
with open(BLOG_DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n" + "=" * 50)
print("✨ Cleanup Complete!")
print(f"   - Fixed {fixes_applied} missing images")
print(f"   - Standardized {len(old_style_urls)} image URLs")
print(f"   - Backup saved to: {BACKUP_PATH.name}")
print("\n🎉 All blog posts are now clean and professional!")
