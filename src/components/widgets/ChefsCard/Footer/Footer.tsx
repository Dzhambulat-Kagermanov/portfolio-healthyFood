import { FC } from 'react'
import classes from './Footer.module.scss'
import { IClassName } from 'shared/types/shared'
import { IChefsCardFooter } from '../ChefsCard'
import { classNames } from 'shared/lib/classNames/classNames'

interface IFooterProps extends IClassName, IChefsCardFooter {}
const Footer: FC<IFooterProps> = ({ portfolio, className }) => {
  return (
    <ul className={classNames(classes.footer, {}, [className])}>
      {portfolio.map((el, index) => (
        <li className={classNames(classes.item)} key={index}>
          {' '}
          <img src={el} alt='dish example' />
        </li>
      ))}
    </ul>
  )
}

export default Footer
