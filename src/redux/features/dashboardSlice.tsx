import { createSlice } from '@reduxjs/toolkit';
import { ListDataType } from '@/constants/types/product/farmer_prodcut';
import { LivelistType } from '@/constants/types/dashboard/livelist';


interface InitialStateType {
  // listData: ListDataType[];
  // livelistData:LivelistType[];
  // listData: ListDataType[];
  [key: string]: string | string[] | number;
}
const initialState: InitialStateType = {
  listData: [],
  livelistData: [],
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
    setLivelistData(state, action) {
      console.log('action.payload', action.payload);
      
      return {
        ...state,
        livelistData: action.payload,
      };
    },
  },
});

export const { setProductlistData, setLivelistData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
