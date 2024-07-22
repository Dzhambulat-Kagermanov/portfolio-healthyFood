import { useLayoutEffect } from 'react'
import { objPrefixer } from 'shared/lib/objPrefixer/objPrefixer'
import { FP_Object, TAnyKeys } from 'shared/types/shared'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Animate: FP_Object<TAnyKeys, void> = (classes) => {
  const classesID = objPrefixer({ object: classes, prefix: '.' })
  // @ts-ignore
  const { work, workItem } = classesID

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(work, {
      scrollTrigger: {
        trigger: work,
        start: 'top bottom'
      },

      opacity: 0,
      y: 100,
      duration: 0.4
    })
    gsap.fromTo(
      workItem,
      {
        opacity: 0,
        y: 100
      },
      {
        scrollTrigger: {
          trigger: workItem,
          start: 'top bottom'
        },
        duration: 0.2,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: 0.2
      }
    )
  }, [])
}
