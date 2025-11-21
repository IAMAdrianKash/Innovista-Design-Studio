import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import MobileStickyBar from '@/components/ui/MobileStickyBar'

// Optimized Google Fonts with Next.js
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://innovista.design'),
  title: 'Innovista Design Studio - Conversion-Focused Web Design',
  description: 'Professional web design and development services focused on conversion optimization, lead generation, and business growth.',
  keywords: 'web design, lead generation, SEO, automation, conversion optimization',
  authors: [{ name: 'Innovista Design Studio' }],
  icons: {
    icon: '/images/brand/favicon.ico',
    apple: '/images/brand/logo.png',
  },
  openGraph: {
    title: 'Innovista Design Studio - Conversion-Focused Web Design',
    description: 'Professional web design and development services focused on conversion optimization, lead generation, and business growth.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Innovista Design Studio',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Innovista Design Studio - Conversion-Focused Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovista Design Studio - Conversion-Focused Web Design',
    description: 'Professional web design and development services focused on conversion optimization, lead generation, and business growth.',
    images: ['/images/og/og-default.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} ${playfairDisplay.variable}`}>
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
