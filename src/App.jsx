import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Services from './pages/Services'
import DigiDocSmart from './pages/DigiDocSmart'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/digidocsmart" element={<DigiDocSmart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
