import { useReducer } from "react";
import { Product } from "../types/product";
import { CartActionType } from "../types/cartTypes";
import { cartReducer } from "../reducers/cartReducer";

export const useCartReducer = () => {
    const initialState: Product[] = [];
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product: Product) => dispatch({ type: CartActionType.ADD, payload: product });

    const removeFromCart = (product: Product) => dispatch({ type: CartActionType.REMOVE, payload: product });

    const clearCart = () => dispatch({ type: CartActionType.CLEAR });

    return { state, addToCart, removeFromCart, clearCart }
}