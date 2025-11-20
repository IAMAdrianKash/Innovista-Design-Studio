import { Metadata } from 'next'
import PrivacyPolicy from '@/components/legal/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy | Innovista Design Studio',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}
