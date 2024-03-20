import Info from "./CHEF-INFO/Info";
import "./Item.css";
import Portfolio from "./PORTFOLIO/Portfolio";

export default function Item({
  name,
  profession,
  chefImage,
  dishesImages,
  additionalClass,
}) {
  return (
    <div
      className={`chefs-group__item ${additionalClass ? additionalClass : ""}`}
    >
      <Info name={name} profession={profession} chefImage={chefImage} />
      <Portfolio dishesImages={dishesImages} />
    </div>
  );
}
