import Image from "next/image";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";
import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";

export default function Home() {
   return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
