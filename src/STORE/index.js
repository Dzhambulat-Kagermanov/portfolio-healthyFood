import { combineReducers, createStore } from "redux";
import { burgerMenuToggleReducer } from "./BURGER-MENU/burgerMenuToggleReducer";
import { modal } from "./MODAL/modalIndex";

const rootReducer = combineReducers({
  burgerMenuToggleReducer,
  modal,
});
export const store = createStore(rootReducer);
