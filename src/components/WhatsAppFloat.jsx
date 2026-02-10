import { MessageCircle } from 'lucide-react'
import './WhatsAppFloat.css'

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/919147743251" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}

export default WhatsAppFloat
