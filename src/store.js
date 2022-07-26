import { createStore, combineReducers } from "redux";
import { userReducer } from "./user.reducer.js";
import { cartReducer } from "./cart.reducer.js";
import { languageReducer } from "./language.reducer.js";

const appReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  language: languageReducer
});

const store = createStore(appReducer);

export default store;