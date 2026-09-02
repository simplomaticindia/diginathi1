import {
  Code2, Bot, Archive, Table2,
  FileText, Brain, LayoutGrid
} from 'lucide-react'

/* Single source of truth for everything the site says.
   Pages read from here so nav, footer, cards and detail pages can never drift. */

export const company = {
  legalName: 'Diginathi Private Limited',
  name: 'Diginathi',
  tagline: 'Intelligence that drives growth',
  founded: 2023,
  email: 'info@diginathi.in',
  phones: ['+91 91477 43251', '+91 91477 43253'],
  whatsapp: '919147743251',
  address: {
    line1: '74/10/B Satyen Roy Road',
    line2: 'Kolkata 700034, India'
  },
  hours: {
    ist: 'Mon–Fri, 9:00 AM – 6:00 PM IST',
    us: '9:00 AM – 1:00 PM ET, every working day'
  }
}

export const dmsUrl = 'https://digidocsmart.com'

/* ==========================================================================
   SERVICES — ordered by priority. Software first, AI second.
   ========================================================================== */

export const services = [
  {
    slug: 'software-development',
    num: '01',
    icon: Code2,
    title: 'Enterprise Software Development',
    short: 'Enterprise Software',
    kicker: 'The systems your operation runs on',
    summary:
      'We design, build and maintain the web applications, internal tools and integrations that a company depends on every working day.',
    heroLine: 'Software you can put in front of a thousand staff on Monday.',

    problem: {
      title: 'The situation we usually walk into',
      body:
        'A business grows past its spreadsheets. Three departments each buy a different tool, none of them talk to each other, and someone re-types the same order into two systems every morning. The work still gets done — it just costs three people to do it.',
      symptoms: [
        'Critical processes living in spreadsheets nobody owns',
        'Two systems holding two different versions of the truth',
        'A vendor who built it, then disappeared',
        'Reports that take a person two days to assemble'
      ]
    },

    offer: {
      title: 'What we build',
      items: [
        {
          name: 'Business applications',
          body: 'Order management, inventory, HR, field operations, approvals — the software that is specific to how you actually work, not how a generic product assumes you work.'
        },
        {
          name: 'Customer & partner portals',
          body: 'Give clients, vendors or field teams a login instead of an inbox. Self-service on your terms, with the permission rules you set.'
        },
        {
          name: 'Integrations',
          body: 'Make your accounting, CRM, ERP and document systems exchange data automatically, so nobody re-keys anything.'
        },
        {
          name: 'Modernisation',
          body: 'Take an old system that still works but nobody can maintain, and move it to something current — without a big-bang cutover.'
        },
        {
          name: 'IT infrastructure & supply',
          body: 'Servers, licences, hardware procurement and deployment support, so the software has somewhere reliable to live.'
        }
      ]
    },

    process: [
      { step: '01', title: 'Discovery workshop', desc: 'One to two weeks. We sit with the people who do the work, map the current process, and write down what "done" means. You get a scoped plan with a fixed price range before anyone writes code.' },
      { step: '02', title: 'Design & architecture', desc: 'Screens, data model, permissions and integration points, agreed on paper first. Changing a wireframe costs nothing. Changing a shipped feature costs a fortnight.' },
      { step: '03', title: 'Build in two-week slices', desc: 'You see working software every two weeks, on a real URL, with real data. No six-month silence followed by a surprise.' },
      { step: '04', title: 'Rollout & handover', desc: 'Training, documentation, and a support window. You own the source code and the infrastructure — there is no lock-in clause in our contracts.' }
    ],

    deliverables: [
      'Full source code, in your repository, from day one',
      'Written architecture and data-model documentation',
      'Automated tests on the paths that would hurt if they broke',
      'Deployment scripts — anyone competent can take over',
      'Staff training sessions, recorded',
      'A defined support and maintenance agreement'
    ],

    facts: [
      { value: '2 wks', label: 'To first working demo' },
      { value: '100%', label: 'Code ownership, yours' },
      { value: 'US hrs', label: 'Daily overlap' },
      { value: 'Fixed', label: 'Scoped price ranges' }
    ],

    brochure: null,   // old PDF is titled 'IT Services' — relink once it's rewritten
    related: ['ai-automation', 'data-capture']
  },

  {
    slug: 'ai-automation',
    num: '02',
    icon: Bot,
    title: 'AI Automation & AI Agents',
    short: 'AI Automation',
    kicker: 'Our main focus',
    summary:
      'We find the repetitive work inside your business and hand it to software that can read, decide and act — with a human checkpoint wherever the stakes are high.',
    heroLine: 'Automate the work nobody should have to do twice.',

    problem: {
      title: 'What "AI automation" actually means here',
      body:
        'Not a chatbot bolted onto your homepage. We mean a process that runs end to end without a person driving it: an email arrives with an invoice attached, the system reads it, checks it against the purchase order, flags the one line that does not match, and routes it to the right approver. A person only looks at the exception.',
      symptoms: [
        'A team member whose job is mostly copying between systems',
        'Invoices, claims or applications reviewed by hand, one at a time',
        'Customer questions answered by searching the same five documents',
        'Backlogs that grow every time volume goes up'
      ]
    },

    offer: {
      title: 'What we build',
      items: [
        {
          name: 'AI agents for real workflows',
          body: 'An agent that reads incoming documents or messages, decides what they are, pulls what it needs from your systems, and completes the task — escalating to a person when it is not confident.'
        },
        {
          name: 'Document understanding',
          body: 'Invoices, contracts, forms, delivery notes and medical records read and turned into structured fields, including the handwritten and badly-scanned ones.'
        },
        {
          name: 'Internal question answering',
          body: 'Staff ask a question in plain language and get an answer drawn from your own policies, SOPs and archives — with a citation, so they can check it.'
        },
        {
          name: 'Process automation',
          body: 'The unglamorous, high-value kind: reconciliation, data validation, report assembly, routing and follow-up chasing.'
        },
        {
          name: 'Human-in-the-loop review',
          body: 'Every automation ships with a review queue. You decide the confidence threshold at which a human must look. Nothing important happens silently.'
        }
      ]
    },

    process: [
      { step: '01', title: 'Find the right task', desc: 'We look for work that is high-volume, rule-shaped and currently manual. Then we measure how long it takes today, so there is a real number to improve on. Some tasks should not be automated — we will say so.' },
      { step: '02', title: 'Prove it on your data', desc: 'A four-week pilot on a real sample of your documents. We publish the accuracy honestly, including where it fails. If the numbers do not justify the build, you have spent four weeks, not a year.' },
      { step: '03', title: 'Build with the escape hatch', desc: 'Production build with a review queue, confidence thresholds, full audit logging, and a manual override on every step. The system explains why it made each decision.' },
      { step: '04', title: 'Watch and improve', desc: 'We monitor accuracy in production. Corrections your reviewers make feed back in, so the system gets better at your specific documents over time.' }
    ],

    deliverables: [
      'A pilot report with measured accuracy — including the failure cases',
      'A review queue your team controls, with tunable confidence thresholds',
      'Full audit log: every decision, its inputs, and its confidence score',
      'Manual override on every automated step',
      'Your data stays in your environment where the deployment requires it',
      'Monthly accuracy reporting after go-live'
    ],

    facts: [
      { value: '4 wks', label: 'Pilot to hard numbers' },
      { value: '100%', label: 'Decisions audit-logged' },
      { value: 'Human', label: 'In the loop, by design' },
      { value: 'Yours', label: 'Data stays where you say' }
    ],

    brochure: null,
    related: ['software-development', 'digitization']
  },

  {
    slug: 'digitization',
    num: '03',
    icon: Archive,
    title: 'Digitization of Records',
    short: 'Digitization',
    kicker: 'Where we started',
    summary:
      'We take rooms full of paper and turn them into an indexed, searchable, permission-controlled archive — without the originals leaving your custody if you would rather they did not.',
    heroLine: 'Twenty years of paper, searchable in seconds.',

    problem: {
      title: 'The cost of a paper archive',
      body:
        'Physical records are not just slow to search. They are a single point of failure. One flood, one fire, one misfiled box, and a record that a regulator or a court will ask you for is simply gone. Meanwhile, a staff member spends twenty minutes in a storeroom to answer a question that should take five seconds.',
      symptoms: [
        'Storage rent for boxes nobody has opened in years',
        'A retrieval request that takes hours, not seconds',
        'No way to prove who accessed a file, or when',
        'Records degrading faster than they are being used'
      ]
    },

    offer: {
      title: 'How the work runs',
      items: [
        {
          name: 'On-site or at our facility',
          body: 'If your records cannot leave the building — medical, legal, government — we bring the scanning operation to you. Otherwise we collect under a documented chain of custody.'
        },
        {
          name: 'Scanning built for the material',
          body: 'Bound volumes, fragile ledgers, large-format drawings and standard files each need different handling. We do not force everything through one feeder.'
        },
        {
          name: 'OCR and indexing',
          body: 'Every page becomes full-text searchable. Beyond that we tag the fields you actually search by — account number, patient ID, date, department — so retrieval is a filter, not a hunt.'
        },
        {
          name: 'Quality control that is checked, not claimed',
          body: 'A sampled second pass against the originals, with a defect rate we report to you rather than one we assert in a brochure.'
        },
        {
          name: 'Delivered into a real system',
          body: 'Files land in DigiDocSmart, or your existing document system, or as a structured export. Not a folder of 400,000 PDFs named scan_0001.'
        }
      ]
    },

    process: [
      { step: '01', title: 'Survey and pilot batch', desc: 'We assess condition, volume and document types, then run a small pilot batch. That gives you a real per-page cost and timeline before you commit to the whole archive.' },
      { step: '02', title: 'Prepare and capture', desc: 'Staples removed, torn pages repaired, batches barcoded so nothing is ever unaccounted for. Then high-resolution capture with automated image quality checks.' },
      { step: '03', title: 'Index and verify', desc: 'OCR plus the metadata fields you nominated. Sampled verification against originals, with the defect rate reported back to you each batch.' },
      { step: '04', title: 'Load, verify, return', desc: 'Archive loaded into your system with permissions applied. Originals returned to you, or securely destroyed with a certificate — your call.' }
    ],

    deliverables: [
      'Full-text searchable PDF/A, the archival standard',
      'Indexed metadata on the fields you nominated',
      'Chain-of-custody documentation for every batch',
      'Per-batch quality reports with measured defect rates',
      'Loaded into your document system with permissions set',
      'Certificate of destruction, if you choose that route'
    ],

    facts: [
      { value: '10M+', label: 'Pages digitized' },
      { value: 'PDF/A', label: 'Archival standard output' },
      { value: 'On-site', label: 'Option available' },
      { value: 'Tracked', label: 'Chain of custody' }
    ],

    brochure: '/brochures/digitization-of-records-brochure.pdf',
    related: ['data-capture', 'ai-automation']
  },

  {
    slug: 'data-capture',
    num: '04',
    icon: Table2,
    title: 'Data Capture & Structuring',
    short: 'Data Capture',
    kicker: 'Messy in, clean out',
    summary:
      'Turning documents, forms and records into clean structured data your systems can actually use — validated against your rules, not just typed in.',
    heroLine: 'A scanned page is a picture. We turn it into data.',

    problem: {
      title: 'Digitized is not the same as usable',
      body:
        'Scanning gets you an image. You still cannot total a column, filter by date, or push it into your accounting system. The gap between "we have a PDF of it" and "our software can use it" is where most digitization projects quietly stall.',
      symptoms: [
        'A digital archive you can read but cannot query or report on',
        'Data arriving in twelve different formats from twelve sources',
        'Errors found downstream, months later, in a reconciliation',
        'Volume spikes your team cannot absorb without hiring'
      ]
    },

    offer: {
      title: 'What we handle',
      items: [
        {
          name: 'Structured extraction',
          body: 'Fields pulled from invoices, claim forms, applications, surveys and registers into whatever schema your system expects.'
        },
        {
          name: 'Validation against your rules',
          body: 'A date that cannot be in the future. A total that must equal the sum of its lines. An ID that must exist in your master list. Caught at capture, not in an audit.'
        },
        {
          name: 'Cleaning and deduplication',
          body: 'Merging duplicate customer records, normalising addresses and names, standardising units and formats across sources.'
        },
        {
          name: 'Legacy migration',
          body: 'Getting data out of an old system that has no export worth using, and into the new one with its integrity intact.'
        },
        {
          name: 'AI-assisted, human-verified',
          body: 'Models do the first pass at volume; trained reviewers handle the exceptions and the low-confidence cases. This is how the accuracy and the throughput both stay high.'
        }
      ]
    },

    process: [
      { step: '01', title: 'Define the target', desc: 'We agree the exact output schema and the validation rules before anything is processed. Most data problems are specification problems.' },
      { step: '02', title: 'Sample and calibrate', desc: 'A sample batch establishes the real accuracy rate and surfaces the edge cases your documents contain — the ones nobody remembers until they appear.' },
      { step: '03', title: 'Process at volume', desc: 'AI extraction at scale, with every low-confidence field routed to a trained human reviewer. Two-pass verification on anything financial or regulated.' },
      { step: '04', title: 'Deliver and reconcile', desc: 'Data delivered in your format, with an accuracy report and a reconciliation you can check against source totals.' }
    ],

    deliverables: [
      'Data in your schema — CSV, JSON, SQL or a direct API load',
      'A written validation-rule specification, agreed up front',
      'Field-level accuracy reporting per batch',
      'Exception log: every record that needed a human decision',
      'Reconciliation against source control totals',
      'Signed confidentiality terms covering every person on the project'
    ],

    facts: [
      { value: '99.5%+', label: 'Field accuracy target' },
      { value: '2-pass', label: 'On regulated data' },
      { value: 'Any', label: 'Output schema' },
      { value: 'NDA', label: 'On every project' }
    ],

    brochure: null,   // old PDF is titled 'Data Entry Solution' — relink once it's rewritten
    related: ['digitization', 'ai-automation']
  }
]

