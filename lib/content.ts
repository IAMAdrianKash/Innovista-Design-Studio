export interface ContentImage {
  url: string;
  alt?: string;
  caption?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: ContentImage;
  bio?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface BlogPost {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  author: Author;
  publishedAt: string;
  categories: Category[];
  featuredImage?: ContentImage;
  content: any[];
  estimatedReadTime?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: ContentImage;
  };
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  client: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  categories: Category[];
  industry: string;
  services: string[];
  projectDate: string;
  featured: boolean;
  featuredImage: ContentImage;
  gallery?: ContentImage[];
  challenge: string;
  solution: string;
  results: Metric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: ContentImage;
  };
}

export interface PortfolioItem {
  _type: 'portfolioImage' | 'portfolioVideo';
  _key: string;
  image?: ContentImage;
  videoUrl?: string;
  caption?: string;
}

export interface Partner {
  _id: string;
  name: string;
  slug: { current: string };
  tagline: string;
  description: string;
  category: string;
  image: ContentImage;
  verified: boolean;
  featured: boolean;
  website?: string;
  location?: string;
  specialties?: string[];
  contactEmail?: string;
  portfolio?: PortfolioItem[];
  order: number;
}

export interface Job {
  _id: string;
  title: string;
  slug: { current: string };
  department: string;
  employmentType: string;
  location: string;
  applicationUrl?: string;
  isActive: boolean;
  order: number;
  publishedAt?: string;
}

const categories: Category[] = [
  { _id: 'cat-strategy', title: 'Strategy', slug: { current: 'strategy' } },
  { _id: 'cat-seo', title: 'SEO', slug: { current: 'seo' } },
  { _id: 'cat-automation', title: 'Automation', slug: { current: 'automation' } },
];

const author: Author = {
  _id: 'author-1',
  name: 'Innovista Team',
  slug: { current: 'innovista-team' },
  bio: 'Digital strategy and growth specialists.',
};

const makeBlocks = (text: string) => [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text }] }];

const blogPosts: BlogPost[] = [
  {
    _id: 'post-1',
    _createdAt: '2025-01-02',
    _updatedAt: '2025-01-02',
    title: 'Why conversion-focused web design wins in B2B',
    slug: { current: 'conversion-focused-web-design-b2b' },
    excerpt: 'A practical breakdown of how service businesses can turn more visitors into qualified opportunities.',
    author,
    publishedAt: '2025-01-02',
    categories: [categories[0]],
    featuredImage: { url: '/images/about-bridges.png', alt: 'Conversion strategy' },
    content: makeBlocks('Design should guide users to act. This article explains the foundations of conversion-focused UX.'),
    estimatedReadTime: 6,
  },
  {
    _id: 'post-2',
    _createdAt: '2025-01-10',
    _updatedAt: '2025-01-10',
    title: 'Local SEO playbook for professional services',
    slug: { current: 'local-seo-playbook-professional-services' },
    excerpt: 'How to structure your service pages and local signals to improve high-intent rankings.',
    author,
    publishedAt: '2025-01-10',
    categories: [categories[1]],
    featuredImage: { url: '/images/client2.png', alt: 'SEO insights' },
    content: makeBlocks('Local SEO starts with clear service pages, location relevance, and trustworthy proof.'),
    estimatedReadTime: 5,
  },
  {
    _id: 'post-3',
    _createdAt: '2025-01-14',
    _updatedAt: '2025-01-14',
    title: 'Automation workflows that reduce lead-response time',
    slug: { current: 'automation-workflows-reduce-lead-response-time' },
    excerpt: 'Simple automations that help teams respond faster and close more opportunities.',
    author,
    publishedAt: '2025-01-14',
    categories: [categories[2]],
    featuredImage: { url: '/images/clients/evario.png', alt: 'Automation' },
    content: makeBlocks('Automation can route leads, notify your team, and trigger follow-up sequences instantly.'),
    estimatedReadTime: 4,
  },
];

