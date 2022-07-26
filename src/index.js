import store from "./store.js";
import { setUser, removeUser } from "./user.actions.js";
import { addProduct, removeProduct } from "./cart.actions.js";
import { setLanguage } from "./language.actions.js";


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setUser({ name: 'Tom' }));
store.dispatch(setUser({name: 'John'}));
store.dispatch(removeUser());

store.dispatch(addProduct({ id: 1, name: "milk" }));
store.dispatch(addProduct({ id: 2, name: "coffee" }));
store.dispatch(addProduct({ id: 3, name: "bread" }));
store.dispatch(removeProduct(2));
store.dispatch(removeProduct(1));
store.dispatch(removeProduct(3));

store.dispatch(setLanguage('ua'));


