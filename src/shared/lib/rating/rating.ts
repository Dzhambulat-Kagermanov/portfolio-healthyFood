export interface IStarsPosition {
  expandedRating: string | number
  starsPosition: string[]
}

export const starsPositions = (rating: number): IStarsPosition => {
  let expandedRating: number | string = rating
  const starsPosition: string[] = []
  const ratingFlooring: number = Math.floor(rating)

  if (rating % 1 === 0) {
    for (let index = 0; index < rating; index++) {
      starsPosition.push('full')
    }
    if (5 - rating !== 0) {
      for (let index = 0; index < 5 - rating; index++) {
        starsPosition.push('empty')
      }
    }
    expandedRating = `${rating}.0`
  } else {
    for (let index = 0; index < ratingFlooring; index++) {
      starsPosition.push('full')
    }
    starsPosition.push('half')

    if (5 - rating >= 1) {
      for (let index = 1; index < Math.ceil(5 - rating); index++) {
        starsPosition.push('empty')
      }
    }
  }
  return { expandedRating, starsPosition }
}
