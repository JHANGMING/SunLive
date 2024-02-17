import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
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
      return {
        ...state,
        livelistData: action.payload,
      };
    },
  },
});

export const { setProductlistData, setLivelistData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
