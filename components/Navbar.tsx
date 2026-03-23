'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'
import { Phone, ChevronDown, Menu } from 'lucide-react'
import { Button } from './ui/button'
import { getAllCategories } from '@/lib/services'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Dialog from '@radix-ui/react-dialog'
import * as Collapsible from '@radix-ui/react-collapsible'

const categories = getAllCategories()

/* ─── Reusable active-link (per Radix client-routing docs) ─── */
const NavLink = forwardRef<
  HTMLAnchorElement,
  { href: string; children: React.ReactNode; className?: string }
>(({ href, children, className, ...props }, ref) => {
  const pathname = usePathname()
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink
        ref={ref}
        href={href}
        className={className}
        data-active={isActive || undefined}
        {...props}
      >
        {children}
      </NextLink>
    </NavigationMenu.Link>
  )
})
NavLink.displayName = 'NavLink'

/* ─── Logo ─── */
function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <NextLink href="/" className="flex items-center gap-2" onClick={onClick}>
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
        <span className="text-primary font-medium text-[15px]">Abbey House</span>
        <p className="text-[11px] text-muted-foreground leading-tight">
          Plumbing &amp; Heating
        </p>
      </div>
    </NextLink>
  )
}

/* ─── Desktop dropdown content for a category ─── */
function CategoryContent({
  category,
}: {
  category: ReturnType<typeof getAllCategories>[number]
}) {
  const pathname = usePathname()
  const hubHref = `/services/${category.slug}`

  return (
    <NavigationMenu.Content
      className="absolute top-0 left-0 data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=from-start]:slide-in-from-left-2 data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in data-[motion=from-end]:slide-in-from-right-2 data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out data-[motion=to-start]:slide-out-to-left-2 data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out data-[motion=to-end]:slide-out-to-right-2"
    >
      <div className="p-1.5 min-w-[240px]">
        <NavigationMenu.Link asChild active={pathname === hubHref}>
          <NextLink
            href={hubHref}
            className="block px-3 py-2.5 rounded-md text-sm font-medium text-primary hover:bg-muted transition-colors"
          >
            All {category.name} →
          </NextLink>
        </NavigationMenu.Link>

        <div className="h-px bg-border mx-2 my-1" />

        {category.services.map(service => {
          const href = `/services/${category.slug}/${service.slug}`
          const active = pathname === href
          return (
            <NavigationMenu.Link key={service.slug} asChild active={active}>
              <NextLink
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors hover:bg-muted ${active ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                {service.name}
              </NextLink>
            </NavigationMenu.Link>
          )
        })}
      </div>
    </NavigationMenu.Content>
  )
}

/* ─── Shared link styles ─── */
const navLinkClass =
  'inline-flex items-center px-3.5 py-2 rounded-md text-sm font-[450] transition-colors text-foreground hover:text-primary hover:bg-muted data-[active]:text-primary data-[active]:font-medium'

const triggerClass = (active: boolean) =>
  `group inline-flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-[450] transition-colors hover:text-primary hover:bg-muted data-[state=open]:text-primary data-[state=open]:bg-muted ${active ? 'text-primary font-medium' : 'text-foreground'}`

const mobileLinkClass = (active: boolean) =>
  `px-2 py-3 border-b border-border transition-colors ${active ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`

const mobileSubLinkClass = (active: boolean) =>
  `px-2 py-2 transition-colors ${active ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`

/* ─── Main Navbar ─── */
export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Logo />

          {/* ═══ DESKTOP — Radix NavigationMenu ═══ */}
          <NavigationMenu.Root className="relative hidden md:flex" delayDuration={100}>
            <NavigationMenu.List className="flex items-center gap-1 list-none m-0 p-0">
              <NavigationMenu.Item>
                <NavLink href="/" className={navLinkClass}>
                  Home
                </NavLink>
              </NavigationMenu.Item>

              {categories.map(category => (
                <NavigationMenu.Item key={category.slug}>
                  <NavigationMenu.Trigger
                    className={triggerClass(pathname.startsWith('/services/' + category.slug))}
                  >
                    {category.name}
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <CategoryContent category={category} />
                </NavigationMenu.Item>
              ))}

              <NavigationMenu.Item>
                <NavLink href="/about" className={navLinkClass}>
                  About
                </NavLink>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavLink href="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </NavigationMenu.Item>
            </NavigationMenu.List>

            {/* Viewport — Radix renders active Content here */}
            <div
              className="absolute top-full left-0 w-full flex justify-center pt-2"
              style={{ perspective: '2000px' }}
            >
              <NavigationMenu.Viewport className="relative overflow-hidden bg-white border border-border rounded-xl shadow-lg origin-[top_center] w-[var(--radix-navigation-menu-viewport-width)] h-[var(--radix-navigation-menu-viewport-height)] transition-[width,height] duration-200 ease-out data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95" />
            </div>
          </NavigationMenu.Root>

          {/* ═══ RIGHT SIDE ═══ */}
          <div className="flex items-center gap-3">
            <a
              href="tel:07930909496"
              className="hidden sm:flex items-center gap-2 text-primary text-sm font-[450]"
            >
              <Phone className="w-4 h-4" />
              <span>07930 909496</span>
            </a>
            <Button asChild className="hidden md:inline-flex">
              <NextLink href="/contact">Get Quote</NextLink>
            </Button>

            {/* ═══ MOBILE — Radix Dialog + Collapsible ═══ */}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  className="md:hidden text-foreground hover:text-primary transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/20 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
                <Dialog.Content className="fixed inset-0 z-50 bg-white overflow-y-auto flex flex-col data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right">
                  <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
                  {/* Mobile header */}
                  <div className="flex items-center justify-between px-4 h-[72px] border-b border-border shrink-0">
                    <Dialog.Close asChild>
                      <div>
                        <Logo />
                      </div>
                    </Dialog.Close>
                    <Dialog.Close asChild>
                      <button
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label="Close menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Mobile nav */}
                  <nav className="flex flex-col px-4 py-4 gap-1 flex-1">
                    <Dialog.Close asChild>
                      <NextLink href="/" className={mobileLinkClass(pathname === '/')}>
                        Home
                      </NextLink>
                    </Dialog.Close>

                    {categories.map(category => {
                      const hubActive = pathname.startsWith('/services/' + category.slug)
                      return (
                        <Collapsible.Root key={category.slug}>
                          <div className="border-b border-border">
                            <Collapsible.Trigger
                              className={`group flex items-center justify-between w-full px-2 py-3 transition-colors ${hubActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
                            >
                              {category.name}
                              <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                            </Collapsible.Trigger>

                            <Collapsible.Content className="overflow-hidden data-[state=open]:animate-in data-[state=open]:slide-in-from-top-1 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-1">
                              <div className="pl-4 pb-2 flex flex-col gap-1">
                                <Dialog.Close asChild>
                                  <NextLink
                                    href={`/services/${category.slug}`}
                                    className={mobileSubLinkClass(pathname === `/services/${category.slug}`)}
                                  >
                                    All {category.name}
                                  </NextLink>
                                </Dialog.Close>
                                {category.services.map(service => {
                                  const href = `/services/${category.slug}/${service.slug}`
                                  return (
                                    <Dialog.Close key={service.slug} asChild>
                                      <NextLink
                                        href={href}
                                        className={mobileSubLinkClass(pathname === href)}
                                      >
                                        {service.name}
                                      </NextLink>
                                    </Dialog.Close>
                                  )
                                })}
                              </div>
                            </Collapsible.Content>
                          </div>
                        </Collapsible.Root>
                      )
                    })}

                    <Dialog.Close asChild>
                      <NextLink
                        href="/about"
                        className={mobileLinkClass(pathname.startsWith('/about'))}
                      >
                        About
                      </NextLink>
                    </Dialog.Close>
                    <Dialog.Close asChild>
                      <NextLink
                        href="/contact"
                        className={mobileLinkClass(pathname.startsWith('/contact'))}
                      >
                        Contact
                      </NextLink>
                    </Dialog.Close>

                    <div className="mt-4 flex flex-col gap-3">
                      <a
                        href="tel:07930909496"
                        className="flex items-center gap-2 text-primary px-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>07930 909496</span>
                      </a>
                      <Dialog.Close asChild>
                        <Button asChild>
                          <NextLink href="/contact">Get Quote</NextLink>
                        </Button>
                      </Dialog.Close>
                    </div>
                  </nav>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  )
}