export type Service = {
  slug: string
  name: string
  tagline: string
  intro: string
  sections: { heading: string; body: string }[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
  coverImage: string
}

export type Category = {
  slug: string
  name: string
  tagline: string
  intro: string
  sections: { heading: string; body: string }[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
  coverImage: string
  services: Service[]
}

export const categories: Category[] = [
  {
    slug: 'central-heating',
    name: 'Central Heating',
    tagline: 'Central heating installation, repair, and servicing across London',
    intro:
      'Central heating services in London from Abbey House Plumbing & Heating. We install, repair, and service central heating systems across West London, North London, and surrounding areas.',
    sections: [
      {
        heading: 'Boiler Repair',
        body: 'Fast boiler repair across London. Our engineers diagnose and fix boiler faults, aiming to resolve most problems on the first visit.',
      },
      {
        heading: 'Boiler Service',
        body: 'Annual boiler servicing keeps your heating running safely and efficiently. We carry out full inspections and issue safety reports on the day.',
      },
      {
        heading: 'New Boiler Installation',
        body: 'New boiler installation across London. We assess your property and recommend the right boiler for your home or rental property.',
      },
      {
        heading: 'Power Flush',
        body: 'Power flushing removes sludge and scale from your central heating system, restoring efficiency and eliminating cold spots.',
      },
      {
        heading: 'Smart Thermostat Installation',
        body: 'We install smart thermostats and heating controls that let you manage your heating from your phone and reduce energy waste.',
      },
      {
        heading: 'Radiator Installation & Repair',
        body: 'Radiator installation, replacement, and repair across London. We fit new radiators and resolve cold spot and valve issues.',
      },
      {
        heading: 'Heating System Repairs',
        body: 'We diagnose and repair central heating system faults including pump failures, expansion vessel problems, and zone valve issues.',
      },
    ],
    metaTitle: 'Central Heating London | Abbey House Plumbing',
    metaDescription:
      'Central heating installation, repair, and servicing across London. Boiler repair, power flush, smart thermostats, and radiator services.',
    keywords: ['central heating London', 'boiler repair London', 'central heating engineer London'],
    coverImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    services: [
      {
        slug: 'boiler-repair',
        name: 'Boiler Repair',
        tagline: 'Fast boiler repairs across London',
        intro:
          'Boiler repair in London from Abbey House Plumbing & Heating. We respond quickly to boiler breakdowns and aim to fix most faults on the first visit.',
        sections: [
          {
            heading: 'Emergency Boiler Repair',
            body: 'When a boiler breaks down in Hammersmith or Fulham in January, it needs fixing fast. We carry spare parts in our vans and fix most boiler faults the same day.',
          },
          {
            heading: 'Boiler Fault Diagnosis',
            body: 'We diagnose boiler faults accurately before starting any work. You get a clear quote upfront, with no hidden charges.',
          },
          {
            heading: 'All Makes and Models',
            body: 'We repair boilers of all makes and models. Whether your boiler is making a noise, losing pressure, or not firing up, our engineers will find the cause.',
          },
        ],
        metaTitle: 'Boiler Repair London | Abbey House Plumbing',
        metaDescription:
          'Boiler repair across London. Same-day response. All makes and models. Part of our Central Heating service.',
        keywords: ['boiler repair London', 'emergency boiler repair London', 'boiler not working London'],
        coverImage:
          'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'boiler-service',
        name: 'Boiler Service',
        tagline: 'Annual boiler servicing across London',
        intro:
          'Boiler service in London from Abbey House Plumbing & Heating. An annual service keeps your boiler running safely, extends its life, and can reduce your heating bills.',
        sections: [
          {
            heading: 'Annual Boiler Inspection',
            body: 'We service boilers across Camden Town and Kentish Town every autumn. Our engineers inspect key components, clean what needs cleaning, and test combustion levels.',
          },
          {
            heading: 'What a Boiler Service Includes',
            body: 'A full inspection of the heat exchanger, burner, controls, and seals. Carbon monoxide testing and a written service report issued on the day.',
          },
        ],
        metaTitle: 'Boiler Service London | Abbey House Plumbing',
        metaDescription:
          'Annual boiler servicing across London. Full inspection, safety check, and written report issued same day.',
        keywords: ['boiler service London', 'annual boiler service London', 'boiler maintenance London'],
        coverImage:
          'https://images.unsplash.com/photo-1597762117709-859f744b84c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'new-boiler-installation',
        name: 'New Boiler Installation',
        tagline: 'New boiler installation across London',
        intro:
          'New boiler installation in London from Abbey House Plumbing & Heating. We supply and fit new boilers for homes and rental properties across West London and North London.',
        sections: [
          {
            heading: 'Boiler Replacement',
            body: 'Many homes in Kensington and Chelsea have boilers that are overdue for replacement. A modern condensing boiler uses significantly less gas for the same heat output.',
          },
          {
            heading: 'Conventional to Combi Conversion',
            body: 'We handle full system conversions, including removing old back boilers, relocating boilers, and upgrading from conventional to combi systems.',
          },
          {
            heading: 'Installation and Warranty Registration',
            body: 'We manage the complete installation from survey to sign-off, including registering the manufacturer warranty on your behalf.',
          },
        ],
        metaTitle: 'New Boiler Installation London | Abbey House Plumbing',
        metaDescription:
          'New boiler installation across London. Full survey, supply, fit, and warranty registration included.',
        keywords: ['new boiler installation London', 'boiler replacement London', 'combi boiler installation London'],
        coverImage:
          'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'power-flush',
        name: 'Power Flush',
        tagline: 'Power flushing for central heating systems across London',
        intro:
          'Power flush in London from Abbey House Plumbing & Heating. We clean sludge, scale, and corrosion from central heating systems to restore efficiency and eliminate cold spots.',
        sections: [
          {
            heading: 'What Happens During a Power Flush',
            body: 'We did a power flush on a Victorian terrace in Maida Vale — seven radiators, half of them cold at the bottom. After the flush, the system heated evenly within 20 minutes.',
          },
          {
            heading: 'Magnetic Filter Installation',
            body: 'We fit a magnetic filter after every power flush to capture future debris and protect your new boiler warranty.',
          },
          {
            heading: 'When to Get a Power Flush',
            body: 'Cold radiators, a noisy boiler, or an inefficient system are signs you need a power flush. We also recommend one before any new boiler installation.',
          },
        ],
        metaTitle: 'Power Flush London | Abbey House Plumbing',
        metaDescription:
          'Power flushing across London. Remove sludge, eliminate cold spots, restore central heating efficiency.',
        keywords: ['power flush London', 'power flushing London', 'central heating power flush London'],
        coverImage:
          'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'smart-thermostat-installation',
        name: 'Smart Thermostat Installation',
        tagline: 'Smart thermostat fitting across London',
        intro:
          'Smart thermostat installation in London from Abbey House Plumbing & Heating. We fit and configure smart heating controls across West Hampstead, Hampstead, and surrounding areas.',
        sections: [
          {
            heading: 'Nest and Hive Thermostat Fitting',
            body: 'We install Nest and Hive thermostats across West Hampstead and Hampstead. Setup takes about an hour and most homeowners are controlling their heating from their phone before we leave.',
          },
          {
            heading: 'Smart TRV Installation',
            body: 'Smart thermostatic radiator valves let you control individual room temperatures. We supply and fit smart TRVs compatible with your existing heating system.',
          },
          {
            heading: 'Heating Controls Upgrade',
            body: 'We check your boiler is compatible with smart controls before installation and handle the full setup including app configuration.',
          },
        ],
        metaTitle: 'Smart Thermostat Installation London | Abbey House',
        metaDescription:
          'Smart thermostat installation across London. Nest, Hive, and Tado fitted and configured by heating engineers.',
        keywords: ['smart thermostat installation London', 'Nest installation London', 'Hive thermostat London'],
        coverImage:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'radiator-services',
        name: 'Radiator Installation & Repair',
        tagline: 'Radiator installation and repair across London',
        intro:
          'Radiator services in London from Abbey House Plumbing & Heating. We install new radiators, replace faulty ones, and fix cold spot and valve problems across the city.',
        sections: [
          {
            heading: 'Radiator Installation',
            body: 'We supply and fit new radiators of all sizes across London properties, from period houses in Kilburn to modern flats in Brondesbury.',
          },
          {
            heading: 'TRV and Valve Replacement',
            body: 'A lot of the radiator calls we get from Kilburn and Brondesbury are for thermostatic valves that have seized over summer. We replace TRVs and lockshield valves the same day.',
          },
          {
            heading: 'Cold Radiator Diagnosis',
            body: 'A cold radiator is usually a stuck valve, sludge in the panel, or an air lock. We diagnose the cause and fix it on the first visit wherever possible.',
          },
        ],
        metaTitle: 'Radiator Installation London | Abbey House Plumbing',
        metaDescription:
          'Radiator installation and repair across London. TRV replacement, cold spot diagnosis, and new radiator fitting.',
        keywords: ['radiator installation London', 'radiator repair London', 'TRV replacement London'],
        coverImage:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'heating-system-repairs',
        name: 'Heating System Repairs',
        tagline: 'Central heating system repairs across London',
        intro:
          'Heating system repairs in London from Abbey House Plumbing & Heating. We diagnose and fix faults across the full central heating system, from pumps and valves to expansion vessels and controls.',
        sections: [
          {
            heading: 'Heating Pump Replacement',
            body: 'A noisy heating system in a Marylebone flat turned out to be a failing pump. Catching it early saved the homeowner a more expensive emergency callout.',
          },
          {
            heading: 'Expansion Vessel and Pressure Issues',
            body: 'We replace faulty expansion vessels, pressure relief valves, and fill the system to the correct operating pressure.',
          },
          {
            heading: 'Central Heating Balancing',
            body: 'Uneven heating is often caused by an unbalanced system. We balance central heating systems across London to ensure even heat distribution in every room.',
          },
        ],
        metaTitle: 'Heating System Repairs London | Abbey House Plumbing',
        metaDescription:
          'Central heating system repairs across London. Pump replacement, expansion vessel, zone valves, and system balancing.',
        keywords: ['heating system repair London', 'central heating repair London', 'heating engineer London'],
        coverImage:
          'https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    slug: 'plumbing-services',
    name: 'Plumbing Services',
    tagline: 'Reliable plumbing services across London',
    intro:
      'Plumbing services in London from Abbey House Plumbing & Heating. We handle domestic plumbing across West London, North London, and surrounding areas, from shower installation to bathroom repairs.',
    sections: [
      {
        heading: 'Shower Installation',
        body: 'We fit electric showers, mixer showers, and power showers across London. Most installations are completed in a single visit.',
      },
      {
        heading: 'Tap, Toilet & Sink Repairs',
        body: 'From a dripping tap in Willesden Green to a running toilet in Hammersmith, we carry out bathroom plumbing repairs quickly and without fuss.',
      },
    ],
    metaTitle: 'Plumbing Services London | Abbey House Plumbing',
    metaDescription:
      'Plumbing services across London. Shower installation, tap repair, toilet fitting, and bathroom plumbing.',
    keywords: ['plumber London', 'plumbing services London', 'plumbing repairs London'],
    coverImage:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    services: [
      {
        slug: 'shower-installation',
        name: 'Shower Installation',
        tagline: 'Shower installation across London',
        intro:
          'Shower installation in London from Abbey House Plumbing & Heating. We fit electric showers, mixer showers, and power showers across Paddington, Maida Vale, and surrounding areas.',
        sections: [
          {
            heading: 'Electric Shower Installation',
            body: 'We fit a lot of showers across Paddington and Maida Vale — bath-to-shower conversions and unit replacements. Most electric shower installations take half a day.',
          },
          {
            heading: 'Mixer and Power Showers',
            body: 'We install mixer and power shower units with full pipework and tray plumbing. We advise on the best type of shower for your water pressure and boiler setup.',
          },
          {
            heading: 'Shower Repair and Replacement',
            body: 'We repair and replace shower units, valves, pumps, and enclosures. If your shower has lost pressure or temperature control, we can usually fix it the same day.',
          },
        ],
        metaTitle: 'Shower Installation London | Abbey House Plumbing',
        metaDescription:
          'Shower installation across London. Electric, mixer, and power showers fitted by experienced plumbers.',
        keywords: ['shower installation London', 'electric shower fitting London', 'shower repair London'],
        coverImage:
          'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'bathroom-plumbing',
        name: 'Tap, Toilet & Sink Plumber',
        tagline: 'Bathroom plumbing repairs across London',
        intro:
          'Bathroom plumbing in London from Abbey House Plumbing & Heating. We repair and replace taps, toilets, and sinks across Willesden Green, Hammersmith, and the surrounding areas.',
        sections: [
          {
            heading: 'Tap Installation and Repair',
            body: 'A dripping tap in Willesden Green was wasting close to 5,000 litres of water a month. A new cartridge and 45 minutes of our time fixed it.',
          },
          {
            heading: 'Toilet Installation and Repair',
            body: 'We install new toilets and repair running cisterns, faulty flush mechanisms, and leaking pans. Most toilet repairs are completed in a single visit.',
          },
          {
            heading: 'Sink and Basin Replacement',
            body: 'We fit new basins and sinks in bathrooms and kitchens across London. We handle the full plumbing connection including waste fitting and pipework.',
          },
        ],
        metaTitle: 'Tap, Toilet & Sink Plumber London | Abbey House',
        metaDescription:
          'Tap, toilet, and sink plumbing across London. Repairs and installations completed same day where possible.',
        keywords: ['tap repair London', 'toilet installation London', 'sink plumber London'],
        coverImage:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    slug: 'gas-services',
    name: 'Gas Services',
    tagline: 'Gas engineering and safety services across London',
    intro:
      'Gas services in London from Abbey House Plumbing & Heating. We provide gas engineering, safety inspections, and appliance installation across Westminster, Kensington, and the wider London area.',
    sections: [
      {
        heading: 'Gas Engineer',
        body: 'Our engineers handle gas leak detection, emergency callouts, and gas tightness testing across London. If you can smell gas, open windows and call immediately.',
      },
      {
        heading: 'Gas Safety Certificate',
        body: 'We issue CP12 gas safety certificates for landlords across the London Borough of Brent and Willesden Green. Certificates are issued on the day of inspection.',
      },
      {
        heading: 'Gas Appliance Installation',
        body: 'We install gas cookers, hobs, and fires across London. All appliance installations are carried out to current gas safety regulations.',
      },
    ],
    metaTitle: 'Gas Services London | Abbey House Plumbing',
    metaDescription:
      'Gas services across London. Gas engineers, safety certificates, and appliance installation by registered engineers.',
    keywords: ['gas services London', 'gas engineer London', 'gas safety certificate London'],
    coverImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    services: [
      {
        slug: 'gas-engineer',
        name: 'Gas Engineer',
        tagline: 'Gas engineers across London',
        intro:
          'Gas engineer in London from Abbey House Plumbing & Heating. We provide gas leak detection, emergency gas callouts, and gas tightness testing across Westminster, Kensington, and surrounding areas.',
        sections: [
          {
            heading: 'Gas Leak Detection and Repair',
            body: 'If you can smell gas in your Westminster or Kensington home, open windows, avoid switches, and call the National Gas Emergency line on 0800 111 999 first. We can attend the same day.',
          },
          {
            heading: 'Emergency Gas Callouts',
            body: 'We provide emergency gas callouts across London. Our engineers carry gas detection equipment and can isolate, test, and repair gas supplies safely.',
          },
          {
            heading: 'Gas Tightness Testing',
            body: 'We carry out gas tightness tests on pipework following any gas work or if you suspect a slow leak. We issue a written report on completion.',
          },
        ],
        metaTitle: 'Gas Engineer London | Abbey House Plumbing',
        metaDescription:
          'Gas engineers across London. Gas leak detection, emergency callouts, and gas tightness testing.',
        keywords: ['gas engineer London', 'gas leak London', 'emergency gas engineer London'],
        coverImage:
          'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'gas-safety-certificate',
        name: 'Gas Safety Certificate',
        tagline: 'CP12 gas safety certificates for landlords across London',
        intro:
          'Gas safety certificates in London from Abbey House Plumbing & Heating. We issue CP12 certificates for landlords across the London Borough of Brent, Willesden Green, Westminster, and surrounding areas.',
        sections: [
          {
            heading: 'Landlord Gas Safety Inspection',
            body: 'We cover a lot of rental properties across the London Borough of Brent and Willesden Green. Letting agents book us for CP12 inspections before new tenancies start. We issue the certificate on the day.',
          },
          {
            heading: 'HMO Multi-Appliance Inspection',
            body: 'We carry out gas safety inspections on HMOs with multiple appliances across London. Each appliance is checked and recorded on the CP12 certificate.',
          },
          {
            heading: 'Remedial Work and Re-Inspection',
            body: 'If an appliance fails the safety check, we carry out remedial work and re-inspect on the same visit where possible, so you get your certificate without an extra appointment.',
          },
        ],
        metaTitle: 'Gas Safety Certificate London | Abbey House Plumbing',
        metaDescription:
          'CP12 gas safety certificates for landlords across London. Issued same day. Covers all appliances.',
        keywords: ['gas safety certificate London', 'CP12 London', 'landlord gas safety London'],
        coverImage:
          'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'gas-appliance-installation',
        name: 'Gas Appliance Installation',
        tagline: 'Gas appliance installation across London',
        intro:
          'Gas appliance installation in London from Abbey House Plumbing & Heating. We install gas cookers, hobs, and fires across Notting Hill, Paddington, and the wider London area.',
        sections: [
          {
            heading: 'Gas Cooker and Hob Installation',
            body: 'A new gas hob in a Notting Hill kitchen sounds straightforward until the existing gas point is in the wrong place. We handle new gas point installations and full appliance fitting.',
          },
          {
            heading: 'Gas Meter Relocation',
            body: 'We carry out gas meter relocations where permitted by your gas supplier. All relocation work is carried out to current gas safety regulations.',
          },
          {
            heading: 'Flexible Gas Hose Replacement',
            body: 'We replace flexible gas hoses on cookers and hobs across London. Flexible hoses have a limited lifespan and should be replaced every two years.',
          },
        ],
        metaTitle: 'Gas Appliance Installation London | Abbey House',
        metaDescription:
          'Gas appliance installation across London. Gas cookers, hobs, and fires installed by registered engineers.',
        keywords: ['gas appliance installation London', 'gas cooker installation London', 'gas hob fitting London'],
        coverImage:
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
]

export function getAllCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getServiceBySlug(
  categorySlug: string,
  serviceSlug: string
): { category: Category; service: Service } | undefined {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  const service = category.services.find((s) => s.slug === serviceSlug)
  if (!service) return undefined
  return { category, service }
}

export function getAllServicePaths() {
  return categories.flatMap((cat) =>
    cat.services.map((svc) => ({
      categorySlug: cat.slug,
      serviceSlug: svc.slug,
    }))
  )
}
