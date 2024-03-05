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
        photo: action.payload.photo,
        nickName: action.payload.nickName,
      };
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
