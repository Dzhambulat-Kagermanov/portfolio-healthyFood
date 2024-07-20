import { FC } from 'react'
import classes from './Work.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import Base from 'shared/ui/Base/Base'
import WorkCard from 'components/widgets/WorkCard/WorkCard'
import adaptive from './Adaptive.module.scss'

interface IWorkProps extends IClassName {}
const Work: FC<IWorkProps> = ({ className }) => {
  return (
    <section>
      <Base innerClass={classNames(classes.work, {}, [className])}>
        <DoubleTitle backTitle='Work' className={classNames(classes.title)}>
          how it works
        </DoubleTitle>
        <ul className={classNames(classes.group, {}, [adaptive.group])}>
          <WorkCard
            title='Pick meals'
            subtitle='Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.'
            className={classNames(classes.item, {}, [adaptive.item])}
          />
          <WorkCard
            title='Choose how often'
            subtitle='Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!'
            className={classNames(classes.item, {}, [adaptive.item])}
          />
          <WorkCard
            title='fast deliveries'
            subtitle='Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.'
            className={classNames(classes.item, {}, [adaptive.item])}
          />
          <WorkCard
            title='tasty meals'
            subtitle='Gobble makes cooking fast, so you have more time to unwind and be with family.'
            className={classNames(classes.item, {}, [adaptive.item])}
          />
        </ul>
      </Base>
    </section>
  )
}

export default Work
