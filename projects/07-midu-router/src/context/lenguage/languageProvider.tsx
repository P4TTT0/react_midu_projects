import { useEffect, useState } from "react";
import { LanguageContext } from "./languageContext";
import { Lang } from "../../translations/useI18n";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const getInitialLang = (): Lang => {
        const stored = localStorage.getItem("lang");
        return stored === "en" || stored === "es" ? stored : "es";
      };
      
    const [lang, setLang] = useState<Lang>(getInitialLang); 
    useEffect(() => {
        window.localStorage.setItem("lang", lang)
    } ,[lang])
  
    return (
      <LanguageContext.Provider value={{ language: lang, setLang }}>
        {children}
      </LanguageContext.Provider>
    );
};