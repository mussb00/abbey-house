import { getAllCategories, getAllServicePaths } from '@/lib/services'
import type { MetadataRoute } from 'next'

const BASE = 'https://abbeyservicesgroup.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryRoutes = getAllCategories().map((cat) => ({
    url: `${BASE}/services/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const serviceRoutes = getAllServicePaths().map(({ categorySlug, serviceSlug }) => ({
    url: `${BASE}/services/${categorySlug}/${serviceSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...categoryRoutes,
    ...serviceRoutes,
  ]
}
