import { notFound } from 'next/navigation'
import { getAllCategories, getCategoryBySlug } from '@/lib/services'
import CategoryPageTemplate from '@/components/CategoryPageTemplate'
import ServiceSchema from '@/components/ServiceSchema'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ categorySlug: c.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ categorySlug: string }> }
): Promise<Metadata> {
  const { categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  if (!category) return {}
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    keywords: category.keywords.join(', '),
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      images: [category.coverImage],
    },
  }
}

export default async function CategoryPage(
  { params }: { params: Promise<{ categorySlug: string }> }
) {
  const { categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  if (!category) notFound()
  return (
    <>
      <ServiceSchema category={category} />
      <CategoryPageTemplate category={category} />
    </>
  )
}
