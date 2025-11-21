# Plain Text Content - Innovista Design Studio

This folder contains plain text versions of all website pages, structured for easy editing and AI-powered content refinement.

## Purpose

These files are designed to be fed into AI tools for:
- Copy editing and refinement
- Tone and voice consistency checks
- Character limit optimization
- A/B testing variations
- Multi-language translation prep
- Content strategy analysis

## Folder Structure

```
plain-text-content/
├── README.md                           # This file
├── home.txt                            # Homepage (/)
├── about.txt                           # About Us page (/about)
├── services.txt                        # Services overview (/services)
├── services-web-design.txt             # Web Design service (/services/web-design)
├── services-seo.txt                    # SEO service (/services/seo)
├── services-lead-generation.txt        # Lead Gen service (/services/lead-generation)
├── services-automation.txt             # Automation service (/services/automation)
├── pricing.txt                         # Pricing page (/pricing)
├── faq.txt                             # FAQ page (/faq)
├── careers.txt                         # Careers page (/careers)
├── capabilities.txt                    # Tech stack page (/capabilities)
├── audit.txt                           # Free audit page (/audit)
└── reusable-sections.txt               # Shared components across pages
```

## File Format

Each file follows this consistent structure:

```
====================================
PAGE: [PAGE NAME]
====================================
URL: [page path]
META TITLE: [SEO title] (XX chars)
META DESCRIPTION: [SEO description] (XXX chars)

====================================
STRUCTURE
====================================
[Hierarchical outline of page sections]

====================================
CONTENT BY SECTION
====================================
[Organized text content with labels and notes]

====================================
NOTES & CHARACTER LIMITS
====================================
[Guidelines for character counts and best practices]
```

## Character Limit Guidelines

### Meta Tags
- **Page Title**: 50-60 characters
- **Meta Description**: 150-160 characters

### Headlines
- **H1 (Main Headline)**: 40-60 characters
- **H2 (Section Headlines)**: 50-80 characters
- **H3 (Sub-headlines)**: 30-50 characters

### Body Copy
- **Hero Subheadline**: 120-180 characters
- **Feature Descriptions**: 100-130 characters
- **Value Proposition Text**: 100-160 characters
- **Testimonial Quotes**: 80-120 characters
- **CTA Buttons**: 3-5 words (20-40 characters)

### Form Elements
- **Form Labels**: 2-6 words (ALL CAPS)
- **Placeholders**: 2-5 words (lowercase, realistic examples)
- **Helper Text**: Under 70 characters

## Content Editing Best Practices

### Voice & Tone
- **Direct and Honest**: No fluff, no corporate jargon
- **Results-Oriented**: Focus on outcomes, not features
- **Locally Grounded**: Alberta/Edmonton context matters
- **No-Nonsense**: Challenge conventions, be opinionated

### Writing Style
- Use short, punchy sentences
- Active voice over passive
- Concrete numbers over vague claims
- "You" language (second person)
- Contractions are fine (We're, don't, can't)

### Words to AVOID
- "Innovative" (overused)
- "Cutting-edge" (cliché)
- "Solutions" (too vague)
- "Leverage" (jargon)
- "Synergy" (corporate speak)

### Words to EMBRACE
- "Revenue"
- "Conversions"
- "Fast"
- "Results"
- "Transparent"
- "No-nonsense"

## Using These Files with AI

### For Copy Refinement
```
Prompt Template:
"Here's the current copy for [PAGE NAME]. Please refine it to be more [ADJECTIVE],
while maintaining the character limits specified. Keep the core message but make
it more compelling."

[Paste content from .txt file]
```

### For A/B Testing Variants
```
Prompt Template:
"Generate 3 alternative versions of this [SECTION] that:
1. Test different emotional triggers
2. Stay within [XX] character limit
3. Maintain the same CTA

Current version:
[Paste section]
```

### For Consistency Checks
```
Prompt Template:
"Review these 3 sections from different pages and ensure voice, tone, and
messaging are consistent. Flag any discrepancies.

Section 1: [paste]
Section 2: [paste]
Section 3: [paste]
```

## Key Pages Explained

### home.txt
- **Purpose**: Primary landing page
- **Goals**: Communicate value prop, capture leads, drive to audit
- **Critical Elements**: Hero headline, CTA buttons, social proof

### services-*.txt
- **Purpose**: Detail individual service offerings
- **Goals**: Educate, differentiate, drive to contact
- **Critical Elements**: Feature grids, methodology, inclusions checklist

### pricing.txt
- **Purpose**: Transparent pricing tiers
- **Goals**: Qualify leads, overcome price objections
- **Critical Elements**: Tier cards, inclusions, CTAs

### audit.txt
- **Purpose**: Lead magnet / conversion funnel entry
- **Goals**: Capture email, demonstrate value, build trust
- **Critical Elements**: Form fields, benefit statements, social proof

### reusable-sections.txt
- **Purpose**: Shared components used across multiple pages
- **Note**: Any changes here should be reflected everywhere used

## Updating the Website

**IMPORTANT**: These files are NOT connected to the frontend codebase.

After refining content with AI:
1. Copy the updated text
2. Find the corresponding component file in `/components/`
3. Update the text in the React/TypeScript component
4. Test locally
5. Commit and deploy

## Version Control

When making significant content changes:
1. Create a new branch: `content-update-[date]`
2. Update both plain text files AND component files
3. Document changes in commit message
4. Create PR for review

## SEO Considerations

- **Meta titles** should include primary keyword + brand
- **Meta descriptions** should have a call-to-action
- **H1 tags** should be unique per page
- **Alt text** for images should be descriptive
- **Internal links** should use descriptive anchor text

## Analytics Tracking

Key conversion points to track:
- Audit form submissions (/audit)
- Contact form submissions (/contact)
- Service page CTAs
- Pricing tier selections
- Phone number clicks

## Contact

For questions about this content structure:
- **Email**: hello@innovista.design
- **Repository**: github.com/IAMAdrianKash/Innovista-Design-Studio

---

**Last Updated**: 2025-11-21
**Maintained By**: Development Team
