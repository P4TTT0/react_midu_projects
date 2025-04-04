import { Product } from "./product";

export enum CartActionType {
  ADD = 'ADD_TO_CART',
  REMOVE = 'REMOVE_FROM_CART',
  CLEAR = 'CLEAR_CART'
}

export type CartReducerAction =
  | { type: CartActionType.ADD, payload: Product }
  | { type: CartActionType.REMOVE, payload: Product }
  | { type: CartActionType.CLEAR }

export interface CartContextType {
  cart: Product[],
  addToCart: (product: Product) => void,
  removeFromCart: (product: Product) => void,
  clearCart: () => void
}
