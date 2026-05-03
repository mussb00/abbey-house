import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import type { Category } from '@/lib/services'

const EMOJI: Record<string, string> = {
  'boiler-repair': '🔧',
  'boiler-service': '⚙️',
  'new-boiler-installation': '🔥',
  'power-flush': '🔄',
  'smart-thermostat-installation': '🌡️',
  'radiator-services': '🏠',
  'heating-system-repairs': '🛠️',
  'shower-installation': '🚿',
  'tap-toilet-sink-plumber': '🚰',
  'gas-engineer': '🛡️',
  'gas-safety-certificate': '📋',
  'gas-appliance-installation': '⚡',
}

export default function CategoryPageTemplate({ category }: { category: Category }) {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero — mirrors homepage Hero ── */}
      <section className="relative bg-gradient-to-b from-secondary to-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: category.name },
          ]} />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-6">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                Gas Safe Registered · Same-Day Service Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight font-semibold">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground">{category.tagline}</p>
              <div className="space-y-3">
                {[
                  'Gas Safe Registered Engineers',
                  'Same-Day Breakdown Response',
                  'No Subcontractors — Our Own Team',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0" asChild>
                  <a href="tel:07930909496">
                    <Phone className="w-4 h-4" />
                    Emergency? Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={category.coverImage}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About-style content — intro + section grid ── */}
      <section className="py-14 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground mb-10 max-w-3xl">{category.intro}</p>
          <div className="grid md:grid-cols-2 gap-10">
            {category.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl text-foreground mb-3">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid — mirrors homepage Services ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Our {category.name} Services</h2>
            <p className="text-lg text-muted-foreground">
              Browse our full range — one call sorts it all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${category.slug}/${service.slug}`}
                className="group block p-6 rounded-xl border-2 border-border hover:border-primary hover:bg-secondary/20 transition-all"
              >
                <div className="text-3xl mb-4">{EMOJI[service.slug] ?? '🔧'}</div>
                <h3 className="text-base font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.tagline}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas served ── */}
      <section className="py-14 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8">{category.areasHeading}</h2>
          <div className="flex flex-wrap gap-2.5">
            {category.areasServed.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white text-foreground border border-border rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — mirrors footer bg ── */}
      <section className="py-14 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Need {category.name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Our Gas Safe engineers are ready to help across London. Get a free quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-secondary" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-0" asChild>
              <a href="tel:07930909496">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
