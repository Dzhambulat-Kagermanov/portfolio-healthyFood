import "./Title.css";

export default function Title({ title }) {
  return (
    <div className="recipes-group-item__title">
      <h2>{title}</h2>
    </div>
  );
}
