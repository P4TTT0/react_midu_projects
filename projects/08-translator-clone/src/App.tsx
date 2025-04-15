import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useTranslate } from './hooks/useTranslate';

function App() {

  const { state, setFromLanguage } = useTranslate();
  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => { setFromLanguage('es') } }>
        Cambiar a Español
      </button>
      <span>Actual language: {state.fromLanguage}</span>
    </>
  )
}

export default App
