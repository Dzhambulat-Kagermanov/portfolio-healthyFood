import { FC } from 'react'
import classes from './Head.module.scss'
import { IChildren, IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IHeadProps extends IClassName, IChildren {}
const Head: FC<IHeadProps> = ({ children, className }) => {
  return (
    <div className={classNames(classes.head, {}, [className])}>
      <div className={classNames(classes.img)}>
        <img src={require('images/checkmark.svg')} alt='checkmark' />
      </div>
      <h2 className={classNames(classes.title)}>{children}</h2>
    </div>
  )
}

export default Head
