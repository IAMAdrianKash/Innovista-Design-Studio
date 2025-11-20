# Innovista Design Studio - Platform Documentation

> **Core Positioning:** "We're not artists. We're architects of revenue."

This document provides a comprehensive understanding of the Innovista Design Studio platform, covering brand identity, structure, design patterns, and strategic positioning.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Brand Voice & Messaging](#brand-voice--messaging)
3. [Project Architecture](#project-architecture)
4. [Design System](#design-system)
5. [Component Patterns](#component-patterns)
6. [Technology Stack](#technology-stack)
7. [Content Strategy](#content-strategy)
8. [Development Guidelines](#development-guidelines)

---

## Brand Identity

### Color Palette

The platform uses a sophisticated "Executive Growth" palette designed to convey authority, stability, and premium positioning.

**Primary Colors:**
- **Forest Green** (`#064E3B`) - Primary CTA color, used exclusively for high-value conversion points
- **Jet Black** (`#1A1A1A`) - Primary typography, creates strong visual hierarchy
- **Cool Platinum** (`#F3F4F6`) - Base background, replaces standard white for a "software-like" premium feel

**Supporting Colors:**
- **Charcoal** (`#2D2D2D`) - Secondary dark shade for contrast
- **Cool Grey** (`#E5E7EB`) - Secondary background, subtle differentiation

**Color Strategy:**
- Forest green is reserved for calls-to-action only (scarcity = importance)
- Cool platinum background differentiates from typical white websites
- High contrast between dark text and light backgrounds ensures readability
- Minimal color palette creates sophistication and focus

**Location:** `index.html:21-27`

### Typography System

**Font Families:**
- **Plus Jakarta Sans** - Body text
  - Tall x-height for optimal screen readability
  - Clean, modern sans-serif
  - Used for all body copy and secondary elements

- **Outfit** - Headings
  - Geometric, constructed feel
  - Bold weights for visual hierarchy
  - Used for section headings and subheadings

- **Playfair Display** - Editorial
  - Sophisticated serif for premium messaging
  - High-contrast strokes
  - Used sparingly for large hero headlines and emphasis
  - Creates "magazine editorial" feel

**Implementation Pattern:**
```tsx
// Hero headlines - Maximum impact
<h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem]">

// Section headings - Structure
<h2 className="font-heading text-4xl md:text-5xl font-bold">

// Body copy - Readability
<p className="font-sans text-lg text-gray-600">
```

**Location:** `index.html:16-19`

### Logo & Brand Mark

**Design:**
- Wordmark-based: "Innovista" with forest green period accent
- No complex graphics - relies on typography
- Minimal, modern aesthetic
- The period (`.`) serves as the brand mark

**Implementation:**
```tsx
<span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A]">
  Innovista<span className="text-forest">.</span>
</span>
```

**Responsive Scaling:**
- Mobile: 24px (text-2xl)
- Desktop: 32px (text-3xl)
- Maintains tracking-tight for cohesive wordmark

**Location:** `components/Navbar.tsx:55-58`

### Visual Design Language

**Rounded Corners:**
- Small elements: `rounded-xl` (12px) - Buttons, inputs
- Cards: `rounded-[2rem]` (32px) - Most content cards
- Large containers: `rounded-[3rem]` (48px) - Hero sections, major CTAs
- Strategy: Softens the corporate feel while maintaining professionalism

**Shadows & Elevation:**
- Subtle: `shadow-lg` - Standard card elevation
- Prominent: `shadow-2xl` - Floating elements, mega menu
- Always combined with border for definition

**Image Treatment:**
- Grayscale filter: `grayscale-[20%]` to `grayscale-[50%]`
- Purpose: Maintains visual cohesion, prevents color clashing
- Creates sophisticated, unified aesthetic
- Still shows enough color to feel authentic

**Badge/Label Style:**
- Rounded pill shapes: `rounded-full`
- Uppercase text: `uppercase tracking-wider text-xs`
- Subtle backgrounds: `bg-gray-100` or `bg-white/10`
- Used for status indicators and category labels

---

## Brand Voice & Messaging

### Core Value Proposition

**Primary Tagline:**
> "We're not artists. We're architects of revenue."

**What This Communicates:**
- Results-focused over aesthetics
- Business outcomes over creative expression
- Strategic thinking over subjective design
- ROI-driven approach

**Location:** `README.md:3`, `components/About.tsx`

### Voice Characteristics

**1. Direct & Provocative**
- No corporate jargon or fluff
- Challenges common industry practices
- Makes bold, clear statements

Example:
```
"Tired of websites that are just expensive decorations?"
"We don't build websites that sit there looking pretty."
```

**2. Confident Authority**
- Speaks from expertise without arrogance
- Uses technical specifics to build credibility
- Backs claims with concrete examples

Example:
```
"We use React, Next.js, and Sanity. Not slow WordPress plugins
held together with duct tape."
```

**3. Transparency-First**
- Clear pricing upfront
- No hidden fees or gotchas
- Honest about what works and what doesn't

Example:
```
"Projects start at $8k. No hidden fees."
"Month-to-month. Always."
"If we're not generating value, fire us."
```

**4. Problem-Aware**
- Understands client pain points intimately
- Addresses specific frustrations
- Shows empathy through specificity

Example:
```
"No more guessing if your website's working. See exactly what's
generating leads and what's just taking up server space."
```

### Messaging Patterns

**Headlines Structure:**
```tsx
// Pattern: Statement + Italic Contrast Word
<h1>Your website should be generating
    <span className="italic font-light">revenue.</span>
</h1>

// Pattern: Negation + Affirmation
<h1>We're not artists.<br />
    We're architects of revenue.</h1>

// Pattern: Question-Based Engagement
<h2>Ready to stop <span className="italic">guessing?</span></h2>
```

**Supporting Copy Rules:**
- Maximum 2-3 sentences per paragraph
- Concrete examples over abstract claims
- Metrics and specifics wherever possible
- Active voice, present tense

**Tone Modulation by Section:**
- **Hero/About:** Bold, provocative, positioning
- **Services:** Educational, detailed, technical
- **Case Studies:** Results-focused, metric-driven
- **Testimonials:** Client voice, authentic, specific
- **Footer:** Conversational, approachable, helpful

---

## Project Architecture

### Directory Structure

```
Innovista-Design-Studio/
├── components/
│   ├── services/              # Service landing pages
│   │   ├── ServiceWebDesign.tsx
│   │   ├── ServiceLeadGen.tsx
│   │   ├── ServiceAutomation.tsx
│   │   └── ServiceSEO.tsx
│   ├── legal/                 # Legal/compliance pages
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfService.tsx
│   │   └── CookiePolicy.tsx
│   ├── Navbar.tsx             # Primary navigation
│   ├── Hero.tsx               # Homepage hero section
│   ├── Footer.tsx             # Site footer
│   ├── Home.tsx               # Homepage composition
│   ├── About.tsx              # About page
│   ├── ServicesOverview.tsx   # Services landing
│   ├── Portfolio.tsx          # Work showcase
│   ├── Contact.tsx            # Contact page
│   ├── CaseStudies.tsx        # Portfolio with metrics
│   ├── Testimonials.tsx       # Client testimonials
│   ├── Features.tsx           # Industry-specific value props
│   ├── Calculators.tsx        # Differentiators section
│   ├── Process.tsx            # How we work
│   ├── Results.tsx            # Metrics showcase
│   ├── Audit.tsx              # Lead magnet CTA
│   └── [Additional components]
├── App.tsx                    # Central routing & layout
├── index.tsx                  # React entry point
├── index.html                 # HTML template + Tailwind config
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── metadata.json              # Project metadata
└── .gitignore                 # Git exclusions
```

### Architectural Pattern: State-Based SPA

**Routing Strategy:**
```tsx
// App.tsx
export type PageType = 'home' | 'about' | 'services' | 'service-web-design' |
                       'service-lead-gen' | 'service-automation' | 'service-seo' |
                       'portfolio' | 'contact' | 'privacy' | 'terms' | 'cookies';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);  // Reset scroll position
  };

  // Conditional rendering based on state
  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'about' && <About onNavigate={handleNavigate} />}
      {/* Additional page conditions */}
      <Footer onNavigate={handleNavigate} />
    </>
  );
};
```

**Why This Approach:**
- No routing library dependency
- Instant page transitions without reloads
- Simple state management for marketing site
- Easy to understand and maintain
- Perfect for single-domain marketing sites

**Trade-offs:**
- No URL-based navigation (no deep linking)
- Browser back/forward doesn't work
- Not suitable for SEO-critical multi-page sites
- Appropriate for this use case: marketing SPA with potential form submissions

**Location:** `App.tsx:5-85`

### Component Composition Strategy

**Page Components** (e.g., `Home.tsx`, `About.tsx`):
- Compose multiple feature sections
- Handle page-level layout
- Pass navigation handlers down
- No business logic - pure composition

**Section Components** (e.g., `Hero.tsx`, `Features.tsx`):
- Self-contained feature sections
- Own styling and animation
- Accept navigation callback
- Can be reused across pages

**Utility Components** (e.g., `Navbar.tsx`, `Footer.tsx`):
- Persistent across all pages
- Handle navigation state
- Shared UI elements

---

## Design System

### Spacing Scale

**Consistent spacing creates visual rhythm:**

```tsx
// Section Padding (Vertical)
className="py-24"           // 96px - Standard section spacing
className="py-32"           // 128px - Large section spacing

// Container Padding
className="px-8 md:px-16"  // 32px mobile, 64px desktop

// Card Padding
className="p-8"            // 32px - Standard cards
className="p-10"           // 40px - Medium cards
className="p-12"           // 48px - Large feature cards

// Gap Between Elements
className="gap-4"          // 16px - Tight grouping
className="gap-6"          // 24px - Standard spacing
className="gap-8"          // 32px - Comfortable spacing
className="gap-16"         // 64px - Section separation
className="gap-24"         // 96px - Major divisions
```

**Rule of Thumb:**
- Use multiples of 4 (Tailwind's base unit)
- Increase spacing as screen size grows
- More whitespace = more premium feel

### Responsive Breakpoints

**Mobile-First Strategy:**
```tsx
// Mobile (default)
className="text-2xl"

// Tablet (768px+)
className="md:text-4xl"

// Desktop (1024px+)
className="lg:text-5xl"

// Large Desktop (1280px+)
className="xl:text-6xl"
```

**Breakpoint Usage Patterns:**
- `md:` - Most common breakpoint, tablet and up
- `lg:` - Desktop-specific layouts (grid columns, asymmetry)
- `xl:` - Fine-tuning for large screens (optional)

**Common Responsive Patterns:**
```tsx
// Grid: 1 col mobile, 2 col tablet, 3 col desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Flex: Stack mobile, row desktop
className="flex flex-col lg:flex-row"

// Text: Scale up on larger screens
className="text-2xl md:text-4xl lg:text-5xl"

// Spacing: Increase padding on larger screens
className="p-8 md:p-10 lg:p-12"
```

### Animation System (Framer Motion)

**Standard Entry Animation:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true, margin: "-100px" }}
>
```

**Staggered Children:**
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item) => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  ))}
</motion.div>
```

**Hover States:**
```tsx
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  transition={{ duration: 0.2 }}
>
```

**Scroll-Linked Parallax:**
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

<motion.img style={{ y }} />
```

**Animation Principles:**
- Duration: 0.6-0.8s for premium feel (not too fast)
- Easing: `easeOut` for natural deceleration
- `viewport={{ once: true }}` - Animate only on first view
- Subtle transforms - never overdone

---

## Component Patterns

### Navigation (Mega Menu)

**Desktop Implementation:**
```tsx
// Hover trigger
<div
  onMouseEnter={() => setIsServicesOpen(true)}
  onMouseLeave={() => setIsServicesOpen(false)}
>
  {/* Mega menu content */}
  <AnimatePresence>
    {isServicesOpen && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute top-full left-1/2 -translate-x-1/2
                   w-[600px] bg-white rounded-2xl shadow-xl
                   border border-gray-100 p-6"
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Service preview cards */}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>
```

**Mobile Implementation:**
```tsx
// Accordion pattern
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="lg:hidden bg-white border-t"
    >
      {/* Mobile menu items */}
    </motion.div>
  )}
</AnimatePresence>
```

**Features:**
- Sticky header: `className="sticky top-0 z-50"`
- Backdrop blur: `className="backdrop-blur-md bg-white/90"`
- Smooth transitions with Framer Motion
- Touch-friendly mobile targets (min 44px)

**Location:** `components/Navbar.tsx`

### Hero Section Pattern

**Structure:**
```tsx
<section className="relative pt-16 pb-24">
  <div className="max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

      {/* Left Column: Content */}
      <motion.div className="space-y-8" initial={{opacity:0, y:30}}>
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-100
                        rounded-full px-4 py-2">
          <span className="text-sm font-medium">🟢 Currently Available</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem]
                       leading-tight text-[#1A1A1A]">
          Your website should be generating{' '}
          <span className="italic font-light text-gray-400">revenue.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          We build conversion-focused websites for Alberta businesses...
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-forest text-white">Primary CTA</button>
          <button className="border border-gray-200">Secondary CTA</button>
        </div>
      </motion.div>

      {/* Right Column: Visual */}
      <motion.div className="relative">
        <img
          src="hero-image.jpg"
          className="rounded-[2rem] md:rounded-[3rem] w-full
                     object-cover aspect-[4/5]"
        />

        {/* Floating Social Proof Card */}
        <motion.div
          className="absolute bottom-8 left-8 bg-white p-6
                     rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-forest">+45%</div>
            <div className="text-sm text-gray-600">Qualified RFPs</div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>
```

**Key Elements:**
1. **Status Badge** - Social proof, availability
2. **Large Headline** - Serif font, huge size (5.5rem desktop)
3. **Italic Contrast** - Key word in light italic
4. **Dual CTAs** - Primary (solid) + Secondary (outline)
5. **Hero Image** - Extreme rounded corners (3rem)
6. **Floating Card** - Animated metric overlay

**Location:** `components/Hero.tsx`

### Bento Grid (Asymmetric Feature Layout)

**Pattern:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* Large Feature - Spans 2 columns */}
  <motion.div className="lg:col-span-2 bg-gray-100 p-8 md:p-10
                         rounded-[2rem] border border-gray-100">
    <div className="space-y-6">
      <div className="text-5xl">📊</div>
      <h3 className="text-2xl md:text-3xl font-heading font-bold">
        Primary Differentiator
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Detailed explanation with specifics...
      </p>
    </div>
  </motion.div>

  {/* Standard Features - 1 column each */}
  <motion.div className="bg-white border border-gray-100 p-8 rounded-[2rem]">
    <div className="text-4xl mb-4">🎯</div>
    <h3 className="text-xl font-heading font-bold mb-3">
      Secondary Feature
    </h3>
    <p className="text-gray-600">
      Brief description...
    </p>
  </motion.div>

  <motion.div className="bg-white border border-gray-100 p-8 rounded-[2rem]">
    {/* Additional features */}
  </motion.div>

</div>
```

**Design Principles:**
- Asymmetry creates visual interest
- Larger cells emphasize key messages
- Consistent rounded corners and shadows
- Hover states with subtle transforms
- Icon-first design for quick scanning

**Location:** `components/Calculators.tsx`, `components/Features.tsx`

### Case Study Cards (Parallax)

**Implementation:**
```tsx
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-[2rem] bg-white
                 border border-gray-100"
      whileHover={{ scale: 1.02 }}
    >
      {/* Parallax Image */}
      <motion.img
        src={project.image}
        style={{ y }}
        className="w-full h-[400px] object-cover grayscale-[30%]"
      />

      {/* Overlay Card */}
      <div className="absolute bottom-8 left-8 right-8 bg-white p-6
                      rounded-xl shadow-lg">
        <h3 className="font-heading text-2xl font-bold mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4">
          {project.metrics.map((metric) => (
            <div>
              <div className="text-2xl font-bold text-forest">
                {metric.value}
              </div>
              <div className="text-xs text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
```

**Effect Breakdown:**
- Scroll-linked parallax creates depth
- Image moves slower than scroll (parallax effect)
- Hover scale provides interactivity
- Floating metrics overlay shows results
- Grayscale maintains brand cohesion

**Location:** `components/CaseStudies.tsx`

### Form Pattern (Lead Capture)

**High-Contrast CTA Form:**
```tsx
<motion.div className="bg-forest text-white p-8 md:p-12
                       rounded-[3rem] relative overflow-hidden">

  {/* Background Pattern (Optional) */}
  <div className="absolute inset-0 opacity-5">
    {/* Subtle texture or pattern */}
  </div>

  <div className="relative z-10">
    {/* Headline */}
    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
      Get Your Free Website Audit
    </h2>
    <p className="text-white/80 mb-8">
      We'll show you exactly what's holding your site back...
    </p>

    {/* Form */}
    <form className="space-y-6">
      {/* Glass-morphism Inputs */}
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-white/10 border border-white/10
                   rounded-xl px-6 py-4 text-white
                   placeholder-white/60
                   focus:outline-none focus:border-white/40
                   focus:bg-white/20 transition-all"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-white/10 border border-white/10
                   rounded-xl px-6 py-4 text-white..."
      />

      <input
        type="url"
        placeholder="Your Website (optional)"
        className="w-full bg-white/10..."
      />

      {/* High-Contrast CTA Button */}
      <button
        type="submit"
        className="w-full bg-white text-[#1A1A1A] font-bold
                   py-5 rounded-xl
                   hover:bg-gray-100 transition-colors
                   flex items-center justify-center gap-2"
      >
        Get My Free Video Audit
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>

    {/* Trust Badge */}
    <p className="text-sm text-white/60 text-center mt-6">
      🔒 Your information is safe. We never spam.
    </p>
  </div>
</motion.div>
```

**UX Features:**
- Glass-morphism inputs (white/10 backgrounds)
- High contrast CTA (white on forest green)
- Optional fields clearly labeled
- Trust-building microcopy
- Icon reinforcement (lock for security)
- Responsive full-width button

**Location:** `components/Audit.tsx`, `components/Contact.tsx`

---

## Technology Stack

### Core Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.0",              // UI library
    "react-dom": "^19.2.0",          // React DOM renderer
    "lucide-react": "^0.554.0",      // Icon library (1000+ icons)
    "framer-motion": "^12.23.24"     // Animation library
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.0", // Vite React plugin
    "typescript": "~5.8.2",           // Type checking
    "vite": "^6.2.0"                  // Build tool & dev server
  }
}
```

### Build System: Vite

**Configuration (`vite.config.ts`):**
```typescript
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',  // Network accessible
    },
    plugins: [react()],
    define: {
      // Inject environment variables
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
```

**Benefits:**
- Lightning-fast HMR (Hot Module Replacement)
- Optimized production builds with code splitting
- Native ESM support
- Out-of-the-box TypeScript support

### Styling: Tailwind CSS (CDN)

**Implementation:**
```html
<!-- index.html -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: { /* custom fonts */ },
        colors: { /* brand colors */ }
      }
    }
  }
