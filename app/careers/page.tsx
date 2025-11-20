import { Metadata } from 'next'
import Careers from '@/components/Careers'

export const metadata: Metadata = {
  title: 'Careers | Innovista Design Studio',
  description: 'Join the Innovista team. Explore career opportunities in web design, development, and digital marketing.',
  alternates: {
    canonical: '/careers',
  },
}

export default function CareersPage() {
  return <Careers />
}
