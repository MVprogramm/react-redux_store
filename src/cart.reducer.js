import { ADD, REMOVE } from "./cart.actions.js";

const initialState = {
  products: []
}

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return {
        products: state.products.concat(action.payload),
      };
    case REMOVE:
      return {
        products: state.products.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
}