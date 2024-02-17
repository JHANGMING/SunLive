import { createSlice } from '@reduxjs/toolkit';
import { ListDataType } from '@/constants/types/product/farmer_prodcut';


interface InitialStateType {
  // listData: ListDataType[];
  [key: string]: string | string[] | number;
}
const initialState: InitialStateType = {
  listData: [],

};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setProductlistData(state, action) {
      return {
        ...state,
        listData: action.payload,
      };
    },
  },
});

export const { setProductlistData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
