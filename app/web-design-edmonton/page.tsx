import { Metadata } from 'next'
import WebDesignEdmonton from '@/components/WebDesignEdmonton'

export const metadata: Metadata = {
  title: 'Web Design Edmonton | Custom Websites That Convert | Innovista Design Studio',
  description: 'Award-winning web design in Edmonton, AB. We build conversion-focused websites for professional services and B2B companies. Free audit + transparent pricing. Alberta-based team.',
  openGraph: {
    title: 'Web Design Edmonton | Custom Websites That Convert | Innovista Design Studio',
    description: 'Award-winning web design in Edmonton, AB. We build conversion-focused websites for professional services and B2B companies. Free audit + transparent pricing. Alberta-based team.',
    type: 'website',
    locale: 'en_US',
    url: 'https://innovista.design/web-design-edmonton',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Edmonton | Custom Websites That Convert | Innovista Design Studio',
    description: 'Award-winning web design in Edmonton, AB. We build conversion-focused websites for professional services and B2B companies. Free audit + transparent pricing. Alberta-based team.',
  },
  alternates: {
    canonical: 'https://innovista.design/web-design-edmonton',
  },
  keywords: [
    'web design Edmonton',
    'Edmonton web design',
    'web design company Edmonton',
    'website design Edmonton',
    'custom web design Edmonton',
    'professional web design Edmonton Alberta',
    'web design for law firms Edmonton',
    'B2B web design Edmonton',
    'Edmonton web design services',
    'best web design agency Edmonton'
  ],
}

export default function WebDesignEdmontonPage() {
  return <WebDesignEdmonton />
}
