import ProductList from "./components/ProductList"
import Header from "./components/Header";
import useFilters from "./customHooks/useFilters";
import { products as initialProducts } from "./mocks/products.json"
import Footer from "./components/Footer";
import { Cart } from "./components/Cart";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  //Prop drilling: Utilizar solo si bajamos dos capas, mas de eso utilizar useContext u otras alternativas.
  return (
    <>
      <Header />
      <Cart/>
      <main>
        <ProductList products={filteredProducts}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
