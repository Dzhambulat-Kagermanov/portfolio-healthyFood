import "./Text.css";

export default function Text({ date, text, author }) {
  return (
    <div className="social-group-item__text">
      <h3 className="comp-text-1">{date}</h3>
      <h2 className="comp-text-1">{text}</h2>
      <h4 className="comp-text-1">{author}</h4>
    </div>
  );
}
