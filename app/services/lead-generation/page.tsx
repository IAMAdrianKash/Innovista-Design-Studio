import { Metadata } from 'next'
import ServiceLeadGen from '@/components/services/ServiceLeadGen'

export const metadata: Metadata = {
  title: 'Lead Generation Services | Innovista Design Studio',
  description: 'CRO and funnel optimization strategies that turn website visitors into qualified leads for your professional services business.',
  alternates: {
    canonical: '/services/lead-generation',
  },
}

export default function LeadGenerationPage() {
  return <ServiceLeadGen />
}
