import Script from 'next/script'
import type { Category, Service } from '@/lib/services'

const BUSINESS = {
  name: 'Abbey House Plumbing & Heating Services',
  url: 'https://abbeyservicesgroup.co.uk',
  telephone: '07930 909496',
  email: 'info@abbeyservicesgroup.co.uk',
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  areaServed: [
    'London', 'West London', 'North West London', 'North London', 'Paddington', 'Marylebone',
    'Notting Hill', 'Camden Town', 'West Kilburn', 'South Hampstead', 'Belsize Park',
    'Maida Vale', 'Brondesbury', 'Chiswick', 'Ealing', 'West Hampstead', 'Hampstead',
    'Richmond', 'Hammersmith', 'Kilburn', 'Kentish Town', "St John's Wood",
    'Cricklewood', 'Westminster', 'Willesden Green', 'Colindale', 'London Borough of Brent',
    'Fulham', 'Chelsea', 'Kensington'
  ].map((name) => ({ '@type': 'AdministrativeArea', name })),
}

export default function ServiceSchema(
  { category, service }: { category: Category; service?: Service }
) {
  const items = service
    ? [{ '@type': 'Offer', itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.metaDescription,
        url: `${BUSINESS.url}/services/${category.slug}/${service.slug}`,
      }}]
    : category.services.map((svc) => ({ '@type': 'Offer', itemOffered: {
        '@type': 'Service',
        name: svc.name,
        description: svc.metaDescription,
        url: `${BUSINESS.url}/services/${category.slug}/${svc.slug}`,
      }}))

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Plumber', 'HVACBusiness'],
    ...BUSINESS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: category.name,
      itemListElement: items,
    },
  }

  return (
    <Script
      id={service ? `schema-${category.slug}-${service.slug}` : `schema-${category.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
