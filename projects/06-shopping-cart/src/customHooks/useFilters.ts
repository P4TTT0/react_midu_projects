import { useContext } from "react";
import { Product } from "../types/product";
import { FiltersContext } from "../context/filtersContext";

const useFilters = () => {
    const { filter, setFilter } = useContext(FiltersContext)

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

    return { filterProducts, filter, setFilter }
}

export default useFilters;