# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GIOFI is a Next.js-based fintech landing page for a financial services platform. The application is configured for static export and uses internationalization (i18n) to support both Spanish and English languages. The project is optimized for performance with dynamic component loading, Lottie animations, and comprehensive SEO metadata.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production (static export to `build/` directory)  
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

## Architecture

### Static Export Configuration
The application is configured for static export in `next.config.mjs` with:
- `output: "export"` - Generates static files
- `distDir: "build"` - Custom build output directory
- `compress: true` - Enable gzip compression

### Internationalization (i18n)
- Uses `react-i18next` for client-side internationalization
- Configuration in `src/app/i18n.js`
- Translation files in `src/app/locales/`:
  - `es/translation.json` (Spanish - fallback language)
  - `en/translation.json` (English - default language)
- Language switcher component available throughout the app

### Component Architecture
Single-page application with dynamic component loading:
- Main page component: `src/app/page.js`
- Component directory: `src/app/components/`
- Key components: Hero, Features, Solution, Security, Service, Process, About, Footer
- All major components are loaded dynamically with `next/dynamic` for performance optimization

### Performance Optimizations
- **Dynamic imports**: All major components use `dynamic()` from Next.js
- **Lottie animations**: Custom `LottieAnimation` component with SSR disabled
- **Loading states**: Custom loading screens and fallbacks
- **Image optimization**: Proper alt tags, error handling, and fallbacks
- **Font optimization**: Inter font with `display: swap` and preload

### SEO & Metadata
Comprehensive SEO setup in `src/app/layout.js`:
- Rich metadata with OpenGraph and Twitter cards
- Structured data (JSON-LD) for financial services
- Multiple language support with hreflang tags
- Security headers and performance hints
- PWA-ready configuration

### Styling
- **Tailwind CSS**: Primary styling framework
- **Custom CSS**: Global styles in `src/app/globals.css`
- **Responsive design**: Mobile-first approach
- **Animations**: AOS library integration and Lottie animations

### Assets Structure
- Static assets in `public/assets/`
- Lottie animations in `public/assets/lottie/`
- Icons and images in organized subdirectories
- Fonts stored as SVG assets for optimal loading

## Key Technical Patterns

### Component Loading Pattern
```javascript
const DynamicComponent = dynamic(() => import("./components/Component"), { 
  ssr: false, 
  loading: () => null 
});
```

### i18n Usage Pattern
```javascript
const { t } = useTranslation();
const localizedData = t("section.key", { returnObjects: true });
```

### Animation Loading Pattern
```javascript
const [animationData, setAnimationData] = useState(null);
useEffect(() => {
  const loadAnimation = async () => {
    const data = await import("path/to/animation.json");
    setAnimationData(data.default || data);
  };
}, []);
```

## Development Notes

- The app uses Spanish as the fallback language but English as default
- All major components include error handling for failed asset loads
- The build process creates a static site suitable for CDN deployment
- Navigation is handled via smooth scrolling to section IDs within the single page
- Contact forms and external integrations are prepared for services like JotForm and Sumsub