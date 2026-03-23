import { notFound } from 'next/navigation'
import { getAllServicePaths, getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import ServiceSchema from '@/components/ServiceSchema'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllServicePaths().map(({ categorySlug, serviceSlug }) => ({
    categorySlug,
    serviceSlug,
  }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ categorySlug: string; serviceSlug: string }> }
): Promise<Metadata> {
  const { categorySlug, serviceSlug } = await params
  const result = getServiceBySlug(categorySlug, serviceSlug)
  if (!result) return {}
  const { service } = result
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(', '),
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.coverImage],
    },
  }
}

export default async function ServicePage(
  { params }: { params: Promise<{ categorySlug: string; serviceSlug: string }> }
) {
  const { categorySlug, serviceSlug } = await params
  const result = getServiceBySlug(categorySlug, serviceSlug)
  if (!result) notFound()
  const { category, service } = result
  return (
    <>
      <ServiceSchema category={category} service={service} />
      <ServicePageTemplate category={category} service={service} />
    </>
  )
}
