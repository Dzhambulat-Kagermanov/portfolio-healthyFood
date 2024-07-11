import { FC } from 'react'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Header.module.scss'
import Logo from 'components/widgets/Logo/Logo'
import BurgerButton from 'shared/ui/BurgerButton/BurgerButton'

interface IHeaderProps extends IClassName {}

const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <header className={classNames(classes.headerWrapper)}>
      <Base containerClass={classNames(classes.container)} innerClass={classNames(classes.header, {}, [className])}>
        <Logo />
        <BurgerButton />
      </Base>
    </header>
  )
}

export default Header
