import { Award, Users, Clock, ThumbsUp } from "lucide-react";
import { ImageWithFallback } from "../components/errors/ImageWithFallback";

const stats = [
  {
    icon: Award,
    value: "25+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Customers",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Service",
  },
  {
    icon: ThumbsUp,
    value: "100%",
    label: "Satisfaction Rate",
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
                alt="Modern bathroom"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg mt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769376695235-d3253548a5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHBpcGVzJTIwY2xlYW58ZW58MXx8fHwxNzcyODA0MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quality plumbing work"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground">
              Your Trusted Local Plumbing Experts
            </h2>
            <p className="text-muted-foreground">
              Since 1999, BlueLine Plumbing has been serving the community with 
              exceptional plumbing services. Our team of licensed and insured 
              professionals is dedicated to providing top-quality workmanship and 
              outstanding customer service.
            </p>
            <p className="text-muted-foreground">
              We understand that plumbing issues can be stressful, which is why we 
              prioritize prompt, reliable service and transparent pricing. From small 
              repairs to major installations, we treat every job with the same level 
              of care and professionalism.
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
