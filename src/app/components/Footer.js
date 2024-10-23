"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSmoothScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-500 px-[10%] pt-[3%]">
      <div className="flex flex-col md:flex-row justify-between items-center py-[2%]">
        <div className="flex md:w-[30%] mb-12 md:mb-0 text-start flex-col items-start">
          <img alt="logo" src="/assets/fonts/FooterLogo.svg" />
          <p className="text-white pt-6 text-[18px]">
            Una nueva forma de hacer pagos de forma fácil, confiable y segura.
          </p>
        </div>

        <div className="flex gap-[90px]">
          <ul className="text-[16px] text-white/70 leading-[24px] space-y-5">
            <li className="text-[18px] font-[500] text-white pb-3">GIOFI</li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("home")}
            >
              Inicio
            </li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("features")}
            >
              Características
            </li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("solution")}
            >
              Solución
            </li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("process")}
            >
              Proceso
            </li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("about-us")}
            >
              Nosotros
            </li>
          </ul>
          <ul className="text-[16px] text-white/70 leading-[24px] space-y-5">
            <li className="text-[18px] font-[500] text-white pb-3">
              Redes Sociales
            </li>
            <li className="text-white/70 cursor-pointer">Whatsapp</li>
            <li className="text-white/70 cursor-pointer">Instagram</li>
            <li className="text-white/70 cursor-pointer">Facebook</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/50 py-[3%] flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[18px] leading-[27px] text-center md:text-start">
            2021 GalileoFi. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/docs/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[10px] text-center p-1 hover:text-[#28C0F5]"
            >
              Privacy Policy
            </a>
            <a
              href="/docs/terms-of-service.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-center p-1 underline hover:text-[#28C0F5]"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-center pt-[4%] lg:pt-0">
          <img
            alt="Facebook"
            src="/assets/Icons/Facebook.svg"
            className="cursor-pointer hover:scale-110 duration-300"
          />
          <img
            alt="Instagram"
            src="/assets/Icons/Instagram.svg"
            className="cursor-pointer hover:scale-110 duration-300"
          />
          <img
            alt="Twitter"
            src="/assets/Icons/Twitter.svg"
            className="cursor-pointer hover:scale-110 duration-300"
          />
          <img
            alt="Linkedin"
            src="/assets/Icons/linkedin.svg"
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </div>
      </div>
      <div className="justify-center items-center flex w-full h-8 ">
        <a
          href="https://aurigital.com"
          target="_blank"
          className="flex items-center"
        >
          <p className="text-white uppercase text-[8px] text-center p-1 hover:text-[#28C0F5]">
            Design and Development by :
          </p>
          <img
            src="/assets/isotipo.avif"
            alt="aurigital"
            className="h-[20px] w-[20px]"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
