import { getDateFormat } from 'shared/lib/getDateFormat/getDateFormat'
import * as Yup from 'yup'

type TAnyKeysRegExp = {
  [key: string]: RegExp
}

const regExps: TAnyKeysRegExp = {
  modalName: /^[a-zA-Z]{2,20}$/,
  modalMail:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  modalDate: /[\d.]{10,10}/,
  modalPhone: /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim
}

const name = Yup.string()
  .matches(regExps.modalName, 'Invalid entry. Entry your first name and use only letters')
  .required('Required field. Entry your name')

const phone = Yup.string()
  .matches(regExps.modalPhone, 'Invalid entry. Entry your phone')
  .required('Required field. Use only numbers and if need + symbol')

const mail = Yup.string()
  .matches(regExps.modalMail, 'Invalid entry. Use letters, numbers and if need . and @ symbols. Example test@gmail.com')
  .required('Required field. Entry your mail')

const date = Yup.string()
  .matches(regExps.modalDate, 'Invalid entry. Use only numbers')
  .required('Required field. Enter date of visit ')
  .test(
    'modalDate',
    () => {
      return 'You cannot specify a past date'
    },
    (value) => {
      let state = true
      const splitVal: string[] = value.split('.')
      const nowDateSplit: string[] = getDateFormat({ nowDate: true }).split('.')

      for (let index = nowDateSplit.length; index >= 0; index--) {
        const nowItem: string = nowDateSplit[index]
        if (nowItem > splitVal[index]) {
          state = !state
          break
        }
        if (nowItem < splitVal[index]) {
          break
        }
      }

      return state
    }
  )

const visit = Yup.string().required('Select one parameter')
const additional = Yup.string().required('Select one parameter')

export const modalValidateSchema = {
  custom: Yup.object().shape({
    modalPhone: phone,
    modalName: name,
    modalMail: mail,
    modalDate: date,
    modalVisit: visit,
    modalAdditional: additional
  })
}
