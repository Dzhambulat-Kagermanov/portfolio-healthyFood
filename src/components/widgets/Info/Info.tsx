import { FC } from 'react'
import classes from './Info.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IInfoProps extends IClassName {
  itemClass?: string
}
const Info: FC<IInfoProps> = ({ className, itemClass }) => {
  return (
    <ul className={classNames(classes.info, {}, [className])}>
      <li className={classNames(classes.item, {}, [itemClass])}>
        <img src={require('images/Info/time.svg')} alt='time' />
        <h2>Today 10:00 am - 7:00 pm</h2>
        <h3>Working hours</h3>
      </li>
      <li className={classNames(classes.item, {}, [itemClass])}>
        <img src={require('images/Info/location.svg')} alt='location' />
        <h2>Velyka Vasylkivska 100</h2>
        <h3>Get Directions</h3>
      </li>
      <li className={classNames(classes.item, {}, [itemClass])}>
        <img src={require('images/Info/phone.svg')} alt='phone' />
        <h2>+38 (063)833 24 15</h2>
        <h3>Call Online</h3>
      </li>
    </ul>
  )
}

export default Info
