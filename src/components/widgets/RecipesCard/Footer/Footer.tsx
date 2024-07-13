import { FC } from 'react'
import classes from './Footer.module.scss'
import { IClassName } from 'shared/types/shared'
import { IRecipesCardFooter } from '../RecipesCard'
import { classNames } from 'shared/lib/classNames/classNames'

interface IFooterProps extends IClassName, IRecipesCardFooter {}
const Footer: FC<IFooterProps> = ({ date, socialData, recipesGroup, className }) => {
  return (
    <div className={classNames(classes.footer, {}, [className])}>
      <h2>{recipesGroup}</h2>
      <h3>{date}</h3>
      <ul className={classes.social}>
        <li className={classes.socialItem}>
          <img src='images/views.svg' alt='views' />
          <h2>{socialData.views}</h2>
        </li>
        <li className={classes.socialItem}>
          <img src='images/comments.svg' alt='comments' />
          <h2>{socialData.comments}</h2>
        </li>
      </ul>
    </div>
  )
}

export default Footer
