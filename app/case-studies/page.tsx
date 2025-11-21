import { Metadata } from 'next'
import CaseStudies from '@/components/CaseStudies'
import { getAllCaseStudies } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Case Studies | Innovista Design Studio',
  description: 'View our portfolio of successful web design and digital marketing projects for professional services businesses.',
  alternates: {
    canonical: '/case-studies',
  },
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies()

  return <CaseStudies caseStudies={caseStudies} />
}
