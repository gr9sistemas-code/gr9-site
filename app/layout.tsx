import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gr9.com.br'),
  title: {
    default: 'GR9 Sistemas | Software ERP para o Setor Têxtil',
    template: '%s | GR9 Sistemas',
  },
  description:
    'A GR9 Sistemas desenvolve software de gestão ERP especializado para a indústria têxtil brasileira. Controle de estoque, faturamento e muito mais.',
  keywords: ['ERP têxtil', 'software gestão têxtil', 'sistema confecção', 'ERP confecção', 'GR9 Sistemas'],
  authors: [{ name: 'GR9 Sistemas' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'GR9 Sistemas',
    title: 'GR9 Sistemas | Software ERP para o Setor Têxtil',
    description: 'Software de gestão ERP especializado para a indústria têxtil brasileira.',
    images: [
      {
        url: '/og-image.png', // TODO: substituir por imagem real
        width: 1200,
        height: 630,
        alt: 'GR9 Sistemas - ERP Têxtil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GR9 Sistemas | Software ERP para o Setor Têxtil',
    description: 'Software de gestão ERP especializado para a indústria têxtil brasileira.',
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
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white text-[#1D1D1F] font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
