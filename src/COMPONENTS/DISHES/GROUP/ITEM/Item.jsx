import Bar from "./BAR/Bar";
import "./Item.css";
import Share from "./SHARE-BTN/Share";
import Text from "./TEXT/Text";
import Title from "./TITLE/Title";

export default function Item({ dishImage, title, subtitle, text, rating }) {
  return (
    <li className="dishes-group__item">
      <div className="dishes-group-item__image">
        <Share />
        <img src={dishImage} alt="dish" />
      </div>
      <div className="dish-group-item__content">
        <Title title={title} subtitle={subtitle} />
        <Text text={text} />
        <Bar rating={rating} />
      </div>
    </li>
  );
}
