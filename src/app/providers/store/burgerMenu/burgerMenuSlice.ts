import { createSlice } from '@reduxjs/toolkit'

const burgerMenuSlice = createSlice({
  name: 'BurgerMenuSlice',
  initialState: {
    burgerMenuState: false
  },
  reducers: {
    toggleBurgerMenu(state, action) {
      state.burgerMenuState = !state.burgerMenuState
    }
  }
})

export const { toggleBurgerMenu } = burgerMenuSlice.actions
export default burgerMenuSlice.reducer
