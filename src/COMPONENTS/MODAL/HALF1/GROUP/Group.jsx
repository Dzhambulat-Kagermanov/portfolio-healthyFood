import { IMaskInput } from "react-imask";
import "./Group.css";
import Item from "./ITEM/Item";
import { useDispatch } from "react-redux";

export default function Group(props) {
  const dispatch = useDispatch();
  const thisDateYear = new Date().getFullYear();
  const maskOptions = {
    enNumMask: "+{1} (000) 000 00-00",
  };
  return (
    <ul className="modal-half__group">
      <Item
        type="name"
        placeholder="Your Name"
        name="customer-name"
        inpType="text"
      />
      <Item>
        <IMaskInput
          mask={maskOptions.enNumMask}
          lazy={false}
          name="customer-phone"
          unmask
          onAccept={(value) => {
            if (value.length === 11) {
              dispatch({ type: "MODAL_PHONE_STATE", payload: true });
            } else {
              dispatch({ type: "MODAL_PHONE_STATE", payload: false });
            }
            dispatch({ type: "MODAL_PHONE_VALUE", payload: value });
          }}
        />
      </Item>
      <Item type="number" placeholder="Your Name" name="cutomer-dateOfVisit">
        <IMaskInput
          mask={Date}
          unmask
          min={new Date(thisDateYear, 0, 1)}
          max={new Date(thisDateYear, 11, 31)}
          lazy={false}
          name="customer-dateOfVisit"
          onAccept={(value) => {
            if (value.replace(".", "").length === 5) {
              dispatch({ type: "MODAL_DATE_STATE", payload: true });
            } else {
              dispatch({ type: "MODAL_DATE_STATE", payload: false });
            }
            dispatch({
              type: "MODAL_DATE_VALUE",
              payload: value + thisDateYear,
            });
          }}
        />
      </Item>
    </ul>
  );
}
