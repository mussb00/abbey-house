import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import FaqSchema from '@/components/FaqSchema'
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
          <p className="text-muted-foreground max-w-3xl mb-8">{service.intro}</p>

          {service.sections.map((section) => (
            <div key={section.heading} className="max-w-3xl mb-8">
              <h2 className="text-2xl md:text-3xl text-foreground mb-3">{section.heading}</h2>
              <p className="text-muted-foreground">{section.body}</p>
            </div>
          ))}

          {service.faqs && service.faqs.length > 0 && (
            <div className="max-w-3xl mt-10">
              <h2 className="text-2xl md:text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-foreground text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          <p className="mt-6 text-muted-foreground">
            This service is part of our{' '}
            <Link href={`/services/${category.slug}`} className="text-primary hover:underline">
              {category.name}
            </Link>{' '}
            offering.
          </p>
        </div>
      </section>

      <FaqSchema faqs={service.faqs} id={`${category.slug}-${service.slug}`} />

      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            {service.areasHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {service.areasServed.map((area) => (
              <p key={area} className="text-muted-foreground">{area}</p>
            ))}
          </div>
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
