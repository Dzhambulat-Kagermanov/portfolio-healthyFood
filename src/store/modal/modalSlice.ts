import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'ModalSlice',
  initialState: {
    modalState: false
  },
  reducers: {
    toggleModal(state, action) {
      state.modalState = !state.modalState
    }
  }
})

export const { toggleModal } = modalSlice.actions
export default modalSlice.reducer
