import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { IChildren } from 'shared/types/shared'
import classes from './Base.module.scss'
import adaptiveCls from 'app/styles/adaptiveBreakpoints.module.scss'

interface IBaseProps extends IChildren {
  innerClass?: string
  containerClass?: string
  containerChild?: ReactNode
  containerID?: string
}

const Base: FC<IBaseProps> = ({ innerClass, containerClass, children, containerChild, containerID }) => {
  return (
    <div className={classNames(classes.container, {}, [containerClass, adaptiveCls.parentBlock])} id={containerID}>
      {containerChild}
      <div className={classNames(classes.inner, {}, [innerClass, adaptiveCls.inner])}>{children}</div>
    </div>
  )
}

export default Base
