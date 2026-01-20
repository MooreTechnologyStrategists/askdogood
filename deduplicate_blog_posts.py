#!/usr/bin/env python3
"""
Detect and remove duplicate blog posts from blogData.ts
Keeps the first occurrence of each unique post ID
"""

import re
from pathlib import Path
from collections import Counter

# Paths
REPO_ROOT = Path(__file__).resolve().parent
BLOG_DATA_PATH = REPO_ROOT / "client" / "src" / "content" / "blogData.ts"
BACKUP_PATH = BLOG_DATA_PATH.with_suffix('.ts.dedup_backup')

print("🔍 AskDoGood Blog Deduplication Script")
print("=" * 50)

# Read the blog data file
print(f"📖 Reading {BLOG_DATA_PATH}...")
with open(BLOG_DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all post IDs
id_pattern = r'^\s*id:\s*"([^"]+)",?\s*$'
all_ids = re.findall(id_pattern, content, re.MULTILINE)

print(f"✅ Found {len(all_ids)} total blog posts")

# Find duplicates
id_counts = Counter(all_ids)
duplicates = {id: count for id, count in id_counts.items() if count > 1}

if not duplicates:
    print("\n🎉 No duplicates found! All blog posts are unique.")
    exit(0)

print(f"\n⚠️  Found {len(duplicates)} duplicate post IDs:")
for post_id, count in duplicates.items():
    print(f"   - '{post_id}' appears {count} times")

# Backup original file
print(f"\n💾 Creating backup at {BACKUP_PATH}...")
with open(BACKUP_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

# Parse blog posts
# Find the array start and end
array_start = content.find('export const blogPosts: BlogPost[] = [')
if array_start == -1:
    print("❌ Could not find blogPosts array")
    exit(1)

array_end = content.rfind('];')
if array_end == -1:
    print("❌ Could not find end of blogPosts array")
    exit(1)

# Extract the array content
prefix = content[:array_start]
array_content = content[array_start:array_end + 2]
suffix = content[array_end + 2:]

# Split into individual posts
posts_text = array_content[array_content.find('[') + 1:array_content.rfind(']')]

# Find all complete post objects
post_pattern = r'\{\s*id:\s*"[^"]+",.*?\n\s*\},?\s*(?=\{|\]|$)'
posts = re.findall(post_pattern, posts_text, re.DOTALL)

print(f"\n🔍 Parsing {len(posts)} post objects...")

# Track seen IDs and keep only first occurrence
seen_ids = set()
unique_posts = []
removed_count = 0

for post in posts:
    # Extract the ID from this post
    id_match = re.search(r'id:\s*"([^"]+)"', post)
    if id_match:
        post_id = id_match.group(1)
        if post_id not in seen_ids:
            seen_ids.add(post_id)
            unique_posts.append(post.rstrip(',').rstrip())
        else:
            removed_count += 1
            print(f"   🗑️  Removed duplicate: {post_id}")

# Reconstruct the file
new_array_content = 'export const blogPosts: BlogPost[] = [\n  ' + ',\n  '.join(unique_posts) + ',\n];'
new_content = prefix + new_array_content + suffix

# Write the cleaned content
print(f"\n💾 Writing deduplicated content to {BLOG_DATA_PATH}...")
with open(BLOG_DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("\n" + "=" * 50)
print("✨ Deduplication Complete!")
print(f"   - Original posts: {len(all_ids)}")
print(f"   - Unique posts: {len(unique_posts)}")
print(f"   - Removed duplicates: {removed_count}")
print(f"   - Backup saved to: {BACKUP_PATH.name}")
print("\n🎉 All blog posts are now unique!")
