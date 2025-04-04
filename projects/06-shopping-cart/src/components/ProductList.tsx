import React from "react";
import { Product } from "../types/product"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import "./ProductList.css"
import { useCart } from "../customHooks/useCart";

interface ProductsParams{
    products: Product[];
}

const ProductList: React.FC<ProductsParams> = ({ products }) =>{
    const { cart, addToCart, removeFromCart } = useCart();
    return(
        <main className="products">
            <ul>
                {products.map(product => {
                    const isProductInCart = cart.findIndex(item => item.id == product.id) >= 0;
                    return(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <p><strong>{product.title}</strong> - ${product.price}</p>
                            </div>
                            <div className="actions">
                                {
                                    isProductInCart 
                                        ? <button className="in-cart" onClick={() => removeFromCart(product)}><RemoveFromCartIcon /></button>
                                        : <button onClick={() => addToCart(product)}><AddToCartIcon /></button>
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default  ProductList;