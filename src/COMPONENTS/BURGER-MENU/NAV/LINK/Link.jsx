import { useDispatch } from "react-redux";
import "./Link.css";

export default function Link({ text }) {
  const dispatch = useDispatch();
  const closeModalWindow = () => {
    dispatch({ type: "CLOSE_MENU", payload: "" });
  };

  return (
    <li
      className="burgerMenu-nav__link"
      onClick={() => {
        closeModalWindow();
      }}
    >
      <a className="comp-text-3" href={`#${text.toLowerCase()}-anchor`}>
        {text}
      </a>
    </li>
  );
}
