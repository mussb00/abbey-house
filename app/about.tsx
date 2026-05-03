import { ImageWithFallback } from "../components/errors/ImageWithFallback";

const stats = [
  { value: "Gas Safe", label: "Registered" },
  { value: "Same Day", label: "Response" },
  { value: "Brent", label: "Based Locally" },
  { value: "No Subs", label: "Own Team" },
];

export function About() {
  return (
    <section id="about" className="py-14 bg-secondary">
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

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-xl font-semibold text-primary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
