import { createContext } from "react";
import { Lang } from "../../translations/useI18n";

export interface LanguageContextType {
    language: Lang
    setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);