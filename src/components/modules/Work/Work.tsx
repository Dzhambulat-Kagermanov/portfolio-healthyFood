import { FC } from 'react'
import classes from './Work.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import DoubleTitle from 'shared/ui/DoubleTitle/DoubleTitle'
import Base from 'shared/ui/Base/Base'
import Group from './Group/Group'

interface IWorkProps extends IClassName {}
const Work: FC<IWorkProps> = ({ className }) => {
  return (
    <Base innerClass={classNames(classes.work, {}, [className])}>
      <DoubleTitle backTitle='Work' className={classNames(classes.title)}>
        how it works
      </DoubleTitle>
      <Group className={classNames(classes.group)} />
    </Base>
  )
}

export default Work
