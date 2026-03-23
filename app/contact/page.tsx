import { Contact } from "../contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Abbey House Plumbing & Heating London | Get a Free Quote",
  description: "Contact Abbey House Plumbing & Heating Services. Get a free quote for boiler repair, installation, servicing, and all plumbing needs across London.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="py-12 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Get a free quote for any plumbing or heating work across London.
            </p>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}
