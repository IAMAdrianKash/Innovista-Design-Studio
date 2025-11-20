import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/sanity'
import CaseStudyDetail from '@/components/CaseStudyDetail'

// Generate static paths for all case studies at build time
export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies()

  return caseStudies.map((study) => ({
    slug: study.slug.current,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Innovista Design Studio',
    }
  }

  const metaTitle = caseStudy.seo?.metaTitle || `${caseStudy.client}: ${caseStudy.title} | Innovista Design Studio`
  const metaDescription = caseStudy.seo?.metaDescription || caseStudy.excerpt

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
    },
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyDetail />
}
