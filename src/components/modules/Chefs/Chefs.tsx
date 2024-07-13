import { FC } from 'react'
import classes from './Chefs.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Base from 'shared/ui/Base/Base'
import ChefsCard from 'components/widgets/ChefsCard/ChefsCard'
import { chefsData } from 'shared/constants/chefs'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'

interface IChefsProps extends IClassName {}
const Chefs: FC<IChefsProps> = ({ className }) => {
  return (
    <Base innerClass={classNames(classes.chefs, {}, [className])}>
      <DoubleTitle backTitleSize='big' backTitle='Chefs' className={classNames(classes.title)}>
        This month's chefs
      </DoubleTitle>
      <ul className={classNames(classes.group)}>
        {chefsData.map(({ avatar, id, name, portfolio, speciality }) => (
          <ChefsCard
            key={id}
            avatar={avatar}
            name={name}
            portfolio={portfolio}
            speciality={speciality}
            className={classNames(classes.item)}
            tag='li'
          />
        ))}
      </ul>
    </Base>
  )
}

export default Chefs
