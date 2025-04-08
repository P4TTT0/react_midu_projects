import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { RouteType } from "./types/routeType";
import { Router } from "./components/Router";
import { SearchPage } from "./components/SearchPage";
import { Route } from "./components/Route";

const routes: RouteType[] = [
  {
    path: "/search/:query",
    component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Router routes={routes}>
        <Route path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </Router>
    </main>
  )
}

export default App