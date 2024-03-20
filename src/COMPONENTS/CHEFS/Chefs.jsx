import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import Title from "../UI/TITLE/Title";
import "./Chefs.css";
import Group from "./GROUP/Group";
import "./Adaptive.css";

export default function Chefs(props) {
  return (
    <section>
      <BaseStructure>
        <div className="chefs-block --parentBlock" id="chefs-anchor">
          <Title text="This month's chefs" backText="CHEFS" />
          <Group />
        </div>
      </BaseStructure>
    </section>
  );
}
