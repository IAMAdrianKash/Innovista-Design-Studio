import { Metadata } from 'next'
import SEOAnalyzer from '@/components/tools/SEOAnalyzer'

export const metadata: Metadata = {
  title: 'Free SEO Analyzer Tool | Innovista Design Studio',
  description: 'Analyze your website\'s SEO health with our free tool. Get detailed insights on meta tags, page speed, mobile-friendliness, and more. No registration required.',
  alternates: {
    canonical: '/resources/seo-analyzer',
  },
  openGraph: {
    title: 'Free SEO Analyzer Tool | Innovista Design Studio',
    description: 'Analyze your website\'s SEO health with our free tool. Get detailed insights and actionable recommendations.',
    url: '/resources/seo-analyzer',
  },
}

export default function SEOAnalyzerPage() {
  return <SEOAnalyzer />
}
