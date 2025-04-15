import { FromLanguage, ToLanguage } from ".";

export interface TranslateState {
    fromLanguage: FromLanguage,
    toLanguage: ToLanguage,
    fromText: string,
    result: string,
    loading: boolean;
}