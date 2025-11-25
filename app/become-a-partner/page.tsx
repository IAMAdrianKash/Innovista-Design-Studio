import { Metadata } from 'next'
import BecomePartnerForm from '@/components/BecomePartnerForm'

export const metadata: Metadata = {
  title: 'Become a Partner | Innovista Design Studio',
  description: 'Join our trusted partner directory. Connect with businesses looking for expert services in photography, legal, finance, marketing, and more.',
  openGraph: {
    title: 'Become a Partner | Innovista Design Studio',
    description: 'Join our trusted partner directory. Connect with businesses looking for expert services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://innovista.design/become-a-partner',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Partner | Innovista Design Studio',
    description: 'Join our trusted partner directory and connect with businesses looking for expert services.',
  },
  alternates: {
    canonical: 'https://innovista.design/become-a-partner',
  },
}

export default function BecomePartnerPage() {
  return <BecomePartnerForm />
}
