# Education Section Images Guide

## 🎨 Images Currently Using (Unsplash - Free to Use)

The homepage education cards are currently using these Unsplash images, which are perfectly fine to keep using! They're high-quality, free, and work great.

**Current Status: ✅ Working perfectly with Unsplash images**

---

## 📸 If You Want to Use Your Own Custom Images

If you want to replace the Unsplash images with your own custom photos, here's what you need:

### 1. The "Organic" Trap Card
**What to photograph/find:**
- A product with "100% ORGANIC" or "USDA ORGANIC" label prominently displayed
- Ideally a product that's misleading (like "organic" cookies or candy)
- Close-up of the label showing ingredient list
- Example: Organic coconut water that's mostly water, organic chips, organic candy

**File to create:**
- `organic-trap-label.webp`
- Size: 800x600px or larger
- Upload to: `/images/education/`

**Current Unsplash URL (working great):**
- https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400

---

### 2. Sodium: The Silent Saboteur Card
**What to photograph/find:**
- Salt shaker sprinkling salt on food
- Close-up shot showing salt falling onto fries, chips, or other food
- Can be your own photo or stock image

**File to create:**
- `sodium-salt-food.webp`
- Size: 800x600px or larger
- Upload to: `/images/education/`

**Current Unsplash URL (working great):**
- https://images.unsplash.com/photo-1526346698789-22d93a86419f?w=400

---

### 3. Change Your Taste Buds Card (3 separate images)

**What to photograph/find:**
- Close-up, vibrant photos of three vegetables

#### Image 1: Kale
- Fresh, green kale leaves
- Bright, appealing photo
- File: `vegetables-kale.webp`
- Size: 400x600px or larger
- Current URL: https://images.unsplash.com/photo-1560493676-04071c5f467b?w=200

#### Image 2: Beets
- Fresh red/purple beets
- Can show whole beets or sliced
- File: `vegetables-beets.webp`
- Size: 400x600px or larger
- Current URL: https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=200

#### Image 3: Broccoli
- Fresh green broccoli
- Close-up showing the florets
- File: `vegetables-broccoli.webp`
- Size: 400x600px or larger
- Current URL: https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=200

Upload all three to: `/images/education/`

---

### 4. "Want to Master Your Nutrition?" CTA Section
**What to photograph/find:**
- Healthy meal prep scene, colorful vegetables and food
- Nutrition planning setup (meal prep containers, fresh produce)
- Overhead shot of healthy food ingredients
- Can be your own meal prep photos!

**File to create:**
- `nutrition-meal-planning.webp`
- Size: 1200x800px or larger (this is the hero image)
- Upload to: `/images/education/`

**Current Unsplash URL (working great):**
- https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600

---

## 🎯 Options for Getting Custom Images

### Option 1: Take Your Own Photos (RECOMMENDED!)
**Why this is best:**
- Most authentic to your brand
- You can show YOUR food, YOUR perspective
- Completely unique content

**What to photograph:**
1. **Organic Trap:** Go to grocery store, take photos of misleading organic labels
2. **Sodium:** Your own salt shaker on fries or food
3. **Vegetables:** Buy fresh kale, beets, broccoli and photograph them on nice background
4. **Meal Planning:** Your own meal prep setup

**Photo tips:**
- Use natural light (near window)
- Simple, clean backgrounds
- Focus on the subject
- Take multiple shots
- Use your phone camera (modern phones work great!)

### Option 2: Use Free Stock Photos
**Where to find:**
- Unsplash.com (current source - already integrated!)
- Pexels.com
- Pixabay.com

### Option 3: Purchase Stock Photos
**Premium options:**
- Shutterstock.com
- Adobe Stock
- iStock

### Option 4: Keep Using Unsplash (Current Setup)
**Why this works:**
- Free forever
- High quality
- No attribution required
- Already integrated and working

---

## 📤 How to Upload Your Custom Images

Once you have your images ready:

### Step 1: Optimize Images
```bash
# Use an online tool like:
# - squoosh.app (Google's free image compressor)
# - tinypng.com
# 
# Or use this PowerShell command to resize:
# (Requires ImageMagick installed)
```

### Step 2: Convert to WebP Format
- Use squoosh.app to convert to WebP
- Or use online converter: cloudconvert.com

### Step 3: Upload to Azure Blob Storage

**Using Azure Storage Explorer:**
1. Open Azure Storage Explorer
2. Navigate to: `askdogoodassets` → `images`
3. Create folder: `education`
4. Upload your 6 files:
   - `organic-trap-label.webp`
   - `sodium-salt-food.webp`
   - `vegetables-kale.webp`
   - `vegetables-beets.webp`
   - `vegetables-broccoli.webp`
   - `nutrition-meal-planning.webp`

**Using Azure Portal:**
1. Go to portal.azure.com
2. Navigate to your storage account: `askdogoodassets`
3. Click "Containers" → `images`
4. Create folder: `education`
5. Upload files
6. Set access level to "Blob (anonymous read access for blobs only)"

**Using PowerShell (Azure CLI):**
```powershell
# Install Azure CLI if not already installed
# winget install -e --id Microsoft.AzureCLI

# Login
az login

# Upload files
az storage blob upload-batch `
  --account-name askdogoodassets `
  --destination images/education `
  --source "C:\path\to\your\images" `
  --pattern "*.webp"
```

### Step 4: Verify URLs
After uploading, verify each image loads by visiting:
```
https://askdogoodassets.blob.core.windows.net/images/education/organic-trap-label.webp
https://askdogoodassets.blob.core.windows.net/images/education/sodium-salt-food.webp
https://askdogoodassets.blob.core.windows.net/images/education/vegetables-kale.webp
https://askdogoodassets.blob.core.windows.net/images/education/vegetables-beets.webp
https://askdogoodassets.blob.core.windows.net/images/education/vegetables-broccoli.webp
https://askdogoodassets.blob.core.windows.net/images/education/nutrition-meal-planning.webp
```

### Step 5: Update the Code
Once your images are uploaded and URLs verified, let me know and I'll update the code to use your custom images instead of Unsplash!

---

## 💡 My Recommendation

**Keep using the Unsplash images!** They're:
- ✅ Already working
- ✅ High quality
- ✅ Free forever
- ✅ Professional looking
- ✅ Zero maintenance

**Only replace them if:**
- You want YOUR specific products shown
- You want to show your own meal prep style
- You have professional photography already
- You want 100% unique brand images

The current Unsplash images are perfectly fine for a professional website and match the content beautifully!

---

## 🎨 Quick Photography Tips (If You Choose Option 1)

### Lighting:
- Natural light is best (near window)
- Avoid harsh direct sunlight
- Overcast days = perfect diffused light
- Golden hour (sunrise/sunset) for warm glow

### Composition:
- Rule of thirds
- Fill the frame with subject
- Simple, uncluttered backgrounds
- Show texture and detail

### Food Photography Specific:
- Shoot from 45° angle or directly overhead
- Use white/neutral backgrounds
- Add props sparingly (cutting board, napkin)
- Make it look fresh and appealing

### Phone Camera Settings:
- Use Portrait mode for blurred background
- Tap to focus on subject
- Adjust exposure slider
- Use grid lines for composition
- Take LOTS of shots (pick best later)

---

**Current Status: ✅ Using Unsplash - Working Great!**

No action needed unless you specifically want to replace with custom photos. The site looks professional with the current setup!
