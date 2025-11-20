import { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About Us | Innovista Design Studio',
  description: 'Learn about Innovista Design Studio - our story, philosophy, and team dedicated to building conversion-focused websites for professional services.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <About />
}
