# Sanity Studio - Local Deployment Guide

**Complete step-by-step instructions for deploying Sanity Studio from your local machine.**

---

## ⚡ Quick Overview

You'll be:
1. Cloning the repository to your computer
2. Installing dependencies
3. Creating the `.env` file with your credentials
4. Logging into Sanity
5. Deploying the Studio to Sanity's cloud
6. Creating your first content
7. Configuring CORS for production

**Time required:** ~15 minutes

---

## 📋 Prerequisites

- ✅ Git installed on your computer
- ✅ Node.js installed (version 18 or higher)
- ✅ A Sanity account (already created)
- ✅ Your Sanity Project ID: `thhy1crr`

---

## Step 1: Clone the Repository

Open your terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
# Navigate to where you want the project
cd ~/Documents  # Or wherever you keep projects

# Clone the repository
git clone https://github.com/IAMAdrianKash/Innovista-Design-Studio.git

# Navigate into the project
cd Innovista-Design-Studio

# Switch to the latest branch with all changes
git checkout claude/fix-react-helmet-deployment-01NxbBpdM2KP1Fa6KuzZ6b2H
```

---

## Step 2: Install Dependencies

```bash
npm install
```

**What this does:** Installs all required packages including Sanity CLI and Studio.

**Expected output:**
```
added 1034 packages in 45s
```

---

## Step 3: Create Environment File

Create a `.env` file in the project root with your credentials:

```bash
# For Mac/Linux:
cat > .env << 'EOF'
SANITY_PROJECT_ID=thhy1crr
SANITY_DATASET=production
SANITY_STUDIO_PROJECT_ID=thhy1crr
SANITY_STUDIO_DATASET=production
EOF

# For Windows (PowerShell):
@"
SANITY_PROJECT_ID=thhy1crr
SANITY_DATASET=production
SANITY_STUDIO_PROJECT_ID=thhy1crr
SANITY_STUDIO_DATASET=production
"@ | Out-File -FilePath .env -Encoding utf8
```

**Or create manually:**
1. Create a new file named `.env` in the project root
2. Copy and paste:
   ```
   SANITY_PROJECT_ID=thhy1crr
   SANITY_DATASET=production
   SANITY_STUDIO_PROJECT_ID=thhy1crr
   SANITY_STUDIO_DATASET=production
   ```
3. Save the file

---

## Step 4: Login to Sanity

```bash
npx sanity login
```

**What happens:**
1. Opens your browser automatically
2. Shows Sanity login page
3. Login with the same account you used to create the project (Google or GitHub)
4. After login, browser shows "You're now logged in"
5. Return to terminal - you should see "Login successful!"

**Expected output:**
```
Login successful!
```

**Troubleshooting:**
- If browser doesn't open automatically, copy the URL from terminal and paste in browser
- Make sure you're logging in with the SAME account you used to create the project

---

## Step 5: Deploy Sanity Studio

Now deploy your Studio to Sanity's cloud:

```bash
npm run studio:deploy
```

**What happens:**
1. Bundles your Studio configuration
2. Uploads to Sanity's CDN (free!)
3. Gives you a URL where your Studio will be accessible

**Expected output:**
```
✔ Deploying studio
✔ Checking if a studio is already deployed
✔ Bundling studio
✔ Uploading studio

Success! Studio deployed to:
https://innovista-design-studio.sanity.studio

