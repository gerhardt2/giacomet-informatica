'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Award,
  Zap,
  Shield,
  Clock,
  HeadphonesIcon,
  Star,
} from 'lucide-react'

const differentials = [
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Utilizamos peças originais e de alta qualidade em todos os nossos serviços, com garantia em cada reparo.',
    stat: '100%',
    statLabel: 'Qualidade',
  },
  {
    icon: Zap,
    title: 'Rapidez no Atendimento',
    description: 'Diagnóstico rápido e eficiente. A maioria dos serviços é concluída em até 24 horas.',
    stat: '24h',
    statLabel: 'Prazo médio',
  },
  {
    icon: Shield,
    title: 'Confiança e Segurança',
    description: 'Seus dados e equipamentos estão seguros conosco. Trabalhamos com total sigilo e profissionalismo.',
    stat: '10+',
    statLabel: 'Anos no mercado',
  },
  {
    icon: Clock,
    title: 'Experiência Comprovada',
    description: 'Mais de uma década de experiência em assistência técnica, com centenas de clientes satisfeitos.',
    stat: '500+',
    statLabel: 'Clientes',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Dedicado',
    description: 'Atendimento personalizado e suporte pós-serviço. Estamos sempre à disposição para ajudar.',
    stat: '5★',
    statLabel: 'Avaliação',
  },
  {
    icon: Star,
    title: 'Profissionalismo',
    description: 'Equipe capacitada e em constante atualização, acompanhando as últimas tendências do mercado.',
    stat: '98%',
    statLabel: 'Satisfação',
  },
]

export default function Differentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="diferenciais" className="section-padding bg-dark-50 dark:bg-dark-900 relative overflow-hidden" ref={ref}>
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Por que nos escolher
          </span>
          <h2 className="section-title text-dark-900 dark:text-white">
            Nossos{' '}
            <span className="gradient-text">diferenciais</span>
          </h2>
          <p className="section-subtitle">
            Descubra por que centenas de clientes confiam na Giacomet Informática 
            para cuidar dos seus equipamentos.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 border border-dark-100 dark:border-dark-700/50 card-hover overflow-hidden"
              >
                {/* Background Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-600/20 rounded-2xl flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold font-display gradient-text">{item.stat}</div>
                      <div className="text-xs text-dark-400">{item.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-display text-dark-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
