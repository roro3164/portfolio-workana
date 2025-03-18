// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// On importe les JSON (option "import direct")
import pageFR from './public/translation/French/page.json';
import dataProjectsFR from './public/translation/French/dataProjects.json';

import pageES from './public/translation/Spanish/page.json';
import dataProjectsES from './public/translation/Spanish/dataProjects.json';

import pageEN from './public/translation/English/page.json';
import dataProjectsEN from './public/translation/English/dataProjects.json';

// On structure nos ressources en indiquant les namespaces
const resources = {
  fr: {
    page: pageFR,
    dataProjects: dataProjectsFR,
  },
  es: {
    page: pageES,
    dataProjects: dataProjectsES,
  },
  en: {
    page: pageEN,
    dataProjects: dataProjectsEN,
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Nos ressources locales
    resources,

    // Langue de repli
    fallbackLng: 'fr',

    // Active le mode debug en dev
    debug: process.env.NODE_ENV === 'development',

    // On déclare nos namespaces
    ns: ['page', 'dataProjects'],
    // Namespace par défaut si on ne précise pas { ns: '...' }
    defaultNS: 'page',

    interpolation: {
      escapeValue: false, // Pas nécessaire pour React
    },

    react: {
      useSuspense: false,
    }
  });

export default i18n;
