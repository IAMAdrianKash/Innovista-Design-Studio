import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
// Replace these with your actual project details from sanity.io/manage
export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true, // Use CDN for faster response (set to false for fresh data)
  apiVersion: '2025-01-01', // Use current date for latest API features
});

// Image URL builder for optimized images
const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
  return builder.image(source);
}

// TypeScript interfaces for content types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: SanityImage;
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
  featuredImage: SanityImage;
  content: any[]; // Portable Text
  estimatedReadTime?: number;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
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
  featuredImage: SanityImage;
  gallery?: SanityImage[];
  challenge: string;
  solution: string;
  results: Metric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
}

export interface PortfolioItem {
  _type: 'portfolioImage' | 'portfolioVideo';
  _key: string;
  image?: SanityImage;
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
  image: SanityImage;
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
  description?: any[];
  responsibilities?: string[];
  requirements?: string[];
  niceToHave?: string[];
  benefits?: string[];
  salary?: string;
  applicationUrl?: string;
  isActive: boolean;
  order: number;
  publishedAt?: string;
}

// Helper functions for fetching content
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      author->{
        _id,
        name,
        slug,
        image,
        bio
      },
      publishedAt,
      categories[]->{
        _id,
        title,
        slug,
        description
      },
      featuredImage,
      content,
      estimatedReadTime,
      seo
    }`
  );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      author->{
        _id,
        name,
        slug,
        image,
        bio
      },
      publishedAt,
      categories[]->{
        _id,
        title,
        slug,
        description
      },
      featuredImage,
      content,
      estimatedReadTime,
      seo
    }`,
    { slug }
  );
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy"] | order(projectDate desc) {
      _id,
      _createdAt,
      _updatedAt,
      client,
      title,
      slug,
      excerpt,
      categories[]->{
        _id,
        title,
        slug,
        description
      },
      industry,
      services,
      projectDate,
      featured,
      featuredImage,
      results,
      seo
    }`
  );
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      client,
      title,
      slug,
      excerpt,
      categories[]->{
        _id,
        title,
        slug,
        description
      },
      industry,
      services,
      projectDate,
      featured,
      featuredImage,
      gallery,
      challenge,
      solution,
      results,
      testimonial,
      seo
    }`,
    { slug }
  );
}

export async function getFeaturedCaseStudies(limit: number = 3): Promise<CaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && featured == true] | order(projectDate desc) [0...$limit] {
      _id,
      client,
      title,
      slug,
      excerpt,
      categories[]->{
        _id,
        title,
        slug,
        description
      },
      industry,
      services,
      featuredImage,
      results
    }`,
    { limit }
  );
}

export async function getRelatedBlogPosts(currentPostId: string, categories: string[], limit: number = 3): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post" && _id != $currentPostId && count((categories[]->_id)[@ in $categories]) > 0] | order(publishedAt desc) [0...$limit] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      author->{
        _id,
        name,
        slug,
        image,
        bio
      },
      publishedAt,
      categories[]->{
        _id,
        title,
        slug,
        description
      },
      featuredImage,
      estimatedReadTime
    }`,
    { currentPostId, categories, limit }
  );
}

// Partner Directory Functions
export async function getAllPartners(): Promise<Partner[]> {
  return sanityClient.fetch(
    `*[_type == "partner"] | order(featured desc, order asc) {
      _id,
      name,
      slug,
      tagline,
      description,
      category,
      image,
      verified,
      featured,
      website,
      location,
      specialties,
      order
    }`
  );
}

export async function getPartnersByCategory(category: string): Promise<Partner[]> {
  return sanityClient.fetch(
    `*[_type == "partner" && category == $category] | order(featured desc, order asc) {
      _id,
      name,
      slug,
      tagline,
      description,
      category,
      image,
      verified,
      featured,
      website,
      location,
      specialties,
      order
    }`,
    { category }
  );
}

export async function getPartnerBySlug(slug: string): Promise<Partner | null> {
  return sanityClient.fetch(
    `*[_type == "partner" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      tagline,
      description,
      category,
      image,
      verified,
      featured,
      website,
      location,
      specialties,
      contactEmail,
      portfolio[] {
        _type,
        _key,
        image,
        videoUrl,
        caption
      },
      order
    }`,
    { slug }
  );
}

// Category Functions
export async function getAllCategories(): Promise<Category[]> {
  return sanityClient.fetch(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }`
  );
}

// Job Posting Functions
export async function getAllActiveJobs(): Promise<Job[]> {
  return sanityClient.fetch(
    `*[_type == "job" && isActive == true] | order(order asc, publishedAt desc) {
      _id,
      title,
      slug,
      department,
      employmentType,
      location,
      isActive,
      order,
      publishedAt
    }`
  );
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  return sanityClient.fetch(
    `*[_type == "job" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      department,
      employmentType,
      location,
      description,
      responsibilities,
      requirements,
      niceToHave,
      benefits,
      salary,
      applicationUrl,
      isActive,
      order,
      publishedAt
    }`,
    { slug }
  );
}
