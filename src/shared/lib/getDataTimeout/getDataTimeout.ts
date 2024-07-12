export function getDataTimeout<T>(data: T[], timeout?: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, timeout || 1500)
  })
}
