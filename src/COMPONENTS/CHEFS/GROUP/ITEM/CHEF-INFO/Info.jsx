import "./Info.css";

export default function Info({ name, profession, chefImage }) {
  return (
    <div className="chef-group-item__info">
      <div className="chef-group-item-info__image">
        <img src={chefImage} alt="chef" />
      </div>
      <div className="chef-group-item-info__text">
        <h2>{name}</h2>
        <h3>{profession}</h3>
      </div>
    </div>
  );
}
