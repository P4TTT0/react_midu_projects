import React, { useId } from "react";
import "./Filters.css"
import useFilters from "../customHooks/useFilters";

const Filters = () =>
{
    //UseId genera un identificador para utilizar en los componentes, se genera en medida que los componentes se van construyendo
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    const { filter, setFilter } = useFilters();

    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const priceValue = Number.parseInt(event.target.value);
        setFilter(previousState => ({
            ...previousState,
            minPrice: priceValue
        }));
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(previousState => ({
            ...previousState,
            category: event.target.value    
        }));
    }

    return(
        <section className="filters">

            <div>
                <label htmlFor="price">Precio minimo:</label>
                <input 
                    type="range" 
                    id={minPriceFilterId}
                    min={0} 
                    max={1000} 
                    onChange={handleChangeMinPrice}
                    value={filter.minPrice} 
                />
                <span>${filter.minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )    
}

export default Filters;