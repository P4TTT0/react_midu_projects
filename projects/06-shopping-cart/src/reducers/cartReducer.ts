import { Product } from "../types/product";
import { CartReducerAction, CartActionType } from "../types/cartTypes";
import { saveOnLocalStorage } from "../functions/funLocalStorage";

// Un reducer es una funcion pura que recibe un estado actual y una accion, luego devuleve un nuevo estado.
// Es como un useState, pero pensado para estados mas complejos.
// Facilita la realizacion de testeos sobre el reducer ya que evita renderizar componentes
export const cartReducer = (state: Product[], action: CartReducerAction): Product[] => {
  let newState: Product[] = [];

  switch (action.type) {
    case CartActionType.ADD: {
      const product = action.payload;
      const index = state.findIndex(item => item.id === product.id);

      if (index >= 0) {
        newState = structuredClone(state);
        newState[index].quantity = (newState[index].quantity || 1) + 1;
      } else {
        newState = [...state, { ...product, quantity: 1 }];
      }
      break;
    }

    case CartActionType.REMOVE: {
      newState = state.filter(item => item.id !== action.payload.id);
      break;
    }

    case CartActionType.CLEAR: {
      newState = [];
      break;
    }

    case CartActionType.DECREASE: {
      const index = state.findIndex(item => item.id === action.payload.id);
      console.log(index);
      if (index >= 0) {
        newState = structuredClone(state);
        newState[index].quantity = newState[index].quantity! - 1;
      }
      break;
    }

    default:
      return state;
  }

  saveOnLocalStorage('cart',newState);
  return newState;
};
