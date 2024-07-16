import { FC, FormHTMLAttributes, useState } from 'react'
import { IClassName } from 'shared/types/shared'
import { classNames } from 'shared/lib/classNames/classNames'
import Input from 'shared/ui/Input/Input'
import DropdownItem from 'shared/ui/Dropdown/DropdownItem/DropdownItem'
import Dropdown from 'shared/ui/Dropdown/Dropdown'
import Button from 'shared/ui/Button/Button'
import { Form as FormikForm, Formik } from 'formik'
import { getDateFormat } from 'shared/lib/getDateFormat/getDateFormat'
import classes from './Form.module.scss'
import { modalValidateSchema } from 'shared/constants/modal'
import { useAppDispatch } from 'shared/hooks/reduxHooks'
import { setCompleteTitle, toggleComplete } from 'app/providers/store/complete/completeSlice'
import { masks } from 'shared/constants/inputMasks'

interface IFormProps extends IClassName, FormHTMLAttributes<HTMLFormElement> {}
const Form: FC<IFormProps> = ({ className, ...other }) => {
  const [phoneMask, setPhoneMask] = useState<string>(masks.phone.any)
  const dispatch = useAppDispatch()
  return (
    <Formik
      validationSchema={modalValidateSchema.custom}
      initialValues={{
        modalName: '',
        modalDate: getDateFormat({ nowDate: true }),
        modalPhone: '',
        modalMail: '',
        modalAdditional: '',
        modalVisit: ''
      }}
      onSubmit={(value, { resetForm, setSubmitting }) => {
        const validateData: any = value
        validateData.modalDate = { date: validateData.modalDate, format: 'DMY' }
        validateData.modalPhone = `+${validateData.modalPhone}`
        alert(JSON.stringify(validateData, null, 2))
        dispatch({
          type: setCompleteTitle.type,
          payload: {
            title: (
              <>
                <span>Success!</span>
                <br />
                We will contact you shortly.
              </>
            )
          }
        })
        dispatch({ type: toggleComplete.type })
        resetForm()
        setSubmitting(false)
      }}
    >
      <FormikForm action='' method='post' className={classNames(classes.form)} {...other}>
        <Input
          className={classNames(classes.input)}
          placeholder='Your name'
          name='modalName'
          label='Name'
          id='modalName'
        />
        <Input
          className={classNames(classes.input)}
          placeholder='Your phone'
          name='modalPhone'
          label='Phone'
          mask={phoneMask}
        />
        <Input className={classNames(classes.input)} placeholder='Your mail' name='modalMail' label='Mail' />
        <Input
          className={classNames(classes.input)}
          placeholder='Order date'
          name='modalDate'
          label='Date'
          mask={Date}
          min={new Date(999, 0, 1)}
          max={new Date(new Date().getFullYear() + 3, 0, 1)}
        />
        <Dropdown
          className={classNames(classes.dropdown)}
          placeholder='Select the purpose of your visit'
          name='modalVisit'
        >
          <DropdownItem validateValueText='Have dinner'>
            <h2>Have dinner</h2>
          </DropdownItem>
          <DropdownItem validateValueText='Arrange a banquet'>
            <h2>Arrange a banquet</h2>
          </DropdownItem>
        </Dropdown>
        <Dropdown className={classNames(classes.dropdown)} placeholder='Additional questions' name='modalAdditional'>
          <DropdownItem validateValueText='With children'>
            <h2>With children</h2>
          </DropdownItem>
          <DropdownItem validateValueText='Without children'>
            <h2>Without children</h2>
          </DropdownItem>
        </Dropdown>
        <Button type='submit' size='medium' className={classNames(classes.btnSubmit)}>
          Confirm
        </Button>
      </FormikForm>
    </Formik>
  )
}

export default Form
