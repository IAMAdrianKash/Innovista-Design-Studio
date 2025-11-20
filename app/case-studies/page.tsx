import { Metadata } from 'next'
import CaseStudies from '@/components/CaseStudies'

export const metadata: Metadata = {
  title: 'Case Studies | Innovista Design Studio',
  description: 'View our portfolio of successful web design and digital marketing projects for professional services businesses.',
  alternates: {
    canonical: '/case-studies',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}
