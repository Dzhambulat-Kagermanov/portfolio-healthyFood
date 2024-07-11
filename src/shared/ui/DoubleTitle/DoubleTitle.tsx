import { FC } from 'react'
import classes from './DoubleTitle.module.scss'
import { IChildren, IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IDoubleTitleProps extends IClassName, IChildren {
  backTitle: string
  backTitleSize?: 'huge' | 'big' | 'medium' | 'small'
}
const DoubleTitle: FC<IDoubleTitleProps> = ({ className, children, backTitle, backTitleSize }) => {
  return (
    <div className={classNames(classes.title, {}, [className])}>
      <h2 className={classNames(classes.mainTitle, {}, [className])}>{children}</h2>
      <h3 className={classNames(classes.backTitle, {}, [classes[`backTitle-${backTitleSize || 'big'}`]])}>
        {backTitle}
      </h3>
    </div>
  )
}

export default DoubleTitle
