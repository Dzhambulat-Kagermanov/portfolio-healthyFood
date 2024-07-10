import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modal/modalSlice'

const store = configureStore({
  reducer: { modal: modalSlice }
})

export default store
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
