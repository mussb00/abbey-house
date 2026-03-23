'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import { Button } from './ui/button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
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
              <span className="text-primary font-medium">Abbey House</span>
              <p className="text-xs text-muted-foreground">Plumbing & Heating</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const isActive = href === '/'
                ? pathname === '/'
                : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    isActive
                      ? 'text-primary font-medium transition-colors'
                      : 'text-foreground hover:text-primary transition-colors'
                  }
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:07930909496"
              className="hidden sm:flex items-center gap-2 text-primary"
            >
              <Phone className="w-4 h-4" />
              <span>07930 909496</span>
            </a>
            <Button asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
