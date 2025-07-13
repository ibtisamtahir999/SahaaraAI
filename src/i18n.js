import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ur from "./locales/ur.json";
import ps from "./locales/ps.json";
import pa from "./locales/pa.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ur: { translation: ur },
      ps: { translation: ps },
      pa: { translation: pa }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