</script>
```

**Why CDN Instead of PostCSS:**
- Rapid prototyping and development
- No build step for styles
- Inline configuration
- Trade-off: Slightly larger initial load, but acceptable for this use case

### Icons: Lucide React

**Usage Pattern:**
```tsx
import { ArrowRight, Check, Menu, X, ChevronDown } from 'lucide-react';

<button className="flex items-center gap-2">
  Get Started
  <ArrowRight className="w-5 h-5" />
</button>
```

**Benefits:**
- Tree-shakeable (only imports used icons)
- Consistent design system
- Customizable via className
- 1000+ open-source icons

### TypeScript Configuration

**Key Settings (`tsconfig.json`):**
```json
{
  "compilerOptions": {
    "target": "ES2022",              // Modern JavaScript
    "module": "ESNext",              // ESM modules
    "jsx": "react-jsx",              // New JSX transform
    "moduleResolution": "bundler",   // Vite-optimized resolution
    "paths": {
      "@/*": ["./*"]                 // Path aliases
    },
    "strict": true,                  // Full type safety
    "noEmit": true                   // Type-check only (Vite handles build)
  }
}
```

### ESM Import Maps

**Browser-Native Module Resolution:**
```html
<!-- index.html -->
<script type="importmap">
{
  "imports": {
    "react": "https://aistudiocdn.com/react@^19.2.0",
    "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
    "lucide-react": "https://aistudiocdn.com/lucide-react@^0.554.0",
    "framer-motion": "https://aistudiocdn.com/framer-motion@^12.23.24"
  }
}
</script>
```

**Purpose:** Enables CDN-based dependencies with native browser ESM support

---

## Content Strategy

### Target Audience

**Primary:** B2B service companies in Alberta
- Law firms (trust & credibility)
- Engineering firms (technical capability)
- Manufacturing (industrial B2B)
- Accounting firms (professionalism)
- Consulting firms (thought leadership)

**Characteristics:**
- 10-100 employees
- $1M-$50M revenue
- Need lead generation, not e-commerce
- Value results over "creative" design
- Decision-makers: Partners, Marketing Directors, Operations Managers

### Value Proposition Hierarchy

**Level 1: Core Positioning**
> "We're not artists. We're architects of revenue."

**Level 2: Problem Statement**
> "Tired of websites that are just expensive decorations?"

**Level 3: Solution**
> "We build conversion-focused websites that turn visitors into customers."

**Level 4: Proof**
> "+45% qualified RFPs, 320 leads in Q1, 2.5x faster load times"

**Level 5: Differentiation**
> "Month-to-month contracts. Modern tech stack. You own everything."

### Content Types & Purposes

**1. Hero Content**
- **Purpose:** Immediate positioning, stop the scroll
- **Tone:** Bold, provocative
- **Length:** 1 headline + 2 sentences max
- **Example:** `components/Hero.tsx`

**2. About Content**
- **Purpose:** Build credibility, explain approach
- **Tone:** Confident, transparent
- **Length:** 3-4 short paragraphs
- **Example:** `components/About.tsx`

**3. Service Pages**
- **Purpose:** Educate, address objections
- **Tone:** Educational but not academic
- **Length:** Comprehensive (6-8 sections)
- **Example:** `components/services/ServiceWebDesign.tsx`

**4. Case Studies**
- **Purpose:** Prove results, build trust
- **Tone:** Metric-driven, factual
- **Length:** Image + 3 metrics + brief description
- **Example:** `components/CaseStudies.tsx`

**5. Testimonials**
- **Purpose:** Third-party validation
- **Tone:** Authentic client voice
- **Length:** 2-3 sentences + attribution
- **Example:** `components/Testimonials.tsx`

**6. CTAs**
- **Purpose:** Conversion, lead capture
- **Tone:** Value-first, low friction
- **Length:** 1 headline + 1 sentence + form
- **Example:** `components/Audit.tsx`

### SEO & Metadata Strategy

**Page Titles Pattern:**
```
[Service] for [Industry] in [Location] | Innovista Design Studio

