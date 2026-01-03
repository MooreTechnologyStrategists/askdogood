# tools/generate_blog_images_fast.py

import os
import json
import time
import base64
import re
from pathlib import Path
from io import BytesIO

from PIL import Image
from openai import OpenAI


print("SCRIPT LOADED ✅")

# -----------------------------
# REPO PATHS (do not change your repo structure)
# -----------------------------
REPO_ROOT = Path(__file__).resolve().parents[1]
TOOLS_DIR = REPO_ROOT / "tools"

EXPORT_PATH = TOOLS_DIR / "blog_posts_export.json"
PROMPTS_OUT = TOOLS_DIR / "generated_prompts.json"
MAP_OUT = TOOLS_DIR / "generated_image_map.json"
FAIL_OUT = TOOLS_DIR / "image_failures.json"

ASSIGNED_DIR = REPO_ROOT / "client" / "public" / "assets" / "img" / "blog" / "assigned"

ASSIGNED_PUBLIC_PREFIX = "/assets/img/blog/assigned/"
FALLBACK_PATH = "/assets/img/blog/_fallback/blog.webp"

# -----------------------------
# OPENAI IMAGE SETTINGS (env overrides supported)
# -----------------------------
MODEL = os.getenv("OPENAI_IMAGE_MODEL", "gpt-image-1")
SIZE = os.getenv("OPENAI_IMAGE_SIZE", "1536x1024")      # wide is better for blog cards/hero
QUALITY = os.getenv("OPENAI_IMAGE_QUALITY", "medium")   # "standard"/"medium"/etc depending on account
SLEEP_SECONDS = float(os.getenv("OPENAI_IMAGE_SLEEP", "0.8"))

# -----------------------------
# HELPERS
# -----------------------------
def slugify(text: str) -> str:
    text = (text or "").lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-{2,}", "-", text)
    return text.strip("-") or "post"


def build_prompt(title: str, tags: list) -> str:
    # Keep this simple + consistent for brand cohesion
    tag_str = ", ".join([t for t in tags if isinstance(t, str)][:6]) if tags else "wellness"
    return (
        "Create a clean, modern blog hero image for a wellness website called AskDoGood.\n"
        f"Topic: {title}\n"
        f"Keywords: {tag_str}\n"
        "Style: holistic wellness, calm, premium, minimalist, editorial photography, soft natural light.\n"
        "Rules: no text, no words, no logos, no watermarks.\n"
        "Composition: subject centered with negative space, suitable for a blog card thumbnail.\n"
        "Aspect ratio: wide 16:9."
    )


def save_webp_from_b64(b64_str: str, out_path: Path):
    img_bytes = base64.b64decode(b64_str)
    img = Image.open(BytesIO(img_bytes)).convert("RGB")
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "WEBP", quality=82, method=6)


# -----------------------------
# MAIN
# -----------------------------
def main():
    # 1) ENV CHECK
    if not os.getenv("OPENAI_API_KEY"):
        raise SystemExit(
            "Missing OPENAI_API_KEY env var.\n"
            "PowerShell example:\n"
            '  $env:OPENAI_API_KEY="sk-proj-..."\n'
            "Then run:\n"
            "  python tools\\generate_blog_images_fast.py"
        )

    # 2) INPUT CHECK
    if not EXPORT_PATH.exists():
        raise SystemExit(
            f"Missing {EXPORT_PATH}.\n"
            "You must export posts first to tools/blog_posts_export.json."
        )

    # 3) LOAD POSTS
    posts = json.loads(EXPORT_PATH.read_text(encoding="utf-8"))
    if not isinstance(posts, list) or not posts:
        raise SystemExit("blog_posts_export.json is empty or invalid (expected a non-empty JSON list).")

    # 4) BUILD PROMPTS
    prompts = []
    for p in posts:
        raw_slug = p.get("slug") or p.get("id") or p.get("title") or "post"
        slug = slugify(raw_slug)

        title = p.get("title") or slug.replace("-", " ").title()
        tags = p.get("tags") or []

        prompts.append({"slug": slug, "prompt": build_prompt(title, tags)})

    PROMPTS_OUT.write_text(json.dumps(prompts, indent=2), encoding="utf-8")
    print(f"✅ Prompts written: {PROMPTS_OUT}")

    # 5) GENERATE IMAGES
    client = OpenAI()
    ASSIGNED_DIR.mkdir(parents=True, exist_ok=True)

    mapping: dict[str, str] = {}
    failures: list[dict] = []

    total = len(prompts)
    for i, item in enumerate(prompts, start=1):
        slug = item["slug"]
        out_file = ASSIGNED_DIR / f"{slug}.webp"
        public_url = f"{ASSIGNED_PUBLIC_PREFIX}{slug}.webp"

        # Skip if already exists
        if out_file.exists():
            print(f"[{i}/{total}] ⏭️ exists: {slug}")
            mapping[slug] = public_url
            continue

        print(f"[{i}/{total}] 🎨 generating: {slug}")

        try:
            resp = client.images.generate(
                model=MODEL,
                prompt=item["prompt"],
                size=SIZE,
                quality=QUALITY,
                n=1,
            )

            data0 = resp.data[0]

            # Preferred path: base64
            if getattr(data0, "b64_json", None):
                save_webp_from_b64(data0.b64_json, out_file)

            elif isinstance(data0, dict) and data0.get("b64_json"):
                save_webp_from_b64(data0["b64_json"], out_file)

            # Fallback: URL (some older SDK responses)
            elif getattr(data0, "url", None) or (isinstance(data0, dict) and data0.get("url")):
                import urllib.request

                url = data0.url if hasattr(data0, "url") else data0["url"]
                with urllib.request.urlopen(url) as r:
                    img = Image.open(BytesIO(r.read())).convert("RGB")
                    out_file.parent.mkdir(parents=True, exist_ok=True)
                    img.save(out_file, "WEBP", quality=82, method=6)

            else:
                raise RuntimeError(f"Unrecognized image response format: {type(data0)}")

            mapping[slug] = public_url
            print(f"   ✅ saved: {out_file}")

        except Exception as e:
            failures.append({"slug": slug, "error": str(e)})
            print(f"   ❌ failed: {slug} → {e}")

        time.sleep(SLEEP_SECONDS)

    # 6) WRITE OUTPUT FILES (ONCE, AFTER LOOP)
    MAP_OUT.write_text(json.dumps(mapping, indent=2), encoding="utf-8")
    print(f"✅ Image map written: {MAP_OUT}")

    if failures:
        FAIL_OUT.write_text(json.dumps(failures, indent=2), encoding="utf-8")
        print(f"⚠️ Failures logged: {FAIL_OUT}")

    print("\nDONE 🎉")
    print(f"- Images folder: {ASSIGNED_DIR}")
    print(f"- Public fallback path: {FALLBACK_PATH}")


if __name__ == "__main__":
    main()
