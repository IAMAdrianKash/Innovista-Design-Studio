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

export function urlFor(source: any) {
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
      industry,
      services,
      featuredImage,
      results
    }`,
    { limit }
  );
}
