import React, { createContext, useState } from "react";
import { ProviderProps } from "../types/providerProps";
import { Product } from "../types/product";

interface CartContextType {
    cart: Product[],
    addToCart: (product: Product) => void,
    clearCart: () => void,
    checkProductInCart: (product: Product) => boolean,
    removeFromCart: (product: Product) => void
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<ProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => { 
        const productInCartIndex = cart.findIndex(item => item.id == product.id);

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            if (newCart[productInCartIndex].quantity) newCart[productInCartIndex].quantity! += 1;
            else newCart[productInCartIndex].quantity = 1;
            return setCart(newCart);
        }
        setCart(prevCart => ([
            ...prevCart,
            {
                ...product,
                quantity: 1
            }
        ]))
        console.log(cart);
    }

    const checkProductInCart = (product: Product) => {
        const productInCartIndex = cart.findIndex(item => item.id == product.id);
        return productInCartIndex >= 0;
    }

    const clearCart = () => setCart([]);

    const removeFromCart = (product: Product) => setCart(prevCart => prevCart.filter(item => item.id !== product.id));


    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            clearCart,
            checkProductInCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
}