import { createSlice } from '@reduxjs/toolkit'

export interface authData {
  account: string;
  birthday: string;
  category: number;
  description: string;
  nickName: string;
  phone: string;
  photo: string;
  sex: string;
  vision: string;
}
const initialState: authData = {
  account: '',
  birthday: '',
  category: 0,
  description: '',
  nickName: '',
  phone: '',
  photo: '',
  sex: '',
  vision: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action) {
      const {
        account,
        birthday,
        category,
        description,
        nickName,
        phone,
        photo,
        sex,
        vision,
      } = action.payload.data;
      
      // const { nickname, token } = action.payload
      // return { ...state };
      return {
        ...state,
        account,
        birthday,
        category,
        description,
        nickName,
        phone,
        photo,
        sex,
        vision,
      };
    },
  },
})

export const { setUserData } = authSlice.actions
export default authSlice.reducer
