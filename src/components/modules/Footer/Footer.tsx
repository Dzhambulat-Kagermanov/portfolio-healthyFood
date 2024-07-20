import { FC } from 'react'
import classes from './Footer.module.scss'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import Logo from 'components/widgets/Logo/Logo'
import adaptive from './Adaptive.module.scss'

interface IFooterProps extends IClassName {}
const Footer: FC<IFooterProps> = ({ className }) => {
  return (
    <footer>
      <Base
        containerClass={classNames(classes.container)}
        innerClass={classNames(classes.footer, {}, [adaptive.footer])}
      >
        <Logo className={classNames(classes.logo)} />
        <h6>© Designed by Yellow Snow. All Rights Reserved.</h6>
      </Base>
    </footer>
  )
}

export default Footer
