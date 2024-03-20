import "./Images.css";

export default function Images({ images }) {
  return (
    <ul className="social-group-item__images">
      {images.map((el, index) => {
        return (
          <li className="social-group-item-images__image" key={index}>
            <img src={el} alt="social image" />
          </li>
        );
      })}
    </ul>
  );
}
