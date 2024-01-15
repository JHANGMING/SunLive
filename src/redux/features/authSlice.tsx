import { createSlice } from '@reduxjs/toolkit'

export interface authData {
  nickname: string
  token: string
}
const initialState: authData = {
  nickname: '',
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action) {
      const { nickname, token } = action.payload
      return { ...state, nickname, token }
    },
  },
})

export const { setUserData } = authSlice.actions
export default authSlice.reducer
