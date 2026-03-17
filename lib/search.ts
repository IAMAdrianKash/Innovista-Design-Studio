/**
 * Helper functions for search functionality
 * Fetches searchable content from local content source
 */

import { getAllBlogPosts, getAllCaseStudies } from './content';

export interface SearchResult {
  title: string;
  type: 'Insight' | 'Work' | 'Service' | 'Company' | 'Offer';
  path: string;
  desc: string;
}

export async function getSearchableContent(): Promise<SearchResult[]> {
  try {
    const [blogPosts, caseStudies] = await Promise.all([
      getAllBlogPosts(),
      getAllCaseStudies(),
    ]);

    const blogResults: SearchResult[] = blogPosts.map((post) => ({
      title: post.title,
      type: 'Insight',
      path: `/insights/${post.slug.current}`,
      desc: post.excerpt || '',
    }));

    const caseStudyResults: SearchResult[] = caseStudies.map((study) => ({
      title: study.client,
      type: 'Work',
      path: `/case-studies/${study.slug.current}`,
      desc: study.title || study.excerpt || '',
    }));

    return [...blogResults, ...caseStudyResults];
  } catch (error) {
    console.error('Error fetching searchable content:', error);
    return [];
  }
}
