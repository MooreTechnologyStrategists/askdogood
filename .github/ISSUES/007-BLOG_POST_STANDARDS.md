Title: CI Check + Image Generation Tasks for Blog Posts
Labels: content,automation

Summary:
Run `cleanup_blog_posts.py`, create a CI check to validate frontmatter and image paths, and generate missing blog images via `tools/generate_blog_images_fast.py`.

Checklist:
- [ ] Run `python cleanup_blog_posts.py` and capture results
- [ ] Add a lightweight CI job (`.github/workflows/validate-blog.yml`) to check frontmatter and images
- [ ] Generate missing images and commit to `client/public/assets/img/blog/assigned/`

Notes:
Owner: RoSeé Murphy
