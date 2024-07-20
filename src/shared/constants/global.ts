export let SCREEN_WIDTH: number = window.innerWidth
window.addEventListener('resize', (event) => {
  // @ts-ignore
  SCREEN_WIDTH = event.currentTarget.innerWidth
})
