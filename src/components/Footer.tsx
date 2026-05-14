'use client'

import { Monitor, Facebook, Instagram, MessageCircle, ArrowUp, MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const services = [
  'Manutenção de Computadores',
  'Reparo de Notebooks',
  'Manutenção de Impressoras',
  'Venda de Equipamentos',
  'Redes e Infraestrutura',
  'Suporte Técnico',
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 border-t border-dark-800">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold font-display text-white">Giacomet</span>
                <span className="block text-xs font-medium text-primary-400 -mt-1">Informática</span>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              Assistência técnica e manutenção em computadores, notebooks e impressoras. Vendas de equipamentos de informática em Palmas/PR.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100057105954600' },
                { icon: Instagram, href: '#' },
                { icon: MessageCircle, href: 'https://wa.me/554699735626' },
              ].map((s, i) => {
                const Icon = s.icon
                return <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-xl flex items-center justify-center text-dark-400 hover:text-white transition-all"><Icon className="w-4 h-4" /></a>
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-display mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}><a href={link.href} className="text-dark-400 hover:text-primary-400 text-sm transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold font-display mb-5">Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}><span className="text-dark-400 text-sm">{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold font-display mb-5">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" /><span className="text-dark-400 text-sm">Palmas, Paraná - PR</span></div>
              <div className="flex items-start gap-3"><Phone className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" /><span className="text-dark-400 text-sm">(46) 3263-1493<br/>(46) 9973-5626 (WhatsApp)</span></div>
              <div className="flex items-start gap-3"><Mail className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" /><span className="text-dark-400 text-sm">tecnica@proserv.com.br</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">&copy; {new Date().getFullYear()} Giacomet Informática. Todos os direitos reservados.</p>
          <button onClick={scrollToTop} className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-xl flex items-center justify-center text-dark-400 hover:text-white transition-all" aria-label="Voltar ao topo"><ArrowUp className="w-4 h-4" /></button>
        </div>
      </div>
    </footer>
  )
}
