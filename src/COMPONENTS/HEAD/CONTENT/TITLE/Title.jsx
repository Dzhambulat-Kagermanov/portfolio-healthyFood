import "./Title.css";

export default function Title({ text }) {
  return (
    <div className="head-content__title">
      <h1>{text}</h1>
    </div>
  );
}
