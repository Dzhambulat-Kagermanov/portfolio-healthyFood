import "./Share.css";
import shareImage from "./ASSETS/shareIcon.svg";

export default function Share(props) {
  return (
    <button className="dishes-group-item__share">
      <img src={shareImage} alt="share" />
    </button>
  );
}
