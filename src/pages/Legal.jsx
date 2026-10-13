import { Link } from 'react-router-dom'
import { company } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CookieSettingsLink } from '../components/CookieConsent'
import './Legal.css'

/* Privacy policy, cookie policy and website terms. Written to cover the three
   regimes we serve: India's DPDP Act 2023 and Rules 2025, the EU/UK GDPR, and
   US state privacy laws (CCPA/CPRA and similar). Keep UPDATED in step with
   POLICY_VERSION in lib/consent.jsx when the cookie list changes. */

const UPDATED = '13 October 2026'
const addr = `${company.address.line1}, ${company.address.line2}`
const Mail = () => <a href={`mailto:${company.email}`}>{company.email}</a>

const DOCS = {
  privacy: {
    title: 'Privacy policy',
    description: 'How Diginathi collects, uses and protects personal data, and your rights under India’s DPDP Act, the EU and UK GDPR, and US state privacy laws.',
    sections: [
      ['Who we are', <>
        <p>This website, diginathi.in, is run by {company.legalName} (“Diginathi”, “we”), {addr}. For the purposes of India’s Digital Personal Data Protection Act, 2023 we are the <em>Data Fiduciary</em>; under the EU and UK GDPR we are the <em>controller</em> of the personal data described here.</p>
        <p>This policy covers the website and enquiries made through it. When we process data on behalf of a client inside a project or one of our products, the client’s own policy and our contract with them apply.</p>
      </>],
      ['What we collect', <>
        <ul>
          <li><b>What you send us.</b> Name, work email, company, phone number, the service you are interested in and your message, when you use the contact form, email us, call us, or message us on WhatsApp.</li>
          <li><b>Technical data needed to run the site.</b> Our hosting provider receives your IP address, browser type and the page requested, to deliver the page and protect it from abuse.</li>
          <li><b>Analytics, only with your consent.</b> If you allow analytics, Google Analytics records pages viewed, approximate location (city level), device type and how you arrived. Google Analytics 4 does not log or store IP addresses.</li>
          <li><b>Your cookie choice.</b> Stored in your own browser so we do not ask again.</li>
        </ul>
        <p>We do not knowingly collect data from anyone under 18, and the site is not directed at children.</p>
      </>],
      ['Why we use it, and on what basis', <>
        <ul>
          <li><b>To answer your enquiry and discuss a project.</b> India: you provided the data voluntarily for this purpose (DPDP Act, s.7(a)). EU/UK: steps you asked for before a contract, and our legitimate interest in replying to business enquiries.</li>
          <li><b>To run and secure the website.</b> Legitimate interest; strictly necessary.</li>
          <li><b>To understand how the site is used.</b> Your consent, which you can withdraw at any time under “Cookie settings”.</li>
          <li><b>To meet legal obligations</b>, such as tax and accounting records once we work together.</li>
        </ul>
        <p>We do not use your data for automated decisions that have legal or similarly significant effects, and we do not build advertising profiles.</p>
      </>],
      ['Who we share it with', <>
        <p>We do not sell personal data, and we do not share it for cross-context behavioural advertising. We use these service providers (processors), each under data processing terms that limit what they may do with it:</p>
        <ul>
          <li><b>Vercel Inc.</b> (USA): website hosting and delivery.</li>
          <li><b>Formspree Inc.</b> (USA): receives contact form submissions and forwards them to us by email.</li>
          <li><b>Google LLC</b> (USA): Google Analytics, only if you consent; Google Maps on the contact page, only if you allow functional cookies or choose to load the map.</li>
          <li><b>Our email provider</b>, where enquiries are stored and answered.</li>
        </ul>
        <p>If you message us on WhatsApp, that conversation is also subject to WhatsApp’s own terms and privacy policy. We may disclose data where the law requires it.</p>
      </>],
      ['International transfers', <>
        <p>We are based in India and some processors are in the United States. Where data from the EU or UK is transferred, we rely on the European Commission’s Standard Contractual Clauses (and the UK Addendum) or an adequacy decision. Transfers out of India are made in line with the DPDP Act and any restrictions notified under it.</p>
      </>],
      ['How long we keep it', <>
        <ul>
          <li>Enquiries that do not lead to work: up to 24 months, then deleted.</li>
          <li>Client correspondence and records: for the length of the engagement plus the period tax and company law requires (generally 8 years in India).</li>
          <li>Analytics data: no longer than 14 months.</li>
          <li>Your cookie choice: 12 months, after which we ask again.</li>
        </ul>
      </>],
      ['How we protect it', <>
        <p>Encrypted connections (HTTPS) everywhere, access limited to the people who need it, and service providers chosen for their security practices. If a breach affects your personal data we will notify you and the relevant authority as the law requires, including the Data Protection Board of India.</p>
      </>],
      ['Your rights', <>
        <p><b>Everyone</b> can ask us what personal data we hold about them, ask us to correct or delete it, and withdraw consent at any time. Withdrawing consent does not affect processing that already took place.</p>
        <p><b>India (DPDP Act).</b> You have the right to a summary of your data and how it is processed, to correction, completion, updating and erasure, to grievance redressal, and to nominate someone to exercise these rights if you die or become incapacitated. If you are not satisfied with our response, you may complain to the Data Protection Board of India.</p>
        <p><b>EU and UK (GDPR).</b> You also have the rights to restrict or object to processing, and to data portability. You may complain to your local supervisory authority.</p>
        <p id="us-privacy"><b>United States (California and other states).</b> You have the right to know what personal information we collect, use and disclose; to delete and correct it; and to opt out of its sale or sharing. We do not sell or share personal information, and we honour Global Privacy Control browser signals as an opt-out. We will not discriminate against you for exercising these rights. Categories collected in the last 12 months: identifiers and contact details (from you), and internet activity (from your browser, with consent).</p>
        <p>To use any of these rights, email <Mail /> with the subject “Privacy request”. We will confirm receipt and answer within 30 days, or sooner where the law requires. We may need to verify your identity first.</p>
      </>],
      ['Grievance Officer and contact', <>
        <p>Grievance Officer, {company.legalName}<br />{addr}<br />Email: <Mail /> · Phone: {company.phones[0].number}</p>
      </>],
      ['Changes to this policy', <>
        <p>We will post any change here with a new date. If a change affects how we use data you have already given us, we will tell you before it applies.</p>
      </>]
    ]
  },

  cookies: {
    title: 'Cookie policy',
    description: 'The cookies and browser storage used on diginathi.in, what each one is for, how long it lasts, and how to change your choice.',
    sections: [
      ['Our approach', <>
        <p>Only strictly necessary storage is used until you choose otherwise. Analytics and third-party embeds stay off until you turn them on, and you can turn them off again as easily. This follows the EU ePrivacy rules and GDPR, India’s DPDP Act, and US state privacy laws, including honouring Global Privacy Control signals.</p>
        <p><CookieSettingsLink className="lg-btn">Open cookie settings</CookieSettingsLink></p>
      </>],
      ['What we use', <>
        <div className="lg-table-wrap">
          <table className="lg-table">
            <thead><tr><th>Name</th><th>Category</th><th>Set by</th><th>Purpose</th><th>Lasts</th></tr></thead>
            <tbody>
              <tr><td><code>dn-consent</code></td><td>Strictly necessary</td><td>diginathi.in (browser storage)</td><td>Remembers your cookie choice</td><td>12 months</td></tr>
              <tr><td><code>_ga</code></td><td>Analytics</td><td>Google Analytics</td><td>Distinguishes visitors so pages can be counted</td><td>Up to 14 months</td></tr>
              <tr><td><code>_ga_&lt;id&gt;</code></td><td>Analytics</td><td>Google Analytics</td><td>Keeps the state of a visit</td><td>Up to 14 months</td></tr>
              <tr><td>Google Maps cookies (e.g. <code>NID</code>)</td><td>Functional</td><td>google.com</td><td>Set by the embedded map on the contact page</td><td>Up to 6 months</td></tr>
            </tbody>
          </table>
        </div>
        <p>Fonts are hosted on our own server, so no request goes to a font provider. Links to WhatsApp, LinkedIn or email open those services only when you click them.</p>
      </>],
      ['Changing your choice', <>
        <p>Use “Cookie settings” at the bottom of every page. If you withdraw analytics consent we stop collection and delete the Google Analytics cookies on this domain. You can also clear or block cookies in your browser settings.</p>
      </>],
      ['More information', <>
        <p>See our <Link to="/privacy">privacy policy</Link>, or email <Mail />.</p>
      </>]
    ]
  },

  terms: {
    title: 'Website terms of use',
    description: 'The terms that apply when you use diginathi.in, including intellectual property, liability and governing law.',
    sections: [
      ['About these terms', <>
        <p>These terms apply to your use of diginathi.in, operated by {company.legalName}, {addr}. By using the site you accept them. Work we do for clients is governed by a separate written agreement, not by these terms.</p>
      </>],
      ['Using the site', <>
        <p>You may browse, read and share links to the site for lawful purposes. Please do not attempt to disrupt it, gain unauthorised access to it or to our product demos, scrape it at a volume that affects other visitors, or submit false or harmful information through its forms.</p>
      </>],
      ['Content and intellectual property', <>
        <p>The text, design, graphics, screenshots and code on this site belong to Diginathi or its licensors. DigiDocSmart, DigiAssetTrack, DigiDocuIQ and DigiACT are names of our products. Screenshots show sample data from demo environments, not customer data. You may not copy or reuse the content beyond normal browsing and sharing without our written permission.</p>
      </>],
      ['Information on the site', <>
        <p>We work to keep the site accurate, but it is general information about our services and products, not an offer or professional advice. Figures such as timelines describe typical engagements; each project is scoped and priced in writing.</p>
      </>],
      ['Links to other sites', <>
        <p>Links to third-party sites are provided for convenience. We are not responsible for their content or practices.</p>
      </>],
      ['Liability', <>
        <p>The site is provided “as is”. To the extent the law allows, we are not liable for any indirect or consequential loss arising from its use, or from it being unavailable. Nothing in these terms limits liability that cannot be limited by law.</p>
      </>],
      ['Governing law', <>
        <p>These terms are governed by the laws of India, and the courts at Kolkata, West Bengal have jurisdiction. If you are a consumer elsewhere, you keep any protections your local law gives you.</p>
      </>],
      ['Contact', <>
        <p>Questions about these terms: <Mail />.</p>
      </>]
    ]
  }
}

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function Legal({ doc }) {
  const d = DOCS[doc]
  useSeo({ title: d.title, description: d.description, path: `/${doc}` })

  return (
    <section className="band lg">
      <div className="wrap lg-wrap">
        <header className="lg-head">
          <p className="eyebrow">Legal</p>
          <h1>{d.title}</h1>
          <p className="lg-updated">Last updated {UPDATED}</p>
          <nav className="lg-other" aria-label="Legal documents">
            {Object.entries(DOCS).map(([k, v]) => (
              k === doc ? <span key={k} aria-current="page">{v.title}</span> : <Link key={k} to={`/${k}`}>{v.title}</Link>
            ))}
          </nav>
        </header>

        <nav className="lg-toc" aria-label="On this page">
          <ol>{d.sections.map(([t]) => <li key={t}><a href={`#${slug(t)}`}>{t}</a></li>)}</ol>
        </nav>

        <div className="lg-body">
          {d.sections.map(([t, body], i) => (
            <section key={t} id={slug(t)}>
              <h2><span className="numtag">{String(i + 1).padStart(2, '0')}</span>{t}</h2>
              {body}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
