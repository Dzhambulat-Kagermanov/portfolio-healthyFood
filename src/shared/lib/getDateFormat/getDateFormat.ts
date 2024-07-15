import { FP_Object } from 'shared/types/shared'

type TParam = string | number
type TFormat = 'DMY' | 'MDY' | 'YDM' | 'YMD' | 'DYM' | 'MYD'
type TDateParams = {
  day: TParam
  month: TParam
  year: TParam
}

type TGetDateFormat =
  | {
      day?: TParam
      month?: TParam
      year?: TParam
      format?: TFormat
      nowDate?: never
    }
  | {
      day?: never
      month?: never
      year?: never
      format?: TFormat
      nowDate?: boolean
    }

export const getDateFormat: FP_Object<TGetDateFormat, string> = ({ day, month, year, format, nowDate }): string => {
  let thisDay: TParam = new Date().getDate()
  if (thisDay.toString().length < 2) thisDay = '0'.concat(thisDay.toString())

  let thisMonth: TParam = new Date().getMonth() + 1
  if (thisMonth.toString().length < 2) thisMonth = '0'.concat(thisMonth.toString())

  const formatter: FP_Object<TDateParams, string> = ({ day, month, year }) => {
    const dateFormat = format || 'DMY'
    return dateFormat
      .split('')
      .map((el) => {
        if (el === 'D') return day
        if (el === 'M') return month
        if (el === 'Y') return year
      })
      .join('.')
  }
  if (nowDate) {
    let nowDay: TParam = new Date().getDate()
    if (nowDay.toString().length < 2) nowDay = '0'.concat(nowDay.toString())
    let nowMonth: TParam = new Date().getMonth() + 1
    if (nowMonth.toString().length < 2) nowMonth = '0'.concat(nowMonth.toString())

    const nowYear: TParam = new Date().getFullYear()

    return formatter({ day: nowDay, month: nowMonth, year: nowYear })
  }

  return formatter({ day: thisDay, month: thisMonth, year })
}
