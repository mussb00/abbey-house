import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import FaqSchema from '@/components/FaqSchema'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import type { Category, Service } from '@/lib/services'

export default function ServicePageTemplate(
  { category, service }: { category: Category; service: Service }
) {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero — mirrors homepage Hero ── */}
      <section className="relative bg-gradient-to-b from-secondary to-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: category.name, href: `/services/${category.slug}` },
            { label: service.name },
          ]} />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-6">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                Gas Safe Registered · Same-Day Service Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight font-semibold">
                {service.name}
              </h1>
              <p className="text-lg text-muted-foreground">{service.tagline}</p>
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
                  src={service.coverImage}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content + sidebar — mirrors Contact section layout ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 md:items-start">

            {/* Main content */}
            <div className="md:col-span-2 space-y-8">
              <p className="text-muted-foreground leading-relaxed">{service.intro}</p>

              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-2xl md:text-3xl text-foreground mb-3">{section.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                </div>
              ))}

              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl text-foreground mb-6">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {service.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-foreground text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                This service is part of our{' '}
                <Link href={`/services/${category.slug}`} className="text-primary hover:underline">
                  {category.name}
                </Link>{' '}
                offering.
              </p>
            </div>

            {/* Sidebar — same cards as Contact section */}
            <div className="space-y-4 md:sticky md:top-24">
              {/* Emergency card */}
              <div className="bg-[#1e3a8a] text-white rounded-xl p-5">
                <p className="text-[11px] font-medium uppercase tracking-widest opacity-70 mb-1">
                  Emergency Line
                </p>
                <a
                  href="tel:07930909496"
                  className="text-2xl font-bold text-white block mb-1 hover:opacity-90"
                >
                  07930 909496
                </a>
                <p className="text-xs opacity-70 mb-4">Available 7 days · Same-day response</p>
                <Button asChild className="w-full bg-white text-primary hover:bg-secondary">
                  <a href="tel:07930909496">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Get a quote */}
              <div className="bg-secondary rounded-xl p-5">
                <p className="text-sm font-medium text-foreground mb-1">Need {service.name}?</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a free quote — we reply within 2 hours.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:07930909496" className="text-primary hover:underline font-medium">
                    07930 909496
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">24/7 Emergency Line</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@abbeyservicesgroup.co.uk"
                    className="text-primary hover:underline text-sm break-all"
                  >
                    info@abbeyservicesgroup.co.uk
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <MapPin className="w-4 h-4 text-primary" />
                    Area Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Brent, NW &amp; W London<br />
                    Kilburn · Wembley · Brondesbury
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Clock className="w-4 h-4 text-primary" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-1">
                  <p>Mon–Fri: 7am–7pm</p>
                  <p>Saturday: 8am–5pm</p>
                  <p>Sunday: Emergency only</p>
                </CardContent>
              </Card>

              {/* Related services */}
              {category.services.filter(s => s.slug !== service.slug).length > 0 && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">More {category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {category.services
                      .filter(s => s.slug !== service.slug)
                      .slice(0, 4)
                      .map(s => (
                        <Link
                          key={s.slug}
                          href={`/services/${category.slug}/${s.slug}`}
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ArrowRight className="w-3 h-3 shrink-0" />
                          {s.name}
                        </Link>
                      ))}
                    <Link
                      href={`/services/${category.slug}`}
                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline pt-2 mt-1 border-t border-border"
                    >
                      All {category.name} →
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>

          </div>
        </div>
      </section>

      <FaqSchema faqs={service.faqs} id={`${category.slug}-${service.slug}`} />

      {/* ── Areas served ── */}
      <section className="py-14 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8">{service.areasHeading}</h2>
          <div className="flex flex-wrap gap-2.5">
            {service.areasServed.map((area) => (
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
            Need {service.name}?
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
