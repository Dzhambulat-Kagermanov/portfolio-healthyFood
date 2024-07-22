import { FP_Object, TAnyKeys } from 'shared/types/shared'

type TObjPrefixerReturn = string | string[] | TAnyKeys
type TObjPrefixerProps =
  | {
      prefix: string
      object: string
    }
  | {
      prefix: string
      object: string[]
    }
  | {
      prefix: string
      object: TAnyKeys
    }

export const objPrefixer: FP_Object<TObjPrefixerProps, TObjPrefixerReturn> = ({ object, prefix }) => {
  if (Array.isArray(object)) return object.map((el) => `.${el}`)
  if (object instanceof Object) {
    const obj = object
    Object.keys(object).forEach((el) => {
      obj[el] = `.${obj[el]}`
    })
    return obj
  }
  if (typeof object === 'string') return `.${object}`
  return null
}
