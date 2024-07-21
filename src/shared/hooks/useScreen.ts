import { FC, useState } from 'react'
import classes from './useScreen.module.scss'
import { FP_Object } from 'shared/types/shared'

const useScreen: FP_Object<void, number> = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })
  return screenWidth
}

export default useScreen
