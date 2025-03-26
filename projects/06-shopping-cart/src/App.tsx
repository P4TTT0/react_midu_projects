import { useEffect, useState } from "react";
import ProductList from "./components/ProductList"
import { products as initialProducts } from "./mocks/products.json";
import { Product, ProductFilter } from "./types/product";

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [filter, setFilter] = useState<ProductFilter>({ category: "all", minPrice: 0});
  useEffect(() => { setProducts(filterProducts(products)) }, [filter]);

  const filterProducts = (products: Product[]) => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice &&
        (
          filter.category === "all" ||
          product.category === filter.category
        )
      )
    });
  }

  return (
    <main>
      <ProductList products={products}/>
    </main>
  )
}

export default App
