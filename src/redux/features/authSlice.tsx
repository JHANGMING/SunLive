import { createSlice } from '@reduxjs/toolkit'

export interface authData {
  nickName: string;
  photo: string;
}
const initialState: authData = {
  nickName: '',
  photo: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action) {
      return {
        ...state,
        nickName: action.payload.nickName,
        photo: action.payload.photo,
      };
    },
  },
})

export const { setUserData } = authSlice.actions
export default authSlice.reducer
