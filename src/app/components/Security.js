"use client";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Security = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center overflow-hidden gap-[5%] bg-[#F8EBF7] px-[10%] py-[5%]">
      <div
        data-aos="fade-right"
        className="w-full order-1 lg:order-none lg:w-[40%]"
      >
        <img
          alt={t("security.mainImageAlt")}
          src="/assets/img2.avif"
          className="w-full h-auto mx-auto rounded-lg shadow-lg mt-6"
        />
      </div>

      <div
        data-aos="fade-left"
        className="space-y-8 text-center lg:text-left w-full lg:w-[50%] relative"
      >
        <div className="flex items-center justify-center">
          <img
            alt={t("security.logoAlt")}
            src="/assets/bg-art.avif"
            className="mb-6 w-[200px] h-[200px]"
          />
        </div>

        <img
          alt={t("security.titleImageAlt")}
          src={t("security.titleImage")}
          className="mb-6 mx-auto lg:mx-0"
        />
        <p className="text-[18px] font-medium text-gray-700 leading-relaxed">
          {t("security.description")}
        </p>
      </div>
    </div>
  );
};

export default Security;
