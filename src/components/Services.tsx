'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Monitor,
  Laptop,
  Printer,
  HardDrive,
  Wifi,
  ShieldCheck,
  Wrench,
  ShoppingBag,
} from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Manutenção de Computadores',
    description: 'Diagnóstico e reparo completo de desktops. Formatação, upgrades de hardware e otimização de performance.',
    color: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/20',
  },
  {
    icon: Laptop,
    title: 'Reparo de Notebooks',
    description: 'Serviço especializado em notebooks de todas as marcas. Troca de tela, teclado, baterias e componentes.',
    color: 'from-violet-500 to-violet-600',
    shadow: 'shadow-violet-500/20',
  },
  {
    icon: Printer,
    title: 'Manutenção de Impressoras',
    description: 'Reparo e manutenção de impressoras laser e jato de tinta. Recarga de cartuchos e toners.',
    color: 'from-emerald-500 to-emerald-600',
    shadow: 'shadow-emerald-500/20',
  },
  {
    icon: ShoppingBag,
    title: 'Venda de Equipamentos',
    description: 'Computadores, notebooks, periféricos e acessórios das melhores marcas com garantia e preço justo.',
    color: 'from-amber-500 to-amber-600',
    shadow: 'shadow-amber-500/20',
  },
  {
    icon: HardDrive,
    title: 'Recuperação de Dados',
    description: 'Recuperação de dados de HDs, SSDs e dispositivos de armazenamento com segurança e confidencialidade.',
    color: 'from-rose-500 to-rose-600',
    shadow: 'shadow-rose-500/20',
  },
  {
    icon: Wifi,
    title: 'Redes e Infraestrutura',
    description: 'Instalação e configuração de redes cabeadas e Wi-Fi. Infraestrutura completa para empresas.',
    color: 'from-cyan-500 to-cyan-600',
    shadow: 'shadow-cyan-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Digital',
    description: 'Instalação de antivírus, firewall e soluções de segurança para proteção dos seus dados e sistemas.',
    color: 'from-indigo-500 to-indigo-600',
    shadow: 'shadow-indigo-500/20',
  },
  {
    icon: Wrench,
    title: 'Suporte Técnico',
    description: 'Atendimento técnico presencial e remoto. Suporte contínuo para residências e empresas.',
    color: 'from-teal-500 to-teal-600',
    shadow: 'shadow-teal-500/20',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicos" className="section-padding bg-dark-50 dark:bg-dark-900 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="section-title text-dark-900 dark:text-white">
            Soluções completas em{' '}
            <span className="gradient-text">informática</span>
          </h2>
          <p className="section-subtitle">
            Oferecemos uma gama completa de serviços para atender todas as suas necessidades 
            em tecnologia, com qualidade e preço justo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-800 rounded-2xl p-7 border border-dark-100 dark:border-dark-700/50 hover:border-primary-200 dark:hover:border-primary-600/30 card-hover cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold font-display text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
