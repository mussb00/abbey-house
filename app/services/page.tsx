import { getAllCategories } from '@/lib/services'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plumbing & Heating Services London | Abbey House',
  description: 'Expert plumbing and heating services across London. Browse all categories including boiler repair, central heating, and landlord compliance.',
}

export default function ServicesPage() {
  const categories = getAllCategories()
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Expert plumbing and heating across London. Gas Safe registered engineers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`}>
                <Card className="border-2 hover:border-primary transition-colors h-full">
                  <CardHeader>
                    <CardTitle>{cat.name}</CardTitle>
                    <CardDescription className="pb-4">{cat.tagline}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
