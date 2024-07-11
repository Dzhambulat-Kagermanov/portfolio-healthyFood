import { FC } from 'react'
import classes from './WorkCard.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IWorkCardProps extends IClassName {
  title: string
  subtitle: string
}
const WorkCard: FC<IWorkCardProps> = ({ className, subtitle, title }) => {
  return (
    <li className={classNames(classes.item, {}, [className])}>
      <h2>{title}</h2>
      <div />
      <h3>{subtitle}</h3>
    </li>
  )
}

export default WorkCard
