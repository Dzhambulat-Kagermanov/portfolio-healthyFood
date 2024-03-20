import "./Item.css";

export default function Item({ title, text }) {
  return (
    <li className="works-group__item">
      <h2>{title}</h2>
      <hr />
      <h3>{text}</h3>
    </li>
  );
}
