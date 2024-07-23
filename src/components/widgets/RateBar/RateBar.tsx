import { FC } from 'react'
import classes from './RateBar.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import { IRatingPositions, rating as starsPositions } from 'shared/lib/rating/rating'

interface IRateBarProps extends IClassName {
  rating: number
}
const RateBar: FC<IRateBarProps> = ({ className, rating }) => {
  const fullStar: string = require('images/stars/fullStar.svg')
  const halfStar: string = require('images/stars/halfStar.svg')
  const emptyStar: string = require('images/stars/emptyStar.svg')
  const { expandedRating, ratingPositions }: IRatingPositions = starsPositions(rating)

  return (
    <div className={classNames(classes.rating, {}, [className])}>
      <ul className={classNames(classes.group)}>
        {ratingPositions.map((el, index) => {
          switch (el) {
            case 'full':
              return (
                <li className={classNames(classes.item)} key={index}>
                  <img src={fullStar} alt='rating star' />
                </li>
              )
            case 'half':
              return (
                <li className={classNames(classes.item)} key={index}>
                  <img src={halfStar} alt='rating star' />
                </li>
              )
            case 'empty':
              return (
                <li className={classNames(classes.item)} key={index}>
                  <img src={emptyStar} alt='rating star' />
                </li>
              )
          }
        })}
      </ul>
      <h2 className={classNames(classes.ratingNumber)}>{expandedRating}</h2>
    </div>
  )
}

export default RateBar
