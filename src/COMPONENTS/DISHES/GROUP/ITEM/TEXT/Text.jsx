import "./Text.css";

export default function Text({ text }) {
  return (
    <div className="dishes-group-item__text">
      <p>{text}</p>
    </div>
  );
}
