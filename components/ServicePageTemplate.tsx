import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import type { Category, Service } from '@/lib/services'

export default function ServicePageTemplate(
  { category, service }: { category: Category; service: Service }
) {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: category.name, href: `/services/${category.slug}` },
            { label: service.name },
          ]} />
          <h1 className="text-4xl md:text-5xl text-foreground leading-tight mb-4">
            {service.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{service.tagline}</p>
          <img
            src={service.coverImage}
            alt={service.name}
            className="w-full max-h-80 object-cover rounded-2xl shadow-lg mb-8"
          />
          <div className="text-muted-foreground max-w-3xl">
            <p>{service.intro}</p>
          </div>
          <p className="mt-6 text-muted-foreground">
            This service is part of our{' '}
            <Link href={`/services/${category.slug}`} className="text-primary hover:underline">
              {category.name}
            </Link>{' '}
            offering.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Need {service.name}?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our Gas Safe engineers are ready to help across London. Get a free quote today.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
