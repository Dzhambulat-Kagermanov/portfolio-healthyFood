import Btn from "./BTN/Btn";
import Rating from "./RATING/Rating";
import "./Bar.css";

export default function Bar({ rating }) {
  return (
    <div className="dishes-group-item__bar">
      <Rating rating={rating} />
      <Btn />
    </div>
  );
}
