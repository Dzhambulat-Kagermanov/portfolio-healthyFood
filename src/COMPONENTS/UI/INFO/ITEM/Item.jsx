import "./Item.css";

export default function Item({ title, text, image }) {
  return (
    <li className="component-info__item">
      <img src={image} alt={text} />
      <h2 className="comp-text-2">{title}</h2>
      <h3 className="comp-text-1">{text}</h3>
    </li>
  );
}
