import { Product } from "../types/product";

interface CartItemProps {
    product: Product,
    addToCart: () => void
}

export const CartItem: React.FC<CartItemProps> = ({ product, addToCart }) => {
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
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    );
}