"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Lottie from "react-lottie";
import HeroAnim from "../../public/assets/lottie/heroAnim.json";

// Carga de componentes dinámicos con indicación de carga
const DynamicHero = dynamic(() => import("./components/Hero"), { ssr: false, loading: () => null });
const DynamicChallenge = dynamic(() => import("./components/Features"), { ssr: false, loading: () => null });
const DynamicPartner = dynamic(() => import("./components/Solution"), { ssr: false, loading: () => null });
const DynamicSecurity = dynamic(() => import("./components/Security"), { ssr: false, loading: () => null });
const DynamicService = dynamic(() => import("./components/Service"), { ssr: false, loading: () => null });
const DynamicProcess = dynamic(() => import("./components/Process"), { ssr: false, loading: () => null });
const DynamicAppLaunch = dynamic(() => import("./components/AppLaunch"), { ssr: false, loading: () => null });
const DynamicAbout = dynamic(() => import("./components/About"), { ssr: false, loading: () => null });
const DynamicFooter = dynamic(() => import("./components/Footer"), { ssr: false, loading: () => null });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAllComponentsLoaded = async () => {
      try {
        // Precargamos dinámicamente los componentes
        await Promise.all([
          import("./components/Hero"),
          import("./components/Features"),
          import("./components/Solution"),
          import("./components/Security"),
          import("./components/Service"),
          import("./components/Process"),
          import("./components/AppLaunch"),
          import("./components/About"),
          import("./components/Footer"),
        ]);
        setIsLoading(false); // Todo cargado, quitamos el loader
      } catch (error) {
        console.error("Error al cargar los componentes:", error);
      }
    };

    checkAllComponentsLoaded();
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen gradient-background">
      <Lottie options={lottieOptions} height={300} width={300} />
      <img
        alt="Footer logo"
        src="/assets/Logo.PNG"
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
        <DynamicAppLaunch />
        <DynamicAbout />
        <DynamicFooter />
      </I18nextProvider>
    </div>
  );
}
