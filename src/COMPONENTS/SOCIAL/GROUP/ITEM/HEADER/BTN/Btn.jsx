import "./Btn.css";

export default function Btn({ text }) {
  return (
    <button className="social-group-item-header__btn">
      <h2>{text}</h2>
    </button>
  );
}
