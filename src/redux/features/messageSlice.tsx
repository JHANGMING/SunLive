import { createSlice } from '@reduxjs/toolkit';


interface InitialStateType {
  isLoading: boolean;
  showMessage: boolean;
  message: string;
}
const initialState: InitialStateType = {
  isLoading: false,
  showMessage: false,
  message: '',
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    setToast: (state, action) => {
      state.showMessage = true;
      state.message = action.payload.message || '';
    },
    hideToast: (state) => {
      state.showMessage = false;
      state.message = '';
    },
  },
});

export const { showLoading, hideLoading, setToast, hideToast } = messageSlice.actions;

export default messageSlice.reducer;
