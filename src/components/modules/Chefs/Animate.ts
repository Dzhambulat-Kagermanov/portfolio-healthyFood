import { useLayoutEffect } from 'react'
import { objPrefixer } from 'shared/lib/objPrefixer/objPrefixer'
import { FP_Object, TAnyKeys } from 'shared/types/shared'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Animate: FP_Object<TAnyKeys, void> = (classes) => {
  const classesID = objPrefixer({ object: classes, prefix: '.' })
  // @ts-ignore
  const { chefs, chefsItem, chefsItemHead, chefsItemFooter } = classesID

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(chefs, {
      scrollTrigger: {
        trigger: chefs,
        start: 'top bottom'
      },

      opacity: 0,
      y: 100,
      duration: 0.4
    })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: chefsItem,
          start: 'top bottom'
        }
      })
      .fromTo(
        chefsItem,
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
        },
        0
      )
      .fromTo(
        `${chefsItemHead}>img`,
        {
          scale: 0.8
        },
        {
          scale: 1,
          duration: 0.2,
          stagger: 0.3
        },
        0.6
      )
      .fromTo(
        `${chefsItemFooter}>li`,
        {
          x: 20
        },
        {
          x: 0,
          duration: 0.4,
          stagger: 0.1
        },
        0.5
      )
      .from(
        `${chefsItemHead}>div`,
        {
          x: 25,
          stagger: 0.3,
          duration: 0.2
        },
        0.6
      )
  }, [])
}
