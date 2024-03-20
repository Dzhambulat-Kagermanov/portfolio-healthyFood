import "./Title.css";

export default function Title({ title, subtitle }) {
  return (
    <div className="dishes-group-item__title">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
}
