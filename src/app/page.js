"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Componente Lottie personalizado
const LottieAnimation = dynamic(() => import("./components/LottieAnimation"), { 
  ssr: false 
});

// Carga de componentes dinámicos optimizada - removemos AppLaunch
const DynamicHero = dynamic(() => import("./components/Hero"), { 
  ssr: false, 
  loading: () => null 
});
const DynamicChallenge = dynamic(() => import("./components/Features"), { 
  ssr: false, 
  loading: () => null 
});
const DynamicPartner = dynamic(() => import("./components/Solution"), { 
  ssr: false, 
  loading: () => null 
});
const DynamicSecurity = dynamic(() => import("./components/Security"), { 
  ssr: false, 
  loading: () => null 
});
const DynamicService = dynamic(() => import("./components/Service"), { 
  ssr: false, 
  loading: () => null 
});
const DynamicProcess = dynamic(() => import("./components/Process"), { 
  ssr: false, 
  loading: () => null 
});
const DynamicAbout = dynamic(() => import("./components/About"), { 
  ssr: false, 
  loading: () => null 
});
const DynamicFooter = dynamic(() => import("./components/Footer"), { 
  ssr: false, 
  loading: () => null 
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const checkAllComponentsLoaded = async () => {
      try {
        // Cargar la animación dinámicamente
        const heroAnimation = await import("../../public/assets/lottie/heroAnim.json");
        setAnimationData(heroAnimation.default || heroAnimation);

        // Precargamos dinámicamente los componentes (sin AppLaunch)
        await Promise.all([
          import("./components/Hero"),
          import("./components/Features"),
          import("./components/Solution"),
          import("./components/Security"),
          import("./components/Service"),
          import("./components/Process"),
          import("./components/About"),
          import("./components/Footer"),
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al cargar los componentes:", error);
        setIsLoading(false); // Aseguramos que la página se cargue incluso con errores
      }
    };

    checkAllComponentsLoaded();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen gradient-background">
        {animationData ? (
          <LottieAnimation 
            animationData={animationData}
            width={300}
            height={300}
            className="mb-4"
          />
        ) : (
          <div className="w-[300px] h-[300px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse mb-4" />
        )}
        <img
          alt="GIOFI logo"
          src="/assets/Logo.png"
          className="h-16 w-auto"
          onError={(e) => {
            // Fallback si la imagen no carga
            e.target.style.display = 'none';
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
        <DynamicHero />
        <DynamicChallenge />
        <DynamicPartner />
        <DynamicSecurity />
        <DynamicService />
        <DynamicProcess />
        <DynamicAbout />
        <DynamicFooter />
      </I18nextProvider>
    </div>
  );
}