import { FC, InputHTMLAttributes, ReactNode } from 'react'
import classes from './Input.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import { Field, ErrorMessage as Error } from 'formik'

interface IInputProps extends IClassName, InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  name: string
}
const Input: FC<IInputProps> = ({ className, onChange, type, placeholder, name, id, label }) => {
  return (
    <div className={classNames(classes.inputWrapper, {}, [className])}>
      {label && (
        <label htmlFor={`${id}`} className={classNames(classes.label)}>
          {label}
        </label>
      )}
      <Field
        className={classNames(classes.input)}
        type={type || 'text'}
        placeholder={placeholder || 'Enter text'}
        name={name}
        id={id}
      />
      <Error name={name}>{(error) => <h2 className={classNames(classes.error)}>{error}</h2>}</Error>
    </div>
  )
}

export default Input
