import { FP_Object, TAnyKeys } from 'shared/types/shared'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import { objPrefixer } from 'shared/lib/objPrefixer/objPrefixer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Animate: FP_Object<TAnyKeys, void> = (classes) => {
  const PAGE_LOAD_DELAY = 0.6
  //@ts-ignore
  const { head, title, subtitle, btn, infoItem } = objPrefixer({ object: classes, prefix: '.' })
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.registerPlugin(ScrollTrigger)

    tl.from(title, { opacity: 0, x: -100, duration: 0.6 }, PAGE_LOAD_DELAY)
      .from(subtitle, { opacity: 0, x: 100, duration: 0.4 })
      .fromTo(
        btn,
        { opacity: 0, y: 20, transition: 'none', duration: 0.6, delay: 0.4 },
        { opacity: 1, y: 0, transition: '0.2s ease' }
      )

    gsap.to(head, { '--afterScale': 1.08, duration: 2, delay: PAGE_LOAD_DELAY })
    gsap.fromTo(
      infoItem,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: infoItem,
          start: '0 bottom'
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: function (i: number) {
          return i * 0.4 + PAGE_LOAD_DELAY
        }
      }
    )
  }, [])
}
