import os
import re
import json
import time
import base64
from pathlib import Path
from io import BytesIO

from PIL import Image
from openai import OpenAI

# -----------------------------
# CONFIG - keep your structure
# -----------------------------
REPO_ROOT = Path(__file__).resolve().parents[1]

ASSIGNED_DIR = REPO_ROOT / "client" / "public" / "assets" / "img" / "blog" / "assigned"
FALLBACK_PATH = "/assets/img/blog/_fallback/blog.webp"
ASSIGNED_PUBLIC_PREFIX = "/assets/img/blog/assigned/"

PROMPTS_OUT = REPO_ROOT / "tools" / "generated_prompts.json"
MAP_OUT = REPO_ROOT / "tools" / "generated_image_map.json"

MODEL = os.getenv("OPENAI_IMAGE_MODEL", "gpt-image-1")
SIZE = os.getenv("OPENAI_IMAGE_SIZE", "1536x1024")  # wide
QUALITY = os.getenv("OPENAI_IMAGE_QUALITY", "medium")  # low|medium|high
SLEEP_SECONDS = float(os.getenv("OPENAI_IMAGE_SLEEP", "0.8"))

BRAND_STYLE = (
    "holistic wellness, calm modern aesthetic, premium minimalist composition, "
    "soft natural lighting, high clarity, clean background, editorial style"
)

# -----------------------------
# Helpers
# -----------------------------
def slugify(s: str) -> str:
    s = (s or "").strip().lower()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"-{2,}", "-", s)
    return s.strip("-") or "post"

def safe_text(s: str, fallback: str) -> str:
    s = (s or "").strip()
    return s if s else fallback

def build_prompt(title: str, tags: list[str]) -> str:
    tag_str = ", ".join(tags[:6]) if tags else "wellness"
    return (
        "Create a clean, modern blog hero image for a wellness website named AskDoGood.\n"
        f"Topic: {title}\n"
        f"Keywords: {tag_str}\n"
        f"Style: {BRAND_STYLE}\n"
        "Rules: no text, no words, no logos, no watermarks.\n"
        "Output: web-friendly, high clarity, strong subject focus, not cluttered.\n"
        "Aspect ratio: wide 16:9."
    )

def b64_to_webp(b64: str, out_path: Path, max_w: int = 1600, quality: int = 82):
    img_bytes = base64.b64decode(b64)
    img = Image.open(BytesIO(img_bytes)).convert("RGB")

    if img.width > max_w:
        new_h = int(img.height * (max_w / img.width))
        img = img.resize((max_w, new_h))

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "WEBP", quality=quality, method=6)

def load_posts_from_blogdata_js_like(path: Path) -> list[dict]:
    """
    Fast & dirty TS/JS parser:
    Pulls out objects that contain slug/title/tags/imageUrl fields from blogData.
    If your structure is different, we can tweak the regex quickly.
    """
    txt = path.read_text(encoding="utf-8")

    # find likely post blocks by slug
    slugs = list(re.finditer(r"slug\s*:\s*['\"]([^'\"]+)['\"]", txt))
    if not slugs:
        raise ValueError("No slugs found in blogData. Send me your blogData format if different.")

    posts = []
    for m in slugs:
        slug = m.group(1).strip()
        window = txt[m.start(): m.start() + 2000]

        title_m = re.search(r"title\s*:\s*['\"]([^'\"]+)['\"]", window)
        tags_m = re.search(r"tags\s*:\s*\[([^\]]*)\]", window)

        title = title_m.group(1).strip() if title_m else slug.replace("-", " ").title()
        tags = []
        if tags_m:
            # extract quoted strings inside tags array
            tags = re.findall(r"['\"]([^'\"]+)['\"]", tags_m.group(1))

        posts.append({"slug": slug, "title": title, "tags": tags})
    return posts

def patch_blogdata_images(path: Path, mapping: dict[str, str]):
    """
    Fast & dirty text patcher:
    Inserts/updates imageUrl for each slug object.
    - If imageUrl exists, replaces it.
    - If missing, injects right after slug.
    """
    txt = path.read_text(encoding="utf-8")

    def replace_or_insert_for_slug(txt: str, slug: str, image_url: str) -> str:
        # Replace existing imageUrl in the same object (best effort local window)
        pattern = re.compile(rf"(slug\s*:\s*['\"]{re.escape(slug)}['\"][\s\S]*?)(\}})", re.MULTILINE)
        m = pattern.search(txt)
        if not m:
            return txt

        block = m.group(0)

        if re.search(r"imageUrl\s*:\s*['\"]", block):
            block2 = re.sub(
                r"imageUrl\s*:\s*['\"][^'\"]+['\"]",
                f"imageUrl: \"{image_url}\"",
                block,
            )
        else:
            block2 = re.sub(
                rf"(slug\s*:\s*['\"]{re.escape(slug)}['\"]\s*,)",
                rf"\1\n    imageUrl: \"{image_url}\",",
                block,
            )

        return txt[: m.start()] + block2 + txt[m.end():]

    for slug, image_url in mapping.items():
        txt = replace_or_insert_for_slug(txt, slug, image_url)

    path.write_text(txt, encoding="utf-8")

