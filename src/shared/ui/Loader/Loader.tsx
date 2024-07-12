import { FC } from 'react'
import classes from './Loader.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface ILoaderProps extends IClassName {
  theme?: 'circle' | 'squares' | 'circles'
  loaderColor?: string
}
const Loader: FC<ILoaderProps> = ({ className, theme }) => {
  return <div className={classNames(classes.loader, {}, [className, classes[theme || 'circle']])}></div>
}

export default Loader
