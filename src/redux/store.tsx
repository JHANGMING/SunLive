import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';
import messageReducer from './features/messageSlice';
import dashboardReducer from './features/dashboardSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    message: messageReducer,
    dashboard: dashboardReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
