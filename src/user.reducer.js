import { SET, REMOVE } from "./user.actions.js";

export const userReducer = (state = null, action) => {
  switch(action.type) {
    case SET:
      return action.payload;
    case REMOVE:
      return null;
    default:
      return state;
  }
}

