import "./Title.css";

export default function Title({ text, backText }) {
  return (
    <div className="component-title">
      <h3>{text}</h3>
      {backText ? <h2>{backText}</h2> : ""}
    </div>
  );
}
