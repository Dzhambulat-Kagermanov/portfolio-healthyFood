import { FC } from 'react'
import classes from './Content.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IContentProps extends IClassName {
  title: string
  subtitle: string
  description: string
}
const Content: FC<IContentProps> = ({ description, subtitle, title, className }) => {
  return (
    <div className={classNames(classes.content, {}, [className])}>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <h3>{description}</h3>
    </div>
  )
}

export default Content
