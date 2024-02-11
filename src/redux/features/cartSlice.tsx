
import { CartDataType } from '@/constants/types/cart/cartlist';
import { SearchDataType } from '@/constants/types/product/search';
import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  cartData: CartDataType;
}
const initialState: InitialStateType = {
  cartData: {},

};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData(state, action) {
      return {
        ...state,
        cartData: action.payload.cartData?.data,
      };
    },
  },
});

export const { setCartData } = cartSlice.actions;
export default cartSlice.reducer;
