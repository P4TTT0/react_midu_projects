import { createContext } from "react";
import { Product } from "../../types/product";

interface CartContextType {
    cart: Product[],
    addToCart: (product: Product) => void,
    clearCart: () => void,
    removeFromCart: (product: Product) => void
};

export const CartContext = createContext<CartContextType | null>(null);


