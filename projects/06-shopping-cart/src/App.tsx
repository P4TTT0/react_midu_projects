import ProductList from "./components/ProductList"
import Header from "./components/Header";
import { useState } from "react";
import { Product } from "./types/product";
import useFilters from "./customHooks/useFilters";
import { products as initialProducts } from "./mocks/products.json"
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const { filterProducts, setFilter } = useFilters();
  const filteredProducts = filterProducts(products);
  //Prop drilling: Utilizar solo si bajamos dos capas, mas de eso utilizar useContext u otras alternativas.
  return (
    <>
      <Header changeFilters={setFilter} />
      <main>
        <ProductList products={filteredProducts}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
