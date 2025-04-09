import { RouteType } from "./types/routeType";
import { Router } from "./components/Router";
import { SearchPage } from "./components/SearchPage";
import { Route } from "./components/Route";
import { lazy } from "react";
import { Header } from "./components/Header";

// Cargar SOLO lo que el usuario necesite 
const LazyAboutPage = lazy(() =>
  import('./components/AboutPage').then((mod) => ({ default: mod.AboutPage }))
);

const LazyHomePage = lazy(() =>
  import('./components/HomePage').then((mod) => ({ default: mod.HomePage }))
);


const routes: RouteType[] = [
  {
    path: "/search/:query",
    component: SearchPage
  }
]

function App() {
  return (
    <>
      <Header/>
      <main>
        <Router routes={routes}>
          <Route path="/" component={LazyHomePage}></Route>
          <Route path="/:lang/about" component={LazyAboutPage}></Route>
        </Router>
      </main>
    </>
  )
}

export default App