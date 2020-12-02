import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase: (state, action) => {
      state = action.payload
    }
  }
})

export const { increase } = counterSlice.actions

export default counterSlice.reducer