import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import authReducer from '../redux/features/authSlice'
import { authApi } from '../redux/service/authApi'
const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})
const wrapper = createWrapper(() => store, { debug: false })
export default wrapper
export type RootState = ReturnType<typeof store.getState>
