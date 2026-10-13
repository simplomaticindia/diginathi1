import { company, services } from '../data/site'

/* One place that turns a page's SEO fields into <head> tags and JSON-LD.
   Used in the browser (useSeo) and at build time (scripts/prerender.mjs), so
   the HTML Google fetches and the page a visitor navigates to always agree. */

export const SITE_URL = 'https://diginathi.in'
export const SITE_NAME = 'Diginathi'
export const DEFAULT_IMAGE = '/og/diginathi.jpg'
const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`

/* Cities we take work in. Used for areaServed and the "Where we work" section.
   One honest section, not a page per city: Google treats near-duplicate city
   pages as doorway pages. */
export const CITIES = [
  'Mumbai', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune',
  'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Kochi', 'Bhubaneswar',
  'Guwahati', 'Indore', 'Nagpur', 'Coimbatore', 'Visakhapatnam', 'Surat', 'Patna',
  'Thiruvananthapuram', 'Vadodara', 'Ranchi', 'Raipur', 'Dehradun'
]

const abs = (p) => (p.startsWith('http') ? p : `${SITE_URL}${p}`)

function organization() {
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: company.legalName,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: abs('/assets/Logo.png') },
    image: abs(DEFAULT_IMAGE),
    slogan: company.tagline,
    description:
      'Enterprise software development, AI automation and AI agents, AI for existing ERP and CRM systems, records digitization and data capture.',
    foundingDate: String(company.founded),
    email: company.email,
    telephone: company.phones[0].number.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, Behind Taj Vivanta`,
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700107',
      addressCountry: 'IN'
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      ...CITIES.map(name => ({ '@type': 'City', name }))
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: company.email,
      telephone: company.phones[0].number.replace(/\s/g, ''),
      areaServed: ['IN', 'US'],
      availableLanguage: ['English']
    }],
    knowsAbout: services.map(s => s.title),
    sameAs: ['https://www.linkedin.com/company/diginathi']
  }
}

function website() {
  return { '@type': 'WebSite', '@id': SITE_ID, url: SITE_URL, name: SITE_NAME, publisher: { '@id': ORG_ID }, inLanguage: 'en-IN' }
}

/* Home › Services › Page. Products have no index page, so they sit under Home. */
function breadcrumb(path, name) {
  if (path === '/') return null
  const items = [{ name: 'Home', path: '/' }]
  if (path.startsWith('/services/')) items.push({ name: 'Services', path: '/services' })
  items.push({ name, path })
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) }))
  }
}

export const fullTitle = (title) => (title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}: Enterprise Software & AI`)

/* Everything a page's <head> needs, as plain data. */
export function buildHead({ title, description, path = '/', image, type = 'website', pageType = 'WebPage', jsonLd = [], noindex = false, crumb }) {
  const url = abs(path)
  const img = abs(image || DEFAULT_IMAGE)
  const name = fullTitle(title)
  const bc = breadcrumb(path, crumb || title || SITE_NAME)
  const graph = [
    organization(),
    website(),
    {
      '@type': pageType,
      '@id': `${url}#webpage`,
      url,
      name,
      description,
      isPartOf: { '@id': SITE_ID },
      about: { '@id': ORG_ID },
      inLanguage: 'en-IN',
      primaryImageOfPage: { '@type': 'ImageObject', url: img },
      ...(bc ? { breadcrumb: { '@id': bc['@id'] } } : {})
    },
    ...(bc ? [bc] : []),
    ...jsonLd
  ]

  const meta = [
    ['name', 'description', description],
    ['name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'],
    ['property', 'og:type', type],
    ['property', 'og:site_name', SITE_NAME],
    ['property', 'og:locale', 'en_IN'],
    ['property', 'og:title', name],
    ['property', 'og:description', description],
    ['property', 'og:url', url],
    ['property', 'og:image', img],
    ['property', 'og:image:width', '1200'],
    ['property', 'og:image:height', '630'],
    ['property', 'og:image:alt', title || SITE_NAME],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', name],
    ['name', 'twitter:description', description],
    ['name', 'twitter:image', img]
  ].filter(m => m[2])

  return {
    title: name,
    canonical: noindex ? null : url,
    meta,
    jsonLd: { '@context': 'https://schema.org', '@graph': graph }
  }
}

/* Build-time: the head as an HTML string. */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
export function headHtml(head) {
  return [
    `<title>${esc(head.title)}</title>`,
    ...head.meta.map(([k, v, c]) => `<meta ${k}="${v}" content="${esc(c)}" data-seo />`),
    head.canonical ? `<link rel="canonical" href="${head.canonical}" data-seo />` : '',
    `<script type="application/ld+json" data-seo>${JSON.stringify(head.jsonLd).replace(/</g, '\\u003c')}</script>`
  ].filter(Boolean).join('\n    ')
}

/* Shared JSON-LD builders for page types. */
export const faqLd = (path, pairs) => ({
  '@type': 'FAQPage',
  '@id': `${abs(path)}#faq`,
  mainEntity: pairs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
})

export const softwareLd = ({ path, name, description, image, category = 'BusinessApplication' }) => ({
  '@type': 'SoftwareApplication',
  '@id': `${abs(path)}#software`,
  name,
  description,
  url: abs(path),
  image: abs(image),
  applicationCategory: category,
  operatingSystem: 'Web browser',
  publisher: { '@id': ORG_ID },
  provider: { '@id': ORG_ID }
})

export const serviceLd = ({ path, name, description, type }) => ({
  '@type': 'Service',
  '@id': `${abs(path)}#service`,
  name,
  serviceType: type || name,
  description,
  url: abs(path),
  provider: { '@id': ORG_ID },
  areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Country', name: 'United States' }]
})
