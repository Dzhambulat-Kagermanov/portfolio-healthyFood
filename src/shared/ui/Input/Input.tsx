import { FC, InputHTMLAttributes, ReactNode } from 'react'
import classes from './Input.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import { Field, ErrorMessage as Error } from 'formik'
import { IMask, IMaskInput } from 'react-imask'

interface IInputProps extends IClassName, InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  name: string
  mask?: string
}
const Input: FC<IInputProps> = ({ className, onChange, type, placeholder, name, id, label, mask }) => {
  return (
    <div className={classNames(classes.inputWrapper, {}, [className])}>
      {label && (
        <label htmlFor={`${id}`} className={classNames(classes.label)}>
          {label}
        </label>
      )}
      <Field type={type || 'text'} name={name} id={id}>
        {({ field, form: { touched, errors }, meta }: any) => {
          return (
            <IMaskInput
              className={classNames(classes.input)}
              placeholder={placeholder || 'Enter text'}
              {...field}
              mask={mask}
              lazy={false}
              unmask
            />
          )
        }}
      </Field>

      <Error name={name}>{(error) => <h2 className={classNames(classes.error)}>{error}</h2>}</Error>
    </div>
  )
}

export default Input
