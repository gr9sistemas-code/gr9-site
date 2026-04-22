'use client'

import Script from 'next/script'

// Lê as variáveis de ambiente públicas (prefixo NEXT_PUBLIC_)
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID        // ex: AW-123456789
const GA_CONVERSION = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION // ex: AW-123456789/AbCdEfGhIj
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID          // ex: 1234567890123

export default function ConversionScripts() {
  if (!GA_ID && !META_PIXEL_ID) return null

  return (
    <>
      {/* Google Ads — evento de conversão */}
      {GA_ID && GA_CONVERSION && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads-conversion" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              gtag('event', 'conversion', { 'send_to': '${GA_CONVERSION}' });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel — evento Lead */}
      {META_PIXEL_ID && (
        <>
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
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
              fbq('track', 'Lead');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=Lead&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  )
}
