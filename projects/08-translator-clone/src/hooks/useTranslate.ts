import { useReducer } from "react";
import { ActionType, FromLanguage, SetFromLanguageAction, SetFromTextAction, SetResultAction, SetToLanguageAction, SwapLanguageAction, ToLanguage, TranslateAction, TranslateState } from "../types/translate";

// 1 - Creamos un estado inicial.
const initialState: TranslateState = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
}
  
const actionMap = {
    [ActionType.SwapLanguage]: (state: TranslateState, _action: SwapLanguageAction): TranslateState => {
        if (state.fromLanguage === 'auto') return state;
        const loading = state.fromText !== '';

        return {
            ...state,
            loading: loading,
            fromText: state.result,
            result: '',
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage as ToLanguage
        }
    },

    [ActionType.SetFromLanguage]: (state: TranslateState, action: SetFromLanguageAction): TranslateState => {
        if (state.fromLanguage === action.payload) return state;
        const loading = state.fromText !== '';

        return {
            ...state,
            fromLanguage: action.payload,
            result: '',
            loading: loading
        }
    },

    [ActionType.SetToLanguage]: (state: TranslateState, action: SetToLanguageAction): TranslateState => {
        if(state.toLanguage === action.payload) return state;
        const loading = state.fromText !== '';

        return {
            ...state,
            toLanguage: action.payload,
            loading: loading
        }
    },

    [ActionType.SetFromText]: (state: TranslateState, action: SetFromTextAction): TranslateState => {
        const loading = state.fromText !== '';
        return{
            ...state,
            loading: loading,
            fromText: action.payload,
            result: ''
        }
    },

    [ActionType.SetResult]: (state: TranslateState, action: SetResultAction): TranslateState => ({
        ...state,
        loading: false,
        result: action.payload
    }),
};

export const useTranslate = () => {

    // 2 - Creamos el reducer.
    const reducer = (state: TranslateState, action: TranslateAction) => {
        const handler = actionMap[action.type] as (state: TranslateState, action: TranslateAction) => TranslateState;
        return handler(state, action);
    }

    const swapLanguages = () => {
        dispatch({ type: ActionType.SwapLanguage })
    }

    const setFromLanguage = (fromLanguage: FromLanguage) => {
        dispatch({ type: ActionType.SetFromLanguage, payload: fromLanguage })
    }

    const setToLanguage = (toLanguage: ToLanguage) => {
        dispatch({ type: ActionType.SetToLanguage, payload: toLanguage })
    }

    const setFromText = (fromText: string) => {
        dispatch({ type: ActionType.SetFromText, payload: fromText })
    }

    const setResult = (result: string) => {
        dispatch({ type: ActionType.SetResult, payload: result })
    }

    // 3 - Usamos el hook useReducer.
    // 4, 5 - Obtenemos el estado y el dispatch
    const [state, dispatch] = useReducer(reducer, initialState);

    return { state, swapLanguages, setFromLanguage, setToLanguage, setFromText, setResult };
}