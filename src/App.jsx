import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import DigiDocSmart from './pages/DigiDocSmart'
import ProductSoon from './pages/ProductSoon'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products/digidocsmart" element={<DigiDocSmart />} />
          <Route path="/products/:slug" element={<ProductSoon />} />

          {/* Old URLs from the previous site */}
          <Route path="/digidocsmart" element={<Navigate to="/products/digidocsmart" replace />} />
          <Route path="/products/digidocuiq" element={<ProductSoon />} />
          <Route path="/products/digicta" element={<ProductSoon />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}
