"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/assets/bg-cta2.avif')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex justify-center"
    >
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 px-[5%] py-[10%] lg:px-[8%] lg:max-w-[90%]">
        {/* Text Section */}
        <div data-aos="fade-up">
          <img
            alt={t("service.titleImageAlt")}
            src={t("service.titleImage")}
          />
          <p className="text-[18px] py-6 leading-[34px] text-white">
            {t("service.description")}
          </p>
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="bg-[#C799F2] hover:bg-[#28C0F5] mb-3 duration-300 hover:text-white text-white py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
            >
              {t("service.startButton")}
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-10">
                <a
                  href="https://form.jotform.com/242172184154452"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("service.dropdown.individual")}
                </a>
                <a
                  href="https://form.jotform.com/242172269063455"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("service.dropdown.business")}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-up"
          className="flex justify-center items-center h-full lg:h-auto"
        >
          <img
            alt={t("service.mainImageAlt")}
            src="/assets/img3.avif"
            className="w-full lg:w-[60%] xl:w-[80%] 2xl:w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
