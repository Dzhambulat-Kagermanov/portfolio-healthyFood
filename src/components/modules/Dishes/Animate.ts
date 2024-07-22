import { useLayoutEffect } from 'react'
import { objPrefixer } from 'shared/lib/objPrefixer/objPrefixer'
import { FP_Object, TAnyKeys } from 'shared/types/shared'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Animate: FP_Object<TAnyKeys, void> = (classes) => {
  const classesID = objPrefixer({ object: classes, prefix: '.' })
  // @ts-ignore
  const { dishes, dishesItem, dishesGroup, moreBtn } = classesID

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(dishes, {
      scrollTrigger: {
        trigger: dishes,
        start: 'top bottom'
      },

      opacity: 0,
      y: 100,
      duration: 0.4
    })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: dishesGroup,
          start: 'top bottom'
        }
      })
      .fromTo(
        dishesItem,
        {
          opacity: 0,
          y: 80
        },
        {
          duration: 0.2,
          opacity: 1,
          y: 0,
          stagger: 0.3,
          delay: 0.2
        }
      )
      .fromTo(
        moreBtn,
        {
          opacity: 0,
          x: 40
        },
        {
          duration: 0.2,
          opacity: 1,
          x: 0,
          stagger: 0.3,
          delay: 0.2
        }
      )
  }, [])
}
