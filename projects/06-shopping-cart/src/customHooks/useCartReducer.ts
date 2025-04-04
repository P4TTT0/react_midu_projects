import { useReducer } from "react";
import { Product } from "../types/product";
import { CartActionType } from "../types/cartTypes";
import { cartReducer } from "../reducers/cartReducer";
import { getFromLocalStorage } from "../functions/funLocalStorage";

export const useCartReducer = () => {
    const getInitialCart = (): Product[] => {
        return getFromLocalStorage<Product[]>("cart") || [];
    };
      
    const [state, dispatch] = useReducer(cartReducer, getInitialCart());

    const addToCart = (product: Product) => dispatch({ type: CartActionType.ADD, payload: product });

    const removeFromCart = (product: Product) => dispatch({ type: CartActionType.REMOVE, payload: product });

    const clearCart = () => dispatch({ type: CartActionType.CLEAR });

    return { state, addToCart, removeFromCart, clearCart }
}