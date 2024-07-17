import { getDataPagination } from './getDataPagination'

describe('getDataPagination', () => {
  const paginationData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  test('step work test', () => {
    expect(getDataPagination(paginationData, 0, 4)).toEqual([1, 2, 3, 4])
  })
  test('seek work test', () => {
    expect(getDataPagination(paginationData, 4, 5)).toEqual([5, 6, 7, 8, 9])
  })
  test('partial out of bounds test', () => {
    expect(getDataPagination(paginationData, 8, 5)).toEqual([9, 10])
  })
  test('full out of bounds test', () => {
    expect(getDataPagination(paginationData, 10, 5)).toEqual([])
  })
})
