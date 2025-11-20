import { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Our Services | Innovista Design Studio',
  description: 'Web design, lead generation, SEO, and automation services for professional service businesses in Edmonton and across Alberta.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return <Services />
}
