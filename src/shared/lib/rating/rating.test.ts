import { rating } from './rating'

describe('rating', () => {
  test('null rating', () => {
    expect(rating(0)).toEqual({ expandedRating: '0.0', ratingPositions: ['empty', 'empty', 'empty', 'empty', 'empty'] })
  })
  test('integer rating', () => {
    expect(rating(4)).toEqual({ expandedRating: '4.0', ratingPositions: ['full', 'full', 'full', 'full', 'empty'] })
  })
  test('float rating which more half', () => {
    expect(rating(4.6)).toEqual({ expandedRating: '4.6', ratingPositions: ['full', 'full', 'full', 'full', 'half'] })
  })
  test('float rating which low half', () => {
    expect(rating(4.3)).toEqual({ expandedRating: '4.3', ratingPositions: ['full', 'full', 'full', 'full', 'half'] })
  })
  test('full rating', () => {
    expect(rating(5)).toEqual({ expandedRating: '5.0', ratingPositions: ['full', 'full', 'full', 'full', 'full'] })
  })
})
