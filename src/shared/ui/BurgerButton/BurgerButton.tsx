import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { IClassName } from 'shared/types/shared'
import classes from './BurgerButton.module.scss'

interface IBurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IClassName {}

const BurgerButton: FC<IBurgerButtonProps> = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={classNames(classes.btn, {}, [className])}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default BurgerButton
