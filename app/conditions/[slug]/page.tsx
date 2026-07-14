import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CONDITIONS } from '@/lib/data/conditions'
import { ConditionPageTemplate, buildConditionMetadata } from '@/components/templates/ConditionPageTemplate'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = CONDITIONS.find((c) => c.slug === slug)
  if (!c) return { title: 'Not Found' }
  return buildConditionMetadata(c)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const c = CONDITIONS.find((c) => c.slug === slug)
  if (!c) notFound()
  return <ConditionPageTemplate c={c} />
}
