import { useLayoutEffect } from 'react'
import { objPrefixer } from 'shared/lib/objPrefixer/objPrefixer'
import { FP_Object, TAnyKeys } from 'shared/types/shared'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Animate: FP_Object<TAnyKeys, void> = (classes) => {
  const classesID = objPrefixer({ object: classes, prefix: '.' })
  // @ts-ignore
  const { social, socialItem } = classesID

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(social, {
      scrollTrigger: {
        trigger: social,
        start: 'top bottom'
      },

      opacity: 0,
      y: 100,
      duration: 0.4
    })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: social,
          start: '20% bottom'
        }
      })
      .fromTo(
        socialItem,
        {
          opacity: 0,
          y: 100
        },
        {
          duration: 0.2,
          opacity: 1,
          y: 0,
          stagger: 0.2,
          filter: 'blur(8px)'
        },
        0.2
      )
      .to(
        socialItem,
        {
          duration: 0.5,
          filter: 'blur(0px)',
          stagger: 0.2
        },
        0.7
      )
  }, [])
}
