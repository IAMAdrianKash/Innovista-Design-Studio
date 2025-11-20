import { Metadata } from 'next'
import InsightsClient from '@/components/Insights'

export const metadata: Metadata = {
  title: 'Insights & Strategy Blog | Innovista Design Studio',
  description: "We don't gatekeep our knowledge. Here is everything we know about building high-performing digital engines for professional services.",
  openGraph: {
    title: 'Insights & Strategy Blog | Innovista Design Studio',
    description: "We don't gatekeep our knowledge. Here is everything we know about building high-performing digital engines for professional services.",
    type: 'website',
  },
  alternates: {
    canonical: '/insights',
  },
}

export default function InsightsPage() {
  return <InsightsClient />
}
