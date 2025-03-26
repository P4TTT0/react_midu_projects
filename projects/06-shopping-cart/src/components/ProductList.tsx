import React from "react";
import { Product } from "../types/product"
import { AddToCartIcon } from "./Icons";
import "./ProductList.css"

interface ProductsParams{
    products: Product[];
}

const ProductList: React.FC<ProductsParams> = ({ products }) =>{
    return(
        <main className="products">
            <ul>
                {products.map(product =>
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <p><strong>{product.title}</strong> - ${product.price}</p>
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </main>
    )
}

export default  ProductList;