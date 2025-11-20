# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for managing blog posts and case studies.

---

## Overview

**What's Included:**
- ✅ Blog post management with rich text editing
- ✅ Case study management with metrics and testimonials
- ✅ Author and category management
- ✅ SEO fields for every content type
- ✅ Image optimization with Sanity CDN
- ✅ Dynamic routes for detail pages
- ✅ Beautiful editing interface (Sanity Studio)

---

## Step 1: Create Sanity Account & Project

### 1.1 Sign Up for Sanity

1. Go to [sanity.io](https://www.sanity.io/)
2. Click "Get Started" and sign up with Google or GitHub
3. Create a new project when prompted
   - **Project Name:** "Innovista Design Studio"
   - **Dataset:** Use "production" (default)

### 1.2 Get Your Project Credentials

After creating your project:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Copy your **Project ID** (looks like: `abc123xyz`)

---

## Step 2: Configure Environment Variables

### 2.1 Create .env File

Create a `.env` file in the root of your project:

```bash
# Copy from .env.example
cp .env.example .env
```

### 2.2 Add Your Credentials

Edit `.env` and add your project details:

```env
# Sanity CMS Configuration
SANITY_PROJECT_ID=YOUR_PROJECT_ID_HERE
SANITY_DATASET=production

# For Sanity Studio
SANITY_STUDIO_PROJECT_ID=YOUR_PROJECT_ID_HERE
SANITY_STUDIO_DATASET=production
```

**Replace `YOUR_PROJECT_ID_HERE`** with the Project ID from Step 1.2.

---

## Step 3: Update Vite Configuration

To use environment variables in Vite, update `vite.config.ts`:

```typescript
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.SANITY_PROJECT_ID': JSON.stringify(env.SANITY_PROJECT_ID),
      'process.env.SANITY_DATASET': JSON.stringify(env.SANITY_DATASET),
      'process.env.SANITY_STUDIO_PROJECT_ID': JSON.stringify(env.SANITY_STUDIO_PROJECT_ID),
      'process.env.SANITY_STUDIO_DATASET': JSON.stringify(env.SANITY_STUDIO_DATASET),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
```

---

## Step 4: Deploy Sanity Studio

### 4.1 Run Studio Locally

First, test the studio locally:

```bash
npm run studio
```

This will open Sanity Studio at `http://localhost:3333`

### 4.2 Deploy Studio to Sanity

Deploy your studio to Sanity's hosting:

```bash
npm run studio:deploy
```

Follow the prompts. Your studio will be available at:
```
https://YOUR_PROJECT_NAME.sanity.studio
```

---

## Step 5: Add CORS Origins

To allow your website to fetch data from Sanity:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings** → **API** → **CORS Origins**
4. Click **Add CORS Origin**
5. Add your domains:
   - `http://localhost:3000` (development)
   - `https://yourdomain.com` (production)
   - Mark "Allow credentials" if needed

---

## Step 6: Create Initial Content

### 6.1 Create an Author

1. Open Sanity Studio (locally or deployed)
2. Go to **Authors**
3. Click **Create**
4. Fill in:
   - Name: Your name
   - Slug: Click "Generate" from name
   - Image: Upload profile photo (optional)
   - Bio: Short description
5. Click **Publish**

### 6.2 Create Categories

1. Go to **Categories**
2. Create a few categories:
   - Title: "Web Design"
   - Slug: Auto-generated
   - Description: Brief description
3. Repeat for: "SEO", "Marketing", "Development", etc.

### 6.3 Create Your First Blog Post

1. Go to **Blog Posts**
2. Click **Create**
3. Fill in all fields:
   - **Title:** "How to Improve Your Website's SEO in 2025"
   - **Slug:** Click "Generate"
   - **Excerpt:** Short preview (max 200 chars)
   - **Author:** Select the author you created
   - **Published At:** Choose date/time
   - **Categories:** Select 1-3 categories
   - **Featured Image:** Upload image
   - **Content:** Write your article (rich text)
   - **SEO Settings:** Optional custom meta tags
4. Click **Publish**

### 6.4 Create Your First Case Study

1. Go to **Case Studies**
2. Click **Create**
3. Fill in:
   - **Client Name:** "Apex Engineering"
   - **Project Title:** "45% Increase in Qualified Leads"
   - **Slug:** Click "Generate"
   - **Excerpt:** Brief overview
   - **Industry:** Select from dropdown
   - **Services Provided:** Check all that apply
   - **Project Date:** Completion date
   - **Featured:** Toggle on to feature on homepage
   - **Featured Image:** Upload project image
   - **Gallery:** Upload 2-4 additional images (optional)
   - **Challenge:** Describe the problem
   - **Solution:** Explain what you did
   - **Results:** Add metrics:
     - Value: "+45%"
     - Label: "Increase in Qualified Leads"
   - **Testimonial:** Add client quote (optional)
4. Click **Publish**

---

## Step 7: Test the Integration

### 7.1 Restart Development Server

```bash
# Stop current dev server (Ctrl+C)
npm run dev
```

### 7.2 View Your Content

Navigate to:
- `http://localhost:3000/insights` - Blog listing
- `http://localhost:3000/insights/your-post-slug` - Blog post detail
- `http://localhost:3000/case-studies` - Case studies listing
- `http://localhost:3000/case-studies/your-case-slug` - Case study detail

---

## Content Management Workflow

### Adding New Blog Posts

1. Open Sanity Studio
2. Go to **Blog Posts** → **Create**
3. Write your content
4. Add SEO meta tags
5. **Publish** when ready
6. Content appears immediately on your website

### Adding New Case Studies

1. Open Sanity Studio
2. Go to **Case Studies** → **Create**
3. Add client info, metrics, and testimonial
4. **Publish**
5. Appears on case studies page

### Editing Content

1. Open Sanity Studio
2. Find the content to edit
3. Make changes
4. Click **Publish**
5. Changes appear immediately (CDN caches for 60 seconds)

---

## Schema Reference

### Blog Post Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Post title (max 100 chars) |
| slug | slug | Yes | URL-friendly identifier |
| excerpt | text | Yes | Short description (max 200 chars) |
| author | reference | Yes | Link to author document |
| publishedAt | datetime | Yes | Publication date/time |
| categories | array | No | Array of category references |
| featuredImage | image | Yes | Main post image |
| content | portable text | Yes | Rich text content |
| estimatedReadTime | number | No | Minutes to read |
| seo.metaTitle | string | No | Custom meta title (max 60 chars) |
| seo.metaDescription | text | No | Custom meta description (max 160 chars) |
| seo.ogImage | image | No | Social share image |

### Case Study Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| client | string | Yes | Client name |
| title | string | Yes | Project title |
| slug | slug | Yes | URL identifier |
| excerpt | text | Yes | Short description |
| industry | string | Yes | Select from list |
| services | array | Yes | Services provided |
| projectDate | date | Yes | Completion date |
| featured | boolean | No | Show on homepage |
| featuredImage | image | Yes | Main project image |
| gallery | array | No | Additional images |
| challenge | text | Yes | Problem description |
| solution | text | Yes | How you solved it |
| results | array | Yes | Metrics (value + label) |
| testimonial | object | No | Client quote |
| seo | object | No | SEO overrides |

---

## Customization

### Adding New Fields

1. Edit schema file: `sanity/schemas/post.ts` or `sanity/schemas/caseStudy.ts`
2. Add new field using `defineField()`:

```typescript
defineField({
  name: 'videoUrl',
  title: 'Video URL',
  type: 'url',
  description: 'Optional video embed URL',
}),
```

3. Redeploy studio: `npm run studio:deploy`
4. Update TypeScript interface in `lib/sanity.ts`
5. Update component to display new field

### Adding New Content Types

1. Create new schema file: `sanity/schemas/yourType.ts`
2. Export from `sanity/schemas/index.ts`
3. Add to studio structure in `sanity.config.ts`
4. Create fetch functions in `lib/sanity.ts`
5. Create React components

---

## Troubleshooting

### "Project ID not found" Error

**Problem:** Environment variables not loaded

**Solution:**
1. Check `.env` file exists in root directory
2. Verify `SANITY_PROJECT_ID` is set correctly
3. Restart dev server: `npm run dev`

### "CORS Error" in Browser Console

**Problem:** Domain not allowed in Sanity

**Solution:**
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select project → Settings → API → CORS Origins
3. Add your domain: `http://localhost:3000`

### Content Not Appearing

**Problem:** Content might not be published

**Solution:**
1. Open Sanity Studio
2. Find the document
3. Ensure status shows "Published" (not "Draft")
4. Check `publishedAt` date is not in the future

### Images Not Loading

**Problem:** Image URL builder not configured

**Solution:**
1. Verify `@sanity/image-url` is installed
2. Check `urlFor()` function in `lib/sanity.ts`
3. Ensure Project ID is correct

### Build Fails

**Problem:** Missing environment variables in production

**Solution:**
1. Add env vars to your hosting platform (Coolify, Vercel, etc.)
2. Verify variable names match exactly
3. Rebuild application

---

## Performance Tips

### 1. Use CDN (Enabled by Default)

```typescript
const sanityClient = createClient({
  // ...
  useCdn: true, // Caches responses for 60 seconds
});
```

### 2. Optimize Images

Always use `urlFor()` with width/height:

```typescript
urlFor(image)
  .width(800)
  .height(600)
  .format('webp') // Modern format
  .quality(85)    // Compress slightly
  .url()
```

### 3. Limit Query Results

Don't fetch all posts at once:

```typescript
// Fetch only 10 most recent
const posts = await sanityClient.fetch(
  `*[_type == "post"] | order(publishedAt desc) [0...10]`
);
```

### 4. Use Webhooks (Advanced)

Set up webhooks to rebuild your site when content changes:

1. Go to Sanity Settings → Webhooks
2. Add webhook URL (your deployment hook)
3. Auto-rebuild on publish

---

## Pricing

**Sanity Free Tier includes:**
- ✅ 3 users
- ✅ 100,000 API requests/month
- ✅ 10GB bandwidth/month
- ✅ 1GB assets storage
- ✅ Unlimited documents

**More than enough for most small-medium businesses!**

**Paid Plans:**
- **Growth:** $99/month - 15 users, 500k requests
- **Team:** $249/month - Unlimited users, 2M requests
- **Enterprise:** Custom pricing

---

## Resources

### Official Documentation
- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text](https://www.sanity.io/docs/portable-text)

### Sanity Studio
- Local: `http://localhost:3333`
- Deployed: `https://YOUR_PROJECT.sanity.studio`

### Support
- [Sanity Slack Community](https://slack.sanity.io/)
- [GitHub Issues](https://github.com/sanity-io/sanity/issues)

---

## Next Steps

Once setup is complete:

1. **✅ Create 3-5 blog posts** to populate your insights page
2. **✅ Add 2-3 case studies** with real project data
3. **✅ Customize SEO fields** for better ranking
4. **✅ Add more authors** if you have a team
5. **✅ Set up webhooks** for auto-deployment (optional)

---

## Quick Commands

```bash
# Development
npm run dev              # Start frontend dev server
npm run studio           # Start Sanity Studio locally

# Production
npm run build            # Build frontend
npm run studio:deploy    # Deploy Sanity Studio

# Environment
cp .env.example .env     # Create env file
```

---

## Questions?

Check the main `DEPLOYMENT.md` or open an issue in the repository.

Happy content managing! 🎉
