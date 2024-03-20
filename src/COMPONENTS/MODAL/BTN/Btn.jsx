import "./Btn.css";
import closeImage from "../ASSETS/closeIcon.svg";
import { useDispatch } from "react-redux";

export default function Btn(props) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="modal-block__btn --close"
      onClick={() => {
        dispatch({ type: "CLOSE_MODAL", payload: "" });
      }}
    >
      <img src={closeImage} alt="close" />
    </button>
  );
}
