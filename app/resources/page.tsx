import { Metadata } from 'next'
import Resources from '@/components/Resources'

export const metadata: Metadata = {
  title: 'Free Tools & Resources | Innovista Design Studio',
  description: 'Access professional-grade tools to optimize your website. SEO analyzer, font picker, color palette generator, and more. All free, no registration required.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Free Tools & Resources | Innovista Design Studio',
    description: 'Access professional-grade tools to optimize your website. SEO analyzer, font picker, color palette generator, and more.',
    url: '/resources',
  },
}

export default function ResourcesPage() {
  return <Resources />
}
