# Build Error Fix Summary

## Problem
The Vite build was failing with the error:
```
"posts" is not exported by "src/content/blogData.ts", imported by "src/pages/Blog.tsx"
```

## Root Cause
There was a mismatch between the export name and import name:

- **blogData.ts** exports the array as `blogPosts` (line 28)
- **Blog.tsx** was trying to import it as `posts` (line 23)

## Solution Applied
Changed the import statement in `Blog.tsx` from:
```typescript
import { posts as BLOG_POSTS } from "@/content/blogData";
```

To:
```typescript
import { blogPosts as BLOG_POSTS } from "@/content/blogData";
```

## Files Modified
- `/client/src/pages/Blog.tsx` - Line 23

## Verification
- Checked all other files importing from `blogData.ts`
- `BlogPost.tsx` correctly uses `getPostBySlug()` helper function
- No other files have the same issue

## Next Steps
1. Commit the change to your repository
2. Push to trigger the GitHub Actions build
3. The build should now succeed

## Git Commands
```bash
cd /home/ubuntu/askdogood
git add client/src/pages/Blog.tsx
git commit -m "Fix: Update import to match blogPosts export name in blogData.ts"
git push origin main
```
