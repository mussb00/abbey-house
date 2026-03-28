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
  faqs?: { question: string; answer: string }[]
  areasServed: string[]
  areasHeading: string
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
  areasServed: string[]
  areasHeading: string
}

const AREAS_SERVED = [
  'London', 'West London', 'North West London', 'North London', 'Paddington', 'Marylebone',
  'Notting Hill', 'Camden Town', 'West Kilburn', 'South Hampstead', 'Belsize Park', 'Maida Vale',
  'Brondesbury', 'Chiswick', 'Ealing', 'West Hampstead', 'Hampstead', 'Richmond', 'Hammersmith',
  'Kilburn', "St John's Wood", 'Cricklewood', 'Westminster', 'Willesden Green', 'Colindale',
  'London Borough of Brent', 'Fulham', 'Chelsea', 'Kensington',
]

export const categories: Category[] = [
  {
    slug: 'central-heating',
    name: 'Central Heating',
    tagline: 'Central heating installation, repair, and servicing across London',
    intro:
      'Central Heating London — most people do not think about their system until it fails. Last November we had calls from across Hampstead and Camden Town after the first cold snap of the year. Boilers that had not been touched since the previous winter suddenly refused to fire up. Most needed a Boiler Service. A few needed a Boiler Repair or replacement. A handful needed a New Boiler Installation, and those homeowners wished they had not waited. Whether you are dealing with cold radiators that need a Power Flush, a faulty control that needs a Smart Thermostat Installation, or Heating System Repairs that keep getting pushed back, the time to act is before winter arrives. We cover central heating across London, including West London, North London, and the wider area.',
    sections: [
      {
        heading: 'Boiler Repair',
        body: 'When a boiler stops working, the house gets cold fast. Boiler Repair is the most common call we take across London in winter — pressure loss, fault codes, broken thermocouples, and failed ignition components are all problems we see daily across Kilburn, Willesden Green, and the London Borough of Brent. We carry spare parts in our vans and aim to fix most faults on the first visit. The key to a quick repair is a clear diagnosis. We test the system before quoting, so you know what the fault is and what it will cost to fix before we touch anything. We do not charge for the callout — you pay for the work.',
      },
      {
        heading: 'Boiler Service',
        body: 'A Boiler Service once a year is the most effective way to stay ahead of breakdowns. Most boiler failures we see could have been caught during a routine inspection — a component wearing out, a filter getting clogged, or a heat exchanger starting to show signs of stress. Catching these early means a short service visit instead of an emergency callout in February. We service boilers across Hampstead, West Hampstead, and the surrounding areas. During the service we check all key components, test combustion levels, look for carbon monoxide, and clean anything that needs attention. You get a written report at the end. Landlords can combine a Boiler Service with a gas safety inspection to get both records in a single visit.',
      },
      {
        heading: 'New Boiler Installation',
        body: 'A New Boiler Installation is one of the most cost-effective upgrades available to London homeowners. Modern condensing boilers run at over 90% efficiency. An older unit from 2005 or earlier might be running at 65–75%. That gap appears on your gas bill every month. For a typical three-bedroom London home, the annual saving on a replacement can run to several hundred pounds. We carry out new boiler installations across Chelsea, Kensington, and North London. We survey your property first, calculate the correct output for your home, and recommend the right type — combi, system, or conventional. We handle the full job from removing the old unit to commissioning the new boiler and registering the warranty.',
      },
      {
        heading: 'Power Flush',
        body: 'Over time, central heating systems collect sludge, scale, and corrosion debris. This settles in radiators and pipework, causing cold spots at the bottom of panels, a noisy boiler, and a system that takes longer and longer to heat up. A Power Flush drives a high-velocity chemical solution through your pipes and radiators to clear the build-up and restore full flow. We carry out power flushing across Maida Vale, Belsize Park, and the wider London area. After every flush we fit a magnetic filter to capture future debris and dose the system with a corrosion inhibitor. Most homeowners notice the difference immediately — radiators that heat evenly from top to bottom and a boiler that runs more quietly.',
      },
      {
        heading: 'Smart Thermostat Installation',
        body: 'A Smart Thermostat Installation reduces your heating bills without reducing comfort. Smart thermostats let you control your heating from your phone, set precise daily schedules, and stop heating rooms you are not in. Most households see a measurable reduction in gas use within the first month. We install Nest, Hive, and Tado thermostats across West Hampstead, South Hampstead, and surrounding areas. We check your boiler is compatible before fitting anything, install the thermostat and any smart radiator valves you want, connect the app to your phone, and walk you through the controls before we leave. The full Smart Thermostat Installation usually takes under two hours.',
      },
      {
        heading: 'Radiator Services',
        body: 'Radiator Installation & Repair covers a wide range of problems — from fitting a new radiator in an extension to sorting a TRV that seized over summer. A stuck thermostatic radiator valve is one of the most common reasons a room stays cold when the rest of the house is warm. The boiler runs fine, the pipes are hot, but the valve refuses to open and let hot water into the panel. We carry common radiator valves in our vans so most repairs happen on the first visit. For new radiator installations across Hammersmith, Fulham, and surrounding areas, we specify the correct output for the room, supply the panel, and handle the full plumbing connection.',
      },
      {
        heading: 'Heating System Repairs',
        body: 'Not every central heating problem starts at the boiler. Heating System Repairs covers faults in the rest of the circuit — a circulating pump failing slowly, a zone valve stuck open or closed, an expansion vessel that has lost its charge, or a system that is heating some rooms while leaving others cold. A system making a sound it did not make last winter is worth investigating before it fails completely. We diagnose and fix central heating faults across North West London, Cricklewood, Colindale, and the wider area. If your system is losing pressure every few days, making noise, or failing to heat specific zones, we will find the cause and give you a straight assessment of what it will cost to put right.',
      },
    ],
    metaTitle: 'Central Heating London | Abbey House Plumbing',
    metaDescription:
      'Central heating installation, repair, and servicing across London. Boiler repair, power flush, smart thermostats, and radiator services.',
    keywords: ['central heating London', 'boiler repair London', 'central heating engineer London'],
    coverImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    areasHeading: 'Find your local central heating engineer',
    areasServed: AREAS_SERVED,
    services: [
      {
        slug: 'boiler-repair',
        name: 'Boiler Repair',
        tagline: 'Fast boiler repairs across London',
        intro:
          'Boiler Repair London — most calls we take in January follow the same pattern. The homeowner noticed the radiators felt lukewarm the day before, thought it would sort itself out, and woke up to a cold house. We cover boiler repair across Hammersmith, Fulham, Chiswick, and the wider London area. Most faults are fixable the same day if you call early. We carry common spare parts in our vans and aim to complete every Boiler Repair on the first visit. Boiler Repair is part of our Central Heating service.',
        sections: [
          {
            heading: 'Emergency Boiler Repair',
            body: 'A boiler breakdown in winter is an emergency, not an inconvenience. No heating and no hot water in a cold week affects everyone in the property. Emergency Boiler Repair covers the same-day callouts we attend when the system has stopped completely — no heat, no hot water, and often a fault code on the display that the homeowner cannot interpret. We cover emergency boiler repair across Hampstead, Belsize Park, and the wider London area. When we arrive we run a full diagnosis, tell you exactly what is wrong and what it will cost to fix, then carry out the repair. For most common faults — a failed igniter, a stuck diverter valve, a pressure sensor fault, or a blocked condensate pipe — we carry the parts and complete the repair the same day. If a specific part needs ordering, we tell you when it will arrive and when we can return. We do not charge a callout fee. You pay for the repair itself.',
          },
          {
            heading: 'Gas Safe Boiler Engineer',
            body: 'All gas boiler work in the UK must be carried out by an engineer registered with the Gas Safe Register. A Gas Safe Boiler Engineer has the legal authority to work on gas appliances and carries a Gas Safe ID card that you can and should ask to see before any work begins. When you call us, the engineer who attends carries a current Gas Safe registration. We work on all makes and models of boiler — combi, system, and conventional — across all major manufacturers. Boiler fault code diagnostics, boiler part replacement, and all makes and models servicing are all part of what we carry out on a boiler repair callout. Before we start any work we give you a clear upfront price, so there are no surprises when the job is done.',
          },
          {
            heading: 'Boiler Fault Diagnosis',
            body: 'Accurate Boiler Fault Diagnosis is the difference between a repair that works and one that masks the real problem. A boiler losing pressure, for example, can be caused by a faulty pressure relief valve, a leaking radiator, a failed expansion vessel, or a hairline crack in the heat exchanger. Each requires a different fix. Diagnosing the right cause first saves time and money. We carry combustion analysis equipment, pressure testing gauges, and gas detection tools on every callout. Our engineers follow a structured diagnostic process before quoting for any work. Same-day boiler repair is our aim for most jobs across West Kilburn, Kensal Green, and North West London. We also offer a no-fix, no-fee policy on callouts where we cannot complete the repair on the first visit.',
          },
        ],
        metaTitle: 'Boiler Repair London | Abbey House Plumbing',
        metaDescription:
          'Boiler repair across London. Same-day response. All makes and models. Part of our Central Heating service.',
        keywords: ['boiler repair London', 'emergency boiler repair London', 'boiler not working London'],
        coverImage:
          'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local boiler repair engineer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'What are the most common boiler problems?',
            answer: 'Common boiler problems include pressure loss, frozen condensate pipes, faulty thermostats, airlocks in the system, and worn ignition leads. Many faults display as error codes on the boiler display. A Gas Safe engineer can diagnose the fault, identify the cause, and repair it on the same visit in most cases.',
          },
          {
            question: 'Should I repair or replace my boiler?',
            answer: 'If your boiler is under 10 years old and the repair cost is below one-third of the cost of a replacement, repair is usually the right choice. If your boiler is over 15 years old, needs frequent repairs, or is running inefficiently, replacement is likely more cost-effective in the long run.',
          },
          {
            question: 'Can a boiler be repaired without a Gas Safe engineer?',
            answer: 'No. Any work on a gas boiler must be carried out by an engineer registered with the Gas Safe Register. Using an unregistered person to carry out gas work is illegal, invalidates your home insurance, and can be dangerous. Always check the engineer\'s Gas Safe ID card before work begins.',
          },
          {
            question: 'Is it safe to use my boiler if it has a fault?',
            answer: 'It depends on the fault. A boiler displaying a fault code or losing pressure slowly may still be safe to use temporarily, but should be inspected promptly. If you smell gas, the boiler is making unusual sounds, or you suspect a carbon monoxide issue, turn off the gas supply and call a Gas Safe engineer immediately.',
          },
          {
            question: 'How do I know if my boiler needs repairing?',
            answer: 'Signs that your boiler needs attention include a fault code on the display, a noticeable drop in heating efficiency, radiators that take longer than usual to heat up, the boiler cutting out frequently, or a pilot light that will not stay lit. Any of these symptoms are worth having checked by a registered engineer.',
          },
        ],
      },
      {
        slug: 'boiler-service',
        name: 'Boiler Service',
        tagline: 'Annual boiler servicing across London',
        intro:
          'Boiler Service London — the call we take every autumn from homeowners across Camden Town and Kentish Town who want to get ahead of winter. A boiler that gets serviced every year breaks down less often, runs more efficiently, and lasts longer than one that gets left to get on with it. An annual Boiler Service catches small problems while they are still small. It is also a legal requirement for landlords. We carry out boiler servicing across London, including North London, West London, and the surrounding areas. Boiler Service is part of our Central Heating service.',
        sections: [
          {
            heading: 'Annual Boiler Service',
            body: 'An Annual Boiler Service covers all the checks and cleaning that keep a boiler running safely and at peak efficiency. During the inspection our engineer removes the boiler casing, inspects the heat exchanger and burner, checks the flue for blockages or damage, tests the gas rate and combustion, and verifies that all controls and safety devices are working correctly. We clean components where needed and replace any minor parts — seals, washers, O-rings — that are showing wear. The full annual boiler inspection takes between 45 minutes and an hour and a half depending on the age and complexity of the boiler. We issue a written service report at the end of every visit, which you can keep for your records and provide to letting agents or buyers if needed. We service boilers across Kentish Town, Camden Town, and the wider North London area.',
          },
          {
            heading: 'Boiler Maintenance',
            body: 'Boiler Maintenance goes beyond the annual service to keep older systems running reliably between visits. If your boiler is over 10 years old, more frequent checks make sense. Older boilers are more likely to develop minor faults between annual services — a seal drying out, a fan bearing wearing, or a heat exchanger showing early signs of corrosion. Component cleaning and checking these systems twice a year catches issues before they become failures. We also carry out boiler maintenance for landlords and letting agents managing multiple properties across St John\'s Wood, Marylebone, and the surrounding areas. Keeping boilers in good condition reduces emergency callouts, extends the life of the appliance, and keeps tenants comfortable through the winter months.',
          },
          {
            heading: 'Gas Safety Check',
            body: 'A Gas Safety Check is a legal requirement for all rented properties in the UK. Under gas safety regulations, landlords must have all gas appliances, flues, and pipework in their properties checked by a registered engineer every 12 months and must provide tenants with a valid gas safety record. The Gas Safety Check we carry out covers all gas appliances in the property, checks for gas tightness across the pipework, and verifies that all flues and ventilation routes are clear and working correctly. A carbon monoxide detection test is included as part of every safety check. We issue the service report issued same day so you have the documentation for your compliance records immediately. We cover landlord gas safety across Paddington, Maida Vale, and the wider London area.',
          },
        ],
        metaTitle: 'Boiler Service London | Abbey House Plumbing',
        metaDescription:
          'Annual boiler servicing across London. Full inspection, safety check, and written report issued same day.',
        keywords: ['boiler service London', 'annual boiler service London', 'boiler maintenance London'],
        coverImage:
          'https://images.unsplash.com/photo-1597762117709-859f744b84c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local boiler service engineer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'How often should a boiler be serviced?',
            answer: 'A boiler should be serviced once a year. Annual servicing keeps the appliance running safely, maintains manufacturer warranty conditions, and allows an engineer to identify worn components before they cause a breakdown. For landlords, an annual service is a legal requirement under gas safety regulations.',
          },
          {
            question: 'What does a boiler service involve?',
            answer: 'A boiler service involves removing the casing, inspecting the heat exchanger and burner, checking the flue for blockages or damage, testing the gas rate and combustion, and verifying that all safety devices are working correctly. The engineer cleans components where needed, checks for gas leaks, and issues a written report at the end of the visit.',
          },
          {
            question: 'How long does a boiler service take?',
            answer: 'A boiler service typically takes between 45 minutes and an hour and a half. The exact duration depends on the age, make, and condition of the boiler. Older boilers or those that have not been serviced for several years may take longer if additional cleaning is needed.',
          },
          {
            question: 'Does a boiler service include a gas safety check?',
            answer: 'A boiler service includes checks on the boiler itself — combustion, flue, heat exchanger, and controls. A gas safety check covers all gas appliances and pipework in the property. The two can be carried out in the same visit, and landlords often combine them to receive both records together on the same day.',
          },
          {
            question: 'What happens if I don\'t service my boiler?',
            answer: 'An unserviced boiler is more likely to break down without warning, runs less efficiently, and can develop faults that go undetected. Carbon monoxide leaks, blocked flues, and failing components are all risks that a routine annual service is designed to catch early. Failing to service can also void the manufacturer warranty.',
          },
          {
            question: 'Will a boiler service improve efficiency?',
            answer: 'Yes. A service includes cleaning the burner and heat exchanger, which can become coated with combustion residue over time. A clean, well-adjusted boiler burns gas more effectively. The combustion analysis carried out during a service allows the engineer to check that the boiler is operating within its designed parameters.',
          },
          {
            question: 'Does servicing a boiler extend its life?',
            answer: 'Yes. Regular annual servicing extends the working life of a boiler by catching small faults before they cause serious damage. Components such as seals, O-rings, and ignition electrodes wear out gradually. Replacing them during a routine service costs far less than repairing the damage caused when they fail completely.',
          },
        ],
      },
      {
        slug: 'new-boiler-installation',
        name: 'New Boiler Installation',
        tagline: 'New boiler installation across London',
        intro:
          'New Boiler Installation London — most of the new boiler jobs we do in Kensington and Chelsea are replacements that were three or four years overdue. The old boiler was still running, but only just, and costing a lot more to run than a modern unit would. Installing a new boiler is one of the most cost-effective decisions a London homeowner can make. A modern condensing boiler uses far less gas for the same heat output. New Boiler Installation is part of our Central Heating service. We cover new boiler installations across London.',
        sections: [
          {
            heading: 'Boiler Replacement',
            body: 'A Like-for-like boiler replacement is the most straightforward type of installation. The old boiler comes out, a new boiler of the same type goes in, and the existing pipework and controls are used where possible. It is usually the fastest option and tends to be the most cost-effective. If your current boiler has served you well and you want the same setup with a modern, more efficient unit, a like-for-like replacement makes sense. We carry out boiler replacements across Chelsea, Kensington, and West London, working in all types of London property from Victorian terraces to modern flats. We survey the property before quoting, remove the old unit on the day of installation, commission the new boiler, and complete all the paperwork. Back boiler removal is also something we carry out regularly — many older London homes still have back boilers behind gas fires, and removing them is usually straightforward.',
          },
          {
            heading: 'Combi Boiler Installation',
            body: 'A Combi Boiler Installation is the most popular choice for London properties. A combi boiler provides both central heating and instant hot water without the need for a separate hot water cylinder or cold water tank in the loft. For flats and smaller houses in Fulham, Hammersmith, and similar London areas, removing the cylinder and tank frees up useful storage space. The installation involves removing your existing boiler and any separate cylinder or tank, running new pipework where needed, fitting the combi boiler in its new location, and connecting it to the existing radiator circuit and hot water outlets. A conventional to combi conversion takes most of a day. We handle everything including manufacturer warranty registration at the end of the job.',
          },
          {
            heading: 'Boiler Upgrade',
            body: 'A Boiler Upgrade from an older, less efficient unit to a modern condensing boiler delivers immediate improvements in fuel use. Older boilers that have not been regularly serviced often run at 65–75% efficiency or lower. A modern condensing boiler runs at over 90%. For a typical London home heated for eight months of the year, that difference in efficiency can mean several hundred pounds less on your gas bill annually. We carry out boiler upgrades across North London, Cricklewood, and the wider London area. Boiler relocation is also possible during an upgrade if you want to move the boiler to a more convenient position — from an airing cupboard to a kitchen cupboard, for example, or to free up a bedroom wall. We assess the feasibility during the survey visit and give you a clear quote.',
          },
        ],
        metaTitle: 'New Boiler Installation London | Abbey House Plumbing',
        metaDescription:
          'New boiler installation across London. Full survey, supply, fit, and warranty registration included.',
        keywords: ['new boiler installation London', 'boiler replacement London', 'combi boiler installation London'],
        coverImage:
          'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local boiler installation engineer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'What certificates do I need after a new boiler is installed?',
            answer: 'After a new boiler is installed you should receive a commissioning document confirming the boiler has been set up and tested correctly, and a Building Regulations Compliance Certificate confirming the work was carried out to the required standard. The engineer should also register the manufacturer warranty on your behalf. Keep all documents safe.',
          },
          {
            question: 'Does a new boiler installation require building regulations notification?',
            answer: 'Yes. A new boiler installation is notifiable work under Building Regulations. A Gas Safe registered engineer can self-certify the work, which means they notify the local authority on your behalf and you receive a compliance certificate. You do not need to separately notify the council if your engineer is registered to self-certify.',
          },
          {
            question: 'How do I check my engineer is qualified to install a boiler?',
            answer: 'Ask to see the engineer\'s Gas Safe ID card before work begins. The card shows the engineer\'s name, registration number, and the categories of gas work they are qualified to carry out. You can also verify registration online at the Gas Safe Register website by entering the registration number or the business name.',
          },
          {
            question: 'What is a Building Regulations Compliance Certificate?',
            answer: 'A Building Regulations Compliance Certificate is issued after notifiable gas work is completed to confirm it meets the required standard. For a boiler installation, it is issued by the Gas Safe registered engineer or their employer and sent to the local authority. It is an important document if you sell the property.',
          },
          {
            question: 'How long does a new boiler installation take?',
            answer: 'A straightforward like-for-like boiler replacement typically takes most of a working day. A more complex installation involving pipework changes, a conversion from one boiler type to another, or a boiler relocation can take a day and a half to two days. Your engineer should be able to give you a realistic time estimate after a survey.',
          },
          {
            question: 'Do I need to be home when a new boiler is installed?',
            answer: 'Yes. An adult should be present throughout a boiler installation. The engineer will need access to the boiler location, radiators, and gas and water supply points. At the end of the installation the engineer will walk you through the controls and settings, which requires you to be present.',
          },
          {
            question: 'How long does a new boiler warranty last?',
            answer: 'Most new boilers come with a manufacturer warranty of between two and ten years depending on the brand and model. Some manufacturers require annual servicing by a registered engineer to keep the warranty valid. The engineer installing the boiler should register the warranty with the manufacturer on the day of installation.',
          },
        ],
      },
      {
        slug: 'power-flush',
        name: 'Power Flush',
        tagline: 'Power flushing for central heating systems across London',
        intro:
          'Power Flush London — we did one on a Victorian terrace in Maida Vale last spring. Seven radiators, four of them cold at the bottom and one barely warming at all. The boiler was working fine. The system just had years of sludge sitting in it. After the power flush, every radiator heated evenly from top to bottom within 20 minutes. That is what a Power Flush does. It removes the debris that accumulates in central heating systems over time and restores the performance the system was designed to deliver. Power Flush is part of our Central Heating service.',
        sections: [
          {
            heading: 'Central Heating Power Flush',
            body: 'A Central Heating Power Flush forces a high-velocity flow of water and specialist chemicals through your heating system at low pressure. This dislodges and suspends the sludge, scale, and iron oxide that has built up in radiators and pipework, then flushes it out of the system. The result is restored water flow, better heat transfer, and a boiler that does not have to work as hard to maintain temperature. A powerflush with magnetic filter installation is the standard process. We connect the flushing machine to the system, circulate chemical solution through every radiator and the pipework, then flush the entire system clean. The process covers sludge and scale removal from every circuit. On a typical London home the full flush takes three to five hours depending on the number of radiators and the condition of the system. We carry out central heating power flushing across Maida Vale, Belsize Park, and the wider West London area.',
          },
          {
            heading: 'Magnetic Filter Installation',
            body: 'A Magnetic Filter Installation is the final step of every power flush we carry out. A magnetic filter fits inline on the return pipework close to the boiler and captures iron oxide particles and other magnetic debris as the heating system circulates. Without a filter, sludge starts to rebuild in the system within months. With a filter in place, the debris is captured before it can settle and cause problems again. We fit filters on all new boiler installations as a matter of course and recommend adding one to any system that has had a power flush. Chemical flush and inhibitor dose is completed at the end of the process — the inhibitor chemically prevents corrosion from forming in the pipework and radiators. We then carry out system pressure testing post-flush to confirm the system holds pressure correctly and is ready for use. A heating efficiency report is issued at the end of the visit.',
          },
          {
            heading: 'Radiator Cold Spots',
            body: 'Radiator Cold Spots at the bottom of a panel are the most obvious sign that a power flush is needed. The cold area at the bottom is sludge — iron oxide and other debris that has settled in the radiator because it is too heavy to circulate with the water. A radiator with cold spots at the bottom is not heating the room properly and is making your boiler work harder than it should. In some cases, bleeding a radiator can help with air at the top, but it does not help with sludge at the bottom. The only effective treatment is a chemical flush and inhibitor dose that suspends the debris and carries it out of the system. We address radiator cold spots across Hampstead, South Hampstead, and West Hampstead as part of our power flushing service.',
          },
        ],
        metaTitle: 'Power Flush London | Abbey House Plumbing',
        metaDescription:
          'Power flushing across London. Remove sludge, eliminate cold spots, restore central heating efficiency.',
        keywords: ['power flush London', 'power flushing London', 'central heating power flush London'],
        coverImage:
          'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local power flush engineer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'What is a power flush and do I need one?',
            answer: 'A power flush is a process carried out by central heating engineers to remove sludge, scale, and iron oxide that builds up inside boilers, pipes, and radiators over time. A specialised machine circulates water at high velocity through the system to dislodge and flush out the debris. You may need one if radiators have cold spots at the bottom, the system is slow to heat up, or the boiler is noisier than usual.',
          },
          {
            question: 'How do I know if my central heating needs a power flush?',
            answer: 'Signs that a power flush may be needed include cold areas at the bottom of radiators, slow or uneven heating across the system, black or discoloured water when a radiator is removed, a boiler that is noisier than usual, or a magnet sticking to copper pipework. Any of these symptoms suggest iron sludge has accumulated and is restricting water flow.',
          },
          {
            question: 'Can power flushing damage old radiators?',
            answer: 'Power flushing pushes water through the system at high velocity, which can increase pressure on weak points such as rusting or corroded radiators. On older systems with already compromised metalwork, this can cause leaks. An engineer should assess the condition of radiators before flushing and advise whether any should be replaced first to avoid problems during the process.',
          },
          {
            question: 'How long does a power flush take?',
            answer: 'A power flush typically takes several hours to a full day depending on the size of the system and how much contamination has built up. A small system with five or six radiators may be completed in three to four hours. A larger property with ten or more radiators and years of sludge accumulation can take the full working day.',
          },
          {
            question: 'Will a power flush fix cold spots on radiators?',
            answer: 'A power flush is specifically designed to address cold spots at the bottom of radiators, which are caused by settled iron oxide sludge. By circulating a chemical solution at high velocity, the process suspends the debris and flushes it out of the system. Cold spots caused by sludge typically disappear after a successful flush and the radiators heat evenly again.',
          },
          {
            question: 'Can I power flush my heating system myself?',
            answer: 'No. Power flushing requires a specialised pumping machine and chemical solutions that are not available to homeowners. The process also requires knowledge of how to isolate circuits, protect the boiler, and safely dispose of the contaminated water. It should only be carried out by a qualified central heating engineer.',
          },
          {
            question: 'How often should a central heating system be power flushed?',
            answer: 'There is no fixed interval, but systems that are well-maintained with a magnetic filter and inhibitor dose from the outset rarely need power flushing. Older systems that have never been treated may need one, and some engineers recommend a flush when installing a new boiler to protect the new unit from existing contamination in the pipework.',
          },
        ],
      },
      {
        slug: 'smart-thermostat-installation',
        name: 'Smart Thermostat Installation',
        tagline: 'Smart thermostat fitting across London',
        intro:
          'Smart Thermostat Installation London — most homeowners in West Hampstead and Hampstead who have had one fitted say they wish they had done it sooner. The setup takes about an hour and most people are controlling their heating from their phone before we leave. Smart thermostats learn your schedule, let you adjust the temperature from anywhere, and stop you heating empty rooms. Most households see a reduction in gas use within the first month. Smart Thermostat Installation is part of our Central Heating service.',
        sections: [
          {
            heading: 'Nest Thermostat Installation',
            body: 'A Nest Thermostat Installation gives you precise control over your heating from an app on your phone. The Nest thermostat learns your schedule over the first week, adjusts itself based on the time of day and whether you are home, and gives you a clear view of how much gas your heating is using. We carry out Nest thermostat fitting and app setup across West Hampstead, Hampstead, and the surrounding areas. The installation process involves removing your existing thermostat, checking your boiler is compatible with the Nest system, fitting the Nest base plate and unit, running the wiring to the boiler, and configuring the app on your phone. We walk you through the controls and show you how to set a schedule before we leave. Heating controls compatibility check is carried out before any installation begins — not all older boilers support smart thermostats without an additional relay or adapter.',
          },
          {
            heading: 'Hive Thermostat Installation',
            body: 'A Hive Thermostat Installation is a popular choice for homeowners who want smart heating control with a system that is straightforward to use. Hive operates through a hub that connects to your home broadband and communicates wirelessly with the thermostat and any smart radiator valves. Hive thermostat fitting and app setup follows the same process as Nest — compatibility check, fitting, wiring, app configuration, and a full walkthrough at the end. We carry out Hive installations across Ealing, Chiswick, and the wider West London area. Smart TRV installation is something we can add to a Hive system to give you individual room temperature control. Smart TRVs fit on existing radiator valves and let you set different temperatures for different rooms from the app.',
          },
          {
            heading: 'Heating Controls Upgrade',
            body: 'A Heating Controls Upgrade covers the full range of improvements to how your heating system is managed — from replacing an old mechanical programmer and room thermostat with a modern smart system, to adding smart TRVs to radiators, to installing weather compensation controls that adjust the boiler output based on the outside temperature. Older heating controls waste energy because they work in simple on/off cycles without any intelligence about whether the heating is actually needed. A heating controls upgrade changes that. We assess your existing setup, identify what needs replacing or adding, and fit the right system for your property and budget. We cover heating controls upgrades across Kilburn, Brondesbury, and North West London.',
          },
        ],
        metaTitle: 'Smart Thermostat Installation London | Abbey House',
        metaDescription:
          'Smart thermostat installation across London. Nest, Hive, and Tado fitted and configured by heating engineers.',
        keywords: ['smart thermostat installation London', 'Nest installation London', 'Hive thermostat London'],
        coverImage:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local smart thermostat installer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'How much can a smart thermostat save on heating bills?',
            answer: 'Installing heating controls including a smart thermostat could save around £110 a year according to the Energy Saving Trust. The actual saving depends on how well you currently control your heating. Homes that currently heat on a fixed schedule without any adjustment stand to save more than homes that are already managed carefully.',
          },
          {
            question: 'What is a thermostatic radiator valve and how does it work?',
            answer: 'A thermostatic radiator valve, or TRV, controls how much hot water flows through an individual radiator. It has a dial numbered 0 to 6 that you turn to set the temperature you want in that room. The valve senses the room temperature and automatically adjusts to allow more or less hot water through, reducing flow when the room reaches the set temperature and increasing it when the room cools.',
          },
          {
            question: 'Do I need a smart thermostat if I already have a programmer?',
            answer: 'A basic programmer only controls when your heating comes on and off. A smart thermostat adds temperature control, remote access via a smartphone app, and in many cases learning features that adjust your schedule automatically. Whether upgrading is worthwhile depends on how actively you use your existing controls and how much flexibility you want over your heating.',
          },
          {
            question: 'What heating controls does a boiler system need?',
            answer: 'Central heating systems with a boiler should include at least a programmer for time control, at least one room thermostat, and thermostatic radiator valves on radiators. Systems with a hot water cylinder also need a cylinder thermostat. Building regulations require all new and replacement systems to be interlocked so the boiler switches off when thermostats reach their set temperatures.',
          },
          {
            question: 'What is geo-fencing on a smart thermostat?',
            answer: 'Geo-fencing is a feature on some smart thermostats that uses your smartphone\'s location to detect when you leave or return home. It can automatically switch off your heating when you go out and turn it back on as you approach, so the house is warm when you arrive without heating an empty property. This feature is optional and can be turned off if you prefer not to share your location.',
          },
          {
            question: 'How do TRVs help reduce heating bills?',
            answer: 'TRVs allow you to set lower temperatures in rooms that do not need as much heat, such as spare bedrooms or hallways. By reducing the temperature in rooms you use less often, the system uses less energy overall. The Energy Saving Trust recommends setting each TRV to the lowest number that keeps the room comfortable.',
          },
          {
            question: 'What temperature should I set my thermostat to?',
            answer: 'The Energy Saving Trust recommends setting your room thermostat to the lowest comfortable temperature, which for most people is between 18 and 21 degrees Celsius. Reducing the thermostat by just one degree, from 22 to 21, can save around £90 a year on heating bills. You do not need to turn the thermostat up when it is colder outside — the boiler will reach the set temperature regardless.',
          },
        ],
      },
      {
        slug: 'radiator-services',
        name: 'Radiator Installation & Repair',
        tagline: 'Radiator installation and repair across London',
        intro:
          'Radiator Installation & Repair London — a lot of the calls we get from Kilburn and Brondesbury are for TRVs that have seized up over the summer. The radiator looks fine, the boiler is working, but one room stays cold. Nine times out of ten it is a stuck thermostatic valve. Most radiator problems have a simple cause and a quick fix. Whether you need a new radiator fitted, a seized valve replaced, or a cold radiator diagnosed, we can usually sort it in a single visit. Radiator Installation & Repair is part of our Central Heating service.',
        sections: [
          {
            heading: 'Radiator Installation',
            body: 'New Radiator Installation covers fitting a replacement panel of the correct size, adding a radiator to an existing room, or supplying and fitting a radiator in a new extension or conversion. Getting the radiator size right for the room is the first step. A radiator that is too small will not heat the room to a comfortable temperature even with the boiler running at full output. We calculate the correct BTU output for the room based on its size, insulation, and the number of external walls and windows, then specify a radiator that meets that requirement. We carry out new radiator installation across Kilburn, Brondesbury, and the wider North West London area. We supply the radiator and all fittings, drain down the relevant circuit, make the pipework connections, refill and repressurise the system, and bleed the radiator before we leave.',
          },
          {
            heading: 'Radiator Valve Replacement',
            body: 'Radiator Valve Replacement covers TRV replacement, lockshield valve replacement, and angled or straight valve replacements on existing radiators. A thermostatic radiator valve controls the temperature of an individual radiator by restricting the flow of hot water when the room reaches the set temperature. When a TRV seizes in the closed position, the radiator stays cold. When it seizes open, the radiator runs at full heat regardless of the room temperature, wasting energy. TRV replacement is a quick job in most cases — drain the relevant circuit, swap the valve, refill and test. Lockshield valve replacement follows the same process. We carry common radiator valve types in our vans so most replacements happen on the first visit across Ealing, Chiswick, and the surrounding areas.',
          },
          {
            heading: 'Radiator Not Heating Up',
            body: 'A Radiator Not Heating Up is one of the most common central heating complaints and has several possible causes. Cold at the top of the panel usually means air in the system — bleeding the radiator releases the trapped air and restores full circulation. Cold at the bottom of the panel usually means sludge — iron oxide debris that has settled and is blocking the lower section of the radiator. A cold radiator from top to bottom when the rest of the system is hot usually points to a stuck TRV or a closed lockshield valve. We carry out cold radiator diagnosis across Richmond, Hammersmith, and the wider London area. Radiator bleeding is part of every radiator visit where it is needed. We identify the cause, fix it, and test the radiator before we leave.',
          },
        ],
        metaTitle: 'Radiator Installation London | Abbey House Plumbing',
        metaDescription:
          'Radiator installation and repair across London. TRV replacement, cold spot diagnosis, and new radiator fitting.',
        keywords: ['radiator installation London', 'radiator repair London', 'TRV replacement London'],
        coverImage:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local radiator engineer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'How do I bleed a radiator?',
            answer: 'To bleed a radiator, place a towel and bowl under the bleed valve, then insert a radiator key and turn it a quarter to half turn anticlockwise. You will hear a hissing sound as air escapes. When the hissing stops and water begins to flow, close the valve again. On a combi boiler, check the system pressure afterwards and top up using the filling loop if the gauge has dropped below the recommended range.',
          },
          {
            question: 'Why is my radiator cold at the top?',
            answer: 'A radiator that is cold at the top but warm at the bottom has air trapped in the upper section. The air prevents hot water from filling the whole panel. Bleeding the radiator releases the trapped air and allows hot water to circulate fully. This is a straightforward job that does not require a plumber and can be done with a radiator key available from any hardware shop for around three pounds.',
          },
          {
            question: 'Why is my radiator cold at the bottom?',
            answer: 'A radiator that is warm at the top but cold at the bottom has sludge sitting in the lower section of the panel. This is iron oxide debris that has settled out of the water and blocks heat transfer in that area of the radiator. Bleeding the radiator will not fix this — the sludge needs to be removed either by flushing the individual radiator or by carrying out a power flush on the whole system.',
          },
          {
            question: 'What is a TRV and how does it work?',
            answer: 'A TRV, or thermostatic radiator valve, controls the flow of hot water into a radiator based on the temperature of the room. It has a numbered dial, usually from 0 to 6, where higher numbers allow more heat. The valve senses room temperature and automatically reduces flow when the room is warm enough, then opens again when the room cools. This helps avoid overheating individual rooms and saves energy.',
          },
          {
            question: 'Do radiator reflector panels actually work?',
            answer: 'Yes. Radiator reflector panels fit behind radiators on external walls and reflect heat back into the room rather than allowing the wall to absorb it. According to the Energy Saving Trust, installing them costs around £13 and can reduce heating bills by approximately £25 a year in Great Britain. They work best on uninsulated external walls where heat loss through the wall would otherwise be significant.',
          },
          {
            question: 'Why is only one radiator not heating up?',
            answer: 'If one radiator is cold while the rest of the system is working normally, the most likely cause is a stuck TRV, a closed lockshield valve, or a blockage specific to that radiator. A TRV seized in the closed position will prevent hot water entering the radiator regardless of the boiler output. Checking the TRV first is the quickest diagnostic step — turning it to the highest setting or removing the TRV head should allow the radiator to heat if the valve is the cause.',
          },
        ],
      },
      {
        slug: 'heating-system-repairs',
        name: 'Heating System Repairs',
        tagline: 'Central heating system repairs across London',
        intro:
          'Heating System Repairs London — a noisy heating system in a Marylebone flat turned out to be a failing circulating pump. The kind of problem that gets worse slowly, then stops working entirely on the coldest night of the year. Catching it early saved the homeowner a more expensive emergency callout. Not every central heating problem starts at the boiler. If your system is making sounds it did not make before, heating unevenly, or losing pressure repeatedly, we can find the cause. Heating System Repairs is part of our Central Heating service.',
        sections: [
          {
            heading: 'Heating Pump Replacement',
            body: 'The circulating pump is the heart of a central heating system. It moves water from the boiler around the radiators and back again. When a pump fails, the boiler fires up, the water heats, but nothing circulates. The result is a boiler that runs hot and cuts out on its overheat protection while the radiators stay cold. A failing pump often announces itself before it stops entirely — a noise that was not there before, intermittent circulation, or a system that takes much longer than usual to heat up. Heating pump replacement covers the full job: isolating the system, removing the old pump, fitting a new pump of the correct flow rate, and recommissioning the system. We carry out pump replacements across Marylebone, Paddington, and the wider London area. Most pump replacements are completed in two to three hours.',
          },
          {
            heading: 'Expansion Vessel Repair',
            body: 'An Expansion Vessel Repair addresses one of the most common reasons a combi or system boiler loses pressure repeatedly. The expansion vessel is a pressurised chamber that absorbs the increase in water volume when the system heats up. When the vessel fails — usually because the internal membrane has split or the charge pressure has dropped — the pressure relief valve opens to release the excess pressure instead. The result is a system that loses pressure every time it heats up and needs topping up every few days. Expansion vessel replacement restores normal operation. The job involves isolating the system, removing the old vessel, fitting a new correctly sized vessel, recharging it to the correct pre-charge pressure, and refilling and testing the system. We carry expansion vessels in our vans and carry out replacements across St John\'s Wood, Marylebone, and surrounding areas.',
          },
          {
            heading: 'Central Heating Balancing',
            body: 'Central Heating Balancing is the process of adjusting the flow rate through each radiator so that all rooms in the property reach their target temperature at the same time. On an unbalanced system, radiators close to the boiler get too much flow and heat up quickly while radiators at the far end of the circuit get less flow and take much longer to warm up. The fix is to restrict the lockshield valve on closer radiators to increase resistance and push more flow to the far ones. It sounds simple, but doing it correctly requires measuring the temperature differential across each radiator and adjusting the valves until the flow is equal throughout the system. We carry out central heating system balancing across Willesden Green, Cricklewood, and the surrounding areas. A balanced system heats every room at the same rate and reduces the boiler run time needed to achieve comfort temperatures.',
          },
        ],
        metaTitle: 'Heating System Repairs London | Abbey House Plumbing',
        metaDescription:
          'Central heating system repairs across London. Pump replacement, expansion vessel, zone valves, and system balancing.',
        keywords: ['heating system repair London', 'central heating repair London', 'heating engineer London'],
        coverImage:
          'https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local heating engineer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'Why is my central heating making a banging noise?',
            answer: 'Banging or knocking sounds from a central heating system are most often caused by kettling, where scale or sludge on the heat exchanger causes localised boiling and steam formation, or by a pump that is starting to fail. Pipes expanding and contracting as they heat up can also cause ticking or knocking sounds. If the noise is coming from the boiler itself it is worth having a Gas Safe engineer investigate before the fault develops further.',
          },
          {
            question: 'What does a heating pump do?',
            answer: 'The circulating pump moves hot water from the boiler through the pipework to the radiators and back again. Without a working pump, the boiler heats the water but nothing circulates — the boiler overheats and shuts down on its safety protection while the radiators remain cold. A failing pump often becomes audible before it stops completely, making a grinding or humming noise that was not previously present.',
          },
          {
            question: 'How do I know if my expansion vessel needs replacing?',
            answer: 'The most common sign of a failed expansion vessel is a boiler that loses pressure every time it heats up and needs topping up every few days. When the vessel\'s internal membrane fails, the pressure relief valve opens instead of the vessel absorbing the expansion. If your boiler pressure drops repeatedly after topping up, an expansion vessel fault is a likely cause and should be diagnosed by an engineer.',
          },
          {
            question: 'What is central heating balancing and why does it matter?',
            answer: 'Central heating balancing adjusts the flow rate through each radiator so that the whole system heats evenly. On an unbalanced system, radiators close to the boiler get too much flow and overheat, while distant radiators get less flow and stay cooler than they should. Balancing involves measuring the temperature differential across each radiator and adjusting the lockshield valves until the flow is equal throughout the circuit.',
          },
          {
            question: 'Why does my boiler keep losing pressure?',
            answer: 'A boiler that repeatedly loses pressure has a leak somewhere in the system or a failed expansion vessel. Common leak points include radiator valves, pipe joints, and the pressure relief valve itself. If the pressure drops slowly over days, start by checking all visible radiator valves and pipe connections for signs of moisture. If the pressure drops every time the boiler heats up, the expansion vessel is more likely to be the cause.',
          },
          {
            question: 'What causes kettling in a central heating system?',
            answer: 'Kettling is caused by limescale or sludge coating the heat exchanger inside the boiler. The scale acts as an insulator, causing the water in contact with the burner to overheat locally and form steam bubbles, which produce the rumbling or kettling sound. It is more common in hard water areas. Descaling the heat exchanger or carrying out a power flush on the system is the usual treatment.',
          },
        ],
      },
    ],
  },
  {
    slug: 'plumbing-services',
    name: 'Plumbing Services',
    tagline: 'Reliable plumbing services across London',
    intro:
      'Plumbing Services London — most problems start small and get expensive quickly. A slow drip under the kitchen sink in Hammersmith turned into a soaked cabinet and a warped floor in three weeks. The homeowner thought it could wait. It could not. That pattern plays out across London every week. Whether you need Shower Installation in a newly converted bathroom, a Tap, Toilet & Sink Plumber for a repair that keeps getting pushed back, or emergency help for something that cannot wait, the same principle applies: dealing with it early costs a fraction of what it costs to deal with later. We cover plumbing services across West London, North London, Ealing, and the wider London area.',
    sections: [
      {
        heading: 'Leak Detection & Repair',
        body: 'A visible leak is the easy kind. The ones that damage properties most are the ones you cannot see — water tracking through a wall cavity, pooling under a floor, or dripping above a ceiling before it eventually shows through. By the time water staining appears on a ceiling in Paddington or Marylebone, the damage behind it has usually been building for weeks. We use acoustic listening equipment to locate hidden leaks without cutting open walls unnecessarily. Once we have found the source, we give you a clear quote for the repair and carry it out on the same visit where possible. Leak Detection & Repair is one of the most valuable services we offer — finding a leak early stops a small problem from becoming an expensive one. The cost of detection is always less than the cost of the damage an undetected leak causes.',
      },
      {
        heading: 'Shower Installation',
        body: 'Shower Installation is one of the most requested plumbing jobs we carry out across London. The most common request is converting a bathroom that currently has only a bath into a wet room or shower room — a practical upgrade that also adds value to the property. We also fit replacement units when an existing shower has failed or a homeowner wants to upgrade to a better system. We install electric showers, mixer showers, and power showers across Notting Hill, Kensington, and the wider London area. Electric showers draw directly from the cold mains supply and heat water on demand, so they work independently of boiler pressure. Mixer showers give a better flow rate but depend on the boiler to supply adequate hot water pressure. We advise on the best option for your property before starting any work, then handle the full installation — tray, waste, enclosure, and all pipework.',
      },
      {
        heading: 'Tap, Toilet & Sink Plumber',
        body: 'Small plumbing jobs get put off because they do not feel urgent until suddenly they are. A dripping tap wastes thousands of litres of water a year and adds to your water bill whether you are metered or not. A running toilet can waste over 200 litres a day. Add those numbers up over a year and the cost is real. Tap, Toilet & Sink Plumber work covers everything from fitting a new mixer tap or kitchen tap to replacing a toilet cistern mechanism, installing a new basin, or repairing a leaking waste connection. We carry out tap and toilet repairs across Kilburn, Brondesbury, Ealing, and the wider London area. We carry common tap cartridges and cistern parts in our vans so most repairs are completed on the first visit. Tap installation takes less than an hour in most cases.',
      },
      {
        heading: 'Pipe Repair',
        body: 'Pipe Repair covers burst sections, leaking joints, corroded pipework, and connections that have failed over time. In London\'s older housing stock — particularly across Chiswick, Richmond, and similar areas — original copper pipework can be 40 to 60 years old. Older copper pipe that has not been disturbed can last a very long time, but joints and fittings tend to fail first, and any section that has been disturbed in a previous job is worth watching. If you have a burst pipe, turn off your stop tap immediately — it is usually under the kitchen sink or where the supply enters the building — and call us. We repair sections of pipework, replace corroded runs, and fix joints that have developed a slow weep. We work on copper, plastic, and push-fit systems and carry a wide range of fittings in our vans.',
      },
      {
        heading: 'Emergency Plumber',
        body: 'A burst pipe, a flooding appliance connection, or a leak coming through a ceiling needs an Emergency Plumber today. We cover emergency plumbing across London — same-day response for problems that cannot wait for a scheduled appointment. If water is actively coming into the property, the first step is always to find and turn off the stop tap. This limits the damage while you wait for us to arrive. Once we get there we assess the situation, explain what has happened, and carry out the repair. We do not charge a callout fee. You pay for the work itself. We cover West London, North West London, and the surrounding areas for same-day emergency plumbing and aim to attend within a few hours of your call. We carry out all emergency plumbing repairs on the first visit where possible.',
      },
    ],
    metaTitle: 'Plumbing Services London | Abbey House Plumbing',
    metaDescription:
      'Plumbing services across London. Shower installation, tap repair, toilet fitting, and bathroom plumbing.',
    keywords: ['plumber London', 'plumbing services London', 'plumbing repairs London'],
    coverImage:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    areasHeading: 'Find your local plumber',
    areasServed: AREAS_SERVED,
    services: [
      {
        slug: 'shower-installation',
        name: 'Shower Installation',
        tagline: 'Shower installation across London',
        intro:
          'Shower Installation London — we fit a lot of showers across Paddington and Maida Vale. Conversions from bath-only bathrooms and replacements for units that have stopped working are the most common jobs. Most electric shower installations take half a day. A full shower room conversion — tray, enclosure, and all pipework — usually takes a full day. We install electric showers, mixer showers, and power showers across London. Shower Installation is part of our Plumbing Services.',
        sections: [
          {
            heading: 'Electric Shower Installation',
            body: 'An Electric Shower Installation is the most straightforward type of shower fitting. An electric shower connects directly to the cold mains supply and heats the water itself as it flows through, so it works independently of your boiler and hot water system. If your boiler pressure is low, an electric shower will still give you a consistent temperature and flow. Electric shower installation covers fitting the shower unit, connecting it to the cold water supply, and — because electric showers draw significant current — the electrical connection, which must be carried out by or in conjunction with a qualified electrician. We fit electric showers across Paddington, Maida Vale, and the wider North West London area. Most electric shower installations take between two and four hours depending on the location of the cold supply and any pipework routing needed. Shower tray and enclosure plumbing can be added if you are fitting a new shower area at the same time.',
          },
          {
            heading: 'Power Shower Fitting',
            body: 'A Power Shower Fitting installs a pump-assisted shower that draws from both the hot and cold supplies and boosts the flow rate to give a stronger spray than a standard mixer shower. Power showers are particularly popular in older London properties where gravity-fed hot water systems produce low pressure at the showerhead. The pump increases the flow rate noticeably. Power shower installation involves connecting to both hot and cold supplies, fitting the pump unit either within the shower enclosure or in an airing cupboard, and connecting the shower head and controls. We carry out power shower fitting across Camden Town, Kentish Town, and the wider London area. Shower repair and replacement is also something we handle — if your existing power shower has lost pressure, is leaking, or has stopped working, we can usually diagnose and repair it on the same visit.',
          },
          {
            heading: 'Shower Repair',
            body: 'Shower Repair covers a range of problems — a shower that has lost pressure or temperature control, a leaking shower tray or enclosure, a faulty shower valve, a shower pump that has stopped working, or an electric unit that trips the circuit. Most shower faults have a straightforward cause. A loss of temperature control on a mixer shower often means the thermostatic cartridge needs replacing. A shower pump that runs but does not boost pressure usually has a blocked filter. A leaking shower tray is often a failed sealant joint rather than a structural problem. We diagnose and repair shower faults across Notting Hill, Kensington, and the surrounding areas. Shower repair and replacement covers everything from a quick cartridge swap to a full unit replacement when the existing shower has reached the end of its serviceable life.',
          },
        ],
        metaTitle: 'Shower Installation London | Abbey House Plumbing',
        metaDescription:
          'Shower installation across London. Electric, mixer, and power showers fitted by experienced plumbers.',
        keywords: ['shower installation London', 'electric shower fitting London', 'shower repair London'],
        coverImage:
          'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local shower installer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'Do I need a plumber or electrician to install a shower?',
            answer: 'It depends on the shower type. A mixer shower requires a plumber to connect it to the hot and cold supply. An electric shower requires both a plumber for the water connection and a Part P registered electrician for the electrical connection, as it involves a dedicated circuit from the consumer unit. Some plumbers hold both qualifications, but it is important to check before booking.',
          },
          {
            question: 'What is the difference between an electric shower and a mixer shower?',
            answer: 'An electric shower heats cold mains water directly inside the unit as it flows through, so it works independently of the boiler and is not affected by hot water demand elsewhere in the house. A mixer shower draws on the boiler\'s hot water supply, giving a better flow rate and a more consistent temperature but dependent on having adequate hot water pressure from the boiler or cylinder.',
          },
          {
            question: 'How long does it take to install a shower?',
            answer: 'A straightforward electric shower replacement, where an existing shower unit is swapped for a new one using the existing wiring and plumbing connections, typically takes two to four hours. A new shower installation with new pipework, a shower tray, waste, and enclosure is a larger job that can take a full day or more depending on the complexity of the plumbing route.',
          },
          {
            question: 'How do I know if my water pressure is suitable for a power shower?',
            answer: 'A power shower uses a built-in pump to boost the flow of hot and cold water from the supply. It requires a gravity-fed hot water system with a cold water tank in the loft and a hot water cylinder — it will not work with a combi boiler. If your home has a combi boiler, a mixer shower or electric shower is more suitable. An engineer can test your water pressure before recommending the right shower type.',
          },
          {
            question: 'What is a thermostatic shower and is it worth having?',
            answer: 'A thermostatic shower valve maintains a set water temperature and prevents sudden changes when someone uses another tap or flushes a toilet elsewhere in the house. It reacts to changes in supply temperature and adjusts the mix automatically. This is particularly useful in homes with fluctuating water pressure and is considered a safety feature in households with young children or elderly occupants.',
          },
          {
            question: 'Can any plumber install a shower or do they need to be registered?',
            answer: 'Plumbing work on water supply connections does not legally require registration in England and Wales, but the electrical connections for an electric shower must be carried out by a Part P registered electrician or a dual-qualified engineer. For peace of mind, using a plumber who is a member of an approved contractor scheme such as WaterSafe means their work meets water regulations standards.',
          },
        ],
      },
      {
        slug: 'bathroom-plumbing',
        name: 'Tap, Toilet & Sink Plumber',
        tagline: 'Bathroom plumbing repairs across London',
        intro:
          'Tap, Toilet & Sink Plumber London — a dripping tap in Willesden Green was wasting close to 5,000 litres of water a month. The homeowner had been ignoring it for a year. A new cartridge and 45 minutes fixed it. Most bathroom plumbing repairs are like that. The problem feels minor, it gets put off, and when it is finally looked at, the fix takes less than an hour. We carry out tap, toilet, and sink repairs across Willesden Green, Hammersmith, and the wider London area. Tap, Toilet & Sink Plumber is part of our Plumbing Services.',
        sections: [
          {
            heading: 'Tap Installation & Repair',
            body: 'Tap Installation & Repair covers fitting new kitchen or bathroom taps, repairing dripping taps, replacing tap cartridges and washers, and swapping out old taps for a more modern design. A dripping tap is usually a worn cartridge or washer, and replacement takes under an hour in most cases. We carry common tap cartridges in our vans so most dripping tap repairs are completed on the first visit without needing to order parts. Tap installation covers both replacement and new fitting — swapping an old pair of pillar taps for a modern mixer tap, for example, or fitting a tap to a new basin or kitchen sink. We work across Willesden Green, Colindale, and the wider North West London area. Before fitting a new tap we check the supply valves work correctly so there is a way to isolate the supply for any future maintenance.',
          },
          {
            heading: 'Toilet Installation & Repair',
            body: 'Toilet Installation & Repair covers fitting a new toilet suite, replacing a toilet cistern, repairing a running cistern, fixing a leaking pan or base connection, and replacing flush mechanisms that have worn out or failed. A running toilet — one that keeps filling or constantly trickles into the pan — is one of the most wasteful plumbing faults in a property. A toilet running continuously can waste 200 litres or more per day. In most cases the fault is a worn flap valve or a float valve that is no longer seating correctly. Running toilet repair involves replacing the internal cistern components, which takes around 30–45 minutes. We carry out toilet installation and repair across Hammersmith, Fulham, and the wider West London area. Toilet installation covers both like-for-like replacement and fitting a new toilet suite in a bathroom renovation.',
          },
          {
            heading: 'Sink Repair',
            body: 'Sink Repair covers leaking waste connections, cracked or damaged basins, loose or corroded supply connections under the sink, blocked wastes, and full basin replacement when the existing unit is beyond repair or needs upgrading. A slow drain under the kitchen sink is often a blocked waste trap rather than a blocked pipe. The trap — the U-shaped section under the sink that holds water and prevents drain smells — collects food debris, grease, and other material over time and can become partially blocked. Removing and cleaning the trap is a 15-minute job. A leaking basin connection is usually a failed compression fitting or a corroded supply pipe that needs a short section replaced. Sink repair and basin replacement covers the full range of work from a quick joint repair to a complete basin, pedestal, and tap replacement. We work across Chelsea, Kensington, and the wider London area.',
          },
        ],
        metaTitle: 'Tap, Toilet & Sink Plumber London | Abbey House',
        metaDescription:
          'Tap, toilet, and sink plumbing across London. Repairs and installations completed same day where possible.',
        keywords: ['tap repair London', 'toilet installation London', 'sink plumber London'],
        coverImage:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local plumber for taps, toilets and sinks',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'Can I replace a tap myself or do I need a plumber?',
            answer: 'Replacing a tap is a job many homeowners can manage if they are comfortable turning off the water supply and undoing compression fittings. However, if the isolation valves under the sink are seized, the supply pipes are corroded, or the new tap requires different connections, the job can become more involved. A plumber can usually complete a tap replacement in under an hour and will spot and address any related issues at the same time.',
          },
          {
            question: 'Why is my tap dripping and how do I fix it?',
            answer: 'A dripping tap is almost always caused by a worn cartridge or washer inside the tap body. As the tap is used repeatedly over years, the rubber or ceramic seating material wears and no longer forms a watertight seal when the tap is closed. The fix is to replace the cartridge or washer. The specific type depends on whether you have a traditional pillar tap, a mixer tap, or a ceramic disc tap.',
          },
          {
            question: 'How long does it take to install a new toilet?',
            answer: 'Installing a like-for-like toilet replacement, where the new unit uses the same floor fixing positions and supply connections, typically takes two to three hours. A new toilet installation in a different location or with different pipe routing takes longer. The engineer will need to isolate the water supply, remove the old toilet, make any necessary adjustments to the supply and waste connections, and fit and test the new unit.',
          },
          {
            question: 'What causes a toilet to keep running?',
            answer: 'A toilet that keeps running after flushing usually has a worn flap valve that no longer seals the outlet from the cistern to the pan, or a float valve that is not shutting off the water supply when the cistern is full. Both are inexpensive internal cistern components. A continuously running toilet can waste over 200 litres of water per day, so it is worth fixing promptly. Replacing the internal components typically takes 30 to 45 minutes.',
          },
          {
            question: 'Do I need to turn off the water to fix a dripping tap?',
            answer: 'Yes. To replace a tap cartridge or washer you need to isolate the water supply to that tap. Most modern taps have isolation valves on the supply pipes under the sink that can be turned with a flat-headed screwdriver. If these valves are absent or seized, the water will need to be turned off at the main stopcock. Always test that the isolation valve works before starting the repair.',
          },
          {
            question: 'What should I do if my sink is leaking underneath?',
            answer: 'If the leak is coming from the waste pipe or trap under the sink, check whether the connections are tight. The trap — the U-shaped section — can often be hand-tightened if it has worked loose. If the leak is coming from the supply pipes or compression fittings, turn off the isolation valves and call a plumber. Water dripping inside a cabinet can cause significant damage to the cabinet floor and the structure below it if left.',
          },
          {
            question: 'How do I know if a plumber is approved?',
            answer: 'In the UK, plumbers who are members of WaterSafe or similar approved contractor schemes have been vetted and their work is checked against water regulations standards. You can search for approved contractors on the WaterSafe website by entering your postcode. Membership of a scheme does not replace checking reviews and references, but it provides an independent assurance that the plumber meets a defined standard.',
          },
        ],
      },
    ],
  },
  {
    slug: 'gas-services',
    name: 'Gas Services',
    tagline: 'Gas engineering and safety services across London',
    intro:
      'Gas Services London — we get calls from Westminster and Kensington every week from landlords who did not realise their CP12 had expired until a letting agent flagged it. A gas safety certificate is a legal requirement, not a nice-to-have. Getting it sorted takes less than an hour. We also get calls from homeowners who can smell something and are not sure whether to worry. Gas is one area where calling quickly is the right decision. Whether you need a Gas Engineer for a suspected leak, a Gas Safety Certificate for a rental property, or Gas Appliance Installation for a new cooker or hob, the work needs to be done by a registered engineer. We provide gas services across London, including North London, West London, and the surrounding areas.',
    sections: [
      {
        heading: 'Gas Engineer',
        body: 'If you can smell gas in your property, open windows, do not use any electrical switches, leave the building, and call the National Gas Emergency Service on 0800 111 999. Once the immediate situation is controlled, call a Gas Engineer to carry out a gas tightness test, find the source of the leak, and carry out the repair. We provide gas engineering across London, including Paddington, Marylebone, Camden Town, and the wider area. Our engineers carry gas detection equipment on every job. We carry out gas tightness testing, emergency gas isolations, gas pipe repairs, and appliance safety checks. A Gas Engineer is also the right person to call when you are having new gas pipework installed, moving a gas point, or extending a gas supply to a new appliance. Gas appliance isolation is part of the process whenever we make a repair near an existing appliance.',
      },
      {
        heading: 'Gas Leak Detection & Repair',
        body: 'Gas leaks are not always immediately obvious. A major leak has a strong smell and requires urgent action. A slow leak from a corroded fitting or a poorly made connection might show up as a faint smell that comes and goes, an unexplained increase in your gas bill, or a pilot light that keeps going out. If you notice any of these, call us. Gas Leak Detection & Repair starts with a full gas tightness test to confirm whether the pressure in your system holds. If it does not, we use gas sniffers and detection equipment to find the source. Once found, we repair the leak — whether that means replacing a section of pipe, fitting a new joint, or isolating a faulty appliance — and retest the system before we leave. We cover gas leak detection across North West London, West Kilburn, Willesden Green, and the surrounding areas.',
      },
      {
        heading: 'Gas Safety Certificate',
        body: 'Every rented property needs a Gas Safety Certificate — a CP12 — renewed every 12 months. Landlords are legally required to have a registered engineer inspect all gas appliances, flues, and pipework in the property and to provide tenants with a copy of the certificate within 28 days of the check. Missing a renewal is a legal risk as well as a practical one. We issue Gas Safety Certificates across London, including the London Borough of Brent, Willesden Green, and Cricklewood, where we work with letting agents and individual landlords managing everything from single flats to multi-unit HMOs. We can usually book within a week of your call and issue the Gas Safety Certificate (CP12) on the day of the inspection. For HMOs with multiple appliances, we carry out the full multi-appliance inspection in a single visit.',
      },
      {
        heading: 'Gas Appliance Installation',
        body: 'Gas Appliance Installation covers fitting new gas cookers, installing gas hobs, connecting gas fires, and replacing flexible hoses on existing appliances. All gas appliance work in the UK must be carried out by a registered engineer — it is not something that can be done legally by a general handyman or DIY. We install gas appliances across North London, Belsize Park, and the wider London area. A gas hob installation sounds simple but often involves checking the existing gas supply capacity at the point of use, extending the pipework to the correct position, fitting a new gas cock, and making the final connection. We handle the full job and carry out a tightness test on completion. Flexible gas hose replacement is something we carry out as a standalone job — hoses have a limited serviceable life and should be checked every two years.',
      },
      {
        heading: 'Landlord Gas Safety',
        body: 'Landlord Gas Safety sits where legal compliance meets genuine risk management. The annual gas safety inspection is a legal requirement, but the check itself also catches appliances that are operating unsafely, flues that have become partially blocked, and pipework that has developed a slow leak. In rental properties, where tenants may not notice or report minor issues, this annual check is the landlord\'s main defence against a gas-related incident. We work with landlords and letting agents across Westminster, Chelsea, Fulham, and throughout London. We carry out the full annual gas safety inspection, issue the Gas Safety Certificate (CP12) on the day, carry out any remedial work on the spot where possible, and can arrange direct access coordination with tenants to make the process straightforward. Carbon monoxide alarm fitting is included as part of the landlord safety visit for properties that do not already have alarms in place.',
      },
    ],
    metaTitle: 'Gas Services London | Abbey House Plumbing',
    metaDescription:
      'Gas services across London. Gas engineers, safety certificates, and appliance installation by registered engineers.',
    keywords: ['gas services London', 'gas engineer London', 'gas safety certificate London'],
    coverImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    areasHeading: 'Find your local gas engineer',
    areasServed: AREAS_SERVED,
    services: [
      {
        slug: 'gas-engineer',
        name: 'Gas Engineer',
        tagline: 'Gas engineers across London',
        intro:
          'Gas Engineer London — if you can smell gas in your property, do not wait. Open windows, avoid switches, leave the building, and call the National Gas Emergency Service on 0800 111 999 first. Then call us. We cover gas engineering across Westminster, Kensington, and the wider London area. Our engineers carry gas detection equipment on every callout and can carry out full gas tightness testing, pipe repairs, and appliance isolation on the same visit. Gas Engineer is part of our Gas Services.',
        sections: [
          {
            heading: 'Gas Leak Detection',
            body: 'Gas Leak Detection starts with establishing whether a leak exists and, if so, where it is. A gas tightness test checks whether the pressure in your gas supply pipework holds steady over a set period. If the pressure drops, there is a leak somewhere in the system. We then use gas detection equipment — electronic sniffers that detect trace amounts of gas — to locate the source with precision. Gas leak detection and repair covers the full process from tightness testing through to finding the leak and carrying out the repair. We cover gas leak detection across Westminster, Paddington, Marylebone, and the wider London area. If you can smell gas but are not sure if the smell is strong enough to warrant a full emergency response, calling us is the right decision. We will carry out a tightness test and give you a clear answer about whether there is a problem.',
          },
          {
            heading: 'Emergency Gas Engineer',
            body: 'An Emergency Gas Engineer attends situations where a gas fault cannot wait for a scheduled appointment — a gas smell that appeared suddenly, a gas supply that has been shut off and needs restoring, a boiler or appliance that has triggered a gas isolation on a safety device, or a suspected carbon monoxide incident. We provide emergency gas callouts across London, including Kensington, Chelsea, and the surrounding areas. When we arrive we assess the situation, carry out any immediate safety actions needed — gas pipe repair or appliance isolation — and give you a full account of what we found and what we have done. Gas appliance isolation is often the first step in an emergency situation where we need to make the property safe before carrying out a full repair. We carry the equipment and parts needed for common emergency gas repairs on every callout.',
          },
          {
            heading: 'Gas Safe Registered Engineer',
            body: 'All gas work in the UK must be carried out by a Gas Safe Registered Engineer. Gas Safe registration is the legal requirement that gives an engineer the authority to work on gas pipework and appliances. When we attend a job, the engineer carries a Gas Safe ID card, which you can ask to see. The card confirms the engineer\'s name, their registration number, and the type of gas work they are qualified to carry out. You can also check any engineer\'s registration online at the Gas Safe Register website. Gas tightness testing, gas pipe repair, emergency gas callouts, and gas appliance work all require a Gas Safe registered engineer. We cover gas engineering across North London, North West London, and the wider London area. Any gas work carried out by an unregistered person is illegal and may invalidate your home insurance.',
          },
        ],
        metaTitle: 'Gas Engineer London | Abbey House Plumbing',
        metaDescription:
          'Gas engineers across London. Gas leak detection, emergency callouts, and gas tightness testing.',
        keywords: ['gas engineer London', 'gas leak London', 'emergency gas engineer London'],
        coverImage:
          'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local gas engineer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'What should I do if I smell gas at home?',
            answer: 'If you smell gas, open windows and doors to ventilate the property, do not turn any electrical switches on or off, do not use a phone inside the building, and leave the property. Once outside, call the National Gas Emergency Service on 0800 111 999. Once the situation has been made safe by the emergency service, a Gas Safe registered engineer should carry out a gas tightness test and inspect the property before gas appliances are used again.',
          },
          {
            question: 'Does a gas engineer have to be Gas Safe registered?',
            answer: 'Yes. All gas work in the UK must be carried out by an engineer registered with the Gas Safe Register. It is a legal requirement under the Gas Safety (Installation and Use) Regulations 1998. Using an unregistered person to carry out gas work is illegal and can result in criminal prosecution, invalidation of home insurance, and a serious risk to the occupants of the property.',
          },
          {
            question: 'Can all Gas Safe engineers do all types of gas work?',
            answer: 'No. Gas Safe registration covers specific categories of gas work, and each engineer is qualified only for the categories shown on their Gas Safe ID card. For example, an engineer qualified for natural gas domestic boilers may not be qualified for LPG appliances or commercial catering equipment. Always check that the engineer\'s card shows the relevant category for the work you need.',
          },
          {
            question: 'How do I check if a gas engineer is registered?',
            answer: 'You can check an engineer\'s registration on the Gas Safe Register website by entering their registration number or the name of their employer. You should also ask to see the engineer\'s Gas Safe ID card before any work begins. The card shows their name, registration number, and the categories of gas work they are qualified to carry out, along with an expiry date.',
          },
          {
            question: 'What is a Gas Safe ID card and what should I check on it?',
            answer: 'A Gas Safe ID card is the card every registered gas engineer is required to carry. It shows the engineer\'s name, photograph, unique registration number, the categories of gas work they are licensed to carry out, and the expiry date of the registration. You should check that the card has not expired and that the categories listed include the type of work being carried out on your property.',
          },
          {
            question: 'What happens if gas work is done by an unregistered engineer?',
            answer: 'Gas work carried out by an unregistered person is illegal under UK law. The person carrying out the work and in some cases the person who commissioned it can face criminal prosecution. The work itself will not meet safety standards, will not be certifiable, and may make the property unsafe. Home insurance policies typically do not cover damage or liability arising from gas work carried out by an unregistered person.',
          },
        ],
      },
      {
        slug: 'gas-safety-certificate',
        name: 'Gas Safety Certificate',
        tagline: 'CP12 gas safety certificates for landlords across London',
        intro:
          'Gas Safety Certificate London — we cover a lot of rental properties across the London Borough of Brent and Willesden Green. Letting agents book us for CP12 inspections before new tenancies start and for annual renewals during existing ones. We can usually fit a same-week appointment and issue the certificate on the day. A Gas Safety Certificate is a legal requirement for any rented property in the UK, not an optional extra. Missing a renewal puts the landlord in breach of gas safety regulations. Gas Safety Certificate is part of our Gas Services.',
        sections: [
          {
            heading: 'CP12 Certificate',
            body: 'A CP12 Certificate is the formal record of a gas safety inspection carried out on a rented property. The CP12 is named after the form used to record the inspection — it lists every gas appliance in the property, the results of the safety checks carried out on each one, and the engineer\'s assessment of whether each appliance is safe to use. The certificate must be issued by a Gas Safe registered engineer. Under gas safety regulations, landlords must give tenants a copy of the CP12 within 28 days of the inspection and keep the record for at least two years. The annual landlord gas safety inspection we carry out covers all gas appliances — boilers, gas fires, hobs, and any other gas-burning equipment in the property. We issue the CP12 certificate issued same day so you have the documentation immediately. We cover CP12 inspections across the London Borough of Brent, Willesden Green, and the surrounding areas.',
          },
          {
            heading: 'Landlord Gas Safety Check',
            body: 'A Landlord Gas Safety Check covers more than just the boiler. Every gas appliance in the property — boiler, gas fire, gas cooker or hob, and any other gas-burning appliance — must be included in the annual inspection. The check covers whether the appliance burns gas correctly, whether the flue or exhaust route is clear and working, whether there is adequate ventilation for safe combustion, and whether all safety controls are functioning. Letting agent gas compliance covers the documentation requirements that letting agents need to manage on behalf of their clients — we work with agencies across Marylebone, Paddington, and the wider London area. We can send reminders when renewals are due and accommodate tenant schedules for access. Carbon monoxide alarm fitting is included as part of every landlord gas safety check where alarms are not already in place.',
          },
          {
            heading: 'HMO Gas Inspection',
            body: 'An HMO Gas Inspection covers the additional requirements that apply to Houses in Multiple Occupation. HMOs typically have more gas appliances than a standard rental property — multiple boilers or a central system, gas appliances in communal areas, and potentially gas hobs in individual kitchen areas. The inspection must cover all of them. We carry out HMO multi-appliance inspections across London, including North West London, Cricklewood, and Colindale, where a significant proportion of rental stock is in HMO format. The process is the same as a standard landlord gas safety check but applied to every gas appliance in the building. For large HMOs we coordinate the inspection schedule with the property manager or agent to minimise disruption to tenants. Remedial work and re-inspection covers situations where an appliance fails the check — we carry out the necessary repair and re-inspect on the same visit where possible so the certificate can be issued without an additional appointment.',
          },
        ],
        metaTitle: 'Gas Safety Certificate London | Abbey House Plumbing',
        metaDescription:
          'CP12 gas safety certificates for landlords across London. Issued same day. Covers all appliances.',
        keywords: ['gas safety certificate London', 'CP12 London', 'landlord gas safety London'],
        coverImage:
          'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local gas safety inspector',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'What must a landlord gas safety record contain?',
            answer: 'Under gas safety regulations, a landlord gas safety record must include the date of the check, the address of the property, the landlord\'s name and address or that of their agent, a description and location of every appliance or flue checked, any defects identified, remedial action taken, confirmation that the required checks were carried out, and the name, signature, and Gas Safe registration number of the engineer.',
          },
          {
            question: 'How long must a landlord keep gas safety records?',
            answer: 'Landlords must keep gas safety records for at least two years from the date of the inspection. If a landlord uses the flexibility to carry out checks up to two months early while maintaining the original annual deadline, records must be kept until two further gas safety checks have been completed.',
          },
          {
            question: 'When must a landlord give a gas safety record to a new tenant?',
            answer: 'A landlord must give a copy of the most recent gas safety record to a new tenant before they move into the property. For existing tenants, a copy of each new record must be provided within 28 days of the inspection. For short-term tenants staying for fewer than 28 days, a legible copy may be displayed prominently in the property instead.',
          },
          {
            question: 'Can a gas safety record be sent electronically to a tenant?',
            answer: 'Yes, provided the tenant has agreed to receive documents electronically. The electronic record must be reproducible in hard copy form and must be secure from loss or interference. The record must also clearly identify the engineer who carried out the check, either through an electronic signature, a scanned signature, or their name and licence number. A paper copy must be provided if a tenant requests one.',
          },
          {
            question: 'What happens if a landlord does not carry out a gas safety check?',
            answer: 'Failing to carry out an annual gas safety check is a breach of the Gas Safety (Installation and Use) Regulations 1998. Landlords who fail to comply can face prosecution, unlimited fines, and in serious cases imprisonment. It also exposes tenants to potential risk from unsafe gas appliances. A landlord cannot serve a valid Section 21 notice if gas safety obligations have not been met.',
          },
          {
            question: 'Can a landlord carry out the gas safety check early?',
            answer: 'Yes. Under a flexibility rule introduced in 2018, landlords can have the annual check carried out up to two months before the current record expires while keeping the original annual renewal date. This allows landlords to schedule checks at a convenient time without losing the renewal date for future years. The early check date must be documented and the records kept accordingly.',
          },
          {
            question: 'What action must a landlord take if a fault is found during a gas safety check?',
            answer: 'If an unsafe gas appliance or flue is found during the inspection, the engineer will classify it and may immediately disconnect it from the gas supply if it poses an immediate danger. The landlord is responsible for arranging and funding any remedial repairs. The gas safety record should be issued on the day of the inspection noting the defect, and a further inspection may be required once the repair is complete.',
          },
        ],
      },
      {
        slug: 'gas-appliance-installation',
        name: 'Gas Appliance Installation',
        tagline: 'Gas appliance installation across London',
        intro:
          'Gas Appliance Installation London — a new gas hob in a Notting Hill kitchen renovation sounds simple until you find that the existing gas point is in the wrong place and the pipework needs extending. We handle gas meter relocations, new gas point installations, and full appliance fitting across Notting Hill, Paddington, and the wider London area. All gas appliance installation work must be carried out by a registered engineer. Gas Appliance Installation is part of our Gas Services.',
        sections: [
          {
            heading: 'Gas Cooker Installation',
            body: 'Gas Cooker Installation covers connecting a freestanding gas cooker to an existing gas supply point, fitting a new gas point for a cooker in a new location, or replacing a gas connection that uses an old bayonet fitting with a proper rigid connection. Freestanding gas cookers connect through a flexible hose — a corrugated stainless steel connector between the gas cock and the cooker inlet. The hose must be a specific certified type and must be the correct length. Flexible gas hose replacement is something we carry out on existing cookers as well as new installations — hoses should be checked every two years and replaced every five. We carry out gas cooker installation across Notting Hill, Paddington, and the wider North West London area. Before connecting any gas cooker we carry out a gas tightness test on the supply to confirm there are no existing leaks in the pipework.',
          },
          {
            heading: 'Gas Hob Installation',
            body: 'Gas Hob Installation covers fitting a built-in gas hob into a kitchen counter as part of a renovation or replacement project. A gas hob installation involves cutting the aperture in the worktop if it is a new installation, connecting the gas supply from the dedicated gas cock to the hob inlet, making the electrical connection for the ignition and any controls, testing the gas tightness, and commissioning all burners. We install gas hobs across Chelsea, Kensington, and the wider London area. Gas meter relocation is sometimes needed when a kitchen is being reconfigured and the existing gas meter position conflicts with the new layout — we handle gas meter relocations where the gas supplier permits them. For hob installations in new kitchen positions, we install the dedicated gas point and gas cock as part of the job, so everything is in the right place for the hob connection.',
          },
          {
            heading: 'Gas Fire Service & Repair',
            body: 'Gas Fire Service & Repair covers the annual servicing of gas fires, repairing gas fires that have stopped working or are not burning correctly, and replacing gas fires that have reached the end of their life. Gas fires in London properties range from modern glass-fronted balanced flue units to older open-fronted inset fires that depend on the chimney for their flue. Both types need annual servicing. During a gas fire service we check the ignition, the burner, the controls, and the flue or exhaust route. We check for carbon monoxide and confirm the fire is burning at the correct gas pressure. We carry out gas fire service and repair across Richmond, Hammersmith, and the wider London area. If your gas fire is producing a yellow or orange flame rather than a blue one, or is giving off a smell when burning, call us — these are signs that combustion is not working correctly and the appliance needs to be checked.',
          },
        ],
        metaTitle: 'Gas Appliance Installation London | Abbey House',
        metaDescription:
          'Gas appliance installation across London. Gas cookers, hobs, and fires installed by registered engineers.',
        keywords: ['gas appliance installation London', 'gas cooker installation London', 'gas hob fitting London'],
        coverImage:
          'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        areasHeading: 'Find your local gas appliance installer',
        areasServed: AREAS_SERVED,
        faqs: [
          {
            question: 'Do I need a Gas Safe engineer to install a gas cooker?',
            answer: 'Yes. Connecting any gas appliance to a gas supply must be carried out by an engineer registered with the Gas Safe Register. This includes gas cookers, gas hobs, gas fires, and gas boilers. Connecting a gas appliance yourself or using an unregistered person is illegal under the Gas Safety (Installation and Use) Regulations 1998 and poses a serious safety risk.',
          },
          {
            question: 'What certificates should I receive after a gas appliance is installed?',
            answer: 'After a gas appliance is installed you should receive a commissioning document confirming the appliance has been tested and is operating correctly, and where required, a Building Regulations Compliance Certificate. The engineer should also carry out and document a gas tightness test on the supply pipework. Keep all documentation in a safe place as it may be needed if you sell the property.',
          },
          {
            question: 'What is a Building Regulations Compliance Certificate for a gas appliance?',
            answer: 'A Building Regulations Compliance Certificate is issued for notifiable gas work to confirm it has been carried out to the standard required by Building Regulations. A Gas Safe registered engineer or their employer can self-certify notifiable gas work, which means they notify the local authority on your behalf and issue the certificate. A new boiler installation is a common example of notifiable gas work.',
          },
          {
            question: 'How do I check a gas engineer is qualified to install my appliance?',
            answer: 'Ask to see the engineer\'s Gas Safe ID card before work starts. The card lists the categories of gas work the engineer is licensed to carry out. You can also verify their registration on the Gas Safe Register website using their registration number or their employer\'s business name. Make sure the category on the card matches the type of appliance being installed.',
          },
          {
            question: 'Should all gas appliances be serviced annually?',
            answer: 'Yes. All gas appliances should be serviced at least once a year by a Gas Safe registered engineer. Regular servicing keeps appliances running safely and efficiently, extends their working life, and allows the engineer to identify and address wear or faults before they become serious. For landlords, annual servicing of all gas appliances in a rented property is a legal requirement.',
          },
          {
            question: 'Can a plumber or electrician replace a non-gas part inside a boiler casing?',
            answer: 'No. Any person working on components inside a boiler casing must be Gas Safe registered, even if the part being replaced is not itself a gas component. The boiler casing contains gas pipework and components, and opening it constitutes gas work under the regulations. Only a Gas Safe registered engineer is legally authorised to work inside the boiler casing.',
          },
          {
            question: 'What should I check before an engineer starts gas work in my home?',
            answer: 'Before any gas work begins, ask to see the engineer\'s Gas Safe ID card and check that it has not expired and that it covers the relevant category of work. You can also verify the registration on the Gas Safe Register website. Check that the engineer explains what work will be carried out and what documentation you will receive at the end of the job, including the gas tightness test result and any certificates.',
          },
        ],
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
