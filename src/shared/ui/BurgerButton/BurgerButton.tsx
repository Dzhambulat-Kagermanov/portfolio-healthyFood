import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { IClassName } from 'shared/types/shared'
import classes from './MenuButton.module.scss'

interface IMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IClassName {}

const BurgerButton: FC<IMenuButtonProps> = ({ onClick, className }) => {
    return (
        <button className={classNames(classes.btn, {}, [className])}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default BurgerButton