Examples:
- "Web Design for Law Firms in Alberta | Innovista Design Studio"
- "Lead Generation Websites for B2B Companies | Innovista Design Studio"
```

**Meta Descriptions Pattern:**
```
We build [outcome]-focused [service] for [audience] in [location].
[Unique differentiator]. [Social proof metric].

Example:
"We build conversion-focused websites for Alberta B2B companies.
Month-to-month contracts, modern tech stack, you own everything.
Our clients average +45% more qualified leads."
```

**Location:** Would be implemented in `index.html` or via meta tags per route

---

## Development Guidelines

### Component Creation Checklist

When creating a new component, ensure:

**1. TypeScript Typing:**
```tsx
interface ComponentProps {
  onNavigate: (page: PageType) => void;
  className?: string;
}

export const Component: React.FC<ComponentProps> = ({
  onNavigate,
  className = ''
}) => {
  // Implementation
};
```

**2. Responsive Design:**
- Mobile-first base styles
- `md:` breakpoint for tablets (768px+)
- `lg:` breakpoint for desktops (1024px+)
- Test at all breakpoints

**3. Animation:**
- Use `motion.div` for Framer Motion animations
- Standard entry: `initial={{ opacity: 0, y: 20 }}`
- `whileInView` with `viewport={{ once: true }}`
- Stagger children by 0.1-0.2s

**4. Accessibility:**
- Semantic HTML (`<button>` not `<div onClick>`)
- Alt text on all images
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA minimum)

**5. Performance:**
- Lazy load images where possible
- Use `loading="lazy"` attribute
- Optimize image sizes
- Minimize animation complexity

### Styling Conventions

**Class Name Ordering (Recommended):**
```tsx
className="
  // Layout
  relative flex items-center justify-between

  // Sizing
  w-full h-auto max-w-7xl

  // Spacing
  px-8 py-4 gap-4

  // Typography
  text-lg font-heading font-bold

  // Colors
  bg-forest text-white

  // Borders & Shadows
  border border-gray-200 rounded-xl shadow-lg

  // Effects
  hover:bg-forest-dark transition-colors

  // Responsive
  md:text-xl lg:flex-row
