'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer soluções em informática com excelência, agilidade e preços justos, garantindo a satisfação total dos nossos clientes em Palmas e região.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em assistência técnica e venda de equipamentos de informática no sudoeste do Paraná, reconhecida pela qualidade e confiança.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Honestidade, comprometimento, inovação, respeito ao cliente e busca constante pela excelência em cada serviço prestado.',
    },
  ]

  return (
    <section id="sobre" className="section-padding bg-white dark:bg-dark-950 relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 dark:from-primary-900/10 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-team.png"
                alt="Equipe Giacomet Informática"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 rounded-2xl p-5 shadow-xl border border-dark-100 dark:border-dark-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-dark-900 dark:text-white">10+</div>
                  <div className="text-sm text-dark-500 dark:text-dark-400">Anos de Experiência</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-dark-900 dark:text-white mb-6 leading-tight">
              Tradição e inovação em{' '}
              <span className="gradient-text">assistência técnica</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg leading-relaxed mb-6">
              A <strong className="text-dark-700 dark:text-dark-200">Giacomet Informática</strong> é uma empresa 
              localizada em <strong className="text-dark-700 dark:text-dark-200">Palmas, Paraná</strong>, especializada 
              em assistência técnica e manutenção de computadores, notebooks e impressoras. Com mais de uma década 
              de atuação, conquistamos a confiança de centenas de clientes na região.
            </p>
            <p className="text-dark-500 dark:text-dark-400 leading-relaxed mb-8">
              Além dos serviços técnicos, oferecemos venda de equipamentos de informática com as melhores marcas 
              do mercado. Nossa equipe é formada por profissionais qualificados e em constante atualização, 
              garantindo soluções modernas e eficientes para cada necessidade.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { value: '500+', label: 'Clientes Satisfeitos' },
                { value: '1000+', label: 'Serviços Realizados' },
                { value: '100%', label: 'Comprometimento' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold font-display gradient-text">{stat.value}</div>
                  <div className="text-xs text-dark-500 dark:text-dark-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="bg-dark-50 dark:bg-dark-800/50 rounded-2xl p-8 border border-dark-100 dark:border-dark-700/50 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display text-dark-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-500 dark:text-dark-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
