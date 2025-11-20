import { Metadata } from 'next'
import TermsOfService from '@/components/legal/TermsOfService'

export const metadata: Metadata = {
  title: 'Terms of Service | Innovista Design Studio',
  description: 'Read our terms of service to understand the terms and conditions for using our website and services.',
  alternates: {
    canonical: '/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return <TermsOfService />
}
