import React, { createContext, useState } from "react";
import { ProviderProps } from "../types/providerProps";
import { Product } from "../types/product";

interface CartContextType {
    cart: Product[],
    addToCart: (product: Product) => void,
    clearCart: () => void
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<ProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => { 
        const productInCartIndex = cart.findIndex(item => item.id == product.id);

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart);
        }
        setCart(prevCart => ([
            ...prevCart,
            {
                ...product,
                quantity: 1
            }
        ]))
    }
    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}