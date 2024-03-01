import { createSlice } from '@reduxjs/toolkit';

export interface authData {
  photo: string;
  nickName: string;
}
const initialState: authData = {
  photo: '',
  nickName: '',
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
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
