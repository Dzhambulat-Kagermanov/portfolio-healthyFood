import { useDispatch } from "react-redux";
import "./BurgerBtn.css";

export default function BurgerBtn({ additionalClass, type }) {
  const dispatch = useDispatch();
  const openModalWindow = () => {
    dispatch({ type: "OPEN_MENU", payload: "active" });
  };
  const closeModalWindow = () => {
    dispatch({ type: "CLOSE_MENU", payload: "" });
  };

  return (
    <div
      className={`${additionalClass} --burgerMenuBtn --${type}`}
      onClick={() => {
        type === "open" ? openModalWindow() : closeModalWindow();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
