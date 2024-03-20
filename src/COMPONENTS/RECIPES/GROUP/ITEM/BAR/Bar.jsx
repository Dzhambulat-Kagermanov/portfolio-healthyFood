import "./Bar.css";
import Date from "./DATE/Date";
import Social from "./SOCIAL/Social";
import Title from "./TITLE/Title";

export default function Bar({ title, author, date, socialData }) {
  return (
    <div className="recipes-group-item__bar">
      <div className="recipes-group-item-bar__info">
        <Title title={title} />
        <Date date={date} />
      </div>
      <Social socialData={socialData} />
    </div>
  );
}
