# Deployment Guide - Innovista Design Studio

## Architecture Update: Now Using React Router

This application now uses **React Router** for URL-based routing instead of state-based routing. This provides:
- ✅ **SEO-friendly URLs** - Each page has its own unique URL
- ✅ **Deep linking** - Share direct links to any page
- ✅ **Browser navigation** - Back/forward buttons work correctly
- ✅ **Better Google indexing** - Each page can rank independently

---

## Coolify Deployment Configuration

### Build Settings

**Install Command:**
```bash
npm install --legacy-peer-deps
```

**Build Command:**
```bash
npm run build
```

**Publish Directory:**
```
dist
```

**Port:**
```
3000
```

### Important: SPA Routing Configuration

Since this is a Single Page Application (SPA) with client-side routing, you need to configure your server to redirect all routes to `index.html`.

**For Coolify/Nginx:**
Add this to your Nginx configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**For Netlify/Static Hosts:**
The `public/_redirects` file handles this automatically:
```
/*    /index.html   200
```

**For Apache:**
Create `.htaccess` in the dist folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Environment Variables

Optional environment variables:

```bash
GEMINI_API_KEY=your-api-key-here  # If using AI features
```

---

## URL Structure (SEO-Optimized)

The application now has these routes:

**Main Pages:**
- `/` - Homepage
- `/about` - About page
- `/contact` - Contact page
- `/careers` - Careers page
- `/faq` - FAQ page

**Services Pages:**
- `/services` - Services overview
- `/services/web-design` - Web Design service
- `/services/lead-generation` - Lead Generation service
- `/services/automation` - Automation service
- `/services/seo` - SEO service

**Portfolio & Content:**
- `/case-studies` - Case studies/portfolio
- `/insights` - Blog/insights
- `/pricing` - Pricing information
- `/process` - Process overview
- `/audit` - Free audit CTA
- `/capabilities` - Tech stack

**Legal:**
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/cookie-policy` - Cookie policy

Each URL is now indexable by Google separately!

---

## SEO Configuration

Each page uses `react-helmet-async` for dynamic meta tags. Make sure your deployment:

1. **Doesn't strip meta tags** from the HTML
2. **Allows JavaScript execution** for dynamic rendering
3. **Has proper 404 handling** (should serve index.html with 200 status for SPA routing)

---

## Nixpacks Configuration

The `nixpacks.toml` file configures automatic deployment:

```toml
[phases.setup]
nixPkgs = ["nodejs_20"]

[phases.install]
cmds = ["npm install --legacy-peer-deps"]

[phases.build]
cmds = ["npm run build"]

[start]
cmd = "npx serve dist -s -p 3000"
```

The `-s` flag in `serve` is crucial - it enables SPA mode, redirecting all routes to index.html.

---

## Testing Locally

**Development mode:**
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

**Production build locally:**
```bash
npm install
npm run build
npm run preview
# Visit http://localhost:4173
```

**Test SPA routing:**
1. Navigate to http://localhost:4173/services/web-design
2. Refresh the page - it should still load correctly (not 404)
3. Use browser back/forward buttons - they should work

---

## Troubleshooting

### Issue: 404 errors when refreshing non-root pages

**Problem:** Visiting `/about` works, but refreshing the page shows 404.

**Solution:** Your server isn't configured to redirect all routes to `index.html`. See "SPA Routing Configuration" above.

### Issue: Blank page on deployment

**Checklist:**
1. Check browser console for errors (F12)
2. Verify `index.html` contains the entry script tag:
   ```html
   <script type="module" crossorigin src="/assets/index-[hash].js"></script>
   ```
3. Verify the bundle file exists at that path in the `dist` folder
4. Check that CDN resources (Tailwind, Fonts) are accessible

### Issue: React Router not working

**Checklist:**
1. Verify `react-router-dom` is installed: `npm list react-router-dom`
2. Check that server has SPA routing configured (see above)
3. Look for console errors related to routing

### Issue: Build fails with peer dependency errors

**Solution:** Use `npm install --legacy-peer-deps` or ensure `.npmrc` contains:
```
legacy-peer-deps=true
```

This is required because `react-helmet-async` doesn't officially support React 19 yet (though it works fine).

---

## Deployment Checklist

Before deploying:

- [ ] Run `npm run build` locally to verify it works
- [ ] Check `dist/` folder contains `index.html` and `assets/` folder
- [ ] Verify `dist/index.html` has the correct script tag
- [ ] Test all major routes work after build
- [ ] Verify SEO meta tags are present in each page component
- [ ] Configure server for SPA routing (see above)
- [ ] Set environment variables if needed
- [ ] Push latest changes to repository

---

## Performance Notes

**Current Bundle Size:** ~550KB (160KB gzipped)

**Optimization Opportunities:**
1. Code splitting by route (dynamic imports)
2. Lazy load images below the fold
3. Consider removing Tailwind CDN in favor of PostCSS build

---

## Support

**Common Coolify Issues:**

1. **"Cannot GET /about" on refresh**
   - Server needs SPA routing configuration

2. **Build succeeds but site is blank**
   - Check browser console for errors
   - Verify script tag in built `dist/index.html`

3. **URLs don't update when navigating**
   - This shouldn't happen with React Router
   - Check for JavaScript errors in console

For more help, check:
- React Router docs: https://reactrouter.com
- Vite deployment: https://vitejs.dev/guide/static-deploy.html
- Coolify docs: https://coolify.io/docs

---

## Quick Deploy Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Coolify (automatic on git push)
git add .
git commit -m "Your message"
git push origin main
```

---

## Summary

**Key Changes for SEO:**
- ✅ Switched from state-based routing to React Router
- ✅ Each page now has unique URL (not all on `/`)
- ✅ URLs are SEO-friendly (`/services/web-design` not `/service-web-design`)
- ✅ Browser back/forward buttons work
- ✅ Deep linking works - can share direct links to any page
- ✅ Google can now index each page separately

**Server Configuration Required:**
- Must redirect all routes to `index.html` for SPA routing
- Use `serve -s` or configure Nginx `try_files`

**React 19 Compatibility:**
- Using `.npmrc` with `legacy-peer-deps=true`
- Works perfectly despite peer dependency warnings
