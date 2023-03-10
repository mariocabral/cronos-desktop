import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslate from './en/en.json';
import esTranslate from './es/es.json';
import moment from 'moment';
import 'moment/dist/locale/es';

export enum Languages {
    en = "en", 
    es = "es"
}

moment.locale(['en', 'es']);

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en : {translation: enTranslate},
  es : {translation: esTranslate},
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: Languages.es, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18next;