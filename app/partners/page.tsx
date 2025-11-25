import { Metadata } from 'next'
import Directory from '@/components/Directory'

export const metadata: Metadata = {
  title: 'The Partners We Trust | Innovista Design Studio',
  description: 'Building a business requires a village. Here is ours. Verified experts for Photography, Legal, Finance, and more. Connect with trusted partners in Edmonton and beyond.',
  openGraph: {
    title: 'The Partners We Trust | Innovista Design Studio',
    description: 'Building a business requires a village. Here is ours. Verified experts for Photography, Legal, Finance, and more. Connect with trusted partners in Edmonton and beyond.',
    type: 'website',
    locale: 'en_US',
    url: 'https://innovista.design/partners',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Partners We Trust | Innovista Design Studio',
    description: 'Building a business requires a village. Here is ours. Verified experts for Photography, Legal, Finance, and more.',
  },
  alternates: {
    canonical: 'https://innovista.design/partners',
  },
  keywords: [
    'partner directory',
    'Edmonton business partners',
    'trusted vendors',
    'business services Edmonton',
    'photography Edmonton',
    'legal services',
    'marketing partners',
  ],
}

export default function PartnersPage() {
  return <Directory />
}
