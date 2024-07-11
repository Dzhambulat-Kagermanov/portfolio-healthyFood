import { FC } from 'react'
import { IClassName } from 'shared/types/shared'
import Base from 'shared/ui/Base/Base'
import BurgerButton from 'shared/ui/BurgerButton/BurgerButton'
import Navbar from 'components/widgets/Navbar/Navbar'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './BurgerMenu.module.scss'
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'
import { toggleBurgerMenu } from 'app/providers/store/burgerMenu/burgerMenuSlice'

interface IBurgerMenuProps extends IClassName {}

const BurgerMenu: FC<IBurgerMenuProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const burgerMenuSelector = useAppSelector((state) => state.burgerMenu.burgerMenuState)

  return (
    <section>
      <Base
        containerClass={classNames(classes.container, { [classes.active]: burgerMenuSelector })}
        innerClass={classNames(classes.menu, {}, [className])}
      >
        <BurgerButton
          className={classNames(classes.btn)}
          onClick={() => {
            dispatch({ type: toggleBurgerMenu.type, payload: {} })
          }}
        />
        <Navbar
          className={classNames(classes.links)}
          linkOnClick={() => {
            dispatch({ type: toggleBurgerMenu.type, payload: {} })
          }}
        />
      </Base>
    </section>
  )
}

export default BurgerMenu
