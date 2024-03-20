import "./Text.css";

export default function Text({ text }) {
  return (
    <div className="recipes-group-item__text">
      <h2 className="comp-text-2">{text}</h2>
    </div>
  );
}
