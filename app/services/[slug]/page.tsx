import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICES } from '@/lib/data/services'
import { ServicePageTemplate, buildServiceMetadata } from '@/components/templates/ServicePageTemplate'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = SERVICES.find((s) => s.slug === slug)
  if (!s) return { title: 'Not Found' }
  return buildServiceMetadata(s)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const s = SERVICES.find((s) => s.slug === slug)
  if (!s) notFound()
  return <ServicePageTemplate c={s} />
}
