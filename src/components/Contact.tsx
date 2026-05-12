'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${formData.name}. ${formData.message} Contato: ${formData.phone || formData.email}`
    window.open(`https://wa.me/5542999999999?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: MapPin, label: 'Endereço', value: 'Palmas, Paraná - PR', link: 'https://maps.google.com/?q=Palmas+Parana' },
    { icon: Phone, label: 'Telefone', value: '(42) 99999-9999', link: 'tel:+5542999999999' },
    { icon: Mail, label: 'E-mail', value: 'contato@giacometinformatica.com.br', link: 'mailto:contato@giacometinformatica.com.br' },
    { icon: Clock, label: 'Horário', value: 'Seg-Sex: 8h-18h | Sáb: 8h-12h', link: '#' },
  ]

  return (
    <section id="contato" className="section-padding bg-white dark:bg-dark-950" ref={ref}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">Contato</span>
          <h2 className="section-title text-dark-900 dark:text-white">Entre em <span className="gradient-text">contato</span></h2>
          <p className="section-subtitle">Estamos prontos para atender você. Escolha a forma mais conveniente.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-dark-50 dark:bg-dark-800 rounded-2xl border border-dark-100 dark:border-dark-700/50 hover:border-primary-200 dark:hover:border-primary-600/30 transition-all group">
                    <div className="w-11 h-11 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-500 transition-colors"><Icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" /></div>
                    <div><div className="text-xs text-dark-400 mb-1">{item.label}</div><div className="text-sm font-semibold text-dark-800 dark:text-dark-200">{item.value}</div></div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100057105954600', label: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
                { icon: MessageCircle, href: 'https://wa.me/5542999999999', label: 'WhatsApp', color: 'hover:bg-green-500' },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 bg-dark-100 dark:bg-dark-800 rounded-xl flex items-center justify-center text-dark-500 dark:text-dark-400 hover:text-white ${social.color} transition-all duration-300`} aria-label={social.label}><Icon className="w-5 h-5" /></a>
                )
              })}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-dark-100 dark:border-dark-700/50 h-64">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57428.89073764!2d-51.99!3d-26.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f0b5e2f1b3f1f3%3A0x8f7b3b3b3b3b3b3b!2sPalmas%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Giacomet Informática" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="bg-dark-50 dark:bg-dark-800/50 rounded-3xl p-8 md:p-10 border border-dark-100 dark:border-dark-700/50">
              <h3 className="text-2xl font-bold font-display text-dark-900 dark:text-white mb-2">Envie sua mensagem</h3>
              <p className="text-dark-500 dark:text-dark-400 text-sm mb-8">Preencha o formulário e entraremos em contato o mais rápido possível.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Nome completo</label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 rounded-xl text-dark-900 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" placeholder="Seu nome" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">E-mail</label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 rounded-xl text-dark-900 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Telefone</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 rounded-xl text-dark-900 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" placeholder="(42) 99999-9999" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Mensagem</label>
                  <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 rounded-xl text-dark-900 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none" placeholder="Como podemos ajudar?" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white py-4 rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-0.5">
                  <Send className="w-4 h-4" />
                  {submitted ? 'Enviado com sucesso! ✓' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
