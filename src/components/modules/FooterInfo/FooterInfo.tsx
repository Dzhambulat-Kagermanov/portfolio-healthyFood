import { FC } from 'react'
import classes from './FooterInfo.module.scss'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import Info from 'components/widgets/Info/Info'

interface IFooterInfoProps extends IClassName {}
const FooterInfo: FC<IFooterInfoProps> = ({ className }) => {
  return (
    <Base containerClass={classNames(classes.container)} innerClass={classNames(classes.footer, {}, [className])}>
      <Info className={classNames(classes.info)} />
    </Base>
  )
}

export default FooterInfo
