import { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Us | Innovista Design Studio',
  description: 'Get in touch with Innovista Design Studio. Start a conversation about your web design project and business goals.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <Contact />
}