"
```

**Reusable Class Patterns:**
```tsx
// Section Container
const sectionClasses = "relative py-24 px-8 max-w-7xl mx-auto";

// Card
const cardClasses = "bg-white border border-gray-100 p-8 rounded-[2rem] shadow-lg";

// Primary Button
const primaryButtonClasses = "bg-forest text-white px-8 py-4 rounded-xl font-bold hover:bg-forest/90 transition-colors";

// Secondary Button
const secondaryButtonClasses = "border border-gray-200 text-[#1A1A1A] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors";
```

### Git Workflow

**Branch Naming:**
```
claude/[feature-description]-[session-id]

Example:
claude/create-brand-documentation-01NxbBpdM2KP1Fa6KuzZ6b2H
```

**Commit Message Convention:**
```
[type]: [Brief description]

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Formatting, missing semi colons, etc.
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance tasks

Examples:
feat: Add parallax scroll effect to case studies
fix: Resolve mobile menu overflow issue
docs: Update component documentation in claude.md
style: Standardize button border radius
```

**Pushing Changes:**
```bash
# Push to feature branch with upstream tracking
git push -u origin claude/[feature-name]-[session-id]

# If network error occurs, retry with exponential backoff:
# Try 1: Wait 2s
# Try 2: Wait 4s
# Try 3: Wait 8s
# Try 4: Wait 16s
```

### Performance Best Practices

**1. Image Optimization:**
- Use WebP format where supported
- Provide multiple sizes for responsive images
- Always include width/height attributes
- Use `loading="lazy"` for below-fold images

**2. Code Splitting:**
- Lazy load non-critical components
- Split service pages into separate chunks
- Use dynamic imports for heavy features

**3. Animation Performance:**
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, or `top/left`
- Use `will-change` sparingly and remove after animation
- Keep frame rate at 60fps

**4. Bundle Size:**
- Tree-shake unused code
- Analyze bundle with Vite's build output
- Consider lazy loading Framer Motion for above-fold content

---

## Key Insights & Strategic Notes

### Design Philosophy

**"Premium Through Simplicity"**
- Limited color palette (3 primary colors)
- Generous whitespace
- Consistent rounded corners
- Subtle animations
- **Result:** Feels sophisticated without being flashy

### Conversion Optimization

**Lead Capture Strategy:**
1. **Hook:** Free website audit (low-commitment offer)
2. **Trust:** "🔒 No spam, your info is safe"
3. **Friction Reduction:** Optional fields clearly marked
4. **Urgency:** "🟢 Currently Available" status badge
5. **Social Proof:** Metrics and testimonials throughout

**CTA Hierarchy:**
- Primary: "Get Free Audit" (forest green, prominent)
- Secondary: "View Our Work" (outlined, subtle)
- Tertiary: "Schedule Call" (text link in footer)

**Placement:**
- Hero: Primary CTA
- After value props: Primary CTA
- After social proof: Primary CTA
- Footer: All CTAs

### Local Market Positioning

**Alberta-Specific Strategy:**
- Mentions Edmonton, Calgary, Red Deer, Lethbridge
- Targets Alberta's core industries (oil & gas services, agriculture, construction, professional services)
- Understands local business culture (conservative, results-focused, skeptical of "marketing fluff")

**Competitive Differentiation:**
- Most local agencies: WordPress + generic themes
- Innovista: Modern tech stack (React, Next.js)
- Most agencies: Long-term contracts
- Innovista: Month-to-month
- Most agencies: "We make pretty things"
- Innovista: "We generate revenue"

### Technical Decisions Rationale

**Why State-Based Routing (Not React Router):**
- Simpler for single-domain marketing site
- No dependency overhead
- Instant transitions
- Easier to understand for future developers

**Why Tailwind CDN (Not PostCSS):**
- Faster initial development
- No build configuration needed
- Inline config for rapid iteration
- Trade-off acceptable for project scale

**Why React 19:**
- Latest features (useOptimistic, useFormStatus)
- Performance improvements
- Future-proofing

**Why Framer Motion:**
- Best-in-class React animation library
- Declarative API
- Scroll-linked animations
- Gesture support

---

## Maintenance & Future Considerations

### When to Update This Document

Update `claude.md` when:
- Brand colors or typography change
- New component patterns emerge
- Architecture decisions are made
- Content strategy evolves
- New pages or sections are added

### Scalability Considerations

**If the site needs to scale:**

1. **Routing:** Consider migrating to React Router or Next.js for:
   - SEO-critical pages
   - Deep linking requirements
   - Better code splitting

2. **CMS Integration:** Consider headless CMS for:
   - Client-managed content
   - Blog functionality
   - Case study management

3. **Backend:** Add API for:
   - Form submissions (currently would need implementation)
   - Lead tracking
   - A/B testing

4. **Analytics:** Implement:
   - Google Analytics 4
   - Hotjar or similar for heat mapping
   - Conversion tracking

### Testing Checklist

**Before deploying changes:**
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on iOS and Android mobile devices
- [ ] Verify all CTAs work
- [ ] Check responsive breakpoints (375px, 768px, 1024px, 1440px)
- [ ] Validate forms submit correctly
- [ ] Check animation performance (60fps)
- [ ] Verify all images load
- [ ] Test navigation on all pages
- [ ] Check accessibility with browser dev tools

---

## Quick Reference

### File Locations for Common Tasks

**Update brand colors:**
- `index.html:21-27` (Tailwind config)

**Modify navigation:**
- `components/Navbar.tsx:55-140`

**Change hero messaging:**
- `components/Hero.tsx:15-45`

**Update service pages:**
- `components/services/ServiceWebDesign.tsx`
- `components/services/ServiceLeadGen.tsx`
- `components/services/ServiceAutomation.tsx`
- `components/services/ServiceSEO.tsx`

**Edit footer links:**
- `components/Footer.tsx:15-85`

**Modify case studies:**
- `components/CaseStudies.tsx:25-60`

**Update testimonials:**
- `components/Testimonials.tsx:20-45`

### Common Code Snippets

**Add a new page:**
```tsx
// 1. Create component file
// components/NewPage.tsx
interface NewPageProps {
  onNavigate: (page: PageType) => void;
}

