import { combineReducers } from "redux";
import { modalToggleReducer } from "./modalToggleReducer";
import { modalFormDateStateReducer } from "./DATE/modalFormDateStateReducer";
import { modalFormDateValueReducer } from "./DATE/modalFormDateValueReducer";
import { modalFormNameStateReducer } from "./NAME/modalFormNameStateReducer";
import { modalFormNameValueReducer } from "./NAME/modalFormNameValueReducer";
import { modalFormPhoneStateReducer } from "./PHONE/modalFormPhoneStateReducer";
import { modalFormPhoneValueReducer } from "./PHONE//modalFormPhoneValueReducer";

export const modal = combineReducers({
  modalToggleReducer,
  modalFormDateStateReducer,
  modalFormDateValueReducer,
  modalFormNameStateReducer,
  modalFormNameValueReducer,
  modalFormPhoneStateReducer,
  modalFormPhoneValueReducer,
});
