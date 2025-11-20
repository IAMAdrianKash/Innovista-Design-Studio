
import React from 'react';

// --- INSIGHTS (BLOG) DATA ---
export const insightsData = [
  {
    id: "strategy-pretty-website",
    category: "Strategy",
    title: "Why your 'pretty' website isn't selling anything",
    excerpt: "A deep dive into the difference between aesthetic design and conversion design. Stop paying for digital art and start building sales assets.",
    author: "Alex Morgan",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    content: `
      <h3 class="text-2xl font-bold mb-4">The Aesthetic Trap</h3>
      <p class="mb-6">Most business owners confuse "good design" with "art." They want a website that wins awards, looks distinct, and impresses their peers. While aesthetics matter for brand perception, they rarely drive revenue on their own.</p>
      
      <h3 class="text-2xl font-bold mb-4">Conversion Design vs. Graphic Design</h3>
      <p class="mb-6">Graphic design is about communication and emotion. Conversion design is about psychology and action. A high-converting site needs:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Clear visual hierarchy that guides the eye.</li>
        <li>Copy that addresses objections before they arise.</li>
        <li>Frictionless forms that respect the user's time.</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4">The Fix</h3>
      <p>Stop asking "do I like how this looks?" and start asking "does this help the user take the next step?" If an element doesn't serve a conversion goal, remove it.</p>
    `
  },
  {
    id: "seo-generic-content",
    category: "SEO",
    title: "The death of generic content: How to rank in 2024",
    excerpt: "Google's latest updates are punishing AI-generated fluff. Here's how to write authoritative content that actually ranks in local search.",
    author: "Sarah Chen",
    date: "Sep 28, 2023",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2340&auto=format&fit=crop",
    content: `
      <p class="mb-6">The era of 500-word generic blog posts is over. Google's "Helpful Content Update" has made it clear: if you aren't adding new value, you won't rank.</p>
      <h3 class="text-2xl font-bold mb-4">E-E-A-T Matters</h3>
      <p class="mb-6">Experience, Expertise, Authoritativeness, and Trustworthiness. Your content needs to demonstrate that you actually do the work you're writing about.</p>
    `
  },
  {
    id: "automation-crm",
    category: "Automation",
    title: "5 CRM workflows every service business needs",
    excerpt: "Stop manually following up with leads. We break down the exact Zapier workflows we use to save 10+ hours a week.",
    author: "Mike Ross",
    date: "Sep 15, 2023",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop",
    content: `
      <p class="mb-6">If you are manually copying data from your contact form into your CRM, you are wasting time and risking data loss. Automation is the backbone of a scalable agency.</p>
      <h3 class="text-2xl font-bold mb-4">The "Speed to Lead" Workflow</h3>
      <p class="mb-6">When a form is submitted, three things should happen instantly: 1. The lead gets a "Received" email. 2. Your sales team gets a Slack notification. 3. A deal is created in Pipedrive/HubSpot.</p>
    `
  },
  {
    id: "case-study-apex",
    category: "Case Study",
    title: "Doubling RFPs for an engineering firm in 90 days",
    excerpt: "A behind-the-scenes look at the redesign and positioning strategy that helped Apex Engineering dominate their market.",
    author: "Alex Morgan",
    date: "Aug 30, 2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2340&auto=format&fit=crop",
    content: "<p>Full case study breakdown coming soon.</p>"
  },
  {
    id: "ux-mobile-first",
    category: "UX Design",
    title: "Mobile-first isn't just a buzzword",
    excerpt: "60% of your B2B traffic is on a phone. If your site is just a squished desktop version, you are losing money. Here is how to fix it.",
    author: "Jessica Lee",
    date: "Aug 12, 2023",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop",
    content: "<p>Details on mobile optimization strategies.</p>"
  },
  {
    id: "business-fire-agency",
    category: "Business",
    title: "When to fire your web agency",
    excerpt: "Red flags that indicate your current agency is taking you for a ride. If they charge for 'maintenance' but do nothing, read this.",
    author: "Alex Morgan",
    date: "Jul 22, 2023",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2340&auto=format&fit=crop",
    content: "<p>How to audit your agency deliverables.</p>"
  }
];

// --- CASE STUDIES DATA ---
export const projectsData = [
  {
    id: "apex-engineering",
    client: "Guru Kitchen + Bar",
    title: "Restructuring a technical giant for digital clarity",
    image: "https://picsum.photos/seed/architect/1200/800",
    tags: ["Web Design", "Strategy"],
    stat: "+45%",
    statDesc: "Increase in qualified RFPs",
    challenge: "Apex had a 10-year-old site that didn't reflect their modern capabilities. Navigation was cluttered, and mobile experience was non-existent.",
    solution: "We rebuilt the information architecture from the ground up, creating dedicated service silos and a dynamic project portfolio.",
    result: "Bounce rate dropped by 40%, and the quality of inbound leads increased significantly, leading to a 45% increase in RFP submissions."
  },
  {
    id: "summit-legal",
    client: "Summit Legal Group",
    title: "Modernizing a 40-year-old firm without losing heritage",
    image: "https://picsum.photos/seed/lawyer/1200/800",
    tags: ["Rebranding", "Web Design"],
    stat: "2.5x",
    statDesc: "Faster load time",
    challenge: "Summit needed to appeal to a younger demographic of tech entrepreneurs without alienating their traditional corporate client base.",
    solution: "We utilized a sophisticated serif typography pairing with a modern, minimal layout to bridge the gap between heritage and innovation.",
    result: "The firm successfully launched a new 'Startups' practice area that generated $200k in new revenue in Q1."
  },
  {
    id: "northfield-industrial",
    client: "NorthField Industrial",
    title: "From paper brochures to a lead-generating machine",
    image: "https://picsum.photos/seed/industrial/1200/800",
    tags: ["Lead Gen", "Automation"],
    stat: "320",
    statDesc: "Leads generated in Q1",
    challenge: "NorthField relied entirely on trade shows. They had zero digital footprint and no way to nurture leads automatically.",
    solution: "We built a high-performance lead capture site and integrated it with HubSpot. We created a 'Equipment ROI Calculator' as a lead magnet.",
    result: "They now generate consistent leads daily, reducing their reliance on expensive trade show booths."
  },
  {
    id: "vantage-capital",
    client: "Vantage Capital",
    title: "Building trust through transparent financial design",
    image: "https://picsum.photos/seed/finance/1200/800",
    tags: ["Web Design", "SEO"],
    stat: "#1",
    statDesc: "Rank for local keywords",
    challenge: "Vantage was invisible in local search results. Competitors with inferior services were outranking them for 'Edmonton Wealth Management'.",
    solution: "A complete technical SEO overhaul, local schema implementation, and a content strategy focused on local financial questions.",
    result: "Vantage now ranks #1 for their primary keywords and has seen a 300% increase in organic traffic."
  }
];
