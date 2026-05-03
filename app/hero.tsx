import { CheckCircle, Phone, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/errors/ImageWithFallback";
import Link from "next/link";

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-secondary to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              Gas Safe Registered · Same-Day Service Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight font-semibold">
              Central Heating Services Brent
            </h1>

            <p className="text-lg text-muted-foreground">
              When it&apos;s 6am on a January morning and your boiler has packed in, you don&apos;t want to spend an hour searching. You want someone local, qualified, and at your door fast. That&apos;s what we do.
            </p>

            <p className="text-muted-foreground">
              We provide central heating services in Brent. From Kilburn to Wembley, from Brondesbury to Neasden, our Gas Safe engineers are on the road every day.
            </p>

            <div className="space-y-3">
              {[
                'Gas Safe Registered Engineers',
                'Same-Day Breakdown Response',
                'All Major Boiler Brands Covered',
                'No Subcontractors — Our Own Team',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white border-0"
                asChild
              >
                <a href="tel:07930909496" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Emergency? Call Now
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Not an emergency?{' '}
              <Link href="/contact" className="text-primary underline underline-offset-2">
                Use the form below
              </Link>{' '}
              — we reply within 2 hours.
            </p>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyJTIwd29ya2luZ3xlbnwxfHx8fDE3NzI3ODg1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gas Safe engineer working on a boiler in Brent"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gas Safe badge — bottom left */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-xl hidden md:flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-[10px] text-center leading-tight">GAS<br />SAFE</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Gas Safe Registered</div>
                <div className="text-xs text-muted-foreground">All engineers certified</div>
              </div>
            </div>

            {/* Star rating — top right */}
            <div className="absolute top-4 right-4 bg-white rounded-xl px-4 py-3 shadow-xl hidden md:block">
              <StarRating />
              <div className="text-xs text-muted-foreground font-medium mt-1">5.0 · 84 Google reviews</div>
            </div>
          </div>
        </div>

        {/* Star rating on mobile */}
        <div className="mt-8 flex items-center gap-2 md:hidden">
          <StarRating />
          <span className="text-sm text-muted-foreground font-medium">5.0 on Google · 84 verified reviews</span>
        </div>
      </div>
    </section>
  );
}
