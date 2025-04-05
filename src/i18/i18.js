import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Tarayıcı dilini algılamak için

// Dil dosyalarını import ediyoruz
import translationEN from "./EN.json";
import translationAZ from "./AZ.json";

// i18next'i yapılandırıyoruz
i18n
  .use(initReactI18next) // React ile uyumlu hale getiriyoruz
  .use(LanguageDetector) // Tarayıcı dilini otomatik algılar
  .init({
    resources: {
      en: { translation: translationEN }, // İngilizce
      az: { translation: translationAZ }, // Azerbaycan Türkçesi
    },
    lng: "en", // Varsayılan dil
    fallbackLng: "en", // Geçersiz dil seçilirse, İngilizceyi kullan
    interpolation: {
      escapeValue: false, // React için gerekli
    },
  });

export default i18n;
