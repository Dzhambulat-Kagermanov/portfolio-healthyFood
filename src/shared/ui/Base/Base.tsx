import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { IChildren } from 'shared/types/shared'
import classes from './Base.module.scss'

interface IBaseProps {
  innerClass?: string
  containerClass?: string
  containerChild?: ReactNode
  children?: ReactNode
}

const Base: FC<IBaseProps> = ({ innerClass, containerClass, children, containerChild }) => {
  return (
    <div className={classNames(classes.container, {}, [containerClass, 'container'])}>
      {containerChild}
      <div className={classNames(classes.inner, {}, [innerClass, 'inner'])}>{children}</div>
    </div>
  )
}

export default Base
