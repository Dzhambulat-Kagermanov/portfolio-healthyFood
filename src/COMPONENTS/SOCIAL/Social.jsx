import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import Title from "../UI/TITLE/Title";
import Group from "./GROUP/Group";
import "./Social.css";
import "./Adaptive.css";

export default function Social(props) {
  return (
    <section>
      <BaseStructure>
        <div className="social-block --parentBlock">
          <Title text="We in social" backText="Social" />
          <Group />
        </div>
      </BaseStructure>
    </section>
  );
}
