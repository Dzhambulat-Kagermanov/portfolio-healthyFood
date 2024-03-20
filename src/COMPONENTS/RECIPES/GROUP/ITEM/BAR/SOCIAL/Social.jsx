import "./Social.css";
import viewsImage from "./ASSETS/viewsIcon.svg";
import commentsImage from "./ASSETS/commentsIcon.svg";

export default function Social({ socialData }) {
  return (
    <div className="recipes-group-item-bar__social">
      <div className="recipes-group-item-bar-social__item --views">
        <img src={viewsImage} alt="views" />
        <h2>{socialData[0]}</h2>
      </div>
      <div className="recipes-group-item-bar-social__item --comments">
        <img src={commentsImage} alt="comments" />
        <h2>{socialData[1]}</h2>
      </div>
    </div>
  );
}
