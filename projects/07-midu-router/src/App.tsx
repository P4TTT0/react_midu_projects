import { HomePage } from "./components/HomePage"; // Import estatico
import { RouteType } from "./types/routeType";
import { Router } from "./components/Router";
import { SearchPage } from "./components/SearchPage";
import { Route } from "./components/Route";
import { lazy } from "react";

// Cargar SOLO lo que el usuario necesite 
const LazyAboutPage = lazy(() =>
  import('./components/AboutPage').then((mod) => ({ default: mod.AboutPage }))
);


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
        <Route path="/about" component={LazyAboutPage}></Route>
      </Router>
    </main>
  )
}

export default App