You can also access the studio on:
https://thhy1crr.sanity.studio
```

**🎉 Your Studio is now live!**

Copy that URL - you'll use it to manage content from now on.

---

## Step 6: Open Your Studio

Visit the URL you got from the previous step:

```
https://innovista-design-studio.sanity.studio
```

Or go to:
```
https://thhy1crr.sanity.studio
```

**First time login:**
1. You'll be asked to login again (same account)
2. Grant permissions to the Studio
3. You'll see the Studio interface with 4 sections:
   - Blog Posts
   - Case Studies
   - Authors
   - Categories

---

## Step 7: Create Your First Content

### 7.1 Create an Author

1. Click **"Authors"** in the left sidebar
2. Click **"Create"** (top right)
3. Fill in:
   - **Name:** Your name (e.g., "Adrian Kash")
   - **Slug:** Click "Generate" button
   - **Profile Image:** (Optional) Click to upload
   - **Bio:** Short description (e.g., "Founder of Innovista Design Studio")
4. Click **"Publish"** (bottom right)

### 7.2 Create a Category

1. Click **"Categories"** in the left sidebar
2. Click **"Create"**
3. Fill in:
   - **Title:** "Web Design"
   - **Slug:** Click "Generate"
   - **Description:** (Optional) "Articles about web design and development"
4. Click **"Publish"**

**Repeat for more categories:**
- "SEO"
- "Marketing"
- "Lead Generation"

### 7.3 Create Your First Blog Post

1. Click **"Blog Posts"** in the left sidebar
2. Click **"Create"**
3. Fill in all required fields:

   **Title:** (max 100 characters)
   ```
   How to Improve Your Website's SEO in 2025
   ```

   **Slug:** Click "Generate" from title

   **Excerpt:** (max 200 characters)
   ```
   Discover the latest SEO strategies to boost your website's visibility and attract more qualified leads in 2025.
   ```

   **Author:** Select the author you created

   **Published At:** Click calendar, choose today's date

   **Categories:** Check "SEO" and "Marketing"

   **Featured Image:**
   - Click "Select"
   - Upload an image (1200x630px recommended)
   - Add **Alt text:** "SEO optimization strategies"

   **Content:** Write your article content
   - Use the toolbar to format text
   - Add headings, bold, italic, links
   - Click the "+" to add images or code blocks

   **Estimated Read Time:** `5` (minutes)

   **SEO Settings:** (Expand this section)
   - **Meta Title:** Leave empty (uses title by default)
   - **Meta Description:** Leave empty (uses excerpt by default)
   - **OG Image:** Leave empty (uses featured image by default)

4. Click **"Publish"**

### 7.4 Create Your First Case Study

1. Click **"Case Studies"** in the left sidebar
2. Click **"Create"**
3. Fill in:

   **Client Name:**
   ```
   Apex Engineering
   ```

   **Project Title:**
   ```
   45% Increase in Qualified Leads
   ```

   **Slug:** Click "Generate"

   **Excerpt:**
   ```
   How we helped a Calgary engineering firm generate 320+ qualified leads in just 3 months through strategic web design and SEO.
   ```

   **Industry:** Select "Engineering"

   **Services Provided:** Check:
   - ✓ Web Design
   - ✓ Lead Generation
   - ✓ SEO Optimization

   **Project Date:** Choose a date (e.g., January 2025)

   **Featured:** Toggle ON (to show on homepage)

   **Featured Image:** Upload project screenshot

   **Gallery:** (Optional) Upload 2-4 additional images

   **Challenge:**
   ```
   Apex Engineering had an outdated website that wasn't generating leads. They were losing potential clients to competitors with more modern, professional online presence.
   ```

   **Solution:**
   ```
   We rebuilt their website using modern React framework, optimized for speed and conversions. Implemented strategic CTAs, clear service descriptions, and technical SEO to rank for local engineering searches.
   ```

   **Results:** Click "Add item" for each metric:

   Result 1:
   - **Value:** `+45%`
   - **Label:** `Qualified RFPs`

   Result 2:
   - **Value:** `320`
   - **Label:** `Leads in Q1`

   Result 3:
   - **Value:** `2.5x`
   - **Label:** `Faster Load Time`

   **Testimonial:**
   - **Quote:**
     ```
     Innovista transformed our online presence. We're now getting 3-4 qualified leads per week from our website, compared to maybe one per month before.
     ```
   - **Author:** `Sarah Johnson`
   - **Role:** `Marketing Director`
   - **Company:** `Apex Engineering`

4. Click **"Publish"**

---

## Step 8: Configure CORS Origins

**Why:** Allow your production website to fetch content from Sanity.

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click on your project: **"Innovista Design Studio"**
3. In the left sidebar, click **"API"**
4. Click **"CORS Origins"** tab
5. Click **"Add CORS Origin"**
6. Add your localhost (for development):
   - **Origin:** `http://localhost:3000`
   - Check **"Allow credentials"**
   - Click **"Save"**

7. Click **"Add CORS Origin"** again
8. Add your production domain (your Coolify URL):
   - **Origin:** `https://yourdomain.com` (your actual domain)
   - Check **"Allow credentials"**
   - Click **"Save"**

**Example CORS setup:**
```
✓ http://localhost:3000 (Allow credentials)
✓ https://innovista.design (Allow credentials)
```

---

## Step 9: Test Locally

Back in your terminal, test the frontend with the content you created:

```bash
npm run dev
```

**Opens at:** `http://localhost:3000`

**Visit these pages:**
- `/insights` - Should show your blog post
- `/insights/how-to-improve-your-websites-seo-in-2025` - Full blog post
- `/case-studies` - Should show your case study
- `/case-studies/apex-engineering` - Full case study

**What you should see:**
- ✅ Blog post appears in the insights list
- ✅ Blog post detail page loads with full content
- ✅ Case study appears in case studies list
- ✅ Case study detail page shows metrics and testimonial

**If content doesn't appear:**
- Check browser console for errors (F12 → Console)
- Verify CORS origins are configured
- Make sure content is Published (not Draft) in Studio
- Check that `.env` file has correct Project ID

---

## Step 10: Deploy to Coolify

### 10.1 Add Environment Variables to Coolify

1. Open your Coolify dashboard
2. Navigate to your application
3. Go to **Environment Variables** section
4. Add these variables:

   ```
   SANITY_PROJECT_ID=thhy1crr
   SANITY_DATASET=production
   ```

5. Click **"Save"**

### 10.2 Merge and Deploy

