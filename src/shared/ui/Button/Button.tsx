import { ButtonHTMLAttributes, FC } from 'react'
import classes from './Button.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IClassName {
  size?: 'big' | 'medium'
  theme?: 'fill' | 'outlined' | 'clear'
  circle?: boolean
}
const Button: FC<IButtonProps> = ({ className, onClick, children, size, theme, circle, style, type }) => {
  return (
    <button
      type={type || 'button'}
      style={{ ...style }}
      onClick={onClick}
      className={classNames(classes.btn, { [classes.circle]: circle }, [
        className,
        classes[size || 'medium'],
        classes[theme || 'fill']
      ])}
    >
      {children}
    </button>
  )
}

export default Button
