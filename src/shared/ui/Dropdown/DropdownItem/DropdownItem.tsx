import { FC } from 'react'
import classes from './DropdownItem.module.scss'
import { IChildren, IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IDropdownItemProps extends IChildren, IClassName {
  active?: boolean
}
const DropdownItem: FC<IDropdownItemProps> = ({ active, children, className }) => {
  return <div className={classNames(classes.item, {}, [className])}>{children}</div>
}

export default DropdownItem
