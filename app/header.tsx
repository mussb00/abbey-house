import { Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white"
              >
                <path d="M14 7l-5 5 5 5" />
                <path d="M19 7l-5 5 5 5" />
              </svg>
            </div>
            <div>
              <h1 className="text-primary">BlueLine Plumbing</h1>
              <p className="text-xs text-muted-foreground">Licensed & Insured</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:555-0123"
              className="hidden sm:flex items-center gap-2 text-primary"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <Button asChild>
              <a href="#contact">Get Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
