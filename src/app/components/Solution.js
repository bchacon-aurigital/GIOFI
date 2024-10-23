"use client";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";
import animationData from '../../../public/assets/lottie/Coin.json'; // Asegúrate de que la ruta es correcta

const Solution = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div
      id="solución"
      className="pt-[100px] md:pt-[340px]  relative flex flex-col lg:flex-row gap-[2%] bg-[#F8EBF7] px-[10%] py-[50px] md:py-[5%] justify-center items-center"
    >
      <div
        data-aos="fade-up"
        className="absolute top-[-50px] w-[200px] h-[200px] mx-auto md:w-[400px] md:h-[400px]"
      >
        <Lottie options={defaultOptions} />
      </div>

      <div
        data-aos="fade-up"
        className="w-full text-center mt-6"
      >
        <img
          src="/assets/fonts/ASÓCIATE CON giofi Y EXPERIMENTA LA NUEVA ERA DE LA GESTIÓN FINANCIERA..svg"
          alt="TASÓCIATE CON GIOFI Y EXPERIMENTA LA NUEVA ERA DE LA GESTIÓN FINANCIERA"
          className="w-full h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Solution;