Back in your terminal:

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge the feature branch
git merge claude/fix-react-helmet-deployment-01NxbBpdM2KP1Fa6KuzZ6b2H

# Push to trigger Coolify deployment
git push origin main
```

Coolify will automatically:
1. Detect the push
2. Run `npm install`
3. Run `npm run build`
4. Deploy your updated frontend

---

## 🎉 You're Done!

Your Sanity CMS is now fully operational!

### What You Can Do Now:

**Content Management:**
1. Visit your Studio: `https://innovista-design-studio.sanity.studio`
2. Create blog posts and case studies
3. Click "Publish" - content appears immediately on your site

**Your Website:**
- Blog posts: `https://yourdomain.com/insights`
- Case studies: `https://yourdomain.com/case-studies`
- Each has its own SEO-optimized URL!

---

## 📚 Daily Workflow

### Creating New Blog Posts

1. Open Studio: `https://innovista-design-studio.sanity.studio`
2. Click "Blog Posts" → "Create"
3. Write your content
4. Add SEO metadata
5. Click "Publish"
6. Content appears on your website instantly!

### Creating New Case Studies

1. Open Studio
2. Click "Case Studies" → "Create"
3. Fill in client info, metrics, testimonial
4. Click "Publish"
5. Shows up on `/case-studies` page

### Editing Content

1. Open Studio
2. Find the content
3. Make changes
4. Click "Publish"
5. Changes appear instantly (may take 60 seconds for CDN cache)

---

## 🔧 Useful Commands

```bash
# Run Studio locally (for testing)
npm run studio
# Opens at http://localhost:3333

# Deploy Studio changes
npm run studio:deploy

# Run frontend locally
npm run dev
# Opens at http://localhost:3000

# Build for production
npm run build

# Test production build locally
npm run preview
```

---

## 📊 Studio Features

### Visual Editor
- WYSIWYG formatting
- Drag and drop images
- Live preview

### SEO Tools
- Meta title and description for every post
- Custom OG images for social sharing
- Automatic sitemap generation (coming soon)

### Media Management
- Automatic image optimization
- CDN delivery
- Alt text for accessibility

### Collaboration
- Add up to 3 users (free tier)
- Real-time editing
- Version history

---

## 🆘 Troubleshooting

### "Content not appearing on website"

**Check:**
1. ✅ Content is Published (not Draft) in Studio
2. ✅ CORS origins configured correctly
3. ✅ Environment variables set in Coolify
4. ✅ `publishedAt` date is not in the future

**Solution:**
- Open browser console (F12)
- Look for CORS or network errors
- Verify API calls are being made to Sanity

### "Cannot login to Studio"

**Check:**
1. Using the same account you created the project with
2. Browser allows cookies/popups
3. Not using incognito/private mode

**Solution:**
- Try different browser
- Clear cache and cookies
- Use the direct project URL: `https://thhy1crr.sanity.studio`

### "Studio deploy fails"

**Error:** `You must login first`

**Solution:**
```bash
npx sanity login
npm run studio:deploy
```

### "Images not loading"

**Check:**
1. Images uploaded successfully in Studio
2. `urlFor()` function working correctly
3. Image URLs return 200 (not 404)

**Solution:**
- Re-upload images
- Check browser network tab for failed requests
- Verify `@sanity/image-url` is installed

---

## 📞 Need Help?

**Documentation:**
- Sanity Setup Guide: `SANITY-SETUP.md`
- Deployment Guide: `DEPLOYMENT.md`
- Sanity Official Docs: [sanity.io/docs](https://www.sanity.io/docs)

**Support:**
- Sanity Slack Community: [slack.sanity.io](https://slack.sanity.io/)
- GitHub Issues: [github.com/sanity-io/sanity](https://github.com/sanity-io/sanity/issues)

---

## ✅ Quick Checklist

Use this to verify everything is set up correctly:

- [ ] Repository cloned to local machine
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created with Project ID
- [ ] Logged into Sanity (`npx sanity login`)
- [ ] Studio deployed (`npm run studio:deploy`)
- [ ] Can access Studio at deployed URL
- [ ] Created at least 1 Author
- [ ] Created at least 1 Category
- [ ] Created at least 1 Blog Post (Published)
- [ ] Created at least 1 Case Study (Published)
- [ ] CORS origins configured in Sanity dashboard
- [ ] Environment variables added to Coolify
- [ ] Code merged to main branch
- [ ] Coolify deployment successful
- [ ] Can see content on production website

---

## 🎓 Next Steps

Once everything is working:

1. **Create more content** - 5-10 blog posts, 3-5 case studies
2. **Optimize SEO** - Add custom meta tags to important posts
3. **Add team members** - Invite others to Studio (Settings → Members)
4. **Set up webhooks** - Auto-rebuild site when content changes (optional)
5. **Customize schemas** - Add new fields as needed

---

**You're all set!** 🚀

If you encounter any issues during this process, just let me know which step you're on and what error you're seeing.
