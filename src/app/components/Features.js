"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const cards = t("features.cards", { returnObjects: true });

  return (
    <div id="características" className="bg-[#F8EBF7] px-[10%] py-[50px] md:py-[5%] text-[#323232]">
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[3%] pt-[2%]"
      >
        <div className="space-y-8">
          <img
            alt={t("features.titleImageAlt", "Financial Challenge")}
            src={t("features.titleImage")}
          />
          <p className="text-[16px] md:text-[18px] leading-[23px] md:leading-[30px] text-[#4A4A4A]">
            {t("features.description")}
          </p>
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="bg-[#C799F2] hover:bg-[#28C0F5] duration-300 hover:text-white text-white py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
            >
              {t("features.startButton")}
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-10">
                <a
                  href="https://form.jotform.com/242172184154452"
                  className="block px-4 py-2 text-black hover:bg-[#9C6CF0] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("features.dropdown.individual")}
                </a>
                <a
                  href="https://form.jotform.com/242172269063455"
                  className="block px-4 py-2 text-black hover:bg-[#9C6CF0] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("features.dropdown.business")}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-4 hover-gradient rounded-[20px] group"
            >
              <img alt="" src={card.icon} />
              <div>
                <h5 className="text-[18px] md:text-[20px] leading-[26px] font-[600] text-[#9C6CF0] group-hover:text-white">
                  {card.title}
                </h5>
                <p className="text-[#666] group-hover:text-white">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
