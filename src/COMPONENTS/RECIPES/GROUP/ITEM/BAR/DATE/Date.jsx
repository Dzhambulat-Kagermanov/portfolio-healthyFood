import "./Date.css";

export default function Date({ date }) {
  return (
    <time>
      <div className="recipes-group-item__date">
        <h2 className="comp-text-1">{date}</h2>
      </div>
    </time>
  );
}
