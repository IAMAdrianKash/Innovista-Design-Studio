import { Metadata } from 'next'
import ServiceWebDesign from '@/components/services/ServiceWebDesign'

export const metadata: Metadata = {
  title: 'Web Design Services Edmonton | Innovista Design Studio',
  description: 'Custom React & Next.js website design and development services. We build high-performing, conversion-focused websites for professional services.',
  alternates: {
    canonical: '/services/web-design',
  },
}

export default function WebDesignPage() {
  return <ServiceWebDesign />
}
