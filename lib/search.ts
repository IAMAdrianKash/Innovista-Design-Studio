/**
 * Helper functions for search functionality
 * Fetches searchable content from Sanity CMS
 */

import { sanityClient } from './sanity';

export interface SearchResult {
  title: string;
  type: 'Insight' | 'Work' | 'Service' | 'Company' | 'Offer';
  path: string;
  desc: string;
}

/**
 * Fetch all searchable content from Sanity for search index
 */
export async function getSearchableContent(): Promise<SearchResult[]> {
  try {
    // Fetch blog posts and case studies from Sanity
    const [blogPosts, caseStudies] = await Promise.all([
      sanityClient.fetch(`
        *[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt
        }
      `),
      sanityClient.fetch(`
        *[_type == "caseStudy"] | order(projectDate desc) {
          _id,
          client,
          title,
          slug,
          excerpt
        }
      `)
    ]);

    // Map blog posts to search results
    const blogResults: SearchResult[] = blogPosts.map((post: any) => ({
      title: post.title,
      type: 'Insight' as const,
      path: `/insights/${post.slug.current}`,
      desc: post.excerpt || ''
    }));

    // Map case studies to search results
    const caseStudyResults: SearchResult[] = caseStudies.map((study: any) => ({
      title: study.client,
      type: 'Work' as const,
      path: `/case-studies/${study.slug.current}`,
      desc: study.title || study.excerpt || ''
    }));

    return [...blogResults, ...caseStudyResults];
  } catch (error) {
    console.error('Error fetching searchable content:', error);
    return [];
  }
}