export const getService = (slug) => services.find(s => s.slug === slug)

/* ==========================================================================
   PRODUCTS
   ========================================================================== */

export const products = [
  {
    slug: 'digidocsmart',
    icon: FileText,
    name: 'DigiDocSmart',
    abbr: 'DMS',
    tagline: 'Document management, built for organisations that get audited.',
    blurb:
      'Store, route, approve and prove. Every document with a permission rule, every action with a tamper-evident audit trail. Runs on our cloud or inside your own network.',
    status: 'live',
    external: dmsUrl
  },
  {
    slug: 'digidocuiq',
    icon: Brain,
    name: 'DigiDocuIQ',
    abbr: 'IDP',
    tagline: 'Intelligent document processing.',
    blurb:
      'Point it at a folder of invoices, forms or contracts. It works out what each one is, pulls the fields out, checks them against your rules, and sends only the uncertain ones to a person.',
    status: 'soon',
    external: null
  },
  {
    slug: 'digicta',
    icon: LayoutGrid,
    name: 'DigiCTA',
    abbr: 'CRM',
    tagline: 'Customers, tasks and attendance in one place.',
    blurb:
      'For teams that currently run their pipeline in one tool, their tasks in another, and their attendance on a WhatsApp group. One system, one set of numbers.',
    status: 'soon',
    external: null
  }
]

