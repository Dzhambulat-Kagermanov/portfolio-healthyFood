import "./Portfolio.css";

export default function Portfolio({ dishesImages }) {
  return (
    <ul className="chef-group-item__portfolio">
      {dishesImages.map((el, index) => {
        return (
          <li
            className={`chef-group-item-portfolio__item ${
              index === 0 ? "--first" : ""
            }`}
            key={index}
          >
            <img src={el} alt="dish" />
          </li>
        );
      })}
    </ul>
  );
}
