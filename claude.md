# Innovista Design Studio - Project Documentation

## Project Overview

Innovista Design Studio is a conversion-focused web design agency specializing in lead generation, SEO optimization, and business automation. This is a Next.js-based website with Sanity CMS for content management.

**Primary Focus Areas:**
- Web Design & Development
- Lead Generation
- SEO Optimization
- Marketing Automation
- Conversion Optimization

**Target Industries:**
- Law Firms
- Engineering
- Manufacturing
- Healthcare
- Real Estate
- Consulting
- Technology

---

## Tech Stack

### Frontend Framework
- **Next.js 15.5.6** - App Router architecture
  - Server-Side Rendering (SSR)
  - Static Site Generation (SSG)
  - Image optimization with `next/image`
  - Font optimization with `next/font/google`
  - Standalone output mode for Docker deployments

### Styling
- **Tailwind CSS** - Utility-first CSS framework
  - Custom color palette
  - Custom font families
  - Responsive design utilities
  - Prose plugin for blog content

### Content Management
- **Sanity CMS** - Headless CMS
  - Sanity Studio for content editing
  - GROQ queries for data fetching
  - Image optimization with Sanity CDN
  - Portable Text for rich content

### UI/Animation
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Portable Text** - Sanity content rendering

### Deployment
- **Coolify** - Self-hosted deployment platform
- **Nixpacks** - Build system
- **Docker** - Containerization

### Development Tools
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **Git** - Version control

---

## Brand Identity

### Brand Colors

#### Primary Colors
```css
--forest: #064E3B      /* Deep emerald green - Primary brand color */
--dark: #1A1A1A        /* Near black - Primary text */
--cream: #F3F4F6       /* Cool platinum/Gray-100 - Background */
```

#### Secondary Colors
```css
--charcoal: #2D2D2D    /* Dark gray - Secondary text */
--cream-dark: #E5E7EB  /* Cool gray/Gray-200 - Subtle backgrounds */
```

