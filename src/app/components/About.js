"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CTAnim from "../../../public/assets/lottie/CTA-anim.json";
import Lottie from "react-lottie";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 9000 });
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CTAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (

    <div
      id="nosotros"
      className="bg-[#F8EBF7] gap-[2%] px-[3%] lg:px-[10%] md:py-[5%] pb-[8%] "
    >
      {/*<div
        data-aos="fade-up"
        data-aos-delay="500"
        className="grid py-8 md:py-0 md:grid-cols-2 items-center gap-[12%]"
      >
        <img alt="" src="/assets/fonts/What people are saying about us.svg" />
        <p className="text-[25px] font-medium text-black">
        Todo lo que necesitas para administrar tu fondos de forma segura y eficiente.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="4000"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-[4%] py-[12%]"
      >
        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img alt="" src="/assets/quotes.png" />
          <p className="mt-3 ml-2 text-[22px] text-black leading-relaxed">
            GalileoFi ha transformado la forma en que manejo mis transferencias y fideicomisos. La seguridad es impecable y el servicio, excelente. Altamente recomendado.
          </p>
          <p className="mt-4 text-[20px] font-bold text-[#4332d8]">Brandon C., Empresario</p>
        </div>

        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img alt="" src="/assets/quotes.png" />
          <p className="mt-3 ml-2 text-[22px] text-black leading-relaxed">
            Confío en GalileoFi para mis clientes que necesitan fideicomisos y transferencias. Son precisos y seguros. El proceso de KYC es muy eficiente.
          </p>
          <p className="mt-4 text-[20px] font-bold text-[#4332d8]">Adrian A., Consultor Legal</p>
        </div>

        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img alt="" src="/assets/quotes.png" />
          <p className="mt-3 ml-2 text-[22px] text-black leading-relaxed">
            Utilizo GalileoFi para mis inversiones y su servicio es excelente. La gestión de fideicomisos y el proceso de KYC son rápidos y seguros.
          </p>
          <p className="mt-4 text-[20px] font-bold text-[#4332d8]">Eduardo L., Inversionista</p>
        </div>
      </div>*/}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-cover bg-center lg:py-[4%] md:my-0 flex flex-col md:flex-row items-center gap-[2%] p-4 rounded-[20px]"
        style={{
          backgroundImage: "url('/assets/bg-cta.avif')",
        }}
      >
        <div className="md:w-[18%] ml-[2%]">
          <Lottie
            options={defaultOptions}
            className="h-[20px] md:h-[280px] w-auto"
          />
        </div>


        <div>
          <h3 className="text-[30px] lg:text-[36px] text-center md:text-start leading-[36px] lg:leading-[67px] font-[600]">
            Maneja todos tus activos digitales con GIOFI.          </h3>
          <h3 className="text-[20px] lg:text-[22px] text-center md:text-start leading-[28px] lg:leading-[20px] font-[400]">
            Estamos asociados con Galileo Capital para brindarte el mayor nivel de confianza y seguridad.
          </h3>
          <div className="flex items-center justify-center md:justify-start md:items-start relative">
            <button
              onClick={toggleDropdown}
              className="mt-6 bg-[#C799F2] text-white py-4 px-5 lg:px-9 rounded-full text-[17px] font-[500] hover:bg-[#28C0F5] duration-300 hover:text-white"
            >
              Comenzar
            </button>
            <button
              className="mt-6 ml-4 bg-transparent border-2 border-[#28C0F5] text-[#28C0F5] py-4 px-3 md:px-9 rounded-full text-[17px] font-[500] hover:bg-[#28C0F5] duration-300 hover:text-white"
            >
              Galileo Capital
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-10">
                <a
                  href="https://form.jotform.com/242172184154452"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Individual
                </a>
                <a
                  href="https://form.jotform.com/242172269063455"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Para Empresas
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
