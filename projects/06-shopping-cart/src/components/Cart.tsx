import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../customHooks/useCart";
import { CartItem } from "./CartItem";


export const Cart = () => {
    const cartCheckboxId = useId();
    const { cart, addToCart, clearCart } = useCart();
    const anyProductsInCart = cart.length > 0;
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                {
                    cart.map(item => {
                        return (
                            <ul>
                                <CartItem product={item} addToCart={() => addToCart(item)}/>
                            </ul>
                        );
                    })
                }
                {
                    anyProductsInCart 
                        ? <button onClick={clearCart} className="clear-button"> <ClearCartIcon /> </button>
                        : <p>No has añadido nada al carrito aun :(</p>
                }    
            </aside>
        </>
    );
}
