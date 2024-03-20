import Title from "../../UI/TITLE/Title";
import Group from "./GROUP/Group";
import Btn from "./BTN/Btn";
import "./Half1.css";

export default function Half1(props) {
  return (
    <div className="modal-block__half --half1">
      <Title text="Order form" />
      <Group />
      <Btn type="submit" text="Submit" />
    </div>
  );
}
