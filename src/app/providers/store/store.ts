import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modal/modalSlice'
import burgerMenuSlice from './burgerMenu/burgerMenuSlice'
import completeSlice from './complete/completeSlice'

const store = configureStore({
  reducer: { modal: modalSlice, burgerMenu: burgerMenuSlice, complete: completeSlice }
})

export default store
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
