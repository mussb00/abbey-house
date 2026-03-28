import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { getAllCategories } from "@/lib/services";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const categories = getAllCategories();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-primary"
                >
                  <path d="M14 7l-5 5 5 5" />
                  <path d="M19 7l-5 5 5 5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl">Central Heating Services Brent</h3>
                <p className="text-sm opacity-80">Gas Safe Registered</p>
              </div>
            </div>
            <p className="text-sm opacity-90 max-w-md">
              Central heating services in Brent — boiler repair, boiler service, new boiler installation, and boiler replacement. Gas Safe engineers covering Kilburn, Wembley, Brondesbury, and all of Brent.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category.slug}>
              <h4 className="mb-4">
                <Link
                  href={`/services/${category.slug}`}
                  className="hover:opacity-100 transition-opacity"
                >
                  {category.name}
                </Link>
              </h4>
              <ul className="space-y-2 text-sm opacity-90">
                {category.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${category.slug}/${service.slug}`}
                      className="hover:opacity-100 transition-opacity"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:555-0123" className="hover:opacity-100 transition-opacity">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@bluelineplumbing.com"
                  className="hover:opacity-100 transition-opacity"
                >
                  info@bluelineplumbing.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  123 Main Street
                  <br />
                  Your City, ST 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {currentYear} BlueLine Plumbing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
