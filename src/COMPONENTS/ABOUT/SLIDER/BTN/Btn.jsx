import "./Btn.css";
import arrowImage from "./ASSETS/arrowIcon.svg";

export default function Btn({ direction, swiperRef }) {
  return (
    <button
      className={`about-slider__btn --${direction}`}
      onClick={() => {
        direction === "next"
          ? swiperRef.current.slideNext()
          : swiperRef.current.slidePrev();
      }}
    >
      <img src={arrowImage} alt={direction} />
    </button>
  );
}
