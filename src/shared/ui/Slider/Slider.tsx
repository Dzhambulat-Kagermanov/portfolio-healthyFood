import { FC, ReactNode } from 'react'
import { IClassName } from 'shared/types/shared'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { classNames } from 'shared/lib/classNames/classNames'
import { IAboutSlider } from 'shared/constants/about'
import { Navigation } from 'swiper/modules'
import classes from './Slider.module.scss'

interface ISliderProps extends IClassName {
  sliderItems: IAboutSlider[]
  btnPrev: ReactNode
  btnPrevID: string
  btnNext: ReactNode
  btnNextID: string
  itemClass?: string
  visibleSlides?: number
}
const Slider: FC<ISliderProps> = ({
  className,
  sliderItems,
  itemClass,
  visibleSlides,
  btnNext,
  btnNextID,
  btnPrev,
  btnPrevID,
  ...otherOptions
}) => {
  return (
    <div className={classNames(classes.slider, {}, [className])}>
      {btnPrev}
      <Swiper
        slidesPerView={visibleSlides || 'auto'}
        navigation={{ nextEl: `.${btnNextID}`, prevEl: `.${btnPrevID}` }}
        modules={[Navigation]}
        loop
        {...otherOptions}
      >
        {sliderItems.map((el) => {
          return (
            <SwiperSlide key={el.id} className={classNames(itemClass || '')}>
              <img src={el.img} alt={`slider image ${el.id}`} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      {btnNext}
    </div>
  )
}

export default Slider
