import ProductList from "./components/ProductList"
import Header from "./components/Header";
import useFilters from "./customHooks/useFilters";
import { products as initialProducts } from "./mocks/products.json"
import Footer from "./components/Footer";
import { Cart } from "./components/Cart";

function App() {
  const { filterProducts } = useFilters();
  const initialProductsWithQuantity = initialProducts.map(product => ({
    ...product,
    quantity: 0 // o el valor por defecto que quieras
}));

  const filteredProducts = filterProducts(initialProductsWithQuantity);
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
