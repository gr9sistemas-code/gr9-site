import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1497207718482921');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1497207718482921&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
