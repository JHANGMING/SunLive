import { createSlice } from '@reduxjs/toolkit';

export interface AuthData {
  photo: string;
  nickName: string;
}
const initialState: AuthData = {
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
