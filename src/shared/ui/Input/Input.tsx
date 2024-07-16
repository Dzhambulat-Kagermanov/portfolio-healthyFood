import { FC, InputHTMLAttributes, ReactNode } from 'react'
import classes from './Input.module.scss'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import { Field, ErrorMessage as Error, useFormikContext } from 'formik'
import { IMaskInput } from 'react-imask'

interface IInputProps extends IClassName, Omit<InputHTMLAttributes<HTMLInputElement>, keyof { min: '1'; max: '1' }> {
  label?: ReactNode
  name: string
  mask?: string | DateConstructor
  min?: Date
  max?: Date
}
const Input: FC<IInputProps> = ({ className, type, placeholder, name, id, label, mask, ...other }) => {
  const { setFieldValue } = useFormikContext()
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
              {...other}
              className={classNames(classes.input)}
              placeholder={placeholder || 'Enter text'}
              {...field}
              mask={mask}
              lazy={false}
              unmask
              onAccept={(value) => {
                setFieldValue(name, value)
              }}
            />
          )
        }}
      </Field>

      <Error name={name}>{(error) => <h2 className={classNames(classes.error)}>{error}</h2>}</Error>
    </div>
  )
}

export default Input
