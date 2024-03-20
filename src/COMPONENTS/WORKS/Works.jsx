import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import Title from "../UI/TITLE/Title";
import Item from "./ITEM/Item";
import "./Works.css";
import "./Adaptive.css";

export default function Works(props) {
  return (
    <section>
      <BaseStructure>
        <div className="works-block --parentBlock">
          <Title text="how it works" backText="WORK" />
          <ul className="works-block__group --groupBlock">
            <Item
              title="Pick meals"
              text="Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options. Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!"
            />
            <Item
              title="Choose how often"
              text="Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!"
            />
            <Item
              title="fast deliveries"
              text="Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box. Gobble makes cooking fast, so you have more time to unwind and be with family. Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!"
            />
            <Item
              title="tasty meals"
              text="Gobble makes cooking fast, so you have more time to unwind and be with family."
            />
          </ul>
        </div>
      </BaseStructure>
    </section>
  );
}
