import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируйте файлы переводов
import enTranslations from '../translations/en.json';
import ruTranslations from '../translations/ru.json';

// Определите поддерживаемые языки и соответствующие переводы
const resources = {
  en: {
    translation: enTranslations,
  },
  ru: {
    translation: ruTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
