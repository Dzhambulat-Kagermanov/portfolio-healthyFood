import "./Btn.css";
import { useDispatch } from "react-redux";

export default function Btn(props) {
  const dispatch = useDispatch();
  return (
    <button
      className="dishes-group-item__btn"
      onClick={() => {
        dispatch({ type: "OPEN_MODAL", payload: "--active" });
      }}
    >
      <h4>ORDER</h4>
    </button>
  );
}
