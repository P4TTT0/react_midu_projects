import aboutEn from "./en/aboutEn";
import homeEn from "./en/homeEn";
import aboutEs from "./es/aboutEs";
import homeEs from "./es/homeEs";
import notFoundEs from "./es/404Es";
import notFoundEn from "./en/404En";

export type Lang = 'es' | 'en';

const translations = {
    about: {
        es: aboutEs,
        en: aboutEn
    },
    home: {
        es: homeEs,
        en: homeEn
    },
    notFound: {
        es: notFoundEs,
        en: notFoundEn
    }
}

export const useI18n = (lang: Lang) => {
    return {
      about: translations.about[lang] ?? translations.about.en,
      home: translations.home[lang] ?? translations.home.en,
      notFound: translations.notFound[lang] ?? translations.notFound.en
    };
  };