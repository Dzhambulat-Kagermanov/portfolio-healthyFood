import { FC } from 'react'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Header.module.scss'
import Logo from 'components/widgets/Logo/Logo'
import MenuButton from 'shared/ui/MenuButton/MenuButton'

interface IHeaderProps extends IClassName {}

const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <header className={classNames(classes.headerWrapper)}>
      <Base containerClass={classNames(classes.container)} innerClass={classNames(classes.header, {}, [className])}>
        <Logo />
        <MenuButton />
      </Base>
    </header>
  )
}

export default Header
