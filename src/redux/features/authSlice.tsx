import { createSlice } from '@reduxjs/toolkit'

export interface authData {
  nickName: string;
}
const initialState: authData = {
  nickName: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action) {
      return {
        ...state,
        nickName: action.payload,
      };
    },
  },
})

export const { setUserData } = authSlice.actions
export default authSlice.reducer
