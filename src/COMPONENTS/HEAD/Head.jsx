import "./Head.css";
import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import Content from "./CONTENT/Content";
import "./Adaptive.css";

export default function Head(props) {
  return (
    <section>
      <BaseStructure
        noInner
        wrapperContent={
          <>
            <div className="head-block --parentBlock">
              <Content />
            </div>
          </>
        }
      />
    </section>
  );
}
