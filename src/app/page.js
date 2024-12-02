"use client";
import dynamic from "next/dynamic";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

const DynamicHero = dynamic(() => import("./components/Hero"), { ssr: false });
const DynamicChallenge = dynamic(() => import("./components/Features"), {
  ssr: false,
});
const DynamicPartner = dynamic(() => import("./components/Solution"), {
  ssr: false,
});
const DynamicSecurity = dynamic(() => import("./components/Security"), {
  ssr: false,
});
const DynamicService = dynamic(() => import("./components/Service"), {
  ssr: false,
});
const DynamicProcess = dynamic(() => import("./components/Process"), {
  ssr: false,
});
const DynamicAppLaunch = dynamic(() => import("./components/AppLaunch"), {
  ssr: false,
});
const DynamicAbout = dynamic(() => import("./components/About"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("./components/Footer"), {
  ssr: false,
});


export default function Home() {
  return (
    <div>
      <DynamicHero />
      <DynamicChallenge />
      <DynamicPartner />
      <DynamicSecurity />
      <DynamicService />
      <DynamicProcess />
      <DynamicAppLaunch />
      <DynamicAbout />
      <DynamicFooter />
    </div>
  );
}
