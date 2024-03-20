import "./Group.css";
import Item from "./ITEM/Item";
import dishImage1 from "./ITEM/ASSETS/dishImage1.png";
import dishImage2 from "./ITEM/ASSETS/dishImage2.png";
import dishImage3 from "./ITEM/ASSETS/dishImage3.png";
import dishImage4 from "./ITEM/ASSETS/dishImage4.png";
import dishImage5 from "./ITEM/ASSETS/dishImage5.png";
import dishImage6 from "./ITEM/ASSETS/dishImage6.png";

export default function Group(props) {
  return (
    <ul className="dishes-block__group --groupBlock">
      <Item
        dishImage={dishImage1}
        title="Featured Meal"
        subtitle="Served with french fries + drink"
        text="Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more..."
        rating={4.9}
      />
      <Item
        dishImage={dishImage2}
        title="Featured Meal"
        subtitle="Served with french fries + drink"
        text="Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more..."
        rating={3.5}
      />
      <Item
        dishImage={dishImage3}
        title="Featured Meal"
        subtitle="Served with french fries + drink"
        text="Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more..."
        rating={4.3}
      />
      <Item
        dishImage={dishImage4}
        title="Featured Meal"
        subtitle="Served with french fries + drink"
        text="Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more..."
        rating={2.7}
      />
      <Item
        dishImage={dishImage5}
        title="Featured Meal"
        subtitle="Served with french fries + drink"
        text="Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more..."
        rating={5}
      />
      <Item
        dishImage={dishImage6}
        title="Featured Meal"
        subtitle="Served with french fries + drink"
        text="Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more..."
        rating={2}
      />
    </ul>
  );
}
