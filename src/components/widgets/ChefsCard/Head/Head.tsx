import { FC } from 'react'
import classes from './Head.module.scss'
import { IClassName } from 'shared/types/shared'
import { IChefsCardHead } from '../ChefsCard'
import { classNames } from 'shared/lib/classNames/classNames'

interface IHeadProps extends IClassName, IChefsCardHead {}
const Head: FC<IHeadProps> = ({ avatar, name, speciality, className }) => {
  return (
    <div className={classNames(classes.head, {}, [className])}>
      <img src={avatar} alt='chef avatar' />
      <div className={classNames(classes.info)}>
        <h2>{name}</h2>
        <h3>{speciality}</h3>
      </div>
    </div>
  )
}

export default Head
