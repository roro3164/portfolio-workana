// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pageFR from './public/translation/French/page.json';
import dataProjectsFR from './public/translation/French/dataProjects.json';


import pageES from './public/translation/Spanish/page.json';
import dataProjectsES from './public/translation/Spanish/dataProjects.json';


import pageEN from './public/translation/English/page.json';
import dataProjectsEN from './public/translation/English/dataProjects.json';


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
    resources,
    fallbackLng: 'fr',
    debug: process.env.NODE_ENV === 'development',
    ns: ['page', 'dataProjects', 'offers'],
    defaultNS: 'page',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
