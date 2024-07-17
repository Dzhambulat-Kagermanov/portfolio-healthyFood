import { classNames } from './classNames'

describe('classNames', () => {
  test('first parameter', () => {
    expect(classNames('mainClass')).toBe('mainClass')
  })
  test('second parameter', () => {
    expect(classNames('', { classTrue_1: true, classTrue_2: true, classFalse1: false })).toBe(
      ' classTrue_1 classTrue_2'
    )
  })
  test('third parameter', () => {
    expect(classNames('', {}, ['additional_1', 'additional_2'])).toBe(' additional_1 additional_2')
  })
  test('all parameters', () => {
    expect(
      classNames('mainClass', { classTrue_1: true, classTrue_2: true, classFalse1: false }, [
        'additional_1',
        'additional_2'
      ])
    ).toBe('mainClass classTrue_1 classTrue_2 additional_1 additional_2')
  })
})
