// @ts-nocheck
import { useLayoutEffect } from 'react'
import { objPrefixer } from 'shared/lib/objPrefixer/objPrefixer'
import { FP_Object, TAnyKeys } from 'shared/types/shared'
import gsap from 'gsap'
import useScreen from 'shared/hooks/useScreen'

export const Animate: FP_Object<TAnyKeys, void> = (classes) => {
  const SCREEN_WIDTH = useScreen()
  const classesID = objPrefixer({ object: classes, prefix: '.' })
  const { container, logo, navbarItem } = classesID
  const PAGE_LOAD_DELAY = 0.6

  useLayoutEffect(() => {
    SCREEN_WIDTH >= 901 &&
      gsap.from(navbarItem, { opacity: 0, x: -30, duration: 0.4, stagger: 0.4, delay: PAGE_LOAD_DELAY })
    gsap.from(container, { backdropFilter: 'blur(1px)', duration: 0.4, delay: PAGE_LOAD_DELAY })
    gsap.from(logo, { opacity: 0, x: 30, duration: 1, delay: PAGE_LOAD_DELAY })
  }, [])
}
