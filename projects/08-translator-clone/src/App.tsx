import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ActionType, SetFromLanguageAction, SetFromTextAction, SetResultAction, SetToLanguageAction, SwapLanguageAction, TranslateAction, TranslateState } from './types/translateTypes';

// 1 - Creamos un estado inicial.
const initialState: TranslateState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const actionMap = {
  [ActionType.SwapLanguage]: (state: TranslateState, _action: SwapLanguageAction): TranslateState => ({
    ...state,
    fromLanguage: state.toLanguage,
    toLanguage: state.fromLanguage
  }),

  [ActionType.SetFromLanguage]: (state: TranslateState, action: SetFromLanguageAction): TranslateState => ({
    ...state,
    fromLanguage: action.payload
  }),

  [ActionType.SetToLanguage]: (state: TranslateState, action: SetToLanguageAction): TranslateState => ({
    ...state,
    toLanguage: action.payload
  }),

  [ActionType.SetFromText]: (state: TranslateState, action: SetFromTextAction): TranslateState => ({
    ...state,
    loading: true,
    fromText: action.payload
  }),

  [ActionType.SetResult]: (state: TranslateState, action: SetResultAction): TranslateState => ({
    ...state,
    loading: false,
    fromText: action.payload
  }),
};

// 2 - Creamos el reducer.
const reducer = (state: TranslateState, action: TranslateAction) => {
  const handler = actionMap[action.type] as (state: TranslateState, action: TranslateAction) => TranslateState;
  return handler(state, action);
}

function App() {
  // 3 - Usamos el hook useReducer.
  // 4, 5 - Obtenemos el estado y el dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => {
        dispatch({ type: ActionType.SetFromLanguage, payload: "es" })
      }}>
        Cambiar a Español
      </button>
    </>
  )
}

export default App
