import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "../context/lenguage/languageContext";

export const useLanguage = (): LanguageContextType => {
    const languageContext = useContext(LanguageContext);
    if (!languageContext) throw new Error("useLanguage must be used within a LanguageProvider");
    return languageContext;
  };