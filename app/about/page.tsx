import { About } from "../about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Abbey House Plumbing & Heating Services London",
  description: "Gas Safe registered plumbing and heating engineers based in London. Learn about our team, our values, and our commitment to quality service.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="py-12 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl text-foreground leading-tight mb-4">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Gas Safe registered plumbing and heating engineers across London.
            </p>
          </div>
        </section>
        <About />
      </main>
    </div>
  );
}
