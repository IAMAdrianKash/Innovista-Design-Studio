import { Metadata } from 'next'
import Audit from '@/components/Audit'

export const metadata: Metadata = {
  title: 'Free Website Audit | Innovista Design Studio',
  description: 'Request a free video analysis of your website. Get actionable insights on design, conversion optimization, and SEO.',
  alternates: {
    canonical: '/audit',
  },
}

export default function AuditPage() {
  return <Audit />
}
