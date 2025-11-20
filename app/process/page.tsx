import { Metadata } from 'next'
import Process from '@/components/Process'

export const metadata: Metadata = {
  title: 'Our Process | Innovista Design Studio',
  description: 'Learn about the 5-step Innovista methodology for building high-performing websites that drive business results.',
  alternates: {
    canonical: '/process',
  },
}

export default function ProcessPage() {
  return <Process />
}
