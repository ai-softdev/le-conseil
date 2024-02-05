import i18next from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
  ru: {
    translate: {
      "Вход": "Вход"
    }
  },
  en: {
    translate: {}
  },
  uz: {
    translate: {
      "Вход": "Kirish"
    }
  }
}

i18next.use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18next;