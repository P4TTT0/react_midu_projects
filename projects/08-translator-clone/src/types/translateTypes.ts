export enum ActionType {
    SwapLanguage = "SWAP_LANGUAGE",
    SetFromLanguage = "SET_FROM_LANAGUAGE",
    SetToLanguage = "SET_TO_LANGUAGE",
    SetFromText = "SET_FROM_TEXT",
    SetResult = "SET_RESULT"
}

export interface TranslateState {
    fromLanguage: string,
    toLanguage: string,
    fromText: string,
    result: string,
    loading: boolean;
}

export interface SwapLanguageAction {
    type: ActionType.SwapLanguage;
}

export interface SetFromLanguageAction {
    type: ActionType.SetFromLanguage;
    payload: string;
}

export interface SetToLanguageAction {
    type: ActionType.SetToLanguage;
    payload: string;
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