import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import authReducer from '../redux/features/authSlice'
import productReducer from '../redux/features/productSlice';
import cartReducer from '../redux/features/cartSlice';
import messageReducer from '../redux/features/messageSlice';
import dashboardReducer from '../redux/features/dashboardSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    message: messageReducer,
    dashboard: dashboardReducer,
  },
});
const wrapper = createWrapper(() => store, { debug: false })
export default wrapper
export type RootState = ReturnType<typeof store.getState>
