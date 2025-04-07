import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { RouteType } from "./types/routeType";
import { Router } from "./components/Router";
import { SearchPage } from "./components/SearchPage";

const routes: RouteType[] = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/search/:query",
    component: SearchPage
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