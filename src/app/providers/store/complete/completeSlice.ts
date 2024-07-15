import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

const completeSlice = createSlice({
  name: 'completeSlice',
  initialState: {
    title: 'Complete text',
    state: false
  },
  reducers: {
    toggleComplete(state) {
      state.state = !state.state
    },
    setCompleteTitle(state, { payload: { title } }: PayloadAction<{ title: string | ReactNode }>) {
      // @ts-ignore
      state.title = title
    }
  }
})

export const { setCompleteTitle, toggleComplete } = completeSlice.actions
export default completeSlice.reducer
