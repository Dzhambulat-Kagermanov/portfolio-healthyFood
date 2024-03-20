import { useState } from "react";
import "./Item.css";
import { useDispatch } from "react-redux";

export default function Item({ type, name, placeholder, children, inpType }) {
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState("");
  const [inputState, setInputState] = useState("");

  return (
    <li className={`modal-half-group__item ${inputState}`}>
      {children ? (
        children
      ) : (
        <input
          type={inpType}
          value={inpValue}
          placeholder={placeholder}
          name={name}
          onInput={(event) => {
            setInpValue(event.target.value);
            setInpValue(
              event.target.value.charAt(0).toUpperCase() +
                event.target.value.slice(1)
            );
            if (/[0-9]/.test(event.target.value)) {
              setInpValue((current) => {
                return current.replace(/[0-9]/g, "");
              });
              setInputState("--error");
              setTimeout(() => {
                setInputState("");
              }, 200);
            }
            if (inpValue.length >= 2) {
              dispatch({
                type: `MODAL_${type.toUpperCase()}_STATE`,
                payload: true,
              });
              dispatch({
                type: "MODAL_NAME_VALUE",
                payload: inpValue,
              });
            }
          }}
          onBlur={() => {
            if (inpValue.length < 3) {
              dispatch({
                type: `MODAL_${type.toUpperCase()}_STATE`,
                payload: false,
              });
              setInputState("--error");
              setTimeout(() => {
                setInputState("");
              }, 300);
            }
            if (/[0-9]/.test(inpValue)) {
              setInpValue((current) => {
                return current.replace(/[0-9]/g, "");
              });
              setInputState("--error");
              setTimeout(() => {
                setInputState("");
              }, 300);
            }
          }}
        />
      )}
    </li>
  );
}
