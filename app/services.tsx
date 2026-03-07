import { Wrench, Droplets, Flame, ShowerHead, AlertCircle, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Leak Repair",
    description: "Quick detection and repair of leaks to prevent water damage and save on utility bills.",
  },
  {
    icon: Wrench,
    title: "Pipe Installation",
    description: "Professional installation and replacement of pipes for residential and commercial properties.",
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    description: "Installation, repair, and maintenance of all types of water heaters.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing",
    description: "Complete bathroom plumbing services including fixtures, toilets, and shower installations.",
  },
  {
    icon: AlertCircle,
    title: "Emergency Repairs",
    description: "24/7 emergency plumbing service for urgent issues that can't wait.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Regular inspections and maintenance to prevent costly repairs down the line.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive plumbing solutions for every need. From routine maintenance 
            to emergency repairs, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
