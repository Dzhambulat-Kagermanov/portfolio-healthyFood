import { useDispatch, useSelector } from "react-redux";
import "./Btn.css";

export default function Btn({ type, text }) {
  const dispatch = useDispatch();
  const dateInpState = useSelector((state) => {
    return state.modal.modalFormDateStateReducer.currentState;
  });
  const dateInpValue = useSelector((state) => {
    return state.modal.modalFormDateValueReducer.currentState;
  });
  const nameInpState = useSelector((state) => {
    return state.modal.modalFormNameStateReducer.currentState;
  });
  const nameInpValue = useSelector((state) => {
    return state.modal.modalFormNameValueReducer.currentState;
  });
  const phoneInpState = useSelector((state) => {
    return state.modal.modalFormPhoneStateReducer.currentState;
  });
  const phoneInpValue = useSelector((state) => {
    return state.modal.modalFormPhoneValueReducer.currentState;
  });
  const formState = [dateInpState, nameInpState, phoneInpState].every((el) => {
    return el === true;
  });
  const formData = {
    date: dateInpValue,
    name: nameInpValue,
    phone: phoneInpValue,
  };

  return (
    <button
      disabled={formState ? false : true}
      className={`modal-form__btn --${type}`}
      type={type}
      onClick={(event) => {
        event.preventDefault();
        if (formState) {
          console.log(formData);
          alert(
            "Данные формы были выведены в консоль\nForm data was output to the console"
          );
          dispatch({ type: "CLOSE_MODAL", payload: "" });
        }
      }}
    >
      <h2>{text}</h2>
    </button>
  );
}
