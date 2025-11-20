import { Metadata } from 'next'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'FAQ | Innovista Design Studio',
  description: 'Frequently asked questions about our web design services, process, pricing, and more.',
  alternates: {
    canonical: '/faq',
  },
}

export default function FAQPage() {
  return <FAQ />
}