export const getProduct = (slug) => products.find(p => p.slug === slug)

/* ==========================================================================
   SHARED CONTENT
   ========================================================================== */

export const industries = [
  { name: 'Healthcare', note: 'Patient records, accreditation, clinical SOPs' },
  { name: 'Manufacturing', note: 'ISO document control, quality records' },
  { name: 'Real Estate', note: 'Title deeds, leases, approvals' },
  { name: 'Construction', note: 'Drawings, permits, inspection reports' },
  { name: 'Hospitality', note: 'Multi-property SOPs and vendor contracts' },
  { name: 'Financial Services', note: 'Onboarding files, reconciliation, retention' },
  { name: 'Education', note: 'Student records, admissions, compliance' },
  { name: 'Government', note: 'Public records and long-term preservation' }
]

export const principles = [
  {
    num: '01',
    title: 'You own everything we build',
    body: 'Source code, infrastructure, data, documentation. No proprietary runtime you have to keep paying us for. If you want to move to another vendor in two years, you can — and we will hand over cleanly.'
  },
  {
    num: '02',
    title: 'We measure before we promise',
    body: 'Every AI engagement starts with a pilot on your real data, and we publish the accuracy honestly — including where it fails. A vendor who will not show you the failure cases has not looked for them.'
  },
  {
    num: '03',
    title: 'A person stays in the loop',
    body: 'Automation without a review queue is just a faster way to be wrong at scale. Every system we build has confidence thresholds, an exception queue, and a manual override.'
  },
  {
    num: '04',
    title: 'Working software every two weeks',
    body: 'You see progress on a real URL with real data, not a status report. Problems surface in week four, when they are cheap, instead of month six, when they are not.'
  }
]

/* Old URLs from the previous site. Kept so existing links and search results
   land somewhere sensible instead of a 404. */
export const legacyServiceSlugs = {
  'digitization-of-records': 'digitization',
  'data-entry-solution': 'data-capture',
  'it-services': 'software-development',
  'ai-service': 'ai-automation',
  'manpower-outsourcing': null   // service retired — send to the index
}
