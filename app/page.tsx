import { Metadata } from 'next'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import SolutionsGrid from '@/components/SolutionsGrid'
import Calculators from '@/components/Calculators'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import ContentSection from '@/components/ContentSection'
import ServicingArea from '@/components/ServicingArea'

export const metadata: Metadata = {
  title: 'Web Design Edmonton | Innovista Design Studio',
  description: 'Innovista builds conversion-focused websites for Alberta businesses. We specialize in high-performance web design, SEO, and automation for professional services.',
  openGraph: {
    title: 'Web Design Edmonton | Innovista Design Studio',
    description: 'Innovista builds conversion-focused websites for Alberta businesses. We specialize in high-performance web design, SEO, and automation for professional services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://innovista.design',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  // Structured Data for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Innovista Design Studio",
    "image": "https://innovista.design/logo.png",
    "url": "https://innovista.design",
    "telephone": "",
    "email": "hello@innovista.design",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://twitter.com/innovista",
      "https://linkedin.com/company/innovista"
    ]
  }

  return (
    <>
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Hero />
      <LogoStrip />
      <SolutionsGrid />
      <Calculators />
      <Features />
      <ServicingArea />
      <Testimonials />
      <ContentSection />
    </>
  )
}
