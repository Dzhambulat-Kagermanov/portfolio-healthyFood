import { FC } from 'react'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Base from 'shared/ui/Base/Base'
import ChefsCard from 'components/widgets/ChefsCard/ChefsCard'
import { chefsData } from 'shared/constants/chefs'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import classes from './Chefs.module.scss'
import adaptive from './Adaptive.module.scss'
import { Animate } from './Animate'

interface IChefsProps extends IClassName {
  id?: string
}
const Chefs: FC<IChefsProps> = ({ className, id }) => {
  Animate({
    chefs: classes.chefs,
    chefsItem: classes.item,
    chefsItemHead: adaptive.itemHead,
    chefsItemFooter: adaptive.itemFooter
  })
  return (
    <section>
      <Base innerClass={classNames(classes.chefs, {}, [className])} containerID={classNames(id)} containerClass={classNames(classes.container)}>
        <DoubleTitle backTitleSize='big' backTitle='Chefs' className={classNames(classes.title)}>
          This month's chefs
        </DoubleTitle>
        <ul className={classNames(classes.group, {}, [adaptive.group])}>
          {chefsData.map(({ avatar, id, name, portfolio, speciality }) => (
            <ChefsCard
              footerClass={classNames(adaptive.itemFooter)}
              key={id}
              avatar={avatar}
              name={name}
              portfolio={portfolio}
              speciality={speciality}
              headClass={classNames(adaptive.itemHead)}
              className={classNames(classes.item)}
              tag='li'
            />
          ))}
        </ul>
      </Base>
    </section>
  )
}

export default Chefs
