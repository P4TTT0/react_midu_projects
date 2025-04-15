enum SupportedLanguages {
    en = 'English',
    es = 'Spanish',
    pt = 'Portuguese'
}
  
type AutoLanguage = 'auto';
  
type Language = keyof typeof SupportedLanguages | AutoLanguage;
  
export type FromLanguage = Language;
  
export type ToLanguage = keyof typeof SupportedLanguages;
  