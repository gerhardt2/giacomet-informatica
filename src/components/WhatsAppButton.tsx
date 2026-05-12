'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5542999999999?text=Olá! Gostaria de saber mais sobre os serviços da Giacomet Informática."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-dark-900 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
        Fale conosco! 💬
      </span>
    </a>
  )
}
