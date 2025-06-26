"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

// Componente Lottie personalizado
const LottieAnimation = dynamic(() => import("./LottieAnimation"), { 
  ssr: false,
  loading: () => <div className="w-full h-[300px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
});

const Hero = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const [animationError, setAnimationError] = useState(false);

  const navItems = t("hero.nav", { returnObjects: true });
  const svgPaths = t("hero.svg", { returnObjects: true });

  // Cargar animación al montar el componente
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const data = await import("../../../public/assets/lottie/heroAnim.json");
        setAnimationData(data.default || data);
      } catch (error) {
        console.error("Error loading hero animation:", error);
        setAnimationError(true);
      }
    };

    loadAnimation();
  }, []);

  const handleNavClick = useCallback((index, sectionId) => {
    setActiveIndex(index);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShow(false);
  }, []);

  const toggleDropdown1 = useCallback(() => {
    setDropdownOpen1(prev => !prev);
    setDropdownOpen2(false);
  }, []);

  const toggleDropdown2 = useCallback(() => {
    setDropdownOpen2(prev => !prev);
    setDropdownOpen1(false);
  }, []);

  const closeDropdowns = useCallback(() => {
    setDropdownOpen1(false);
    setDropdownOpen2(false);
  }, []);

  return (
    <div id="inicio" className="relative text-white gradient-background pb-[10%] overflow-hidden" onClick={closeDropdowns}>
      <header className="flex justify-between w-full items-start py-4 lg:py-10">
        <div className="mx-auto md:mx-[5%]">
          <img
            src="/assets/Logo.png"
            alt="GIOFI Logo"
            className="h-10 w-auto md:h-14 lg:h-auto"
            loading="eager"
            width="120"
            height="40"
          />
        </div>
        
        {/* Navegación desktop */}
        <div className="hidden lg:flex mx-[2%] gap-[50px] items-center">
          <nav>
            <ul className="text-[17px] cursor-pointer flex gap-[50px] font-[700]">
              {navItems && navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item transition-all duration-300 hover:scale-105 ${
                    activeIndex === index ? "text-white" : "text-white/70 text-[16px] hover:text-white"
                  }`}
                  onClick={() => handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={toggleDropdown1}
              className="w-full bg-[#C799F2] border-2 border-[#C799F2] hover:bg-[#28C0F5] hover:border-[#28C0F5] duration-300 hover:text-white text-white py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-haspopup="true"
              aria-expanded={dropdownOpen1}
            >
              {t("hero.start")}
            </button>
            {dropdownOpen1 && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl z-20 min-w-[200px] border border-gray-200">
                <a
                  href="https://form.jotform.com/242172184154452"
                  className="block px-4 py-3 text-black hover:bg-[#28C0F5] hover:text-white transition-colors duration-200 rounded-t-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.dropdown.individual")}
                </a>
                <a
                  href="https://form.jotform.com/242172269063455"
                  className="block px-4 py-3 text-black hover:bg-[#28C0F5] hover:text-white transition-colors duration-200 rounded-b-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.dropdown.business")}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Menú móvil */}
        <div className="absolute top-5 right-4 lg:hidden">
          <button
            onClick={() => setShow(!show)}
            className="h-10 w-10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
            aria-label="Toggle menu"
          >
            <img
              alt="Menu"
              src="/assets/Icons/menu.svg"
              className="h-10 w-10"
            />
          </button>
        </div>
        
        <div className="absolute lg:hidden">
          <div
            className={`${
              show === true ? "block" : "hidden"
            } fixed z-50 top-20 about-gradient right-5 backdrop-blur-lg py-4 px-5 rounded-lg border border-white/20 shadow-xl`}
          >
            <ul className="text-[15px] space-y-3 cursor-pointer gap-[50px] font-[700]">
              {navItems && navItems.map((item, index) => (
                <li
                  key={index}
                  className="nav-item hover:text-[#28C0F5] transition-colors duration-200"
                  onClick={() => handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="flex px-[5%] flex-col h-auto lg:h-[800px] lg:flex-col gap-[2%] 2xl:gap-[5%] items-center justify-center">
        {/* Animación Lottie con componente personalizado */}
        <div className="w-full md:w-auto mx-auto md:h-[75%] max-w-[600px]">
          {animationError ? (
            // Fallback en caso de error
            <div className="w-full h-[300px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
              <img
                src="/assets/Logo.png"
                alt="GIOFI"
                className="h-20 w-auto opacity-70"
              />
            </div>
          ) : animationData ? (
            <LottieAnimation 
              animationData={animationData}
              loop={true}
              autoplay={true}
              width="100%"
              height={300}
              className="w-full"
            />
          ) : (
            // Loading state
            <div className="w-full h-[300px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
          )}
        </div>
        
        {/* Contenido principal */}
        <div className="lg:w-[80%] space-y-8 text-center">
          {svgPaths?.heroTitle && (
            <img 
              alt="GIOFI Hero Title" 
              src={svgPaths.heroTitle} 
              className="w-full mx-auto max-w-[800px]"
              loading="eager"
            />
          )}
          <p className="text-sm md:text-[20px] lg:text-[27px] font-[300] leading-[28px] md:leading-[38px] max-w-[900px] mx-auto">
            {t("hero.description")}
          </p>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={toggleDropdown2}
                className="w-full bg-[#C799F2] border-2 border-[#C799F2] hover:bg-[#28C0F5] hover:border-[#28C0F5] duration-300 hover:text-white text-white py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-haspopup="true"
                aria-expanded={dropdownOpen2}
              >
                {t("hero.start")}
              </button>
              {dropdownOpen2 && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl z-20 min-w-[200px] border border-gray-200">
                  <a
                    href="https://form.jotform.com/242172184154452"
                    className="block px-4 py-3 text-black hover:bg-[#28C0F5] hover:text-white transition-colors duration-200 rounded-t-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("hero.dropdown.individual")}
                  </a>
                  <a
                    href="https://form.jotform.com/242172269063455"
                    className="block px-4 py-3 text-black hover:bg-[#28C0F5] hover:text-white transition-colors duration-200 rounded-b-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("hero.dropdown.business")}
                  </a>
                </div>
              )}
            </div>
            
            <a
              href="https://in.sumsub.com/idensic/l/#/uni_k0Terawfp39AHWgi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-transparent border-2 border-white text-white hover:border-[#28C0F5] hover:bg-[#28C0F5] duration-300 hover:text-white py-2 md:py-4 px-4 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20">
                {t("hero.identityVerification")}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;