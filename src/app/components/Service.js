"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/assets/bg-cta2.avif')",
      
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="grid lg:grid-cols-2 gap-4 lg:gap-6 px-[5%] py-[10%] lg:px-[8%]"
    >
      <div data-aos="fade-up">
        <img alt="TE ACOMPAÑAMOS EN durante EL PROCESO" src="/assets/fonts/TE ACOMPAÑAMOS EN durante EL PROCESO.svg" />
        <p className="text-[18px] py-6 leading-[34px] text-white">
          Nuestro equipo de expertos en tecnología y finanzas está listo para asistirte desde la implementación hasta el soporte continuo.
        </p>
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="bg-[#C799F2] hover:bg-[#28C0F5] duration-300 hover:text-white text-white py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
          >
            Comenzar
          </button>
          {dropdownOpen && (
            <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-10">
              <a
                href="https://form.jotform.com/242172184154452"
                className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                For Individuals
              </a>
              <a
                href="https://form.jotform.com/242172269063455"
                className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                For Business
              </a>
            </div>
          )}
        </div>
      </div>

      <div data-aos="fade-up" className="flex justify-center items-center h-full lg:h-auto">
        <img alt="" src="/assets/img3.avif" className="w-full lg:w-[60%] xl:w-[70%] 2xl:w-[70%]" />
      </div>
    </div>

  );
};

export default Service;
