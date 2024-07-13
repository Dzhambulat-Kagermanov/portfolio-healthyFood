import { FC, InputHTMLAttributes } from 'react'
import classes from './Input.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'

interface IInputProps extends IClassName, InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<IInputProps> = ({ className, onChange, type, placeholder }) => {
  return (
    <input
      className={classNames(classes.input, {}, [className])}
      type={type || 'text'}
      placeholder={placeholder || 'Enter text'}
      onChange={onChange}
    />
  )
}

export default Input
