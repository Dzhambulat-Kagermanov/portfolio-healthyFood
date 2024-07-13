import { FC } from 'react'
import classes from './Head.module.scss'
import { IRecipesCardHead } from '../RecipesCard'
import { classNames } from 'shared/lib/classNames/classNames'
import { IClassName } from 'shared/types/shared'

interface IHeadProps extends IClassName, IRecipesCardHead {}
const Head: FC<IHeadProps> = ({ author, description, className }) => {
  return (
    <blockquote className={classNames(classes.quote, {}, [className])}>
      <h2 className={classNames(classes.title)}>{description}</h2>
      <h4 className={classNames(classes.author)}>{author}</h4>
    </blockquote>
  )
}

export default Head
