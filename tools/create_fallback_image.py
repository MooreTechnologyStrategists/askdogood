#!/usr/bin/env python3
"""Generate a fallback blog image for AskDoGood wellness website"""

import os
import requests
from pathlib import Path
from io import BytesIO
from PIL import Image
from openai import OpenAI

# Setup
REPO_ROOT = Path(__file__).resolve().parents[1]
FALLBACK_IMAGE_PATH = REPO_ROOT / "client" / "public" / "assets" / "img" / "blog" / "_fallback" / "blog.webp"

# Ensure directory exists
FALLBACK_IMAGE_PATH.parent.mkdir(parents=True, exist_ok=True)

# Initialize OpenAI client
client = OpenAI()

# Generate image
print("🎨 Generating fallback blog image...")
response = client.images.generate(
    model="dall-e-3",
    prompt=(
        "Create a clean, modern blog hero image for a wellness website called AskDoGood. "
        "Generic wellness theme with soft natural lighting, calm atmosphere, holistic health, "
        "premium editorial style. Show peaceful wellness imagery like plants, natural elements, "
        "or peaceful scenes. NO text, NO words, NO logos, NO watermarks. "
        "Minimalist and professional."
    ),
    size="1024x1024",
    quality="standard"
)

# Download and save as WebP
print("📥 Downloading image...")
image_url = response.data[0].url
img_data = requests.get(image_url).content

print("💾 Saving as WebP...")
img = Image.open(BytesIO(img_data))
img.save(FALLBACK_IMAGE_PATH, "WEBP", quality=85)

print(f"✅ Fallback image created: {FALLBACK_IMAGE_PATH}")
print(f"   Public URL: /assets/img/blog/_fallback/blog.webp")
