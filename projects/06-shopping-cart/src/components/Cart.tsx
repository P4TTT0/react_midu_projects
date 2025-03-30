import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";

export const Cart = () => {
    const cartCheckboxId = useId();
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img 
                            src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" 
                            alt="Iphone" 
                        />
                        <div>
                            <strong>Iphone</strong>  
                            <p>$1299</p>
                        </div>
                        <footer>
                            <small> x1 </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button className="clear-button">
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
}
