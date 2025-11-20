# Deployment Guide - Innovista Design Studio

## Issue Fixed

**Problem:** Blank page on deployment
**Root Cause:** Missing script tag in `index.html` to load the application entry point
**Solution:** Added `<script type="module" src="/index.tsx"></script>` to index.html

---

## Coolify Deployment Configuration

### Build Settings

Configure your Coolify deployment with these exact settings:

**Install Command:**
```bash
npm install
```

**Build Command:**
```bash
npm run build
```

**Publish Directory:**
```
dist
```

**Port (Optional):**
```
3000
```

### Environment Variables (Optional)

If you need to add API keys in the future:

```bash
GEMINI_API_KEY=your-api-key-here
```

---

## Static Site Configuration

This is a **static site** built with Vite. Coolify should:

1. Install dependencies with `npm install`
2. Build the production bundle with `npm run build`
3. Serve the `dist` folder as static files

### Important Notes

- The app uses **Tailwind CDN** (loaded from cdn.tailwindcss.com)
- React and dependencies are bundled in the build output
- No server-side rendering required
- No API routes or backend needed
- All routes are client-side (SPA)

---

## Nixpacks Configuration (Alternative)

If Coolify uses Nixpacks, create a `nixpacks.toml` file:

```toml
[phases.build]
cmds = ["npm install", "npm run build"]

[phases.start]
cmd = "npx serve dist -p 3000"

[start]
cmd = "npx serve dist -p 3000"
```

---

## Manual Deployment Steps

If you need to deploy manually:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IAMAdrianKash/Innovista-Design-Studio.git
   cd Innovista-Design-Studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Serve the dist folder:**
   ```bash
   npx serve dist -p 3000
   ```

---

## Verifying the Build Locally

Test the production build locally before deploying:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Then open http://localhost:4173 to verify everything works.

---

## Troubleshooting

### Blank Page Issues

**Check these in your browser's DevTools (F12):**

1. **Console Errors:**
   - Open Console tab
   - Look for JavaScript errors
   - Common issues: Failed to fetch modules, CORS errors

2. **Network Tab:**
   - Check if all assets loaded successfully
   - Verify CDN resources (Tailwind, Google Fonts) are accessible
   - Look for 404 errors

3. **Check HTML:**
   - View page source (Right-click → View Page Source)
   - Verify the script tag exists: `<script type="module" crossorigin src="/assets/index-[hash].js"></script>`
   - Confirm the bundle file exists at that path

### CDN Dependencies

The app relies on these external CDNs:
- **Tailwind CSS:** https://cdn.tailwindcss.com
- **Google Fonts:** https://fonts.googleapis.com
- **AI Studio CDN:** https://aistudiocdn.com (for React modules)

**If CDNs are blocked:**
- Check your hosting firewall settings
- Verify DNS resolution
- Try accessing the CDN URLs directly in browser

### Build Errors

**If build fails:**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

**If TypeScript errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

---

## Production Optimizations (Future)

For better performance in production, consider:

1. **Self-host Tailwind:**
   - Remove CDN script
   - Install: `npm install -D tailwindcss postcss autoprefixer`
   - Configure PostCSS build process
   - **Benefit:** Faster load, purged CSS, smaller bundle

2. **Optimize Images:**
   - Compress images (TinyPNG, Squoosh)
   - Use modern formats (WebP, AVIF)
   - Implement lazy loading

3. **Add Caching Headers:**
   - Configure CDN/server to cache static assets
   - Set long cache times for `/assets/*`

4. **Bundle Analysis:**
   ```bash
   npm install -D rollup-plugin-visualizer
   ```
   Add to vite.config.ts to analyze bundle size

---

## Deployment Checklist

Before deploying, verify:

- [ ] `npm run build` completes without errors
- [ ] `dist/` folder contains `index.html` and `assets/` folder
- [ ] Local preview works: `npm run preview`
- [ ] All CDN resources are accessible (Tailwind, Fonts)
- [ ] Environment variables set (if needed)
- [ ] Git repository is up to date
- [ ] Build output directory is set to `dist` in Coolify

---

## Support

**If issues persist:**

1. Check Coolify build logs for specific errors
2. Verify the `dist` folder is being served correctly
3. Test locally with `npm run preview`
4. Check browser console for JavaScript errors
5. Verify CDN resources aren't blocked by firewall/CSP

**Common Coolify Settings:**
- **Type:** Static Site or Node.js
- **Build Pack:** Nixpacks (auto-detected) or Docker
- **Publish Directory:** `dist`
- **Install Command:** `npm install`
- **Build Command:** `npm run build`

---

## What Was Fixed

**Original Issue:**
The `index.html` file was missing the module script tag that loads the application:

```html
<!-- BEFORE (missing) -->
<body>
  <div id="root"></div>
</body>

<!-- AFTER (fixed) -->
<body>
  <div id="root"></div>
  <script type="module" src="/index.tsx"></script>
</body>
```

Without this script tag, Vite cannot load the React application, resulting in a blank page even though the HTML loads successfully.

**Build Output:**
Vite transforms this during build to:
```html
<script type="module" crossorigin src="/assets/index-[hash].js"></script>
```

This bundled file contains all the React code, components, and application logic.

---

## Questions?

If you continue to see a blank page after these fixes:

1. **Share the build logs from Coolify**
2. **Share browser console errors** (F12 → Console tab)
3. **Share the deployed URL** so we can inspect the actual deployment
4. **Check if CDN resources are accessible** from your deployment location

The fix should resolve the blank page issue. If problems persist, it's likely a Coolify configuration or CDN accessibility issue.
