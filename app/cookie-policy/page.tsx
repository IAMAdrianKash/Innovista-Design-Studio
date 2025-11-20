import { Metadata } from 'next'
import CookiePolicy from '@/components/legal/CookiePolicy'

export const metadata: Metadata = {
  title: 'Cookie Policy | Innovista Design Studio',
  description: 'Learn about how we use cookies and similar technologies on our website.',
  alternates: {
    canonical: '/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return <CookiePolicy />
}
