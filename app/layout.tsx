import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import MobileStickyBar from '@/components/ui/MobileStickyBar'

export const metadata: Metadata = {
  title: 'Innovista Design Studio - Conversion-Focused Web Design',
  description: 'Professional web design and development services focused on conversion optimization, lead generation, and business growth.',
  keywords: 'web design, lead generation, SEO, automation, conversion optimization',
  authors: [{ name: 'Innovista Design Studio' }],
  openGraph: {
    title: 'Innovista Design Studio - Conversion-Focused Web Design',
    description: 'Professional web design and development services focused on conversion optimization, lead generation, and business growth.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovista Design Studio - Conversion-Focused Web Design',
    description: 'Professional web design and development services focused on conversion optimization, lead generation, and business growth.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cream min-h-screen font-sans text-dark selection:bg-dark selection:text-white overflow-x-hidden">
        <div className="relative">
          {/* Global UX Enhancements */}
          <ScrollProgress />

          <Navbar />

          <main className="relative z-10">
            {children}
          </main>

          <Footer />
          <MobileStickyBar />
        </div>
      </body>
    </html>
  )
}
