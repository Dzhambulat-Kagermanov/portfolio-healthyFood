import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import Title from "../UI/TITLE/Title";
import "./About.css";
import Slider from "./SLIDER/Slider";
import Subtitle from "./SUBTITLE/Subtitle";
import "./Adaptive.css";

export default function About(props) {
  return (
    <section>
      <BaseStructure>
        <div className="about-block --parentBlock">
          <Title text="The Basics Of Healthy Food" backText="ABOUT" />
          <Subtitle text="In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip" />
          <Slider />
        </div>
      </BaseStructure>
    </section>
  );
}
