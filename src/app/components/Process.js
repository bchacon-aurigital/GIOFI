"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProcessAnim1 from "../../../public/assets/lottie/process1.json";
import ProcessAnim2 from "../../../public/assets/lottie/process2.json";
import ProcessAnim3 from "../../../public/assets/lottie/process3.json";
import Lottie from "react-lottie";

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: ProcessAnim1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: ProcessAnim2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: ProcessAnim3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="proceso" className="relative bg-gradient-to-b from-purple-500 to-blue-400 py-16 flex justify-center">
      {/* Imagen */}
      <div
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[400px] h-[600px] opacity-80"
        style={{
          backgroundImage: `url('/assets/ProcessImg.avif')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="max-w-7xl md:mx-20 px-5 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-y-12">
          {/* Card 1 */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col items-start border border-[3px] shadow-lg transition-transform transform hover:scale-105 relative"
            style={{
              borderImage: 'linear-gradient(180deg, #28C0F5, white) 1',
              WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            }}
          >
            <div className="w-[100px] h-[100px] mx-auto mb-4">
              <Lottie options={defaultOptions1} />
            </div>
            <h4 className="text-white text-[20px] lg:text-[22px] font-bold mb-4">
              1. Evaluamos tus necesidades específicas
            </h4>
            <p className="text-white text-[16px] lg:text-[18px]">
              Comenzamos con un análisis detallado de tus necesidades
              financieras y operativas, identificando los desafíos específicos
              que enfrentas en la gestión de recursos y transferencias de
              fondos.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col items-start border border-[3px] shadow-lg transition-transform transform hover:scale-105 relative"
            style={{
              borderImage: 'linear-gradient(180deg, #28C0F5, white) 1',
              WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            }}
          >
            <div className="w-[100px] h-[100px] mx-auto mb-4">
              <Lottie options={defaultOptions3} />
            </div>
            <h4 className="text-white text-[20px] lg:text-[22px] font-bold mb-4">
              2. Propuesta de servicios adaptados
            </h4>
            <p className="text-white text-[16px] lg:text-[18px]">
              Con base en la evaluación, desarrollamos una propuesta
              personalizada que integra soluciones eficientes y seguras,
              optimizadas para cumplir con tus objetivos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-y-12 mt-8">
          {/* Card 3 */}
          <div className="bg-gradient-to-r from-purple-500 to-[#52f2f5] p-6 rounded-lg flex flex-col items-start shadow-lg transition-transform transform hover:scale-105 relative">
            <h4 className="text-white text-[20px] lg:text-[22px] font-bold mb-4">
              3. Ejecución por parte de nuestro equipo especializado
            </h4>
            <p className="text-white text-[16px] lg:text-[18px]">
              Nuestro equipo de expertos se encarga de llevar a cabo todas las
              operaciones financieras, desde la administración de fideicomisos
              hasta el canje de dinero y las transferencias internacionales.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white bg-opacity-10 p-6 rounded-lg flex items-center justify-between border border-[3px] shadow-lg transition-transform transform hover:scale-105 relative"
            style={{
              borderImage: 'linear-gradient(180deg, #28C0F5, white) 1',
              WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            }}
          >
            <div className="w-[440px] h-440px] mr-6">
              <Lottie options={defaultOptions2} />
            </div>
            <div className="rounded-lg">
              <h4 className="text-white text-[20px] lg:text-[22px] font-bold mb-4">
                4. Supervisión y seguimiento continuo
              </h4>
              <p className="text-white text-[16px] lg:text-[18px]">
                Nos aseguramos de que todas las operaciones se mantengan seguras
                y eficientes mediante un monitoreo constante, brindándote soporte
                personalizado para garantizar tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
