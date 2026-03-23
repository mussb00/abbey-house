import { Hero } from "./hero";
import { Services } from "./services";
import { About } from "./about";
import { Contact } from "./contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}
