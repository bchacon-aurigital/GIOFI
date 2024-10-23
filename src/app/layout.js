import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GIOFI",
  description: "Simplifica y protege tus transacciones de canje de dinero, transferencias de fondos y administración de recursos con nuestra plataforma integrada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="author" content="GIOFI" />
        
        <meta property="og:title" content="GIOFI - Operaciones finacieras eficientes y seguras" />
        <meta property="og:description" content="Simplifica y protege tus transacciones de canje de dinero, transferencias de fondos y administración de recursos" />
        <meta property="og:image" content="/src/assets/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://GIOFI.io" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://GIOFI.io/" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GIOFI",
            "url": "https://GIOFI.io/",
            "logo": "https://GIOFI.io/logo.png",
          }`
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
