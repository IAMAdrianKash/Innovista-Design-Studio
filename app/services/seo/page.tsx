import { Metadata } from 'next'
import ServiceSEO from '@/components/services/ServiceSEO'

export const metadata: Metadata = {
  title: 'SEO Services Edmonton | Innovista Design Studio',
  description: 'Technical SEO audits, local search optimization, and ranking strategies for professional services businesses in Alberta.',
  alternates: {
    canonical: '/services/seo',
  },
}

export default function SEOPage() {
  return <ServiceSEO />
}
