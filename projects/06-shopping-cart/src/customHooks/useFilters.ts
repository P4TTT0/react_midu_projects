import { useState } from "react";
import { Product, ProductFilter } from "../types/product";

const useFilters = () => {
    const [filter, setFilter] = useState<ProductFilter>({ category: "all", minPrice: 0});

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

    return { filterProducts, setFilter }
}

export default useFilters;