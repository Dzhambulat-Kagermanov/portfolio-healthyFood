import "./Group.css";
import Item from "./ITEM/Item";

import chefImage1 from "./ITEM/CHEF-INFO/ASSETS/chefIcon1.svg";
import chefImage2 from "./ITEM/CHEF-INFO/ASSETS/chefIcon2.svg";
import chefImage3 from "./ITEM/CHEF-INFO/ASSETS/chefIcon3.svg";

import portfolioImage11 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish1-1.png";
import portfolioImage12 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish1-2.png";
import portfolioImage13 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish1-3.png";

import portfolioImage21 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish2-1.png";
import portfolioImage22 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish2-2.png";
import portfolioImage23 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish2-3.png";

import portfolioImage31 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish3-1.png";
import portfolioImage32 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish3-2.png";
import portfolioImage33 from "./ITEM/PORTFOLIO/ASSETS/porfolioDish3-3.png";

export default function Group(props) {
  const DISHES_IMAGES_1 = [
    portfolioImage11,
    portfolioImage12,
    portfolioImage13,
  ];
  const DISHES_IMAGES_2 = [
    portfolioImage21,
    portfolioImage22,
    portfolioImage23,
  ];
  const DISHES_IMAGES_3 = [
    portfolioImage31,
    portfolioImage32,
    portfolioImage33,
  ];

  return (
    <ul className="chefs-block__group --groupBlock">
      <Item
        name="Gregory Flores"
        profession="Chef of the cold"
        chefImage={chefImage1}
        dishesImages={DISHES_IMAGES_1}
      />
      <Item
        name="Annette Cooper"
        profession="Chef of the hot"
        chefImage={chefImage2}
        dishesImages={DISHES_IMAGES_2}
      />
      <Item
        additionalClass="--last"
        name="Greg Fox"
        profession="Сhef macro kitchen"
        chefImage={chefImage3}
        dishesImages={DISHES_IMAGES_3}
      />
    </ul>
  );
}
