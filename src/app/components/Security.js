"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Security = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center overflow-hidden gap-[5%] bg-[#F8EBF7] px-[10%] py-[5%]">
      <div data-aos="fade-right" className="w-full order-1 lg:order-none lg:w-[40%]">
        <img alt="" src="/assets/img2.avif" className="w-full h-auto mx-auto rounded-lg shadow-lg mt-6" />
      </div>

      <div
        data-aos="fade-left"
        className="space-y-8 text-center lg:text-left w-full lg:w-[50%] relative"
      >
        <div className="flex items-center justify-center">
          <img
            alt="Logo"
            src="/assets/bg-art.avif"
            className="mb-6 w-[200px] h-[200px]"
          />
        </div>

        <img
          alt="Menos Fragmentación y Más Eficiencia"
          src="/assets/fonts/Menos Fragmentación y Más Eficiencia.svg"
          className="mb-6 mx-auto lg:mx-0"
        />
        <p className="text-[18px] font-medium text-gray-700 leading-relaxed">
          GIOFI integra todas tus operaciones financieras en una sola plataforma,
          minimizando los costos y aumentando la seguridad en cada transacción.
        </p>
      </div>
    </div>
  );
};

export default Security;
