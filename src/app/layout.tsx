import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Giacomet Informática | Assistência Técnica em Palmas PR',
  description: 'Giacomet Informática - Assistência técnica e manutenção em computadores, notebooks e impressoras em Palmas, Paraná. Vendas de equipamentos, suporte técnico especializado e soluções completas em TI.',
  keywords: 'assistência técnica, computadores, notebooks, impressoras, manutenção, Palmas, Paraná, informática, TI, suporte técnico, vendas de equipamentos',
  authors: [{ name: 'Giacomet Informática' }],
  openGraph: {
    title: 'Giacomet Informática | Assistência Técnica em Palmas PR',
    description: 'Assistência técnica e manutenção em computadores, notebooks e impressoras. Vendas de equipamentos de informática em Palmas, Paraná.',
    url: 'https://giacometinformatica.com.br',
    siteName: 'Giacomet Informática',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-dark-950 text-dark-900 dark:text-dark-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
