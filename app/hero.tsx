import { CheckCircle, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/errors/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-secondary to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              Gas Safe Registered · Same-Day Service Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Central Heating Services Brent
            </h1>

            <p className="text-lg text-muted-foreground">
              When it&apos;s 6am on a January morning and your boiler has packed in, you don&apos;t want to spend an hour searching. You want someone local, qualified, and at your door fast. That&apos;s what we do.
            </p>

            <p className="text-muted-foreground">
              We provide central heating services in Brent. From Kilburn to Wembley, from Brondesbury to Neasden, our Gas Safe engineers are on the road every day.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Gas Safe Registered Engineers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">Same-Day Breakdown Response</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">All Major Boiler Brands Covered</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="#contact">Get a Quote</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:555-0123" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyJTIwd29ya2luZ3xlbnwxfHx8fDE3NzI3ODg1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gas Safe engineer working on a boiler in Brent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl text-primary">Gas</div>
              <div className="text-sm text-muted-foreground">Safe Registered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
