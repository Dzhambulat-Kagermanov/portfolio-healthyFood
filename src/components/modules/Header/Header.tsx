import { FC } from 'react'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Header.module.scss'
import Logo from 'components/widgets/Logo/Logo'
import BurgerButton from 'shared/ui/BurgerButton/BurgerButton'
import { useAppDispatch } from 'shared/hooks/reduxHooks'
import { toggleBurgerMenu } from 'app/providers/store/burgerMenu/burgerMenuSlice'

interface IHeaderProps extends IClassName {}

const Header: FC<IHeaderProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  return (
    <header>
      <Base containerClass={classNames(classes.container)} innerClass={classNames(classes.header, {}, [className])}>
        <Logo />
        <BurgerButton
          onClick={() => {
            dispatch({ type: toggleBurgerMenu.type, payload: {} })
          }}
        />
      </Base>
    </header>
  )
}

export default Header
