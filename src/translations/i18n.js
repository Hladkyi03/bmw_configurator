/* eslint-disable max-len */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import homePageTranslations from "./homePage";
import footerTranslations from "./footer";
import nav from "./nav";
import catalogFilters from "./catalogFilters";
import catalogCars from "./catalogCars";
import configPageTranslations from "./configPage";
import notFoundTranslations from "./notFound";

const resources = {
  en: {
    translation: {
      ...homePageTranslations.en.translation,
      ...footerTranslations.en.translation,
      ...nav.en.translation,
      ...catalogFilters.en.translation,
      ...catalogCars.en.translation,
      ...configPageTranslations.en.translation,
      ...notFoundTranslations.en.translation,
    },
  },
  uk: {
    translation: {
      ...homePageTranslations.uk.translation,
      ...footerTranslations.uk.translation,
      ...nav.uk.translation,
      ...catalogFilters.uk.translation,
      ...catalogCars.uk.translation,
      ...configPageTranslations.uk.translation,
      ...notFoundTranslations.uk.translation,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
