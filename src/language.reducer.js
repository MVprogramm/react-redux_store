import { SET } from "./language.actions.js";

export const languageReducer = (state = "en", action) => {
  switch(action.type) {
    case SET:
      return action.payload;
    default:
      return state;
  }
}