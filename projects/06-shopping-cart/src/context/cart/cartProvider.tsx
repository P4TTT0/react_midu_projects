import React from "react";
import { CartContext } from "./cartContext";
import { CartContextType } from "../../types/cartTypes";
import { ProviderProps } from "../../types/providerProps";
import { useCartReducer } from "../../customHooks/useCartReducer";

export const CartProvider: React.FC<ProviderProps> = ({ children }) => {
    const {state, addToCart, removeFromCart, clearCart } = useCartReducer();

    const value: CartContextType = {
        cart: state,
        addToCart,
        removeFromCart,
        clearCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
