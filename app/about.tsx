import { MapPin, UserCheck, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../components/errors/ImageWithFallback";

const stats = [
  {
    icon: MapPin,
    value: "Brent",
    label: "Based Locally",
  },
  {
    icon: UserCheck,
    value: "Gas Safe",
    label: "Registered Engineers",
  },
  {
    icon: Clock,
    value: "Same Day",
    label: "Breakdown Response",
  },
  {
    icon: Star,
    value: "No Subs",
    label: "All Our Own Engineers",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHNpbmt8ZW58MXx8fHwxNzcyNzE4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Boiler installation in a Brent home"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg mt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769376695235-d3253548a5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHBpcGVzJTIwY2xlYW58ZW58MXx8fHwxNzcyODA0MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gas Safe engineer checking heating pipework"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground">
              Why Choose Our Central Heating Services in Brent
            </h2>
            <p className="text-muted-foreground">
              We&apos;re based in Brent. Our engineers live here. They know these streets, these houses, these boilers. A Victorian terrace in Brondesbury has different heating needs to a 1970s block in Wembley. A purpose-built flat in Kilburn is a different job to a semi-detached in Kenton. We know that because we work in all of them.
            </p>
            <p className="text-muted-foreground">
              We don&apos;t use subcontractors. Every engineer who comes to your door is part of our team, Gas Safe registered, and trained on the equipment they&apos;re working on. Central heating services in Brent is what we do. Our customers come back to us every year for their boiler service. They call us when something goes wrong. They recommend us to their neighbours.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
