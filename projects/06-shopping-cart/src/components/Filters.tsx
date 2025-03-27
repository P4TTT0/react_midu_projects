import { useCallback, useState } from "react";
import "./Filters.css"

const Filters = () =>
{
    const [minPrice, setMinPrice] = useState<number>(0);

    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => setMinPrice(Number.parseInt(event.target.value))

    return(
        <section className="filters">

            <div>
                <label htmlFor="price">Precio minimo:</label>
                <input 
                    type="range" 
                    id="price" 
                    min={0} 
                    max={1000} 
                    onChange={handleChangeMinPrice}
                    value={minPrice} 
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )    
}

export default Filters;