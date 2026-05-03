import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { getAllCategories } from "@/lib/services";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const categories = getAllCategories();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 5-col grid: brand + 3 categories + contact
            Mobile: 2-col with brand spanning full width
            Desktop: custom widths so all 5 sit in one row */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M14 7l-5 5 5 5" />
                  <path d="M19 7l-5 5 5 5" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">Abbey House</div>
                <div className="text-xs text-white/70 leading-tight">Plumbing &amp; Heating · Gas Safe</div>
              </div>
            </div>
            <p className="text-sm text-white/75 leading-relaxed max-w-xs">
              Central heating services in Brent — boiler repair, service, installation and gas work. Gas Safe engineers covering Kilburn, Wembley, Brondesbury, and all of Brent.
            </p>
          </div>

          {/* Service category columns */}
          {categories.map((category) => (
            <div key={category.slug} className="col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                <Link
                  href={`/services/${category.slug}`}
                  className="hover:text-white/90 transition-colors"
                >
                  {category.name}
                </Link>
              </h4>
              <ul className="space-y-2.5">
                {category.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${category.slug}/${service.slug}`}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:07930909496"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  07930 909496
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@abbeyservicesgroup.co.uk"
                  className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  info@abbeyservicesgroup.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Brent, NW &amp; W London</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 mt-10 pt-8 text-center text-sm text-white/70">
          &copy; {currentYear} Abbey House Plumbing &amp; Heating Services Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
