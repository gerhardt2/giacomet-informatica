'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Carlos Eduardo Silva', role: 'Empresário', text: 'Excelente atendimento! Levei meu notebook que não ligava mais e em menos de 24 horas já estava funcionando perfeitamente. Preço justo e profissionalismo de primeira.', rating: 5, initials: 'CS' },
  { name: 'Maria Fernanda Oliveira', role: 'Professora', text: 'Sempre que preciso de suporte técnico, recorro à Giacomet. Já comprei dois computadores lá e o atendimento pós-venda é impecável.', rating: 5, initials: 'MO' },
  { name: 'Roberto Giacomini', role: 'Contador', text: 'Minha impressora parou de funcionar no meio do fechamento mensal. Liguei para a Giacomet e em poucas horas já tinham resolvido o problema.', rating: 5, initials: 'RG' },
  { name: 'Ana Paula Santos', role: 'Designer', text: 'Precisei fazer um upgrade no meu desktop para design. A equipe me orientou perfeitamente sobre os melhores componentes.', rating: 5, initials: 'AS' },
  { name: 'João Pedro Martins', role: 'Estudante', text: 'Meu notebook estava muito lento e eles fizeram formatação e upgrade de memória. Ficou como novo! Preço muito abaixo do esperado.', rating: 5, initials: 'JM' },
  { name: 'Patrícia Almeida', role: 'Advogada', text: 'Configuraram toda a rede do meu escritório com muita competência. Internet funcionando perfeitamente. Nota 10!', rating: 5, initials: 'PA' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="depoimentos" className="section-padding bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="container-custom relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">Depoimentos</span>
          <h2 className="section-title text-white">O que nossos <span className="gradient-text">clientes</span> dizem</h2>
          <p className="text-base md:text-lg text-dark-400 text-center max-w-2xl mx-auto mb-12">A satisfação dos nossos clientes é nosso maior orgulho.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-7 hover:border-primary-600/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-primary-500/30 mb-4" />
              <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />))}</div>
              <p className="text-dark-300 leading-relaxed mb-6 text-sm">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-dark-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">{t.initials}</div>
                <div><div className="text-white font-semibold text-sm">{t.name}</div><div className="text-dark-400 text-xs">{t.role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
