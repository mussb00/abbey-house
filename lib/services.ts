export type Service = {
  slug: string
  name: string
  tagline: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  coverImage: string
}

export type Category = {
  slug: string
  name: string
  tagline: string
  description: string
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
    description:
      'Abbey House Plumbing & Heating Services provides comprehensive boiler and gas engineering across London. Our Gas Safe registered engineers cover everything from emergency boiler repairs to new boiler installations and annual servicing. We work on all major brands including Worcester Bosch, Vaillant, Ideal, Baxi, and Potterton. Whether your boiler has stopped working, is making a strange noise, or you simply want to improve efficiency, our engineers diagnose the problem and fix it on the first visit wherever possible. We carry a full stock of spare parts and can usually repair common faults the same day. For new installations, we survey your property, calculate the correct boiler output, and recommend the most cost-effective solution for your home. All our gas work is carried out to British Standards and registered with Gas Safe.',
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
        description:
          'A broken boiler is an emergency, especially in winter. Our Gas Safe engineers respond quickly to boiler breakdowns across London and aim to repair most faults on the first visit. We carry common spare parts in our vans so we can fix the majority of faults without waiting for parts. We work on all major makes and models including Worcester Bosch, Vaillant, Ideal, Baxi, Potterton, and Glow-worm. After diagnosing the fault, we give you a clear quote before starting any work. We do not charge call-out fees.',
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
        description:
          'Installing a new boiler is one of the most effective ways to reduce your heating bills. Modern condensing boilers are over 90 percent efficient. We install Worcester Bosch, Vaillant, Ideal, and Baxi boilers with full manufacturer warranties. Before installation, one of our engineers visits to assess your property and recommend the right boiler size and type. We handle the complete installation including removing the old unit, fitting the new boiler, updating controls, and registering the warranty on your behalf. All installations are Gas Safe registered and meet current Building Regulations.',
        metaTitle: 'New Boiler Installation London | Abbey House Plumbing',
        metaDescription:
          'New boiler installation across London. Worcester Bosch, Vaillant, Ideal, Baxi. Gas Safe registered. Full manufacturer warranty.',
        keywords: ['new boiler installation London', 'boiler replacement London', 'Worcester Bosch installation London'],
        coverImage:
          'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'annual-boiler-servicing',
        name: 'Annual Boiler Servicing',
        tagline: 'Keep your boiler safe and efficient with an annual service',
        description:
          'An annual boiler service keeps your heating running safely and efficiently. During a service, our Gas Safe engineer strips and inspects the key components, cleans anything that needs cleaning, tests combustion levels, and checks for carbon monoxide. A well-maintained boiler uses less gas, breaks down less often, and lasts longer. Landlords are legally required to have gas appliances serviced every 12 months. We issue a Gas Safety Certificate (CP12) on completion. Our annual boiler servicing covers all of London.',
        metaTitle: 'Annual Boiler Servicing London | Abbey House Plumbing',
        metaDescription:
          'Annual boiler service across London. Gas Safety Certificates issued. Gas Safe registered engineers. Landlord compliance covered.',
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
    description:
      'Abbey House Plumbing & Heating Services specialises in improving central heating systems across London. Over time, heating systems accumulate sludge, scale, and corrosion that reduces efficiency and can damage components. Our engineers use power flushing to clean the system and restore it to full performance. We also install smart heating controls that let you control your heating more precisely, reducing waste and lowering bills. Whether your radiators are cold at the bottom, your system is noisy, or your heating bills have crept up, we can diagnose the issue and recommend the right solution. We cover all areas of London.',
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
        description:
          'Power flushing removes the sludge, scale, and corrosion that builds up in central heating systems over time. This debris settles in radiators and pipework, causing cold spots, reduced flow, boiler noise, and increased energy consumption. Our engineers connect a high-velocity pump to your system, flush the pipes and radiators with a specialist chemical solution, and add a corrosion inhibitor. After a power flush, radiators heat evenly, the boiler runs more quietly, and heating bills typically fall. We recommend a power flush when radiators have cold spots, the system is noisy, or before fitting a new boiler.',
        metaTitle: 'Power Flushing London | Abbey House Plumbing',
        metaDescription:
          'Professional power flushing across London. Restore heating efficiency, eliminate cold spots, reduce energy bills. Gas Safe engineers.',
        keywords: ['power flushing London', 'power flush central heating London', 'radiator cold spots London'],
        coverImage:
          'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        slug: 'smart-heating-controls',
        name: 'Smart Heating Controls',
        tagline: 'Control your heating smarter and cut your bills across London',
        description:
          'Smart heating controls let you manage your heating from your phone, set precise schedules, and avoid heating empty rooms. We install and configure smart thermostats including Nest, Hive, and Honeywell, as well as smart TRVs that control individual room temperatures. The average household saves 10 to 15 percent on heating bills after upgrading to smart controls. Our engineers assess your existing system, recommend compatible controls, and handle the complete installation including programming and app setup.',
        metaTitle: 'Smart Heating Controls London | Abbey House Plumbing',
        metaDescription:
          'Smart thermostat installation across London. Nest, Hive, and Honeywell smart heating controls. Cut bills by up to 15 percent.',
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
    description:
      'Abbey House Plumbing & Heating Services handles all aspects of domestic plumbing across London. From a dripping tap or a blocked drain to a burst pipe, our plumbers are qualified, experienced, and available when you need them. We stock common fittings and components in our vans so most repairs can be completed on the first visit. We work in all types of London properties and understand the different plumbing challenges each presents. All our work is carried out to current Water Regulations and building standards.',
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
        description:
          'Water leaks can cause serious damage to a property if left undetected. Hidden leaks behind walls, under floors, or in ceilings can rot timbers, damage plaster, encourage mould, and raise water bills significantly. Our engineers use specialist acoustic and thermal detection equipment to locate leaks accurately without unnecessary damage to your property. Once found, we give you a clear repair quote and carry out the work as efficiently as possible. Our leak detection service covers all London properties including residential homes, flats, and commercial premises.',
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
    description:
      'Abbey House Plumbing & Heating Services provides comprehensive landlord compliance services across London. Landlords have a legal duty to ensure all gas appliances, pipework, and flues in their properties are maintained in a safe condition and inspected annually. We issue Gas Safety Certificates (CP12) after every inspection, carry out remedial work where required, and keep records so you always have proof of compliance. We work with individual landlords, letting agents, and property management companies across London. Our engineers are Gas Safe registered and understand the specific requirements of the Gas Safety Regulations 1998.',
    metaTitle: 'Landlord Gas Safety Certificates London | Abbey House',
    metaDescription:
      'Gas Safety Certificates and landlord compliance across London. CP12 issued same day. Gas Safe registered. Annual reminders available.',
    keywords: ['gas safety certificate London', 'landlord gas safety London', 'CP12 London'],
    coverImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    services: [
      {
        slug: 'gas-safety-certificates',
        name: 'Gas Safety Certificates',
        tagline: 'CP12 Gas Safety Certificates for landlords across London',
        description:
          'Under the Gas Safety Regulations 1998, landlords must have all gas appliances and flues checked by a Gas Safe registered engineer every 12 months and issue a Gas Safety Certificate (CP12) to tenants within 28 days of the check. Our Gas Safe engineers carry out a thorough inspection of all gas appliances, check for gas tightness, verify adequate ventilation, and confirm safe operation of all controls. We issue the CP12 on the day of inspection. We cover all London boroughs and offer flexible appointment times to work around tenant schedules.',
        metaTitle: 'Gas Safety Certificates London | Abbey House Plumbing',
        metaDescription:
          'CP12 Gas Safety Certificates for landlords across London. Gas Safe registered. Same-day certificate. Covers all London boroughs.',
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
