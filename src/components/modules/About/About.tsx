import { FC } from 'react'
import classes from './About.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import Base from 'shared/ui/Base/Base'
import Slider from 'shared/ui/Slider/Slider'
import { aboutSlider } from 'shared/constants/about'
import Button from 'shared/ui/Button/Button'
import adaptive from './Adaptive.module.scss'
import { Animate } from './Animate'

interface IAboutProps extends IClassName {}
const About: FC<IAboutProps> = ({ className }) => {
  Animate({ about: classes.about, subtitle: classes.subtitle, slider: classes.slider })

  return (
    <section>
      <Base innerClass={classNames(classes.about, {}, [className])}>
        <DoubleTitle backTitle='About' className={classes.title}>
          The Basics Of Healthy Food
        </DoubleTitle>
        <h2 className={classNames(classes.subtitle, {}, [adaptive.subtitle])}>
          In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate
          est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
        </h2>
        <Slider
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            601: {
              spaceBetween: 10,
              slidesPerView: 2
            },
            901: {
              spaceBetween: 20,
              slidesPerView: 2
            }
          }}
          className={classNames(classes.slider, {}, [adaptive.slider])}
          sliderItems={aboutSlider}
          itemClass={classNames(classes.sliderItem, {}, [adaptive.sliderItem])}
          btnPrev={
            <Button circle theme='outlined' className={classNames(classes.sliderBtn, {}, [classes.sliderBtnPrev])}>
              <img src={require('images/arrow.svg')} alt='arrow' />
            </Button>
          }
          btnPrevID={classes.sliderBtnPrev}
          btnNext={
            <Button circle theme='outlined' className={classNames(classes.sliderBtn, {}, [classes.sliderBtnNext])}>
              <img src={require('images/arrow.svg')} alt='arrow' />
            </Button>
          }
          btnNextID={classes.sliderBtnNext}
          visibleSlides={1}
        />
      </Base>
    </section>
  )
}

export default About
