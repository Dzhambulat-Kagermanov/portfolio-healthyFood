export function getDataPagination<T>(data: T[], seek: number, step: number) {
  const result: T[] = []

  for (let index = seek; index < seek + step; index++) {
    const element = data[index]
    if (element === undefined) {
      break
    }
    result.push(element)
  }

  return result
}
