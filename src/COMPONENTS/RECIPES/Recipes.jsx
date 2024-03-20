import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import Title from "../UI/TITLE/Title";
import Group from "./GROUP/Group";
import "./Recipes.css";
import "./Adaptive.css";

export default function Recipes(props) {
  return (
    <section>
      <BaseStructure>
        <div className="recipes-block --parentBlock" id="recipes-anchor">
          <Title text="Recipes From Our Chefs" backText="RECIPES" />
          <Group />
        </div>
      </BaseStructure>
    </section>
  );
}
