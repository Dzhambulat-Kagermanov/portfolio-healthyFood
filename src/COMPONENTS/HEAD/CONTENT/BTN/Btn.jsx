import "./Btn.css";
import { useDispatch } from "react-redux";

export default function Btn({ text }) {
  const dispatch = useDispatch();

  return (
    <button
      className="head-content__btn"
      onClick={() => {
        dispatch({ type: "OPEN_MODAL", payload: "--active" });
      }}
    >
      <h3>{text}</h3>
    </button>
  );
}
