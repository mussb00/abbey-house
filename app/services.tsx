import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCategories } from "@/lib/services";

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

export function Services() {
  const categories = getAllCategories()

  // Flatten all services across categories, keep category slug for href, take first 6
  const allServices = categories.flatMap((cat) =>
    cat.services.map((svc) => ({
      ...svc,
      categorySlug: cat.slug,
      emoji: EMOJI[svc.slug] ?? '🔧',
    }))
  ).slice(0, 6)

  const totalCount = categories.reduce((sum, c) => sum + c.services.length, 0)

  return (
    <section id="services" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Our Central Heating Services in Brent
          </h2>
          <p className="text-lg text-muted-foreground">
            Boiler repair, boiler service, new boiler installation, boiler replacement, gas installation, and more. One call sorts it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((svc) => {
            const href = `/services/${svc.categorySlug}/${svc.slug}`
            return (
              <Link
                key={svc.slug}
                href={href}
                className="group block p-6 rounded-xl border-2 border-border hover:border-primary hover:bg-secondary/20 transition-all"
              >
                <div className="text-3xl mb-4">{svc.emoji}</div>
                <h3 className="text-base font-semibold text-foreground mb-2">{svc.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.tagline}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            )
          })}

          {/* View all card */}
          <Link
            href="/services"
            className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-secondary/20 transition-all min-h-[160px]"
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-primary mb-1">View all {totalCount} services</div>
              <div className="text-xs text-muted-foreground">Central heating, plumbing &amp; gas</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
