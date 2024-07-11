import { FC } from 'react'
import classes from './Group.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IGroupProps extends IClassName {}
const Group: FC<IGroupProps> = ({ className }) => {
  return (
    <ul className={classNames(classes.group, {}, [className])}>
      <li className={classNames(classes.item)}>
        <h2>Pick meals</h2>
        <div />
        <h3>Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.</h3>
      </li>
      <li className={classNames(classes.item)}>
        <h2>Choose how often</h2>
        <div />
        <h3>Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!</h3>
      </li>
      <li className={classNames(classes.item)}>
        <h2>fast deliveries</h2>
        <div />
        <h3>Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.</h3>
      </li>
      <li className={classNames(classes.item)}>
        <h2>tasty meals</h2>
        <div />
        <h3>Gobble makes cooking fast, so you have more time to unwind and be with family.</h3>
      </li>
    </ul>
  )
}

export default Group
