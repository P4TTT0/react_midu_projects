import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { RouteType } from "./types/routeType";
import { Router } from "./components/Router";

const routes: RouteType[] = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/abot",
    component: AboutPage
  }
]

function App() {
  return (
    <main>
      <Router routes={routes}/>
    </main>
  )
}

export default App