export const NewPage: React.FC<NewPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative py-24 px-8 max-w-7xl mx-auto">
      {/* Page content */}
    </div>
  );
};

// 2. Update App.tsx type
export type PageType = 'home' | 'about' | /* ... */ | 'new-page';

// 3. Add route in App.tsx
{currentPage === 'new-page' && <NewPage onNavigate={handleNavigate} />}

// 4. Add navigation link in Navbar.tsx
<button onClick={() => onNavigate('new-page')}>
  New Page
</button>
```

**Add a new section to existing page:**
```tsx
// Create section component
export const NewSection: React.FC = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section content */}
        </motion.div>
      </div>
    </section>
  );
};

// Import in page file
import { NewSection } from './NewSection';

// Add to page composition
<>
  <Hero />
  <NewSection />  {/* Added */}
  <Features />
</>
```

---

## Conclusion

Innovista Design Studio is a conversion-focused marketing platform built with modern web technologies and designed for B2B lead generation. The brand positioning is clear and differentiated: results over aesthetics, transparency over tricks, modern technology over legacy solutions.

The codebase is well-structured, consistent, and maintainable. The design system is cohesive, with clear patterns for components, animations, and responsive behavior. The content strategy is sharp, direct, and speaks to a specific audience with specific pain points.

This documentation serves as the single source of truth for understanding the platform's brand identity, technical architecture, and strategic positioning.

---

**Document Version:** 1.0
**Last Updated:** 2025-11-20
**Maintained By:** Claude (Anthropic AI)
**Project:** Innovista Design Studio
**Repository:** IAMAdrianKash/Innovista-Design-Studio
**Branch:** claude/create-brand-documentation-01NxbBpdM2KP1Fa6KuzZ6b2H
