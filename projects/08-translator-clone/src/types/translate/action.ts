import { FromLanguage, ToLanguage } from ".";

export enum ActionType {
    SwapLanguage = "SWAP_LANGUAGE",
    SetFromLanguage = "SET_FROM_LANGUAGE",
    SetToLanguage = "SET_TO_LANGUAGE",
    SetFromText = "SET_FROM_TEXT",
    SetResult = "SET_RESULT"
}
  
export interface SwapLanguageAction {
    type: ActionType.SwapLanguage;
}
  
export interface SetFromLanguageAction {
    type: ActionType.SetFromLanguage;
    payload: FromLanguage;
}

export interface SetToLanguageAction {
    type: ActionType.SetToLanguage;
    payload: ToLanguage;
}
  
export interface SetFromTextAction {
    type: ActionType.SetFromText;
    payload: string;
}
  
export interface SetResultAction {
    type: ActionType.SetResult;
    payload: string;
}
  
export type TranslateAction =
    | SwapLanguageAction
    | SetFromLanguageAction
    | SetToLanguageAction
    | SetFromTextAction
    | SetResultAction;
  