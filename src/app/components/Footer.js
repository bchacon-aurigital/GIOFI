"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const { t } = useTranslation();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSmoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = contactForm;
    
    if (!name || !email || !message) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Crear el enlace mailto con los datos del formulario
    const subject = encodeURIComponent(`Contacto desde GIOFI - ${name}`);
    const body = encodeURIComponent(`
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
    `);
    
    const mailtoLink = `mailto:jose@galileo.finance?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Limpiar el formulario
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-500 px-[5%] lg:px-[10%] pt-[3%]">
      <div className="flex flex-col lg:flex-row justify-between items-start py-[2%] gap-8">
        {/* Logo y descripción */}
        <div className="flex w-full lg:w-[30%] mb-8 lg:mb-0 text-start flex-col items-start">
          <img
            alt="Footer logo"
            src="/assets/fonts/FooterLogo.svg"
            className="mb-4"
          />
          <p className="text-white text-[16px] lg:text-[18px] leading-relaxed">
            {t("footer.description")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] w-full lg:w-auto">
          {/* Secciones de navegación */}
          <ul className="text-[16px] text-white/70 leading-[28px] space-y-3">
            <li className="text-[18px] font-[500] text-white pb-3">
              {t("footer.sections.title")}
            </li>
            <li
              className="text-white/70 cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => handleSmoothScroll("inicio")}
            >
              {t("footer.sections.home")}
            </li>
            <li
              className="text-white/70 cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => handleSmoothScroll("características")}
            >
              {t("footer.sections.features")}
            </li>
            <li
              className="text-white/70 cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => handleSmoothScroll("solución")}
            >
              {t("footer.sections.solution")}
            </li>
            <li
              className="text-white/70 cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => handleSmoothScroll("proceso")}
            >
              {t("footer.sections.process")}
            </li>
            <li
              className="text-white/70 cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => handleSmoothScroll("nosotros")}
            >
              {t("footer.sections.aboutUs")}
            </li>
          </ul>

          {/* Formulario de contacto */}
          <div className="w-full lg:w-[350px]">
            <h3 className="text-[18px] font-[500] text-white pb-4">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#28C0F5] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#28C0F5] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  rows="4"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#28C0F5] focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#C799F2] hover:bg-[#28C0F5] text-white py-3 px-6 rounded-lg font-[500] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Línea divisoria y información legal */}
      <div className="border-t border-white/30 py-[3%] flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <p className="text-[16px] lg:text-[18px] leading-[27px] text-center lg:text-start text-white/90">
            {t("footer.copyright")}
          </p>
          <div className="flex justify-center lg:justify-start space-x-6">
            <a
              href="/docs/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[12px] text-white/70 hover:text-[#28C0F5] transition-colors duration-300"
            >
              {t("footer.legal.privacyPolicy")}
            </a>
            <a
              href="/docs/terms-of-service.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-white/70 underline hover:text-[#28C0F5] transition-colors duration-300"
            >
              {t("footer.legal.termsOfService")}
            </a>
          </div>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex gap-4 items-center">
          <a href="#" aria-label="Facebook" className="group">
            <img
              alt="Facebook"
              src="/assets/Icons/Facebook.svg"
              className="cursor-pointer hover:scale-110 duration-300 group-hover:opacity-80"
            />
          </a>
          <a href="#" aria-label="Instagram" className="group">
            <img
              alt="Instagram"
              src="/assets/Icons/Instagram.svg"
              className="cursor-pointer hover:scale-110 duration-300 group-hover:opacity-80"
            />
          </a>
          <a href="#" aria-label="Twitter" className="group">
            <img
              alt="Twitter"
              src="/assets/Icons/Twitter.svg"
              className="cursor-pointer hover:scale-110 duration-300 group-hover:opacity-80"
            />
          </a>
          <a href="#" aria-label="LinkedIn" className="group">
            <img
              alt="Linkedin"
              src="/assets/Icons/linkedin.svg"
              className="cursor-pointer hover:scale-110 duration-300 group-hover:opacity-80"
            />
          </a>
        </div>
      </div>

      {/* Créditos de diseño */}
      <div className="justify-center items-center flex w-full py-4">
        <a
          href="https://aurigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:opacity-80 transition-opacity duration-300"
        >
          <p className="text-white uppercase text-[10px] text-center mr-2 hover:text-[#28C0F5] transition-colors duration-300">
            {t("footer.design.credit")}
          </p>
          <img
            src="/assets/isotipo.avif"
            alt={t("footer.design.aurigitalAlt")}
            className="h-[20px] w-[20px]"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;