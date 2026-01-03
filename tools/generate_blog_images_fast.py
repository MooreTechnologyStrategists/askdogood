print("SCRIPT LOADED ✅")

import os
import json
import time
import base64
import re
from pathlib import Path
from io import BytesIO

from PIL import Image
from openai import OpenAI

# -----------------------------
# PATHS
# -----------------------------
REPO_ROOT = Path(__file__).resolve().parents[1]

ASSIGNED_DIR = (
    REPO_ROOT
    / "client"
    / "public"
    / "assets"
    / "img"
    / "blog"
    / "assigned"
)

EXPORT_PATH = REPO_ROOT / "tools" / "blog_posts_export.json"

PROMPTS_OUT = REPO_ROOT / "tools" / "generated_prompts.json"
MAP_OUT = REPO_ROOT / "tools" / "generated_image_map.json"

ASSIGNED_PUBLIC_PREFIX = "/assets/img/blog/assigned/"
FALLBACK_PATH = "/assets/img/blog/_fallback/blog.webp"

MODEL = "gpt-image-1"
SIZE = "1536x1024"
QUALITY = "medium"
SLEEP_SECONDS = 0.8

# -----------------------------
# HELPERS
# -----------------------------
def slugify(text: str) -> str:
    text = (text or "").lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-{2,}", "-", text)
    return text.strip("-") or "post"


def build_prompt(title: str, tags: list[str]) -> str:
    tag_str = ", ".join(tags[:6]) if tags else "wellness"
    return (
        "Create a clean, modern blog hero image for a wellness website called AskDoGood.\n"
        f"Topic: {title}\n"
        f"Keywords: {tag_str}\n"
        "Style: holistic wellness, calm, premium, minimalist, editorial photography.\n"
        "Rules: no text, no words, no logos, no watermarks.\n"
        "Aspect ratio: wide 16:9."
    )


def save_webp_from_b64(b64: str, out_path: Path):
    img_bytes = base64.b64decode(b64)
    img = Image.open(BytesIO(img_bytes)).convert("RGB")
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "WEBP", quality=82, method=6)


# -----------------------------
# MAIN
# -----------------------------
def main():
    # ENV
    if not os.getenv("OPENAI_API_KEY"):
        raise SystemExit("Missing OPENAI_API_KEY env var.")

    if not EXPORT_PATH.exists():
        raise SystemExit(
            f"Missing {EXPORT_PATH}. Run:\n"
            "npx tsx tools/export_blog_posts.ts"
        )

    posts = json.loads(EXPORT_PATH.read_text(encoding="utf-8"))

    if not isinstance(posts, list) or not posts:
        raise SystemExit("blog_posts_export.json is empty or invalid.")

    prompts = []
    for p in posts:
        slug = p.get("slug") or p.get("id") or slugify(p.get("title", "post"))
        slug = slugify(slug)
        title = p.get("title") or slug.replace("-", " ").title()
        tags = p.get("tags") or []

        prompts.append({
            "slug": slug,
            "prompt": build_prompt(title, tags),
        })
    

    if __name__ == "__main__":
        main()

