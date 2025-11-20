import { Metadata } from 'next'
import ServiceAutomation from '@/components/services/ServiceAutomation'

export const metadata: Metadata = {
  title: 'Business Automation Services | Innovista Design Studio',
  description: 'CRM integrations, workflow automation, and marketing automation to streamline your professional services operations.',
  alternates: {
    canonical: '/services/automation',
  },
}

export default function AutomationPage() {
  return <ServiceAutomation />
}
