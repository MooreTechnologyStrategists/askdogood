import os, json
from pathlib import Path
from io import BytesIO
from PIL import Image
from openai import OpenAI

SCRIPT_ROOT = Path(__file__).parent
EXPORT_PATH = SCRIPT_ROOT / "blog_posts_export.json"
PROMPTS_OUT = SCRIPT_ROOT / "generated_prompts.json"
ASSIGNED_DIR = SCRIPT_ROOT.parent / "client/public/assets/img/blog/assigned"

MODEL = "gpt-image-1"
SIZE = "1024x1024"
QUALITY = "standard"

print("SCRIPT LOADED ✅")

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

# OpenAI image settings
MODEL = os.getenv("OPENAI_IMAGE_MODEL", "gpt-image-1")
SIZE = os.getenv("OPENAI_IMAGE_SIZE", "1536x1024")
QUALITY = os.getenv("OPENAI_IMAGE_QUALITY", "medium")
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


def build_prompt(title: str, tags: list[str]) -> str:
    tag_str = ", ".join(tags[:6]) if tags else "wellness"
    return (
        "Create a clean, modern blog hero image for a wellness website called AskDoGood.\n"
        f"Topic: {title}\n"
        f"Keywords: {tag_str}\n"
        "Style: holistic wellness, calm, premium, minimalist, editorial photography, soft natural light.\n"
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
    if not os.getenv("OPENAI_API_KEY"):
        raise SystemExit("Missing OPENAI_API_KEY env var.")

    if not EXPORT_PATH.exists():
        raise SystemExit("Missing blog_posts_export.json")

    posts = json.loads(EXPORT_PATH.read_text(encoding="utf-8"))

    # ✅ prompts is defined HERE
    prompts = []
    for p in posts:
        slug = p.get("slug") or p.get("id")
        title = p.get("title", slug.replace("-", " ").title())
        tags = p.get("tags", [])

        prompts.append({
            "slug": slug,
            "prompt": f"Editorial wellness blog hero image about {title}. Clean, modern, professional photography style."
        })

    # ✅ NOW this line is legal
    PROMPTS_OUT.write_text(
        json.dumps(prompts, indent=2),
        encoding="utf-8"
    )
    print(f"✅ Prompts written: {PROMPTS_OUT}")

    # ⬇️ everything else that uses prompts stays BELOW
    client = OpenAI()
    mapping = {}
    failures = []

    total = len(prompts)
    for i, item in enumerate(prompts, start=1):
        ...


# Generate images
client = OpenAI()
ASSIGNED_DIR.mkdir(parents=True, exist_ok=True)

mapping = {}
failures = []

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

        # Different SDK versions return image data differently.
        # Try base64 first, then fall back to URL download if needed.
        data0 = resp.data[0]

        if getattr(data0, "b64_json", None):
            save_webp_from_b64(data0.b64_json, out_file)
        elif isinstance(data0, dict) and data0.get("b64_json"):
            save_webp_from_b64(data0["b64_json"], out_file)
        elif getattr(data0, "url", None) or (isinstance(data0, dict) and data0.get("url")):
            # URL fallback (older formats)
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

    MAP_OUT.write_text(json.dumps(mapping, indent=2), encoding="utf-8")
    print(f"✅ Image map written: {MAP_OUT}")

    if failures:
        fail_path = REPO_ROOT / "tools" / "image_failures.json"
        fail_path.write_text(json.dumps(failures, indent=2), encoding="utf-8")
        print(f"⚠️ Failures logged: {fail_path}")

    print("\nDONE 🎉")
    print(f"- Images: {ASSIGNED_DIR}")
    print(f"- Fallback path: {FALLBACK_PATH}")


# ✅ MUST BE OUTSIDE main()
if __name__ == "__main__":
    main()
