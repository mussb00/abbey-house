import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn&apos;t find the page you were looking for.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/services">Browse Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Go to Homepage</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