const caseStudies: CaseStudy[] = [
  {
    _id: 'cs-1',
    _createdAt: '2025-01-01',
    _updatedAt: '2025-01-01',
    client: 'Guru Kitchen + Bar',
    title: 'Restructuring a brand site for clearer conversion paths',
    slug: { current: 'guru-kitchen-bar-conversion-redesign' },
    excerpt: 'We simplified navigation and conversion points to increase qualified inquiries.',
    categories: [categories[0]],
    industry: 'hospitality',
    services: ['web-design', 'seo'],
    projectDate: '2025-01-01',
    featured: true,
    featuredImage: { url: '/images/clients/guru.png', alt: 'Guru Kitchen + Bar' },
    challenge: 'The site looked polished but key actions were buried and hard to find.',
    solution: 'We rebuilt page hierarchy and tightened messaging to make next steps obvious.',
    results: [{ value: '+38%', label: 'qualified leads' }],
  },
  {
    _id: 'cs-2',
    _createdAt: '2025-01-08',
    _updatedAt: '2025-01-08',
    client: 'Automate Alberta',
    title: 'Service-positioning refresh for growth-stage demand gen',
    slug: { current: 'automate-alberta-demand-gen-refresh' },
    excerpt: 'A content and UX refresh that aligned offer clarity with buyer intent.',
    categories: [categories[2]],
    industry: 'technology',
    services: ['lead-generation', 'automation'],
    projectDate: '2025-01-08',
    featured: true,
    featuredImage: { url: '/images/clients/automatealberta.svg', alt: 'Automate Alberta' },
    challenge: 'Traffic was healthy, but lead quality and conversion were inconsistent.',
    solution: 'We clarified service framing and streamlined the inquiry flow.',
    results: [{ value: '+27%', label: 'conversion rate' }],
  },
];

const partners: Partner[] = [
  {
    _id: 'partner-1',
    name: 'AlbertauGC',
    slug: { current: 'albertaugc' },
    tagline: 'Authentic UGC production for growth brands.',
    description: 'UGC partner focused on short-form creative for paid social and lifecycle campaigns.',
    category: 'growth-marketing',
    image: { url: '/images/clients/albertaugc.svg', alt: 'AlbertauGC' },
    verified: true,
    featured: true,
    website: 'https://innovista.design',
    location: 'Edmonton, AB',
    specialties: ['UGC', 'Creative Strategy'],
    contactEmail: 'hello@innovista.design',
    order: 1,
  },
];

const jobs: Job[] = [
  {
    _id: 'job-1',
    title: 'Senior Web Designer (Contract)',
    slug: { current: 'senior-web-designer-contract' },
    department: 'Design',
    employmentType: 'Contract',
    location: 'Remote (Canada)',
    applicationUrl: 'mailto:hello@innovista.design?subject=Senior%20Web%20Designer%20Application',
    isActive: true,
    order: 1,
    publishedAt: '2025-01-12',
  },
];

function sortByDateDesc<T extends { publishedAt?: string; projectDate?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => new Date((b.publishedAt || b.projectDate) ?? 0).getTime() - new Date((a.publishedAt || a.projectDate) ?? 0).getTime());
}

export function urlForImage(source: any) {
  const url = typeof source === 'string' ? source : source?.url;
  return {
    width: (_?: number) => ({
      height: (_?: number) => ({
        url: () => url || '/images/brand/logo.svg',
      }),
      url: () => url || '/images/brand/logo.svg',
    }),
    height: (_?: number) => ({
      width: (_?: number) => ({
        url: () => url || '/images/brand/logo.svg',
      }),
      url: () => url || '/images/brand/logo.svg',
    }),
    url: () => url || '/images/brand/logo.svg',
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> { return sortByDateDesc(blogPosts); }
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> { return blogPosts.find(p => p.slug.current === slug) || null; }
export async function getAllCaseStudies(): Promise<CaseStudy[]> { return sortByDateDesc(caseStudies); }
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> { return caseStudies.find(c => c.slug.current === slug) || null; }
export async function getFeaturedCaseStudies(limit: number = 3): Promise<CaseStudy[]> { return caseStudies.filter(c => c.featured).slice(0, limit); }
export async function getRelatedBlogPosts(currentPostId: string, categoryIds: string[], limit: number = 3): Promise<BlogPost[]> {
  return blogPosts.filter((p) => p._id !== currentPostId && p.categories.some((c) => categoryIds.includes(c._id))).slice(0, limit);
}
export async function getAllPartners(): Promise<Partner[]> { return [...partners].sort((a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order); }
export async function getPartnersByCategory(category: string): Promise<Partner[]> { return (await getAllPartners()).filter((p) => p.category === category); }
export async function getPartnerBySlug(slug: string): Promise<Partner | null> { return partners.find((p) => p.slug.current === slug) || null; }
export async function getAllCategories(): Promise<Category[]> { return categories; }
export async function getAllActiveJobs(): Promise<Job[]> { return jobs.filter((j) => j.isActive).sort((a, b) => a.order - b.order); }
export async function getJobBySlug(slug: string): Promise<Job | null> { return jobs.find((j) => j.slug.current === slug) || null; }
