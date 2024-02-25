
import { createSlice } from '@reduxjs/toolkit';


interface InitialStateType {
  isLoading: boolean;
  showMessage: boolean;
  isReadyToShowChat: boolean;
  message: string;
  farmerId: number;
  livechatroomId: number;
}
const initialState: InitialStateType = {
  isLoading: false,
  showMessage: false,
  isReadyToShowChat: false,
  message: '',
  farmerId: 0,
  livechatroomId: 0,
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
    setLiveRoomId: (state, action) => {
      state.livechatroomId = action.payload;
    },
    setFamerId: (state, action) => {
      state.farmerId = action.payload;
      state.isReadyToShowChat = true;
    },
    clearFamerId: (state) => {
      state.farmerId = 0;
      state.isReadyToShowChat = false;
    },
  },
});

export const {
  showLoading,
  hideLoading,
  setToast,
  hideToast,
  setFamerId,
  clearFamerId,
  setLiveRoomId,
} = messageSlice.actions;

export default messageSlice.reducer;
