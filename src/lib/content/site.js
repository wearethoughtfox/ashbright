/**
 * Site-wide facts. Everything that used to live in Jekyll's _config.yml.
 */
export const site = {
  name: 'Ashbright',
  legalName: 'Ashbright DWC-LLC',
  url: 'https://www.ashbright.com',
  tagline: 'Strategic communication', // TOM (2017 _config.yml)
  // TOM: meta description from the 2017 site
  description:
    'Ashbright is a strategic communications firm that provides counsel to governments, companies and successful individuals.',
  // TOM, edited: footer line
  footerLine: 'Strategic communications counsel to governments, companies and successful individuals.',
  email: 'ta@ashbright.com',
  tel: '+971502206916',
  telDisplay: '+971 50 220 6916',
  founded: 2017,
  locations: ['London', 'Dubai'],
  address: {
    name: 'Ashbright DWC-LLC',
    poBox: '712472',
    region: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE'
  },
  ogImage: '/og-image.png',
  cta: {
    label: 'Start a conversation',
    href: '/contact'
  },
  nav: [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/situations', label: 'Situations' },
    { href: '/sectors', label: 'Sectors' },
    { href: '/contact', label: 'Contact' }
  ]
};

/** Organisation schema shared by home and contact pages */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo-mark.svg`,
    image: `${site.url}${site.ogImage}`,
    description: site.description,
    foundingDate: String(site.founded),
    email: site.email,
    telephone: site.tel,
    founder: [
      { '@type': 'Person', name: 'Tom Ashby', url: `${site.url}/tom-ashby` },
      { '@type': 'Person', name: 'Rupert Wright', url: `${site.url}/rupert-wright` }
    ],
    address: {
      '@type': 'PostalAddress',
      postOfficeBoxNumber: site.address.poBox,
      addressLocality: site.address.region,
      addressCountry: site.address.countryCode
    },
    areaServed: ['London', 'Dubai', 'Worldwide'],
    knowsAbout: [
      'Strategic communications',
      'Crisis communications',
      'Reputation management',
      'Audience intelligence',
      'Speechwriting',
      'Media training',
      'Change communications'
    ]
  };
}
