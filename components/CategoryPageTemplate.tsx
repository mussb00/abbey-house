import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { Category } from '@/lib/services'

export default function CategoryPageTemplate({ category }: { category: Category }) {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: category.name },
          ]} />
          <h1 className="text-4xl md:text-5xl text-foreground leading-tight mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{category.tagline}</p>
          <img
            src={category.coverImage}
            alt={category.name}
            className="w-full max-h-80 object-cover rounded-2xl shadow-lg mb-8"
          />
          <p className="text-muted-foreground max-w-3xl mb-8">{category.intro}</p>

          {category.sections.map((section) => (
            <div key={section.heading} className="max-w-3xl mb-8">
              <h2 className="text-2xl md:text-3xl text-foreground mb-3">{section.heading}</h2>
              <p className="text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Our {category.name} Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${category.slug}/${service.slug}`}
              >
                <Card className="border-2 hover:border-primary transition-colors h-full">
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription className="pb-4">{service.tagline}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            {category.areasHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {category.areasServed.map((area) => (
              <p key={area} className="text-muted-foreground">{area}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Need help with {category.name}?
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
