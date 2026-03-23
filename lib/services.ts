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
    slug: 'boiler-gas',
    name: 'Boiler & Gas Engineering',
    tagline: 'Gas Safe registered engineers across London',
    intro:
      'Abbey House Plumbing & Heating Services provides comprehensive boiler and gas engineering across London. Our Gas Safe registered engineers cover everything from emergency boiler repairs to new boiler installations and annual servicing.',
    sections: [
      {
        heading: 'Boiler Repairs',
        body: 'We carry common spare parts in our vans so we can fix the majority of faults without waiting for parts. We work on all major makes and models.',
      },
      {
        heading: 'New Boiler Installations',
        body: 'We survey your property, calculate the correct boiler output, and recommend the most cost-effective solution for your home.',
      },
    ],
    metaTitle: 'Boiler & Gas Engineering London | Abbey House',
    metaDescription:
      'Expert boiler and gas engineering across London. Gas Safe registered engineers for boiler repair, installation, and servicing.',
    keywords: ['boiler engineer London', 'gas safe engineer London', 'boiler repair London'],
    coverImage:
      'https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    services: [
      {
        slug: 'boiler-repair',
        name: 'Boiler Repair',
        tagline: 'Fast boiler repairs by Gas Safe engineers across London',
        intro:
          'A broken boiler is an emergency, especially in winter. Our Gas Safe engineers respond quickly to boiler breakdowns across London and aim to repair most faults on the first visit.',
        sections: [
          {
            heading: 'Emergency Boiler Repair',
            body: 'We carry common spare parts in our vans so we can fix the majority of faults without waiting for parts.',
          },
        ],
        metaTitle: 'Boiler Repair London | Abbey House Plumbing',
        metaDescription:
          'Gas Safe boiler repair across London. All makes and models. Same-day response. No call-out fee.',
        keywords: ['boiler repair London', 'boiler not working London', 'emergency boiler repair London'],
        coverImage:
          'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'new-boiler-installation',
        name: 'New Boiler Installation',
        tagline: 'Expert new boiler installations across London',
        intro:
          'Installing a new boiler is one of the most effective ways to reduce your heating bills. Modern condensing boilers are over 90 percent efficient.',
        sections: [
          {
            heading: 'Boiler Replacement',
            body: 'We handle the complete installation including removing the old unit, fitting the new boiler, updating controls, and registering the warranty on your behalf.',
          },
        ],
        metaTitle: 'New Boiler Installation London | Abbey House Plumbing',
        metaDescription:
          'New boiler installation across London. Gas Safe registered. Full manufacturer warranty.',
        keywords: ['new boiler installation London', 'boiler replacement London'],
        coverImage:
          'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'annual-boiler-servicing',
        name: 'Annual Boiler Servicing',
        tagline: 'Keep your boiler safe and efficient with an annual service',
        intro:
          'An annual boiler service keeps your heating running safely and efficiently. During a service, our Gas Safe engineer strips and inspects the key components, cleans anything that needs cleaning, and tests combustion levels.',
        sections: [
          {
            heading: 'What a Boiler Service Includes',
            body: 'We check for carbon monoxide, test combustion levels, and inspect all key components. A well-maintained boiler uses less gas, breaks down less often, and lasts longer.',
          },
        ],
        metaTitle: 'Annual Boiler Servicing London | Abbey House Plumbing',
        metaDescription:
          'Annual boiler service across London. Gas Safety Certificates issued. Gas Safe registered engineers.',
        keywords: ['boiler service London', 'annual boiler service London', 'gas safety certificate London'],
        coverImage:
          'https://images.unsplash.com/photo-1597762117709-859f744b84c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    slug: 'central-heating',
    name: 'Central Heating & Efficiency',
    tagline: 'Improve your heating system performance across London',
    intro:
      'Abbey House Plumbing & Heating Services specialises in improving central heating systems across London. Over time, heating systems accumulate sludge, scale, and corrosion that reduces efficiency and can damage components.',
    sections: [
      {
        heading: 'Power Flushing',
        body: 'Our engineers use power flushing to clean the system and restore it to full performance.',
      },
      {
        heading: 'Smart Heating Controls',
        body: 'We install smart heating controls that let you control your heating more precisely, reducing waste and lowering bills.',
      },
    ],
    metaTitle: 'Central Heating & Efficiency London | Abbey House',
    metaDescription:
      'Central heating improvements across London. Power flushing, smart controls, and efficiency upgrades by Gas Safe engineers.',
    keywords: ['central heating London', 'central heating engineer London', 'power flush London'],
    coverImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    services: [
      {
        slug: 'power-flushing',
        name: 'Power Flushing',
        tagline: 'Restore your heating system with a professional power flush',
        intro:
          'Power flushing removes the sludge, scale, and corrosion that builds up in central heating systems over time. This debris settles in radiators and pipework, causing cold spots, reduced flow, boiler noise, and increased energy consumption.',
        sections: [
          {
            heading: 'What Happens During a Power Flush',
            body: 'Our engineers connect a high-velocity pump to your system, flush the pipes and radiators with a specialist chemical solution, and add a corrosion inhibitor.',
          },
          {
            heading: 'When to Get a Power Flush',
            body: 'We recommend a power flush when radiators have cold spots, the system is noisy, or before fitting a new boiler.',
          },
        ],
        metaTitle: 'Power Flushing London | Abbey House Plumbing',
        metaDescription:
          'Professional power flushing across London. Restore heating efficiency, eliminate cold spots, reduce energy bills.',
        keywords: ['power flushing London', 'power flush central heating London', 'radiator cold spots London'],
        coverImage:
          'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'smart-heating-controls',
        name: 'Smart Heating Controls',
        tagline: 'Control your heating smarter and cut your bills across London',
        intro:
          'Smart heating controls let you manage your heating from your phone, set precise schedules, and avoid heating empty rooms. We install and configure smart thermostats including Nest, Hive, and Honeywell.',
        sections: [
          {
            heading: 'Smart Thermostat Installation',
            body: 'Our engineers assess your existing system, recommend compatible controls, and handle the complete installation including programming and app setup.',
          },
        ],
        metaTitle: 'Smart Heating Controls London | Abbey House Plumbing',
        metaDescription:
          'Smart thermostat installation across London. Nest, Hive, and Honeywell smart heating controls.',
        keywords: ['smart thermostat installation London', 'Nest installation London', 'Hive installation London'],
        coverImage:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    slug: 'plumbing-maintenance',
    name: 'Plumbing & Maintenance',
    tagline: 'Reliable plumbing repairs and maintenance across London',
    intro:
      'Abbey House Plumbing & Heating Services handles all aspects of domestic plumbing across London. From a dripping tap or a blocked drain to a burst pipe, our plumbers are qualified, experienced, and available when you need them.',
    sections: [
      {
        heading: 'Leak Detection & Repair',
        body: 'We stock common fittings and components in our vans so most repairs can be completed on the first visit.',
      },
    ],
    metaTitle: 'Plumbing & Maintenance London | Abbey House',
    metaDescription:
      'Professional plumbing repairs and maintenance across London. Leaks, drips, blockages, and burst pipes. Same-day response available.',
    keywords: ['plumber London', 'plumbing repairs London', 'emergency plumber London'],
    coverImage:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    services: [
      {
        slug: 'leak-detection',
        name: 'Leak Detection',
        tagline: 'Accurate leak detection to protect your London property',
        intro:
          'Water leaks can cause serious damage to a property if left undetected. Hidden leaks behind walls, under floors, or in ceilings can rot timbers, damage plaster, encourage mould, and raise water bills significantly.',
        sections: [
          {
            heading: 'How We Find Hidden Leaks',
            body: 'Our engineers use specialist acoustic and thermal detection equipment to locate leaks accurately without unnecessary damage to your property.',
          },
        ],
        metaTitle: 'Leak Detection London | Abbey House Plumbing',
        metaDescription:
          'Professional leak detection across London. Acoustic and thermal equipment. Accurate diagnosis before any damage is done.',
        keywords: ['leak detection London', 'hidden leak London', 'water leak repair London'],
        coverImage:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  {
    slug: 'landlord-safety',
    name: 'Landlord & Safety Compliance',
    tagline: 'Gas Safety Certificates and compliance services across London',
    intro:
      'Abbey House Plumbing & Heating Services provides comprehensive landlord compliance services across London. Landlords have a legal duty to ensure all gas appliances, pipework, and flues in their properties are maintained in a safe condition and inspected annually.',
    sections: [
      {
        heading: 'Gas Safety Certificates (CP12)',
        body: 'We issue Gas Safety Certificates (CP12) after every inspection, carry out remedial work where required, and keep records so you always have proof of compliance.',
      },
    ],
    metaTitle: 'Landlord Gas Safety Certificates London | Abbey House',
    metaDescription:
      'Gas Safety Certificates and landlord compliance across London. CP12 issued same day. Gas Safe registered.',
    keywords: ['gas safety certificate London', 'landlord gas safety London', 'CP12 London'],
    coverImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    services: [
      {
        slug: 'gas-safety-certificates',
        name: 'Gas Safety Certificates',
        tagline: 'CP12 Gas Safety Certificates for landlords across London',
        intro:
          'Under the Gas Safety Regulations 1998, landlords must have all gas appliances and flues checked by a Gas Safe registered engineer every 12 months and issue a Gas Safety Certificate (CP12) to tenants within 28 days of the check.',
        sections: [
          {
            heading: 'What a Gas Safety Inspection Covers',
            body: 'Our Gas Safe engineers carry out a thorough inspection of all gas appliances, check for gas tightness, verify adequate ventilation, and confirm safe operation of all controls. We issue the CP12 on the day of inspection.',
          },
        ],
        metaTitle: 'Gas Safety Certificates London | Abbey House Plumbing',
        metaDescription:
          'CP12 Gas Safety Certificates for landlords across London. Gas Safe registered. Same-day certificate.',
        keywords: ['gas safety certificate London', 'CP12 landlord London', 'landlord compliance London'],
        coverImage:
          'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
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
