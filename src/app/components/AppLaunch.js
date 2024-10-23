"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppLaunch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#F8EBF7] py-16 lg:py-24 px-8 lg:px-24">
      <div
        className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 space-y-4 lg:ml-16"
        data-aos="fade-up"
      >
        <div className="mb-4" data-aos="fade-down">
          <img
            src="/assets/fonts/ComingSoon.svg"
            alt="Coming Soon"
            className="mx-auto lg:mx-0"
          />
        </div>
        <div data-aos="fade-down">
          <img
            src="/assets/fonts/Pronto conocerás nuestra nueva app.svg"
            alt="Pronto conocerás nuestra nueva app"
            className="mx-auto lg:mx-0"
          />
        </div>
        <p
          className="text-black text-lg lg:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Administra todas tus operaciones financieras desde un solo lugar con
          nuestra aplicación móvil. Seguridad y conveniencia para tus activos
          digitales al alcance de tu mano.
        </p>
      </div>

      <div className="flex justify-center items-center mt-8 lg:mt-0">
        <div className="w-[300px] lg:w-[350px] flex justify-center items-center p-4">
          <img
            src="/assets/AppMovile.svg"
            alt="App GIOFI"
            className="w-full h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AppLaunch;
