import Info from "../../UI/INFO/Info";
import Btn from "./BTN/Btn";
import "./Content.css";
import Subtitle from "./SUBTITLE/Subtitle";
import Title from "./TITLE/Title";

export default function Content(props) {
  return (
    <div className="inner">
      <div className="head-block__content">
        <Title
          text={
            <>
              Your <strong>favourite</strong> food
              <br />
              delivered <strong>hot & fresh</strong>
            </>
          }
        />
        <Subtitle text="HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes." />
        <Btn text="Order Now" />
        <Info />
      </div>
    </div>
  );
}
