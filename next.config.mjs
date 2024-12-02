/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true, 
  output: "export",
  distDir: "build",
  i18n: {
    locales: ['en', 'es'], // Inglés y Español
    defaultLocale: 'es',
  },
};

export default nextConfig;
