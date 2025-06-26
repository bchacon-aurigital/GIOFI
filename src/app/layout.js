import { Inter } from "next/font/google";
import "./globals.css";

// Optimización de fuentes con display swap
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata = {
  metadataBase: new URL('https://giofi.io'),
  title: {
    template: '%s | GIOFI',
    default: 'GIOFI - Operaciones Financieras Eficientes y Seguras'
  },
  description: "Simplifica y protege tus transacciones de canje de dinero, transferencias de fondos y administración de recursos con nuestra plataforma integrada de GIOFI.",
  keywords: [
    'fintech',
    'transferencias de dinero',
    'canje de divisas',
    'fideicomisos',
    'escrow',
    'pagos seguros',
    'Galileo Capital',
    'operaciones financieras',
    'plataforma financiera'
  ],
  authors: [{ name: 'GIOFI Team' }],
  creator: 'GIOFI',
  publisher: 'GIOFI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://giofi.io',
    title: 'GIOFI - Operaciones Financieras Eficientes y Seguras',
    description: 'Simplifica y protege tus transacciones de canje de dinero, transferencias de fondos y administración de recursos con nuestra plataforma integrada.',
    siteName: 'GIOFI',
    images: [
      {
        url: '/assets/Logo.png',
        width: 1200,
        height: 630,
        alt: 'GIOFI - Plataforma Financiera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIOFI - Operaciones Financieras Eficientes y Seguras',
    description: 'Simplifica y protege tus transacciones financieras con nuestra plataforma integrada.',
    images: ['/assets/Logo.png'],
    creator: '@giofi',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    yandex: 'tu-codigo-de-verificacion-yandex',
  },
  category: 'finance',
  classification: 'financial services',
  referrer: 'origin-when-cross-origin',
};

// Separar viewport y themeColor según las nuevas especificaciones de Next.js
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#C799F2' },
    { media: '(prefers-color-scheme: dark)', color: '#28C0F5' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Preconnect para optimizar carga de recursos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch para dominios externos */}
        <link rel="dns-prefetch" href="//form.jotform.com" />
        <link rel="dns-prefetch" href="//in.sumsub.com" />
        
        {/* Favicon optimizado */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#C799F2" />
        <meta name="msapplication-TileColor" content="#C799F2" />
        
        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="es" href="https://giofi.io/" />
        <link rel="alternate" hrefLang="en" href="https://giofi.io/en" />
        <link rel="alternate" hrefLang="x-default" href="https://giofi.io/" />
        
        {/* Structured Data optimizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "GIOFI",
              "alternateName": "GalileoFi",
              "url": "https://giofi.io/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://giofi.io/assets/Logo.png",
                "width": 300,
                "height": 100
              },
              "description": "Plataforma financiera integrada para transferencias, canje de dinero y administración de fideicomisos.",
              "sameAs": [
                "https://www.facebook.com/giofi",
                "https://www.instagram.com/giofi",
                "https://www.linkedin.com/company/giofi"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "email": "jose@galileo.finance",
                "availableLanguage": ["Spanish", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CR",
                "addressLocality": "San José"
              },
              "foundingDate": "2021",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "10-50"
              },
              "serviceType": [
                "Money Transfer",
                "Currency Exchange", 
                "Trust Services",
                "Escrow Services",
                "Financial Management"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Costa Rica"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "GIOFI Financial Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Money Transfer Services",
                      "description": "Secure international and domestic money transfers"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Currency Exchange",
                      "description": "Competitive currency exchange rates"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Trust & Escrow Services",
                      "description": "Professional trust and escrow management"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* PWA support */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GIOFI" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to content para accesibilidad */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Saltar al contenido principal
        </a>
        
        <div id="main-content">
          {children}
        </div>
        
        {/* Analytics placeholder - agregar tu código de analytics aquí */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            {/* Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}