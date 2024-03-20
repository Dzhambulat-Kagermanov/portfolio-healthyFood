import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import dishImage1 from "./ASSETS/dishImage1.png";
import dishImage2 from "./ASSETS/dishImage2.png";
import dishImage3 from "./ASSETS/dishImage3.png";
import dishImage4 from "./ASSETS/dishImage4.png";
import "./Slider.css";
import Btn from "./BTN/Btn";
import { useRef, useState } from "react";

export default function Slider(props) {
  const swiperRef = useRef();
  const [visibleSlides, setVisibleSlides] = useState(
    window.innerWidth <= 700 ? 1 : 2
  );
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 700) {
      setVisibleSlides(1);
    } else {
      setVisibleSlides(2);
    }
  });

  return (
    <>
      <div className="about-slider__wrapper">
        <Btn direction="prev" swiperRef={swiperRef} />
        <Swiper
          className="about-block__slider"
          spaceBetween={50}
          slidesPerView={visibleSlides}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide className="about-slider__item">
            <img src={dishImage1} alt="dishImage" />
          </SwiperSlide>
          <SwiperSlide className="about-slider__item">
            <img src={dishImage2} alt="dishImage" />
          </SwiperSlide>
          <SwiperSlide className="about-slider__item">
            <img src={dishImage3} alt="dishImage" />
          </SwiperSlide>
          <SwiperSlide className="about-slider__item">
            <img src={dishImage4} alt="dishImage" />
          </SwiperSlide>
        </Swiper>
        <Btn direction="next" swiperRef={swiperRef} />
      </div>
    </>
  );
}
