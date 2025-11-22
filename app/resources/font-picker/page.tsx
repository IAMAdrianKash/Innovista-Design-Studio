import { Metadata } from 'next'
import FontPicker from '@/components/tools/FontPicker'

export const metadata: Metadata = {
  title: 'Free Font Picker Tool | Innovista Design Studio',
  description: 'Discover and preview beautiful font pairings for your website. Explore professional typography combinations and find the perfect fonts for your brand. Free tool, no registration required.',
  alternates: {
    canonical: '/resources/font-picker',
  },
  openGraph: {
    title: 'Free Font Picker Tool | Innovista Design Studio',
    description: 'Discover and preview beautiful font pairings for your website. Explore professional typography combinations.',
    url: '/resources/font-picker',
  },
}

export default function FontPickerPage() {
  return <FontPicker />
}
