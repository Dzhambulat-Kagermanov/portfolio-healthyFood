import { objPrefixer } from './objPrefixer'

describe('objPrefixer', () => {
  const testStr = 'test1'
  const testArray = ['test1', 'test2', 'test3']
  const testObj = { test1: 'test1', test2: 'test2', test3: 'test3' }
  const testNoValid = 212913

  test('string', () => {
    expect(objPrefixer({ object: testStr, prefix: '.' })).toBe('.test1')
  })
  test('array', () => {
    expect(objPrefixer({ object: testArray, prefix: '.' })).toEqual(['.test1', '.test2', '.test3'])
  })
  test('object', () => {
    expect(objPrefixer({ object: testObj, prefix: '.' })).toEqual({ test1: '.test1', test2: '.test2', test3: '.test3' })
  })
  test('no valid', () => {
    // @ts-ignore
    expect(objPrefixer({ object: testNoValid, prefix: '.' })).toBe(null)
  })
})
