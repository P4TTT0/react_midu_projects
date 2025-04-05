import { Product } from "../types/product";
import './CartItem.css';

interface CartItemProps {
    product: Product,
    addToCart: () => void,
    decreaseQuantity: () => void
}

export const CartItem: React.FC<CartItemProps> = ({ product, addToCart, decreaseQuantity }) => {
    return(
        <li>
            <img 
                src={product.thumbnail} 
                alt={product.title}
            />
            <div>
                <strong>{product.title}</strong>  
                <p>${product.price}</p>
            </div>
            <footer>
                <small> x{product.quantity} </small>
                <div className="buttons-container">
                    <button disabled={product.quantity === 1} onClick={decreaseQuantity}>-</button>
                    <button onClick={addToCart}>+</button>
                </div>
            </footer>
        </li>
    );
}