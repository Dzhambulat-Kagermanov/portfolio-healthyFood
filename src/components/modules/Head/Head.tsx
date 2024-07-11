import { FC } from 'react'
import classes from './Head.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'
import Info from 'components/widgets/Info/Info'
import Base from 'shared/ui/Base/Base'

interface IHeadProps extends IClassName {}
const Head: FC<IHeadProps> = ({ className }) => {
  return (
    <section>
      <Base innerClass={classNames(classes.head, {}, [className])}>
        <h1 className={classNames(classes.title)}>
          Your <span>favorite food</span> delivered <span>hot & fresh</span>
        </h1>
        <h2 className={classNames(classes.subtitle)}>
          HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh
          homemade dinner in just 15 minutes.
        </h2>
        <Button className={classNames(classes.btn)} size='big' theme='fill'>
          Order Now
        </Button>
        <Info className={classNames(classes.info)} />
      </Base>
    </section>
  )
}

export default Head
