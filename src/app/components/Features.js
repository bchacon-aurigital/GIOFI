import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div id="características" className="bg-[#F8EBF7] px-[10%] py-[50px] md:py-[5%] text-[#323232]">
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[3%] pt-[2%]"
      >
        <div className="space-y-8">
          <img
            alt="El Desafío Financiero Complejidad y Seguridad"
            src="/assets/fonts/El desafío financiero.svg"
          />
          <p className="text-[16px] md:text-[18px] leading-[23px] md:leading-[30px] text-[#4A4A4A]">
            En un entorno donde las operaciones financieras pueden ser
            fragmentadas y costosas, GIOFI ofrece una solución integrada
            para el canje de dinero, transferencias de fondos, y administración
            de fideicomisos y escrow, simplificando y asegurando todas tus
            operaciones financieras.
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
                  className="block px-4 py-2 text-black hover:bg-[#9C6CF0] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Para Individuos
                </a>
                <a
                  href="https://form.jotform.com/242172269063455"
                  className="block px-4 py-2 text-black hover:bg-[#9C6CF0] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Para Empresas
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-start p-4 hover-gradient rounded-[20px] group">
            <img alt="" src="/assets/Icons/icon1.png" />
            <div>
              <h5 className="text-[18px] md:text-[20px] leading-[26px] font-[600] text-[#9C6CF0] group-hover:text-white">
                Tecnología Financiera Avanzada
              </h5>
              <p className="text-[#666] group-hover:text-white">
                Una plataforma automatizada para agilizar y proteger todas tus
                transacciones.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 hover-gradient rounded-[20px] group">
            <img alt="" src="/assets/Icons/icon2.png" />
            <div>
              <h5 className="text-[18px] md:text-[20px] leading-[26px] font-[600] text-[#9C6CF0] group-hover:text-white">
                Seguridad Integral
              </h5>
              <p className="text-[#666] group-hover:text-white">
                Protección robusta para asegurar que tus fondos estén siempre a
                salvo.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 hover-gradient rounded-[20px] group">
            <img alt="" src="/assets/Icons/icon3.png" />
            <div>
              <h5 className="text-[18px] md:text-[20px] leading-[26px] font-[600] text-[#9C6CF0] group-hover:text-white">
                Administración Centralizada
              </h5>
              <p className="text-[#666] group-hover:text-white">
                Gestiona todos tus recursos desde un solo lugar, con mayor
                control y eficiencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
