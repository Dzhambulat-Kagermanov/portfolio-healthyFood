import "./Rating.css";
import starImage from "./ASSETS/starIcon.svg";
import halfStarImage from "./ASSETS/halfStarIcon.svg";
import fullStarImage from "./ASSETS/fullStarIcon.svg";

export default function Rating({ rating }) {
  let expandedRating = rating;
  const starsPosition = [];
  const ratingFlooring = Math.floor(rating);

  if (rating % 1 === 0) {
    for (let index = 0; index < rating; index++) {
      starsPosition.push("full");
    }
    if (5 - rating !== 0) {
      for (let index = 0; index < 5 - rating; index++) {
        starsPosition.push("empty");
      }
    }
    expandedRating = `${rating}.0`;
  } else {
    for (let index = 0; index < ratingFlooring; index++) {
      starsPosition.push("full");
    }
    starsPosition.push("half");

    if (5 - rating >= 1) {
      for (let index = 1; index < Math.ceil(5 - rating); index++) {
        starsPosition.push("empty");
      }
    }
  }

  return (
    <div className="dishes-group-item__rating">
      <div className="dishes-group-item-rating__stars">
        {starsPosition.map((el, index) => {
          switch (el) {
            case "full":
              return <img src={starImage} alt="star" key={index} />;
            case "half":
              return <img src={halfStarImage} alt="halfStar" key={index} />;
            case "empty":
              return <img src={fullStarImage} alt="fullStar" key={index} />;
          }
        })}
      </div>
      <div className="--counter">
        <h2>{expandedRating}</h2>
      </div>
    </div>
  );
}
