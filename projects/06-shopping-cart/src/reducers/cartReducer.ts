import { Product } from "../types/product";
import { CartReducerAction, CartActionType } from "../types/cartTypes";

// Un reducer es una funcion pura que recibe un estado actual y una accion, luego devuleve un nuevo estado.
// Es como un useState, pero pensado para estados mas complejos.
// Facilita la realizacion de testeos sobre el reducer ya que evita renderizar componentes
export const cartReducer = (state: Product[], action: CartReducerAction): Product[] => {
  switch (action.type) {
    case CartActionType.ADD: {
      const product = action.payload;
      const index = state.findIndex(item => item.id === product.id);
      if (index >= 0) {
        const newState = structuredClone(state);
        newState[index].quantity = (newState[index].quantity || 1) + 1;
        return newState;
      }
      return [...state, { ...product, quantity: 1 }];
    }

    case CartActionType.REMOVE:
      return state.filter(item => item.id !== action.payload.id);

    case CartActionType.CLEAR:
      return [];

    default:
      return state;
  }
};
