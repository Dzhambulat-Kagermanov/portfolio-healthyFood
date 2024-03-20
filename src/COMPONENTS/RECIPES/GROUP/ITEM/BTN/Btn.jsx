import "./Btn.css";
import backImage from "./ASSETS/backIcon.svg";

export default function Btn({ onClick }) {
  return (
    <button
      className="recipes-group-item__btn --back"
      onClick={() => {
        onClick("");
      }}
    >
      <img src={backImage} alt="back" />
    </button>
  );
}
