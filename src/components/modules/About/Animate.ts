import { useLayoutEffect } from 'react'
import { objPrefixer } from 'shared/lib/objPrefixer/objPrefixer'
import { FP_Object, TAnyKeys } from 'shared/types/shared'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Animate: FP_Object<TAnyKeys, void> = (classes) => {
  const classesID = objPrefixer({ object: classes, prefix: '.' })
  // @ts-ignore
  const { about, subtitle, slider } = classesID

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(about, { opacity: 0, y: 100 })
    gsap.set(subtitle, { opacity: 0, y: 100 })
    gsap.set(slider, { opacity: 0, y: 100 })

    gsap.to(about, {
      scrollTrigger: {
        trigger: about,
        start: 'top bottom'
      },
      y: 0,
      opacity: 1,
      duration: 0.4
    })
    gsap.to(subtitle, {
      scrollTrigger: {
        trigger: subtitle,
        start: 'top bottom'
      },
      y: 0,
      opacity: 1,
      duration: 0.4
    })
    gsap.to(slider, {
      scrollTrigger: {
        trigger: slider,
        start: 'top bottom'
      },
      y: 0,
      opacity: 1,
      duration: 0.4
    })
  }, [])
}
