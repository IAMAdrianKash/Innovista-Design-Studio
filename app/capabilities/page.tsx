import { Metadata } from 'next'
import Capabilities from '@/components/Capabilities'

export const metadata: Metadata = {
  title: 'Capabilities | Innovista Design Studio',
  description: 'Explore our full range of web design, development, and digital marketing capabilities.',
  alternates: {
    canonical: '/capabilities',
  },
}

export default function CapabilitiesPage() {
  return <Capabilities />
}
