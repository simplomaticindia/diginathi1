import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import DigiDocSmart from './pages/DigiDocSmart'
import DigiAssetTrack from './pages/DigiAssetTrack'
import ProductSoon from './pages/ProductSoon'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Legal from './pages/Legal'
import CookieConsent from './components/CookieConsent'
import { ConsentProvider } from './lib/consent'
import { useAnalytics } from './lib/analytics'

/* The router is supplied by the entry point: BrowserRouter in the browser
   (main.jsx), StaticRouter when pages are prerendered (entry-server.jsx). */
function Analytics() {
  useAnalytics()
  return null
}

export default function App() {
  return (
    <ConsentProvider>
      <ScrollToTop />
      <Analytics />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products/digidocsmart" element={<DigiDocSmart />} />
          <Route path="/products/digiassettrack" element={<DigiAssetTrack />} />
          <Route path="/products/:slug" element={<ProductSoon />} />

          {/* Old URLs — keep existing links and search results landing somewhere real */}
          <Route path="/digidocsmart" element={<Navigate to="/products/digidocsmart" replace />} />
          <Route path="/products/digicta" element={<Navigate to="/products/digiact" replace />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal doc="privacy" />} />
          <Route path="/cookies" element={<Legal doc="cookies" />} />
          <Route path="/terms" element={<Legal doc="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </ConsentProvider>
  )
}
