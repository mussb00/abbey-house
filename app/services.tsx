import { Wrench, Flame, Settings, RefreshCw, Gauge, ShieldCheck } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Boiler Repair",
    description:
      "Most boiler problems are small faults — a faulty thermocouple, a stuck valve, low pressure. We carry spare parts in the van and fix most breakdowns on the first visit.",
  },
  {
    icon: Settings,
    title: "Boiler Service",
    description:
      "A yearly boiler service can cut your heating bills. Landlords in Brent are legally required to have boilers serviced once a year. We issue Gas Safety Certificates.",
  },
  {
    icon: Flame,
    title: "New Boiler Installation",
    description:
      "We install Worcester Bosch, Vaillant, Ideal, and Baxi boilers. We assess your home and recommend the right size and model. All units come with manufacturer warranties.",
  },
  {
    icon: RefreshCw,
    title: "Boiler Replacement",
    description:
      "If your boiler is more than 12–15 years old, replacement may be the smarter call. We remove the old unit, install the new one, and take the old boiler away.",
  },
  {
    icon: Gauge,
    title: "Gas Installation Service",
    description:
      "New supply connections, gas meter fitting, pipework extensions. As a registered Gas Safe business, all gas installation work in Brent meets current British Standards.",
  },
  {
    icon: ShieldCheck,
    title: "Gas Engineer",
    description:
      "Every engineer on our team holds a current Gas Safe card. We carry CO analysers on every visit. Carbon monoxide is odourless — regular checks keep your home safe.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Our Central Heating Services in Brent
          </h2>
          <p className="text-lg text-muted-foreground">
            Boiler repair, boiler service, new boiler installation, boiler replacement, gas installation, and more. One call sorts it all.
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
                  <CardDescription className="pb-4">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
