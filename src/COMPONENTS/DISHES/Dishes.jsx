import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import Title from "../UI/TITLE/Title";
import "./Dishes.css";
import Group from "./GROUP/Group";
import "./Adaptive.css";

export default function Dishes(props) {
  return (
    <section>
      <BaseStructure>
        <div className="dishes-block --parentBlock" id="menu-anchor">
          <Title text="Dish Of The Day" backText="DISHES" />
          <Group />
        </div>
      </BaseStructure>
    </section>
  );
}
