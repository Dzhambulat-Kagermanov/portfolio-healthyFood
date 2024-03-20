import "./Logo.css";

export default function Logo({ data }) {
  return (
    <div className="social-group-item-header__logo">
      <div className="social-group-item-header-logo__image">
        <img src={data[1]} alt="social" />
      </div>
      <h2 className="comp-text-1">{data[0]}</h2>
    </div>
  );
}
