import "./Info.css";
import watchImage from "./ASSETS/watchIcon.svg";
import directionImage from "./ASSETS/directionIcon.svg";
import numberImage from "./ASSETS/numberIcon.svg";
import Item from "./ITEM/Item";

export default function Info(props) {
  return (
    <ul className="component-info">
      <Item
        title="Today 10:00 am - 7:00 pm"
        text="Working hours"
        image={watchImage}
      />
      <Item
        title="Velyka Vasylkivska 100"
        text="Get Directions"
        image={directionImage}
      />
      <Item
        title="+38 (063) 833 24 15"
        text="Call Online"
        image={numberImage}
      />
    </ul>
  );
}
