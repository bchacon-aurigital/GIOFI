import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-2 md:left-1/2 md:transform md:-translate-x-1/2 z-50 flex bg-white gap-2 bg-opacity-80 backdrop-blur-sm shadow-lg p-2 rounded-full">
      <button
        onClick={() => changeLanguage("en")}
        className="px-2 py-1 text-sm font-medium text-black bg-[#C799F2] hover:bg-[#28C0F5] rounded-full transition-all duration-300"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className="px-2 py-1 text-sm font-medium text-black bg-[#C799F2] hover:bg-[#28C0F5] rounded-full transition-all duration-300"
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitcher;
