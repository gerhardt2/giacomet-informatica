'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/gallery-repair.png',
    alt: 'Reparo técnico de equipamentos',
    title: 'Reparo Especializado',
  },
  {
    src: '/images/gallery-store.png',
    alt: 'Loja de equipamentos de informática',
    title: 'Loja de Equipamentos',
  },
  {
    src: '/images/gallery-networking.png',
    alt: 'Configuração de redes',
    title: 'Infraestrutura de Redes',
  },
  {
    src: '/images/gallery-printer.png',
    alt: 'Manutenção de impressoras',
    title: 'Manutenção de Impressoras',
  },
  {
    src: '/images/about-team.png',
    alt: 'Equipe técnica',
    title: 'Nossa Equipe',
  },
  {
    src: '/images/hero-banner.png',
    alt: 'Espaço de trabalho moderno',
    title: 'Ambiente de Trabalho',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="section-padding bg-white dark:bg-dark-950" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Galeria
          </span>
          <h2 className="section-title text-dark-900 dark:text-white">
            Conheça nosso{' '}
            <span className="gradient-text">espaço</span>
          </h2>
          <p className="section-subtitle">
            Veja nosso ambiente de trabalho, equipamentos e a qualidade dos nossos serviços.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 ? 'md:row-span-2 md:col-span-1' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`relative ${index === 0 ? 'h-64 md:h-full' : 'h-48 md:h-64'} ${index === 3 ? 'h-48 md:h-64' : ''}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm">{image.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl object-contain max-h-[80vh]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="text-white text-sm font-medium">
                  {galleryImages[selectedImage].title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