# -----------------------------
# MAIN
# -----------------------------
def main():
    # -----------------------------
    # ENV CHECK
    # -----------------------------
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise SystemExit("Missing OPENAI_API_KEY env var.")

    # -----------------------------
    # LOAD EXPORTED BLOG POSTS
    # -----------------------------
    export_path = REPO_ROOT / "tools" / "blog_posts_export.json"

    if not export_path.exists():
        raise SystemExit(
            f"Export file not found: {export_path}. "
            "Run: npx tsx tools/export_blog_posts.ts"
        )

    posts = json.loads(export_path.read_text(encoding="utf-8"))

    if not isinstance(posts, list) or not posts:
        raise SystemExit("blog_posts_export.json is empty or invalid.")

    # -----------------------------
    # BUILD PROMPTS
    # -----------------------------
    prompts = []
    for p in posts:
        slug = p.get("slug") or p.get("id") or slugify(p.get("title", "post"))
        slug = slugify(slug)
        title = p.get("title") or slug.replace("-", " ").title()
        tags = p.get("tags") or []

        prompts.append({
            "slug": slug,
            "title": title,
            "tags": tags,
            "prompt": build_prompt(title, tags),
        })

    PROMPTS_OUT.parent.mkdir(parents=True, exist_ok=True)
    PROMPTS_OUT.write_text(json.dumps(prompts, indent=2), encoding="utf-8")
    print(f"✅ Wrote prompts: {PROMPTS_OUT}")

    # -----------------------------
    # GENERATE IMAGES
    # -----------------------------
    client = OpenAI()

    ASSIGNED_DIR.mkdir(parents=True, exist_ok=True)

    mapping = {}
    failures = []

    for i, p in enumerate(prompts, start=1):
        slug = p["slug"]
        out_file = ASSIGNED_DIR / f"{slug}.webp"
        public_url = f"{ASSIGNED_PUBLIC_PREFIX}{slug}.webp"

        if out_file.exists():
            print(f"[{i}/{len(prompts)}] ⏭️ exists: {slug}")
            mapping[slug] = public_url
            continue

        print(f"[{i}/{len(prompts)}] 🎨 generating: {slug}")

        try:
            resp = client.images.generate(
                model=MODEL,
                prompt=p["prompt"],
                size=SIZE,
                quality=QUALITY,
                n=1,
                response_format="b64_json",
            )

            b64 = resp.data[0].b64_json
            b64_to_webp(b64, out_file)

            mapping[slug] = public_url
            print(f"   ✅ saved: {out_file}")

            time.sleep(SLEEP_SECONDS)

        except Exception as e:
            print(f"   ❌ failed: {slug} -> {e}")
            failures.append({"slug": slug, "error": str(e)})

    MAP_OUT.write_text(json.dumps(mapping, indent=2), encoding="utf-8")
    print(f"✅ Wrote image map: {MAP_OUT}")

    if failures:
        fail_path = REPO_ROOT / "tools" / "image_failures.json"
        fail_path.write_text(json.dumps(failures, indent=2), encoding="utf-8")
        print(f"⚠️ Some failures logged: {fail_path}")

    print("\nDONE ✅")
    print(f"- Images generated in: {ASSIGNED_DIR}")
    print(f"- Fallback path: {FALLBACK_PATH}")


# Write prompts
prompts = []
for p in posts:
    slug = p.get("slug") or p.get("id") or slugify(p.get("title", "post"))
    title = p.get("title") or slug.replace("-", " ").title()
    tags = p.get("tags") or []
    prompts.append({
        "slug": slugify(slug),
        "title": title,
        "tags": tags,
        "prompt": build_prompt(title, tags),
    })


    PROMPTS_OUT.parent.mkdir(parents=True, exist_ok=True)
    PROMPTS_OUT.write_text(json.dumps(prompts, indent=2), encoding="utf-8")
    print(f"✅ Wrote prompts: {PROMPTS_OUT}")

    client = OpenAI()

    mapping = {}
    failures = []

    ASSIGNED_DIR.mkdir(parents=True, exist_ok=True)

    for i, p in enumerate(prompts, start=1):
        slug = slugify(p["slug"])
        out_file = ASSIGNED_DIR / f"{slug}.webp"
        public_url = f"{ASSIGNED_PUBLIC_PREFIX}{slug}.webp"

        if out_file.exists():
            print(f"[{i}/{len(prompts)}] ⏭️ exists: {out_file.name}")
            mapping[slug] = public_url
            continue

        print(f"[{i}/{len(prompts)}] 🎨 generating: {slug}")
        try:
            resp = client.images.generate(
                model=MODEL,
                prompt=p["prompt"],
                size=SIZE,
                quality=QUALITY,
                n=1,
                response_format="b64_json",
            )
            b64 = resp.data[0].b64_json
            b64_to_webp(b64, out_file)
            mapping[slug] = public_url
            print(f"   ✅ saved: {out_file}")
            time.sleep(SLEEP_SECONDS)
        except Exception as e:
            print(f"   ❌ failed: {slug} -> {e}")
            failures.append({"slug": slug, "error": str(e)})

    MAP_OUT.write_text(json.dumps(mapping, indent=2), encoding="utf-8")
    print(f"✅ Wrote image map: {MAP_OUT}")

    if failures:
        fail_path = REPO_ROOT / "tools" / "image_failures.json"
        fail_path.write_text(json.dumps(failures, indent=2), encoding="utf-8")
        print(f"⚠️ Some failed. See: {fail_path}")

    # Patch blogData
    print("🧩 Patching blogData.ts imageUrl fields...")
    patch_blogdata_images(blogdata_path, mapping)
    print("✅ Patched blogData.ts (review your git diff!)")

    print("\nDONE ✅")
    print(f"- Images: {ASSIGNED_DIR}")
    print(f"- Fallback: {FALLBACK_PATH}")

if __name__ == "__main__":
    main()
