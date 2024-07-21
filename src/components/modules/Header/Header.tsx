import { FC } from 'react'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Header.module.scss'
import Logo from 'components/widgets/Logo/Logo'
import BurgerButton from 'shared/ui/BurgerButton/BurgerButton'
import { useAppDispatch } from 'shared/hooks/reduxHooks'
import { toggleBurgerMenu } from 'app/providers/store/burgerMenu/burgerMenuSlice'
import Navbar from 'components/widgets/Navbar/Navbar'
import adaptive from './Adaptive.module.scss'
import useScreen from 'shared/hooks/useScreen'

interface IHeaderProps extends IClassName {}

const Header: FC<IHeaderProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  let SCREEN_WIDTH = useScreen()

  return (
    <header>
      <Base
        containerClass={classNames(classes.container)}
        innerClass={classNames(classes.header, {}, [className, adaptive.header])}
      >
        <Logo />
        {SCREEN_WIDTH >= 901 ? (
          <Navbar className={classNames(adaptive.navbar)} linkClass={classNames(adaptive.navbarItem)} />
        ) : (
          <BurgerButton
            onClick={() => {
              dispatch({ type: toggleBurgerMenu.type, payload: {} })
            }}
          />
        )}
      </Base>
    </header>
  )
}

export default Header
