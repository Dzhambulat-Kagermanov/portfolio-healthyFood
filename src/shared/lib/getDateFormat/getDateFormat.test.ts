import { getDateFormat } from './getDateFormat'

describe('getDateFormat', () => {
  test('test without format specification', () => {
    expect(getDateFormat({ day: 1, month: 1, year: 1 })).toBe('01.01.0001')
  })
  test('MDY format test', () => {
    expect(getDateFormat({ day: 1, month: 10, year: 1, format: 'MDY' })).toBe('10.01.0001')
  })
  test('DYM format test', () => {
    expect(getDateFormat({ day: 1, month: 10, year: 1, format: 'DYM' })).toBe('01.0001.10')
  })
  test('MYD format test', () => {
    expect(getDateFormat({ day: 1, month: 10, year: 1, format: 'MYD' })).toBe('10.0001.01')
  })
  test('YMD format test', () => {
    expect(getDateFormat({ day: 1, month: 10, year: 1, format: 'YMD' })).toBe('0001.10.01')
  })
  test('YDM format test', () => {
    expect(getDateFormat({ day: 1, month: 10, year: 1, format: 'YDM' })).toBe('0001.01.10')
  })
})
