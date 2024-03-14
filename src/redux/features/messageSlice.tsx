import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  message: string;
  farmerId: number;
  isLoading: boolean;
  showMessage: boolean;
  livechatroomId: number;
  isReadyToShowChat: boolean;
}
const initialState: InitialStateType = {
  message: '',
  farmerId: 0,
  isLoading: false,
  livechatroomId: 0,
  showMessage: false,
  isReadyToShowChat: false,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    showLoading: (state) => ({
      ...state,
      isLoading: true,
    }),
    hideLoading: (state) => ({
      ...state,
      isLoading: false,
    }),
    setToast: (state, action: PayloadAction<{ message: string }>) => ({
      ...state,
      showMessage: true,
      message: action.payload.message,
    }),
    hideToast: (state) => ({
      ...state,
      showMessage: false,
      message: '',
    }),
    setLiveRoomId: (state, action: PayloadAction<number>) => ({
      ...state,
      livechatroomId: action.payload,
    }),
    setFamerId: (state, action: PayloadAction<number>) => ({
      ...state,
      farmerId: action.payload,
      isReadyToShowChat: true,
    }),
    clearFamerId: (state) => ({
      ...state,
      farmerId: 0,
      isReadyToShowChat: false,
    }),
  },
});

export const {
  setToast,
  hideToast,
  setFamerId,
  showLoading,
  hideLoading,
  clearFamerId,
  setLiveRoomId,
} = messageSlice.actions;

export default messageSlice.reducer;
