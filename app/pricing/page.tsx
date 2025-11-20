import { Metadata } from 'next'
import Pricing from '@/components/Pricing'

export const metadata: Metadata = {
  title: 'Pricing | Innovista Design Studio',
  description: 'Transparent pricing for web design, development, and digital marketing services. View our engagement models and project fees.',
  alternates: {
    canonical: '/pricing',
  },
}

export default function PricingPage() {
  return <Pricing />
}
