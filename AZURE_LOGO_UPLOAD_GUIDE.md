# 🖼️ Azure Blob Storage Logo Upload Guide

## Overview
You've created the `partners/` and `memberships/` folders in Azure Blob Storage under the `images` container. Now you need to upload the official organization logos.

---

## 📂 Folder Structure in Azure

```
askdogoodassets (Storage Account)
└── images (Container)
    ├── partners/
    │   ├── pg-parks.png
    │   ├── microsoft.png
    │   ├── johns-hopkins.png
    │   ├── umgc.png
    │   ├── food4families.png
    │   ├── freshfarm.png
    │   └── wabj.png
    └── memberships/
        ├── nsbe.png
        └── big.png
```

---

## ✅ Logos You Already Have

### From Chat Attachments:
1. **NSBE Logo** - torch with lightning bolts
2. **Blacks in Government (BIG) Logo** - circular black logo with "BIG" text

**Action:** Save these images from our chat and upload to Azure at:
- `images/memberships/nsbe.png`
- `images/memberships/big.png`

---

## 🔍 Where to Get Official Logos

### 1. PG Parks & Planning
- **Website:** https://www.pgparks.com/
- **Brand/Media:** Look for "Media Kit" or "Brand Guidelines" in footer
- **Alternative:** Email their communications team: communications@pgparks.com
- **Upload to:** `images/partners/pg-parks.png`

### 2. Microsoft
- **Official Brand Assets:** https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks
- **Download:** Microsoft logo (square or horizontal)
- **Format:** PNG with transparent background preferred
- **Upload to:** `images/partners/microsoft.png`

### 3. Johns Hopkins University
- **Brand Portal:** https://brand.jhu.edu/
- **Logo Downloads:** https://brand.jhu.edu/assets/
- **Preferred:** Johns Hopkins University shield/logo
- **Upload to:** `images/partners/johns-hopkins.png`

### 4. UMGC (University of Maryland Global Campus)
- **Brand Guidelines:** https://www.umgc.edu/brand
- **Logo:** UMGC official logo (usually says "University of Maryland Global Campus")
- **Upload to:** `images/partners/umgc.png`

### 5. Food 4 Families
- **Website:** https://www.food4families.org/
- **Action:** 
  - Right-click on their logo on the homepage and "Save Image As"
  - OR email: info@food4families.org requesting official logo
- **Upload to:** `images/partners/food4families.png`

### 6. FRESHFARM FoodPrints
- **Website:** https://www.freshfarm.org/foodprints
- **Main FRESHFARM site:** https://www.freshfarm.org/
- **Action:** Look for "Press" or "Media Kit" in footer
- **Alternative:** Email: info@freshfarm.org
- **Upload to:** `images/partners/freshfarm.png`

### 7. Washington Association of Black Journalists (WABJ)
- **Website:** https://www.wabjdc.org/
- **Action:** 
  - Save logo from their homepage
  - OR look for "About" > "Media Kit"
  - OR email: info@wabjdc.org
- **Upload to:** `images/partners/wabj.png`

---

## 📤 How to Upload to Azure Blob Storage

### Method 1: Azure Portal (Web Interface)

1. **Go to Azure Portal:** https://portal.azure.com
2. **Navigate to Storage Account:**
   - Search for "Storage accounts" in top search bar
   - Click on `askdogoodassets`
3. **Open the Container:**
   - Click "Containers" in left sidebar
   - Click on `images` container
4. **Navigate to Folder:**
   - Click `partners/` or `memberships/` folder
5. **Upload Logo:**
   - Click "Upload" button at top
   - Drag and drop or browse for file
   - **CRITICAL:** Name the file exactly as listed above (e.g., `pg-parks.png`)
   - Click "Upload"
6. **Verify:**
   - After upload, click on the file
   - Copy the URL—it should look like:
     ```
     https://askdogoodassets.blob.core.windows.net/images/partners/pg-parks.png
     ```

### Method 2: Azure Storage Explorer (Desktop App)

1. **Download:** https://azure.microsoft.com/en-us/products/storage/storage-explorer/
2. **Install and sign in** with your Azure account
3. **Navigate:** Storage Accounts → askdogoodassets → Blob Containers → images
4. **Upload:** Right-click folder → Upload Files → Select logo files
5. **Benefits:** Faster for bulk uploads, easier file management

---

## 🎨 Logo File Guidelines

### File Format:
- **Preferred:** PNG with transparent background
- **Acceptable:** PNG with white background, JPG

### File Size:
- **Recommended:** 500px - 1000px width
- **Max:** 2000px (larger files slow page load)

### File Naming:
- **Use exact names listed above** (lowercase, hyphens for spaces)
- Examples: `pg-parks.png`, `johns-hopkins.png`, `nsbe.png`

---

## ✅ Upload Checklist

### Partners (Resources Page - Required):
- [ ] `pg-parks.png` - PG Parks & Planning
- [ ] `microsoft.png` - Microsoft
- [ ] `johns-hopkins.png` - Johns Hopkins University
- [ ] `umgc.png` - University of Maryland Global Campus
- [ ] `food4families.png` - Food 4 Families
- [ ] `freshfarm.png` - FRESHFARM FoodPrints
- [ ] `wabj.png` - Washington Association of Black Journalists

### Memberships (Journey Page - Optional):
- [ ] `nsbe.png` - National Society of Black Engineers
- [ ] `big.png` - Blacks in Government

---

## 🔒 Permissions & Access

**Make sure blobs are publicly accessible:**
1. In Azure Portal, go to Storage Account → Configuration
2. Check: "Allow Blob anonymous access" is **Enabled**
3. For each container/folder, set access level to: **Blob (anonymous read access for blobs only)**

---

## 🧪 Testing After Upload

After uploading, test each logo by visiting its URL in your browser:

```
https://askdogoodassets.blob.core.windows.net/images/partners/pg-parks.png
https://askdogoodassets.blob.core.windows.net/images/partners/microsoft.png
https://askdogoodassets.blob.core.windows.net/images/partners/johns-hopkins.png
https://askdogoodassets.blob.core.windows.net/images/partners/umgc.png
https://askdogoodassets.blob.core.windows.net/images/partners/food4families.png
https://askdogoodassets.blob.core.windows.net/images/partners/freshfarm.png
https://askdogoodassets.blob.core.windows.net/images/partners/wabj.png

https://askdogoodassets.blob.core.windows.net/images/memberships/nsbe.png
https://askdogoodassets.blob.core.windows.net/images/memberships/big.png
```

If the URL shows the logo, you're good! Your website will automatically display them.

---

## 🚀 Next Steps After Upload

1. **Verify logos display on website:**
   - Visit https://askdogood.com/resources
   - Scroll through partners—logos should appear
   
2. **Optional: Add logos to Journey page**
   - Update Journey.tsx to include NSBE and BIG logos
   
3. **Monitor GitHub Actions:**
   - Every push triggers a new deployment
   - Check: https://github.com/MooreTechnologyStrategists/askdogood/actions

---

## 💡 Pro Tips

- **Logo Quality:** Always get the highest resolution version available
- **Transparent Backgrounds:** Preferred for professional look
- **Brand Consistency:** Use official logos—don't modify colors or design
- **Cache:** After upload, it may take 1-2 minutes for changes to appear on live site
- **Backups:** Keep a local copy of all logos in a folder on your computer

---

## 📞 Need Help?

If you run into issues:
- **Azure Support:** Azure Portal → Help + support
- **Logo Requests:** Email organizations directly, explain you're featuring them as a partner
- **Technical Issues:** Check browser console (F12) for error messages

---

**Last Updated:** January 21, 2026
