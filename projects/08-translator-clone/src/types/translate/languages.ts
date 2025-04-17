// TODO: Recuperar esto de una API o similar.

export enum SupportedLanguages {
    en = 'English',
    es = 'Spanish',
    pt = 'Portuguese'
}
  
export enum SupportedVoices {
    en = 'en-AU',
    es = 'es-AR',
    pt = 'pt-PT'
}

type AutoLanguage = 'auto';
  
export type Language = keyof typeof SupportedLanguages | AutoLanguage;
  
export type FromLanguage = Language;
  
export type ToLanguage = keyof typeof SupportedLanguages;
  