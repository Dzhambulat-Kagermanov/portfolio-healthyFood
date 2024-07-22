import { useLayoutEffect } from 'react'
import { objPrefixer } from 'shared/lib/objPrefixer/objPrefixer'
import { FP_Object, TAnyKeys } from 'shared/types/shared'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Animate: FP_Object<TAnyKeys, void> = (classes) => {
  const classesID = objPrefixer({ object: classes, prefix: '.' })
  // @ts-ignore
  const { recipes } = classesID

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(recipes, {
      scrollTrigger: {
        trigger: recipes,
        start: 'top bottom'
      },

      opacity: 0,
      y: 100,
      duration: 0.4
    })
  }, [])
}
