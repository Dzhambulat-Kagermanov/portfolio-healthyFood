import "./Subtitle.css";

export default function Subtitle({ text }) {
  return (
    <div className="head-block__subtitle">
      <h2 className="comp-text-2">{text}</h2>
    </div>
  );
}