#### Usage Guidelines
- **Forest Green (#064E3B)**: Primary CTA buttons, links, accents, brand elements
- **Dark (#1A1A1A)**: Headings, primary text, high-contrast elements
- **Cream (#F3F4F6)**: Page backgrounds, light sections
- **Charcoal (#2D2D2D)**: Secondary text, subtle headings
- **Cream Dark (#E5E7EB)**: Cards, subtle section backgrounds, borders

### Typography

#### Font Families
1. **Plus Jakarta Sans** (Body Text)
   - Variable: `--font-sans`
   - Weights: 300, 400, 500, 600, 700
   - Usage: Body text, navigation, UI elements
   - Class: `font-sans`

2. **Outfit** (Headings)
   - Variable: `--font-heading`
   - Weights: 300, 400, 500, 600, 700
   - Usage: Headings, titles, hero text
   - Class: `font-heading`

3. **Playfair Display** (Accent)
   - Variable: `--font-serif`
   - Weights: 400, 500, 600
   - Styles: normal, italic
   - Usage: Decorative text, testimonials, special accents
   - Class: `font-serif`

#### Typography Scale
```css
/* Headings */
text-6xl: 3.75rem (60px)  /* Hero titles */
text-5xl: 3rem (48px)     /* Page titles */
text-4xl: 2.25rem (36px)  /* Section headings */
text-3xl: 1.875rem (30px) /* Subsection headings */
text-2xl: 1.5rem (24px)   /* Card titles */
text-xl: 1.25rem (20px)   /* Large body text */
text-lg: 1.125rem (18px)  /* Regular body text */
text-base: 1rem (16px)    /* Base body text */
text-sm: 0.875rem (14px)  /* Small text, captions */
```

### Design Principles

#### 1. Clean & Minimal
- Generous whitespace
- Clear hierarchy
- Uncluttered layouts
- Focus on content

#### 2. Conversion-Focused
- Clear CTAs with forest green
- Strategic CTA placement
- Lead generation forms
- Trust signals (testimonials, case studies)

#### 3. Professional & Trustworthy
- Consistent branding
- High-quality imagery
- Professional typography
- Polished interactions

#### 4. Mobile-First
- Responsive design
- Touch-friendly elements
- Optimized for all devices
- Progressive enhancement

---

## Brand Standards

### Logo Usage
- Use adequate spacing around logo
- Maintain aspect ratio
- Avoid distortion or effects
- Use on contrasting backgrounds

### Color Combinations

#### Recommended Pairings
1. **Primary**: Forest on Cream
   ```css
   bg-cream text-forest
   ```

2. **High Contrast**: White on Forest
   ```css
   bg-forest text-white
   ```

3. **Subtle**: Charcoal on Cream
   ```css
   bg-cream text-charcoal
   ```

4. **Cards**: White on Cream
   ```css
   bg-white on bg-cream parent
   ```

### Button Styles

#### Primary CTA
```tsx
className="px-8 py-4 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-colors"
```

#### Secondary CTA
```tsx
className="px-8 py-4 border-2 border-forest text-forest font-bold rounded-full hover:bg-forest hover:text-white transition-colors"
```

#### Text Link
```tsx
className="text-forest font-medium hover:underline"
```

### Spacing System
- Use Tailwind's spacing scale (4px base unit)
- Sections: `py-16` to `py-24`
- Containers: `px-6 md:px-12`
- Max width: `max-w-7xl` (1280px) for full-width sections
- Max width: `max-w-4xl` (896px) for content sections

### Border Radius
- Buttons/Small elements: `rounded-full` or `rounded-xl` (12px)
- Cards: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- Large containers: `rounded-[3rem]` (48px)

### Shadows
- Subtle: `shadow-lg`
- Medium: `shadow-xl`
- Heavy: `shadow-2xl`

---

## Component Guidelines

### Blog Posts

#### Layout Structure
1. **Header Section**
   - Back button (top-left)
   - Category badge
   - Publication date
   - Title (font-heading, 4xl-6xl)
   - Author info with avatar

2. **Featured Image**
   - Max height: 500px
   - Contained within max-w-4xl
   - Rounded corners (rounded-2xl)

3. **Content**
   - Prose styling for rich text
   - Max width: max-w-4xl
   - Generous line height
   - Proper heading hierarchy

4. **Author Bio**
   - Avatar + name + bio
   - Border-top separator

5. **CTA Section**
   - "Enjoyed this perspective?"
   - Light gray background (bg-gray-50)
   - Link to free audit
   - Rounded-3xl

6. **Navigation**
   - "Back to All Insights" button

### Case Studies

#### Layout Structure
1. **Header**
   - Back button
   - Industry tag
   - Client name (large)
   - Project title (italic)
   - Excerpt
   - Services provided
   - Featured image (right column)

2. **Results Metrics**
   - Forest green background
   - White text
   - 3-column grid
   - Large numbers + labels

3. **Challenge & Solution**
   - Two-column narrative
   - Generous spacing

4. **Gallery** (optional)
   - Grid layout
   - Image captions

5. **Testimonial** (optional)
   - Large quote
   - Author details

6. **CTA**
   - "Ready for Similar Results?"
   - Two buttons (primary + secondary)

### Forms
- Clear labels
- Helpful placeholder text
- Validation messages
- Success/error states
- Forest green submit buttons

### Navigation
- Transparent on hero sections
- Solid background on scroll
- Mobile menu with smooth transitions
- Active state indicators

---

## Content Guidelines

### Voice & Tone
- **Professional** but approachable
- **Confident** without being arrogant
- **Helpful** and educational
- **Results-oriented**
- **Clear** and jargon-free

### Writing Style
- Short paragraphs (2-4 sentences)
- Active voice
- Concrete examples
- Data-driven when possible
- Clear CTAs

### SEO Best Practices
- Descriptive meta titles (50-60 characters)
- Compelling meta descriptions (150-160 characters)
- H1-H6 hierarchy
- Alt text for all images
- Internal linking
- Canonical URLs
- Schema markup for articles

---

## Development Workflow

### Branch Strategy
- **main**: Production branch
- **claude/***: Feature branches (managed by Claude)
- Always create feature branches for new work
- Merge to main via pull request

### Commit Messages
- Use conventional commits format
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Formatting changes
- **refactor**: Code restructuring
- **test**: Testing updates
- **chore**: Build/config updates

Example:
```
feat: Add CTA section to blog posts

- Added "Enjoyed this perspective?" CTA
- Includes link to free audit page
- Gray background with rounded corners
```

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use functional components
- Prefer server components (Next.js)
- Use async/await for data fetching
- Keep components small and focused

---

## Deployment

### Coolify Configuration
- **Platform**: Node.js application
- **Build System**: Nixpacks
- **Start Command**: `npm start`
- **Output**: Standalone mode
- **Static Site**: Unchecked
- **SPA**: Unchecked
- **Publish Directory**: Empty (not used)

### Environment Variables
Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_READ_TOKEN` (for private content)

### Build Process
1. `npm ci` - Install dependencies
2. `npm run build` - Build Next.js app
3. `npm start` - Start production server

---

## File Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Homepage
│   ├── insights/            # Blog section
│   │   └── [slug]/          # Blog post pages
│   ├── case-studies/        # Case studies section
│   │   └── [slug]/          # Case study pages
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ui/                  # UI components
├── lib/                     # Utilities
│   └── sanity.ts           # Sanity client & queries
├── sanity/                  # Sanity Studio config
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── nixpacks.toml           # Deployment configuration
└── package.json            # Dependencies
```

---

## Contact & Resources

### Important Links
- **Production Site**: https://innovista.design
- **Sanity Studio**: /studio
- **GitHub**: Repository URL

### Support Contacts
- **Primary Contact**: Adrian Kash (Owner)
- **Development**: Claude AI Assistant

---

## Version History

### Current Version: 2.0.0
- Migrated from Vite to Next.js 15.5.6
- Integrated Sanity CMS
- Optimized fonts with Next.js font system
- Added blog and case studies sections
- Deployed on Coolify with Nixpacks

### Previous Versions
- 1.0.0: Initial Vite + React build

---

## Notes for Future Development

### Planned Features
- Newsletter subscription
- Advanced filtering for blog posts
- Enhanced search functionality
- Client portal
- Analytics dashboard

### Technical Debt
- None currently

### Optimization Opportunities
- Image lazy loading improvements
- Further bundle size optimization
- Advanced caching strategies
- Progressive Web App (PWA) features

---

**Last Updated**: November 21, 2025
**Maintained By**: Claude AI Assistant
