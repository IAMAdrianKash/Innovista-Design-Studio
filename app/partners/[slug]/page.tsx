import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPartnerBySlug, getAllPartners } from '@/lib/content'
import PartnerProfile from '@/components/PartnerProfile'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const partners = await getAllPartners()
  return partners.map((partner) => ({
    slug: partner.slug.current,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const partner = await getPartnerBySlug(slug)

  if (!partner) {
    return {
      title: 'Partner Not Found',
    }
  }

  return {
    title: `${partner.name} | Partner Directory | Innovista Design Studio`,
    description: partner.description,
    openGraph: {
      title: `${partner.name} | Partner Directory`,
      description: partner.description,
      type: 'profile',
      locale: 'en_US',
      url: `https://innovista.design/partners/${partner.slug.current}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${partner.name} | Partner Directory`,
      description: partner.description,
    },
    alternates: {
      canonical: `https://innovista.design/partners/${partner.slug.current}`,
    },
  }
}

export default async function PartnerPage({ params }: Props) {
  const { slug } = await params
  const partner = await getPartnerBySlug(slug)

  if (!partner) {
    notFound()
  }

  return <PartnerProfile partner={partner} />
}
