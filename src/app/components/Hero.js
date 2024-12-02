"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import HeroAnim from "../../../public/assets/lottie/heroAnim.json";
import Lottie from "react-lottie";

const Hero = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const navItems = t("hero.nav", { returnObjects: true });
  const svgPaths = t("hero.svg", { returnObjects: true });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleNavClick = (index, sectionId) => {
    setActiveIndex(index);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setShow(false);
  };

  const handleMobile = () => {
    setShow(false);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
    setDropdownOpen2(false);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
    setDropdownOpen1(false);
  };

  return (
    <div id="inicio" className="relative text-white gradient-background pb-[10%] overflow-hidden">
      <header className="flex justify-between w-full items-start py-4 lg:py-10">
        <div className="mx-auto md:mx-[5%]">
          <img
            src="/assets/Logo.png"
            alt="Logo"
            className="h-10 a-auto md:h-14 lg:h-auto"
          />
        </div>
        <div className="hidden lg:flex mx-[2%] gap-[50px] items-center">
          <ul className="text-[17px] cursor-pointer flex gap-[50px] font-[700]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${activeIndex === index ? "" : "text-white/70 text-[16px]"}`}
                onClick={() => handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="relative">
            <button
              onClick={toggleDropdown1}
              className="w-full bg-[#C799F2] border-2 border-[#C799F2] hover:bg-[#28C0F5] hover:border-[#28C0F5] duration-300 hover:text-white text-white py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
            >
              {t("hero.start")}
            </button>
            {dropdownOpen1 && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-10">
                <a
                  href="https://form.jotform.com/242172184154452"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.dropdown.individual")}
                </a>
                <a
                  href="https://form.jotform.com/242172269063455"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.dropdown.business")}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-5 right-4 lg:hidden">
          <img
            alt=""
            onClick={() => setShow(!show)}
            src="/assets/Icons/menu.svg"
            className="h-10 w-10 text-white"
          />
        </div>
        <div className="absolute lg:hidden">
          <div
            className={`${show === true ? "block" : "hidden"} fixed z-50 top-20 about-gradient right-5 backdrop-blur-lg py-4 px-5 rounded-lg`}
          >
            <ul className="text-[15px] space-y-3 cursor-pointer gap-[50px] font-[700]">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item`}
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
        <div className="w-full md:w-auto mx-auto md:h-[75%]">
          <Lottie options={defaultOptions} />
        </div>
        <div className="lg:w-[80%] space-y-8 text-center">
          <img alt="" src={svgPaths.heroTitle} className="w-full mx-auto" />
          <p className="text-sm md:text-[20px] lg:text-[27px] font-[300] leading-[28px] md:leading-[38px]">
            {t("hero.description")}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown2}
                className="w-full bg-[#C799F2] border-2 border-[#C799F2] hover:bg-[#28C0F5] hover:border-[#28C0F5] duration-300 hover:text-white text-white py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
              >
                {t("hero.start")}
              </button>
            </div>
            <div className="relative inline-block">
              <a
                href="https://in.sumsub.com/idensic/l/#/uni_k0Terawfp39AHWgi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent border-2 border-white text-white hover:border-[#28C0F5] hover:bg-[#28C0F5] duration-300 hover:text-white py-2 md:py-4 px-2 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]">
                  {t("hero.identityVerification")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
