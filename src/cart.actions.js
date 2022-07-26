export const ADD = "CART/ADD";
export const REMOVE = "CART/REMOVE";

export const addProduct = ({id, name}) => {
  return {
    type: ADD,
    payload: { id, name }
  }
}

export const removeProduct = (id) => {
  return {
    type: REMOVE,
    payload: id
  }
}

