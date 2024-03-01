import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from '../redux/features/authSlice';
import cartReducer from '../redux/features/cartSlice';
import productReducer from '../redux/features/productSlice';
import messageReducer from '../redux/features/messageSlice';
import dashboardReducer from '../redux/features/dashboardSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    message: messageReducer,
    dashboard: dashboardReducer,
  },
});
const wrapper = createWrapper(() => store, { debug: false });
export default wrapper;
export type RootState = ReturnType<typeof store.getState>;
