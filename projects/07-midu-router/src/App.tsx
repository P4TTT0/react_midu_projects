import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { usePath } from "./customHooks/usePath";

function App() {
  const currenPath = usePath();
  return (
    <main>
      {currenPath === '/' && <HomePage/>}
      {currenPath === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
