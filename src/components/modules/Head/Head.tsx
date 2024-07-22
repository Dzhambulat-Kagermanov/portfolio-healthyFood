import { FC } from 'react'
import classes from './Head.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'
import Info from 'components/widgets/Info/Info'
import Base from 'shared/ui/Base/Base'
import useModal from 'shared/hooks/useModal'
import { toggleModal } from 'app/providers/store/modal/modalSlice'
import adaptive from './Adaptive.module.scss'
import { Animate } from './Animate'

interface IHeadProps extends IClassName {}
const Head: FC<IHeadProps> = ({ className }) => {
  const modal = useModal(toggleModal.type)

  Animate({
    head: classes.head,
    title: classes.title,
    subtitle: classes.subtitle,
    btn: classes.btn,
    infoItem: classes.infoItem
  })
  return (
    <section>
      <Base innerClass={classNames(classes.head, {}, [className, adaptive.head])}>
        <h1 className={classNames(classes.title, {}, [adaptive.title])}>
          Your <span>favorite food</span> delivered <span>hot & fresh</span>
        </h1>
        <h2 className={classNames(classes.subtitle, {}, [adaptive.subtitle])}>
          HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh
          homemade dinner in just 15 minutes.
        </h2>
        <Button
          className={classNames(classes.btn, {}, [adaptive.btn])}
          onClick={() => {
            modal()
          }}
          size='big'
          theme='fill'
        >
          Order Now
        </Button>
        <Info className={classNames(classes.info, {}, [adaptive.info])} itemClass={classNames(classes.infoItem)} />
      </Base>
    </section>
  )
}

export default Head
